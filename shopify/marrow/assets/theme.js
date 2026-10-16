/* Scamper theme scripts. Plain ES modules, no dependencies.
   Every feature works without JavaScript; this file only enhances it. */

const S = window.Scamper || { routes: {}, strings: {} };
const PROFILE_KEY = 'scamper:profile';

const debounce = (fn, wait = 250) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

const announce = (text) => {
  const region = document.getElementById('LiveRegion');
  if (!region) return;
  region.textContent = '';
  requestAnimationFrame(() => {
    region.textContent = text;
  });
};

const fetchSection = async (url, sectionId) => {
  const target = new URL(url, window.location.origin);
  target.searchParams.set('section_id', sectionId);
  const response = await fetch(target.toString());
  if (!response.ok) throw new Error(response.statusText);
  const html = await response.text();
  return new DOMParser().parseFromString(html, 'text/html');
};

/* Motion: every effect is skipped with reduced motion or with scroll effects turned off */
const motionOK = () => Boolean(S.reveal) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fx = (el, frames, options) => (motionOK() && el?.animate ? el.animate(frames, options) : null);
/* Wait for an animation, but never longer than its own length: hidden tabs pause animations */
const settle = (animation) =>
  animation &&
  Promise.race([animation.finished.catch(() => {}), new Promise((resolve) => setTimeout(resolve, animation.effect.getTiming().duration + 80))]);

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  set(key, value) {
    try {
      if (value) window.localStorage.setItem(key, value);
      else window.localStorage.removeItem(key);
    } catch (e) {
      /* storage blocked: the choice lasts for this page only */
    }
  },
};

/* ---------- Dialogs: menu drawer, search, cart drawer ---------- */

let lastOpener = null;

const openDialog = (id, opener) => {
  const dialog = document.getElementById(id);
  if (!dialog || typeof dialog.showModal !== 'function') return false;
  lastOpener = opener || document.activeElement;
  dialog.showModal();
  if (opener) opener.setAttribute('aria-expanded', 'true');
  const focusTarget = dialog.querySelector('[autofocus], input[type="search"], .drawer__body a, button');
  if (focusTarget) focusTarget.focus();
  return true;
};

document.addEventListener('click', (event) => {
  const opener = event.target.closest('[data-open-dialog]');
  if (opener) {
    if (opener.dataset.openDialog === 'CartDrawer' && S.cartType !== 'drawer') return;
    if (openDialog(opener.dataset.openDialog, opener)) event.preventDefault();
    return;
  }

  const closer = event.target.closest('[data-close-dialog]');
  if (closer) {
    closer.closest('dialog')?.close();
    return;
  }

  /* Click on the backdrop closes the dialog */
  if (event.target.tagName === 'DIALOG' && event.target.open) {
    const rect = event.target.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) event.target.close();
  }
});

document.addEventListener(
  'close',
  (event) => {
    if (event.target.tagName !== 'DIALOG') return;
    if (lastOpener) {
      lastOpener.setAttribute('aria-expanded', 'false');
      lastOpener.focus?.();
      lastOpener = null;
    }
  },
  true
);

/* ---------- Header: sticky border, hover menus, outside click ---------- */

class HeaderBar extends HTMLElement {
  connectedCallback() {
    const wrapper = this.closest('.shopify-section');
    const hides = this.hasAttribute('data-hide-on-scroll');
    let lastY = window.scrollY;
    this.onScroll = () => {
      const y = window.scrollY;
      this.classList.toggle('is-scrolled', y > 8);
      if (hides && wrapper) {
        const menuOpen = this.querySelector('details[open]');
        const goingDown = y > lastY + 4;
        const goingUp = y < lastY - 4;
        if (goingDown && y > 240 && !menuOpen) wrapper.classList.add('is-tucked');
        if (goingUp || y < 120) wrapper.classList.remove('is-tucked');
      }
      lastY = y;
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();

    this.querySelectorAll('details[data-hover-menu]').forEach((details) => {
      const canHover = window.matchMedia('(hover: hover)').matches;
      if (canHover) {
        details.addEventListener('mouseenter', () => {
          details.open = true;
        });
        details.addEventListener('mouseleave', () => {
          details.open = false;
        });
        /* The pointer already opened the menu on its way in; a mouse click must not toggle it
           shut again. Keyboard presses (detail 0) still toggle. */
        details.querySelector('summary')?.addEventListener('click', (event) => {
          if (event.detail === 0) return;
          event.preventDefault();
          details.open = true;
        });
      }
      details.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
          details.open = false;
          details.querySelector('summary')?.focus();
        }
      });
    });

    document.addEventListener('click', (event) => {
      this.querySelectorAll('details[open]').forEach((details) => {
        if (!details.contains(event.target)) details.open = false;
      });
    });
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
customElements.define('header-bar', HeaderBar);

