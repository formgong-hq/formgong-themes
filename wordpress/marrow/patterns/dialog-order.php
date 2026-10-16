<?php
/**
 * Title: Dialog: Order request
 * Slug: marrow/dialog-order
 * Categories: marrow
 * Inserter: no
 * Description: Recipe or treat, pack chips, quantity, delivery or pick-up, contact details. The recipe and treat buttons and Order now open it. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Marrow
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<dialog id="d-order" aria-labelledby="order-title">
  <div class="dlg" tabindex="-1" autofocus>
    <button class="x" type="button" aria-label="Close" data-close>×</button>
    <h2 id="order-title">Order request</h2>
    <p class="intro">Pick a recipe and a pack size. We confirm the total and the delivery day by email or text. Nothing to pay now.</p>
    <form class="form" id="f-order" data-formgong>
      <input type="hidden" name="subject" value="Order request">
      <label class="f full"><span>Recipe or treat</span>
        <select name="item" required data-item>
          <optgroup label="Dog recipes"><option>Chicken &amp; Pumpkin</option><option>Beef &amp; Kale</option><option>Lamb &amp; Carrot</option><option>Turkey &amp; Blueberry</option><option>Duck &amp; Apple</option><option>Salmon &amp; Sweet Potato</option></optgroup>
          <optgroup label="Cat recipes"><option>Chicken &amp; Liver (cats)</option><option>Rabbit (cats)</option><option>White Fish (cats)</option></optgroup>
          <optgroup label="Treats"><option data-treat>Chicken hearts</option><option data-treat>Beef liver bites</option><option data-treat>Lamb lung puffs</option><option data-treat>Sardine crisps</option><option data-treat>Duck neck chews</option><option data-treat>Salmon skin twists</option></optgroup>
        </select>
      </label>
      <fieldset class="chips"><legend>Pack</legend><div class="opts">
        <label data-gram><input type="radio" name="pack" value="250 g"><span>250 g</span></label>
        <label data-gram><input type="radio" name="pack" value="500 g" checked><span>500 g</span></label>
        <label data-gram><input type="radio" name="pack" value="750 g"><span>750 g</span></label>
        <label data-gram><input type="radio" name="pack" value="1000 g"><span>1000 g</span></label>
        <label data-pouch hidden><input type="radio" name="pack" value="One pouch"><span>One pouch</span></label>
      </div></fieldset>
      <label class="f qty"><span>Quantity</span><input type="number" name="quantity" min="1" max="20" step="1" value="1" required></label>
      <fieldset class="chips half"><legend>Delivery</legend><div class="opts">
        <label><input type="radio" name="delivery" value="Local delivery" checked><span>Local delivery</span></label>
        <label><input type="radio" name="delivery" value="Pick up at the kitchen"><span>Pick up at the kitchen</span></label>
      </div></fieldset>
      <label class="f"><span>Name</span><input name="name" autocomplete="name" required maxlength="100"></label>
      <label class="f"><span>Email</span><input type="email" name="email" autocomplete="email" required maxlength="160"></label>
      <label class="f"><span>Phone (optional)</span><input type="tel" name="phone" autocomplete="tel" maxlength="40"></label>
      <label class="f"><span data-postcode-label>Postcode</span><input name="postcode" autocomplete="postal-code" required maxlength="20"></label>
      <label class="f full"><span>Note (optional)</span><textarea name="note" maxlength="2000" placeholder="Allergies, a delivery time, a gate code…"></textarea></label>
      <button class="pill big" type="submit">Send order request</button>
      <p class="status" data-status role="status" aria-live="polite"></p>
      <p class="credit">Powered by <a href="https://formgong.com" rel="noopener">Formgong</a></p>
      <div class="thanks" tabindex="-1"><strong>Thank you, <span data-name>there</span>.</strong>We will confirm your order, the total and the day by email within one working day. <button type="button" data-again>Send another</button></div>
    </form>
  </div>
</dialog>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