/* ---------- Announcement rotator ---------- */

document.querySelectorAll('[data-rotator]').forEach((rotator) => {
  const items = rotator.querySelectorAll('.announcement__item');
  if (items.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let index = 0;
  let paused = false;
  rotator.addEventListener('mouseenter', () => (paused = true));
  rotator.addEventListener('mouseleave', () => (paused = false));
  rotator.addEventListener('focusin', () => (paused = true));
  rotator.addEventListener('focusout', () => (paused = false));
  setInterval(() => {
    if (paused || rotator.closest('[data-motion]')?.classList.contains('is-paused')) return;
    items[index].classList.remove('is-active');
    index = (index + 1) % items.length;
    items[index].classList.add('is-active');
  }, Number(rotator.dataset.interval) || 5000);
});

/* Pause buttons for moving strips (snippets/motion-toggle.liquid) */
document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-motion-toggle]');
  const host = toggle?.closest('[data-motion]');
  if (!host) return;
  toggle.setAttribute('aria-pressed', String(host.classList.toggle('is-paused')));
});

/* ---------- Shopper profiles ---------- */

const Profiles = {
  current() {
    return storage.get(PROFILE_KEY) || '';
  },

  set(tag) {
    storage.set(PROFILE_KEY, tag);
    this.apply();
    document.dispatchEvent(new CustomEvent('scamper:profile', { detail: { tag } }));
  },

  /* Rewrites collection links to the tag-filtered view: /collections/toys -> /collections/toys/dog */
  rewriteLinks(tag) {
    const tags = [...document.querySelectorAll('[data-profile-option]')].map((o) => o.dataset.tag).filter(Boolean);
    /* Collections that already are a profile ("dogs", "cat-toys") are left alone */
    const isProfileCollection = (handle) => tags.some((t) => handle === t || handle === `${t}s` || handle.startsWith(`${t}-`) || handle.startsWith(`${t}s-`));
    document.querySelectorAll('a[data-profile-link]').forEach((link) => {
      if (!link.dataset.baseHref) link.dataset.baseHref = link.getAttribute('href');
      const base = link.dataset.baseHref;
      const url = new URL(base, window.location.origin);
      const parts = url.pathname.split('/').filter(Boolean);
      const collectionIndex = parts.indexOf('collections');
      const isCollection = collectionIndex !== -1 && parts.length === collectionIndex + 2;
      if (tag && isCollection && !isProfileCollection(parts[collectionIndex + 1])) {
        url.pathname = `${url.pathname.replace(/\/$/, '')}/${encodeURIComponent(tag)}`;
        link.setAttribute('href', url.pathname + url.search + url.hash);
      } else {
        link.setAttribute('href', base);
      }
    });
  },

  /* Product lists marked data-profile-filter show the profile's products first and hide the rest,
     but never hide everything: if nothing matches, the full list stays. */
  filterLists(tag) {
    document.querySelectorAll('[data-profile-filter]').forEach((list) => {
      const items = [...list.querySelectorAll('[data-tags]')];
      if (!items.length) return;
      const matches = tag ? items.filter((item) => item.dataset.tags.split('|').includes(tag)) : items;
      const showAll = !tag || matches.length === 0;
      const limit = Number(list.dataset.limit) || items.length;
      let shown = 0;
      items.forEach((item) => {
        const visible = (showAll || matches.includes(item)) && shown < limit;
        item.hidden = !visible;
        if (visible) shown += 1;
      });
      /* Fewer products than columns: let them share the row instead of leaving a gap */
      if (list.dataset.columns) {
        list.style.setProperty('--columns-desktop', String(Math.max(1, Math.min(Number(list.dataset.columns), shown))));
      }
    });
  },

  updatePickers(tag) {
    document.querySelectorAll('profile-picker').forEach((picker) => {
      let name = null;
      picker.querySelectorAll('[data-profile-option]').forEach((option) => {
        const active = option.dataset.tag === tag;
        option.setAttribute('aria-pressed', String(active));
        if (active) name = option.dataset.name;
      });
      if (name === null) return;
      picker.querySelector('[data-profile-current-name]').textContent = name;
      const iconSlot = picker.querySelector('[data-profile-current-icon]');
      const icon = picker.querySelector(`template[data-profile-icons]`)?.content.querySelector(`[data-icon-for="${CSS.escape(tag)}"]`);
      if (iconSlot && icon) iconSlot.innerHTML = icon.innerHTML;
    });
  },

  apply() {
    let tag = this.current();
    const known = [...document.querySelectorAll('[data-profile-option]')].map((o) => o.dataset.tag);
    if (tag && !known.includes(tag)) {
      storage.set(PROFILE_KEY, '');
      tag = '';
    }
    this.rewriteLinks(tag);
    this.filterLists(tag);
    /* On a tag-filtered collection page, the picker shows that profile even if none is saved */
    const pageTag = document.querySelector('[data-profile-chip]')?.dataset.activeTag;
    this.updatePickers(pageTag && known.includes(pageTag) ? pageTag : tag);
    document.querySelectorAll('[data-profile-chip]').forEach((chip) => {
      const active = chip.dataset.activeTag;
      chip.hidden = !active;
      /* Show the profile's name ("Dogs") instead of its tag ("dog") */
      const option = active && document.querySelector(`[data-profile-option][data-tag="${CSS.escape(active)}"]`);
      const label = chip.querySelector('span');
      if (option && label && !label.dataset.named) {
        label.textContent = label.textContent.replace(active, option.dataset.name);
        label.dataset.named = 'true';
      }
    });
  },
};

class ProfilePicker extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', (event) => {
      const option = event.target.closest('[data-profile-option]');
      if (!option) return;
      Profiles.set(option.dataset.tag);
      this.querySelector('details').open = false;
      announce(option.dataset.name);
      /* On a collection page, jump to the matching filtered view right away */
      const chip = document.querySelector('[data-profile-chip]');
      if (chip && chip.dataset.collectionUrl) {
        const base = chip.dataset.collectionUrl;
        window.location.href = option.dataset.tag ? `${base}/${encodeURIComponent(option.dataset.tag)}` : base;
      }
    });
  }
}
customElements.define('profile-picker', ProfilePicker);

/* ---------- Predictive search ---------- */

class PredictiveSearch extends HTMLElement {
  connectedCallback() {
    this.input = this.querySelector('input[type="search"]');
    this.results = this.querySelector('.search-dialog__results');
    this.controller = null;
    this.input.addEventListener('input', debounce(() => this.search(), 220));
  }

  async search() {
    const term = this.input.value.trim();
    if (this.controller) this.controller.abort();
    if (!term) {
      this.results.innerHTML = '';
      this.input.setAttribute('aria-expanded', 'false');
      return;
    }
    this.controller = new AbortController();
    const url = new URL(S.routes.predictiveSearch, window.location.origin);
    url.searchParams.set('q', term);
    url.searchParams.set('section_id', 'predictive-search');
    url.searchParams.set('resources[type]', 'product,collection,page,article');
    url.searchParams.set('resources[limit]', '4');
    url.searchParams.set('resources[options][fields]', 'title,product_type,variants.title,vendor,tag');
    try {
      this.setAttribute('aria-busy', 'true');
      const response = await fetch(url, { signal: this.controller.signal });
      if (!response.ok) throw new Error(response.statusText);
      const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
      const content = doc.querySelector('#shopify-section-predictive-search');
      this.results.innerHTML = content ? content.innerHTML : '';
      this.input.setAttribute('aria-expanded', 'true');
    } catch (error) {
      if (error.name !== 'AbortError') this.results.innerHTML = '';
    } finally {
      this.removeAttribute('aria-busy');
    }
  }
}
customElements.define('predictive-search', PredictiveSearch);

/* ---------- Cart ---------- */

const Cart = {
  sections() {
    return ['cart-drawer', 'cart-count', ...(document.querySelector('[data-cart-page]') ? ['main-cart'] : [])];
  },

  async post(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...body, sections: this.sections(), sections_url: window.location.pathname }),
    });
    const data = await response.json();
    if (!response.ok || data.status) throw new Error(data.description || data.message || S.strings.cartError);
    return data;
  },

  render(sections) {
    if (!sections) return;
    Object.entries(sections).forEach(([id, html]) => {
      if (!html) return;
      const doc = new DOMParser().parseFromString(html, 'text/html');
      if (id === 'cart-count') {
        const count = doc.querySelector('[data-cart-count-value]');
        const value = count ? Number(count.dataset.cartCountValue) : 0;
        document.querySelectorAll('[data-cart-count]').forEach((badge) => {
          badge.hidden = value === 0;
          const visible = badge.querySelector('[aria-hidden="true"]');
          const hidden = badge.querySelector('.visually-hidden');
          if (visible) visible.textContent = value;
          if (hidden && count) hidden.textContent = count.textContent.trim();
        });
        return;
      }
      const source = doc.querySelector(`[data-section-content="${id}"]`);
      const target = document.querySelector(`[data-section-content="${id}"]`);
      if (source && target) target.replaceWith(source);
    });
  },

  async add(formData) {
    const body = { items: [Object.fromEntries(formData.entries())] };
    const item = body.items[0];
    item.quantity = Number(item.quantity || 1);
    Object.keys(item).forEach((key) => {
      const match = key.match(/^properties\[(.+)\]$/);
      if (match) {
        item.properties = item.properties || {};
        item.properties[match[1]] = item[key];
        delete item[key];
      }
    });
    const data = await this.post(S.routes.cartAdd, body);
    this.render(data.sections);
    return data;
  },

  async addMany(items) {
    const data = await this.post(S.routes.cartAdd, { items });
    this.render(data.sections);
    return data;
  },

  async change(line, quantity) {
    const data = await this.post(S.routes.cartChange, { line, quantity });
    this.render(data.sections);
    return data;
  },

  open() {
    if (S.cartType === 'drawer' && document.getElementById('CartDrawer')) {
      openDialog('CartDrawer');
    } else {
      window.location.href = S.routes.cart;
    }
  },
};

window.Scamper.cart = Cart;

/* A round copy of the product photo hops into the cart icon, then the icon bounces.
   Measured before any dialog closes; returns null when there is nothing to animate. */
const prepareHop = (form) => {
  if (!motionOK()) return null;
  const cart = [...document.querySelectorAll('.site-header__cart')].find((el) => el.getClientRects().length);
  const scope = form.closest('[data-product-section], .card, featured-product, dialog') || form;
  const img = scope.querySelector('.gallery__item.is-featured img, .gallery__item img, img');
  if (!cart || !img) return null;
  const box = img.getBoundingClientRect();
  const shown =
    Math.max(0, Math.min(box.bottom, window.innerHeight) - Math.max(box.top, 0)) *
    Math.max(0, Math.min(box.right, window.innerWidth) - Math.max(box.left, 0));
  const from = shown > box.width * box.height * 0.3 ? box : (form.querySelector('[type="submit"]') || img).getBoundingClientRect();
  const start = { x: from.left + from.width / 2, y: from.top + from.height / 2 };
  const src = img.currentSrc || img.src;

  return async () => {
    /* A header hidden on scroll slides back; aim where the icon will be, not where it is */
    const wrapper = cart.closest('.is-tucked');
    const shift = wrapper ? new DOMMatrixReadOnly(getComputedStyle(wrapper).transform).m42 : 0;
    wrapper?.classList.remove('is-tucked');
    const target = cart.getBoundingClientRect();
    const dx = target.left + target.width / 2 - start.x;
    const dy = target.top + target.height / 2 - shift - start.y;
    const lift = Math.min(180, Math.abs(dy) * 0.4 + 80);

    const flyer = document.createElement('img');
    flyer.className = 'fx-flyer';
    flyer.src = src;
    flyer.alt = '';
    flyer.style.left = `${start.x}px`;
    flyer.style.top = `${start.y}px`;
    document.body.append(flyer);
    const flight = flyer.animate(
      [
        { transform: 'translate(0, 0) scale(0.3) rotate(0deg)', opacity: 0 },
        { transform: 'translate(0, -28px) scale(1.1) rotate(-8deg)', opacity: 1, offset: 0.2 },
        { transform: `translate(${dx * 0.55}px, ${dy * 0.55 - lift}px) scale(0.62) rotate(-16deg)`, offset: 0.6 },
        { transform: `translate(${dx}px, ${dy}px) scale(0.14) rotate(20deg)`, opacity: 0.9 },
      ],
      { duration: 720, easing: 'cubic-bezier(0.45, 0, 0.55, 1)' }
    );
    await settle(flight);
    flyer.remove();
    const bounce = fx(
      cart,
      [
        { transform: 'none' },
        { transform: 'scale(1.4) rotate(-14deg)' },
        { transform: 'scale(0.9) rotate(9deg)' },
        { transform: 'scale(1.06) rotate(-3deg)' },
        { transform: 'none' },
      ],
      { duration: 460, easing: 'ease-out' }
    );
    await settle(bounce);
  };
};

/* Product forms: add to cart without a page reload */
document.addEventListener('submit', async (event) => {
  const form = event.target.closest('form[data-product-form]');
  if (!form) return;
  if (S.cartType !== 'drawer' && !form.hasAttribute('data-ajax')) return;
  event.preventDefault();
  const button = form.querySelector('[type="submit"]');
  const error = form.querySelector('[data-form-error]');
  if (button) {
    button.setAttribute('aria-disabled', 'true');
    button.setAttribute('aria-busy', 'true');
  }
  if (error) error.hidden = true;
  try {
    await Cart.add(new FormData(form));
    announce(S.strings.added);
    const hop = prepareHop(form);
    form.closest('dialog')?.close();
    await hop?.();
    Cart.open();
  } catch (err) {
    if (error) {
      error.textContent = err.message;
      error.hidden = false;
    } else {
      announce(err.message);
    }
  } finally {
    if (button) {
      button.removeAttribute('aria-busy');
      if (!button.hasAttribute('data-sold-out')) button.removeAttribute('aria-disabled');
    }
  }
});

/* Quantity changes and removals in the cart drawer and cart page */
const updateLine = debounce(async (input) => {
  const container = input.closest('[data-section-content]');
  container?.setAttribute('aria-busy', 'true');
  try {
    await Cart.change(Number(input.dataset.line), Number(input.value));
  } catch (err) {
    announce(err.message);
  } finally {
    container?.removeAttribute('aria-busy');
  }
}, 350);

document.addEventListener('change', (event) => {
  const input = event.target.closest('input[data-line]');
  if (input) updateLine(input);
});

document.addEventListener('click', async (event) => {
  const stepper = event.target.closest('[data-qty-step]');
  if (stepper) {
    const input = stepper.closest('.qty')?.querySelector('input');
    if (!input) return;
    const step = Number(stepper.dataset.qtyStep);
    const min = Number(input.min || 0);
    input.value = Math.max(min, Number(input.value || 0) + step);
    input.dispatchEvent(new Event('change', { bubbles: true }));
    fx(
      input,
      [
        { transform: 'none' },
        { transform: `translateY(${step > 0 ? -9 : 9}px)`, opacity: 0.15, offset: 0.35 },
        { transform: 'none', opacity: 1 },
      ],
      { duration: 320, easing: 'ease-out' }
    );
    return;
  }

  const remove = event.target.closest('[data-remove-line]');
  if (remove) {
    event.preventDefault();
    try {
      await Cart.change(Number(remove.dataset.removeLine), 0);
    } catch (err) {
      announce(err.message);
    }
  }
});

/* "Shop the set": the total follows the ticked products; nothing ticked, nothing to add */
document.addEventListener('change', (event) => {
  const form = event.target.closest('form[data-add-set]');
  if (!form || !event.target.matches('input[data-set-weight]')) return;
  const mask = [...form.querySelectorAll('input[data-set-weight]:checked')].reduce((sum, input) => sum + Number(input.dataset.setWeight), 0);
  const total = form.querySelector('[data-set-total]');
  const text = total?.getAttribute(`data-total-${mask}`);
  if (text) total.textContent = text;
  const button = form.querySelector('[type="submit"]');
  if (button) button.disabled = mask === 0;
});

/* "Shop the set": add several products in one request */
document.addEventListener('submit', async (event) => {
  const form = event.target.closest('form[data-add-set]');
  if (!form) return;
  event.preventDefault();
  const ids = [...form.querySelectorAll('input[name="items[][id]"]:checked')].map((input) => ({ id: Number(input.value), quantity: 1 }));
  if (!ids.length) return;
  const button = form.querySelector('[type="submit"]');
  button?.setAttribute('aria-busy', 'true');
  try {
    await Cart.addMany(ids);
    announce(S.strings.added);
    Cart.open();
  } catch (err) {
    announce(err.message);
  } finally {
    button?.removeAttribute('aria-busy');
  }
});

/* ---------- Variant picker: re-renders the product section for the chosen variant ---------- */

class VariantPicker extends HTMLElement {
  connectedCallback() {
    this.addEventListener('change', (event) => this.onChange(event));
  }

  async onChange(event) {
    const input = event.target;
    fx(input.nextElementSibling, [{ transform: 'none' }, { transform: 'scale(0.86)' }], { duration: 140, easing: 'ease-out', fill: 'forwards' });
    const optionValueIds = [...this.querySelectorAll('input:checked, select')].map((el) =>
      el.tagName === 'SELECT' ? el.selectedOptions[0].dataset.optionValueId : el.dataset.optionValueId
    );
    const section = this.closest('[data-product-section]');
    if (!section) return;
    const url = new URL(this.dataset.url, window.location.origin);
    url.searchParams.set('option_values', optionValueIds.join(','));
    section.setAttribute('aria-busy', 'true');
    try {
      const doc = await fetchSection(url, this.dataset.sectionId);
      const fresh = doc.querySelector('[data-product-section]');
      if (!fresh) return;
      const focusName = input.name;
      const focusValue = input.value;
      ['[data-product-info]'].forEach((selector) => {
        const from = fresh.querySelector(selector);
        const to = section.querySelector(selector);
        if (from && to) to.replaceWith(from);
      });
      const variantId = fresh.dataset.variantId;
      if (variantId && this.dataset.updateUrl !== 'false') {
        const pageUrl = new URL(window.location.href);
        pageUrl.searchParams.set('variant', variantId);
        window.history.replaceState({}, '', pageUrl.toString());
      }
      const mediaId = fresh.dataset.featuredMediaId;
      if (mediaId) section.querySelector('product-gallery')?.show(mediaId);
      const restored = section.querySelector(`[name="${CSS.escape(focusName)}"][value="${CSS.escape(focusValue)}"], select[name="${CSS.escape(focusName)}"]`);
      restored?.focus();
      fx(restored?.nextElementSibling, [{ transform: 'scale(0.86)' }, { transform: 'scale(1.12)', offset: 0.45 }, { transform: 'none' }], { duration: 420, easing: 'ease-out' });
      fx(section.querySelector('.product__price .price'), [{ transform: 'none' }, { transform: 'scale(1.14) rotate(-2deg)', offset: 0.4 }, { transform: 'none' }], { duration: 460, easing: 'ease-out' });
    } catch (err) {
      announce(S.strings.cartError);
    } finally {
      section.removeAttribute('aria-busy');
    }
  }
}
customElements.define('variant-picker', VariantPicker);

/* ---------- Product gallery: thumbnails scroll the main track ---------- */

class ProductGallery extends HTMLElement {
  connectedCallback() {
    this.track = this.querySelector('[data-gallery-track]');
    this.dots = [...this.querySelectorAll('[data-gallery-thumb]')];
    this.dots.forEach((dot) => dot.addEventListener('click', () => this.show(dot.dataset.galleryThumb)));
    if (this.track) {
      this.track.addEventListener(
        'scroll',
        debounce(() => {
          const items = [...this.track.children];
          const left = this.track.scrollLeft;
          const current = items.reduce((best, item) => (Math.abs(item.offsetLeft - this.track.offsetLeft - left) < Math.abs(best.offsetLeft - this.track.offsetLeft - left) ? item : best), items[0]);
          if (current) this.mark(current.dataset.mediaId);
        }, 80)
      );
    }
  }

  mark(mediaId) {
    this.dots.forEach((dot) => dot.setAttribute('aria-current', String(dot.dataset.galleryThumb === String(mediaId))));
  }

  show(mediaId) {
    const slide = this.querySelector(`[data-media-id="${CSS.escape(String(mediaId))}"]`);
    if (!slide || !this.track) return;
    const horizontal = this.track.scrollWidth > this.track.clientWidth + 4;
    if (horizontal) {
      this.track.scrollTo({ left: slide.offsetLeft - this.track.offsetLeft, behavior: 'smooth' });
    } else if (!slide.matches(':first-child')) {
      /* Large screens: move the variant's image to the top of the grid */
      this.track.prepend(slide);
    }
    this.mark(mediaId);
  }
}
customElements.define('product-gallery', ProductGallery);

/* ---------- Featured product on any page: variants resolved in the browser ---------- */

class FeaturedProduct extends HTMLElement {
  connectedCallback() {
    const data = this.querySelector('[data-featured-variants]');
    if (!data) return;
    this.variants = JSON.parse(data.textContent);
    this.addEventListener('change', (event) => {
      if (event.target.matches('[data-featured-option]')) this.update();
    });
  }

  update() {
    const selected = [...this.querySelectorAll('[data-featured-option]')].map((select) => select.value);
    const variant = this.variants.find((v) => v.options.every((value, i) => value === selected[i]));
    const button = this.querySelector('[data-featured-add]');
    const idInput = this.querySelector('[data-featured-id]');
    if (!variant) {
      if (button) {
        button.disabled = true;
        button.textContent = S.strings.unavailable;
      }
      return;
    }
    if (idInput) idInput.value = variant.id;
    const priceTemplate = this.querySelector(`[data-featured-price-for="${variant.id}"]`);
    const price = this.querySelector('[data-featured-price]');
    if (priceTemplate && price) price.innerHTML = priceTemplate.innerHTML;
    if (button) {
      button.disabled = !variant.available;
      button.toggleAttribute('data-sold-out', !variant.available);
      button.textContent = variant.available ? S.strings.addToCart : S.strings.soldOut;
    }
    if (variant.featured_media) this.closest('.product')?.querySelector('product-gallery')?.show(variant.featured_media.id);
  }
}
customElements.define('featured-product', FeaturedProduct);

/* ---------- Recommendations (related and complementary) ---------- */

class ProductRecommendations extends HTMLElement {
  /* Hides only what the element asks for: a block wrapper, or the whole section for related products */
  hideEmpty() {
    const target = this.dataset.hideClosest ? this.closest(this.dataset.hideClosest) : this;
    if (target) target.hidden = true;
  }

  connectedCallback() {
    const load = async () => {
      try {
        const response = await fetch(this.dataset.url);
        const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
        const fresh = doc.querySelector('product-recommendations');
        if (fresh && fresh.innerHTML.trim().length) {
          this.innerHTML = fresh.innerHTML;
          Profiles.apply();
        } else {
          this.hideEmpty();
        }
      } catch (e) {
        this.hideEmpty();
      }
    };
    new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      load();
    }, { rootMargin: '0px 0px 400px 0px' }).observe(this);
  }
}
customElements.define('product-recommendations', ProductRecommendations);

/* ---------- Collection filters and sorting ---------- */

class CollectionFilters extends HTMLElement {
  connectedCallback() {
    this.form = this.querySelector('form');
    if (!this.form) return;
    this.form.addEventListener('change', debounce(() => this.update(), 400));
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.update();
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-sort-select]')) this.update();
    });
    window.addEventListener('popstate', () => this.render(window.location.href, false));
  }

  buildUrl() {
    const params = new URLSearchParams(new FormData(this.form));
    const sort = document.querySelector('[data-sort-select]');
    if (sort) params.set('sort_by', sort.value);
    [...params.keys()].forEach((key) => {
      if (params.get(key) === '') params.delete(key);
    });
    return `${window.location.pathname}?${params.toString()}`;
  }

  update() {
    this.render(this.buildUrl(), true);
  }

  async render(url, push) {
    const section = this.closest('[data-collection-section]');
    if (!section) return;
    section.setAttribute('aria-busy', 'true');
    try {
      const doc = await fetchSection(url, section.dataset.sectionId);
      ['[data-collection-results]', '[data-active-filters]', '[data-filter-groups]', '[data-results-count]'].forEach((selector) => {
        const from = doc.querySelector(selector);
        const to = section.querySelector(selector);
        if (from && to) to.replaceWith(from);
      });
      if (push) window.history.pushState({}, '', url);
      Profiles.apply();
      announce(section.querySelector('[data-results-count]')?.textContent.trim() || '');
    } catch (e) {
      window.location.href = url;
    } finally {
      section.removeAttribute('aria-busy');
    }
  }
}
customElements.define('collection-filters', CollectionFilters);

/* ---------- Tabs (featured products) ---------- */

document.addEventListener('click', (event) => {
  const tab = event.target.closest('[role="tab"][data-tab-target]');
  if (!tab) return;
  const list = tab.closest('[role="tablist"]');
  const root = tab.closest('[data-tabs]');
  list.querySelectorAll('[role="tab"]').forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
  root.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
    panel.hidden = panel.id !== tab.dataset.tabTarget;
  });
});

document.addEventListener('keydown', (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (!tab || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const tabs = [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];
  const next = tabs[(tabs.indexOf(tab) + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
  next.focus();
  next.click();
});

/* ---------- Localization selectors submit on change ---------- */

document.addEventListener('change', (event) => {
  const select = event.target.closest('[data-localization-select]');
  if (select) select.form.submit();
});

/* ---------- Copy buttons (gift card code, share link) ---------- */

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    const original = button.textContent;
    button.textContent = button.dataset.copiedText || original;
    setTimeout(() => (button.textContent = original), 1800);
  } catch (e) {
    /* clipboard refused: the code stays visible to copy by hand */
  }
});

/* ---------- Scroll reveal: content is visible at rest; only below-the-fold items slide in ---------- */

const nativeScrollFx = window.CSS && CSS.supports('animation-timeline: view()');
if (S.reveal && !nativeScrollFx && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.Shopify?.designMode) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -6% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add('is-pending');
      observer.observe(el);
    }
  });
}

/* Gift card recipients: Shopify needs the buyer's timezone offset */
document.querySelectorAll('[data-timezone-offset]').forEach((input) => {
  input.value = new Date().getTimezoneOffset().toString();
});

/* ---------- Collide: tile rows fly in once when they come into view ---------- */

if (S.reveal && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const collideObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fx-play');
        collideObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.25 }
  );
  document.querySelectorAll('[data-fx-collide]').forEach((row) => {
    row.classList.add('fx-armed');
    collideObserver.observe(row);
  });
}

/* ---------- Product entrance: plays once, then variant re-renders stay still ---------- */

const settleProducts = () => setTimeout(() => document.querySelectorAll('.product').forEach((el) => el.classList.add('fx-done')), 2200);
settleProducts();
document.addEventListener('shopify:section:load', settleProducts);

/* ---------- Boot ---------- */

Profiles.apply();
document.addEventListener('shopify:section:load', () => Profiles.apply());

/* Cart note: saved as the customer types */
document.addEventListener(
  'input',
  debounce(async (event) => {
    const note = event.target.closest('textarea[name="note"]');
    if (!note) return;
    try {
      await fetch(S.routes.cartUpdate, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ note: note.value }),
      });
    } catch (e) {
      /* the note is still sent with the checkout form */
    }
  }, 600)
);
