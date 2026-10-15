<?php
/**
 * Title: Home: projects
 * Slug: halftone/home-work
 * Categories: halftone
 * Inserter: yes
 * Description: Four full-screen project photos that stack as you scroll, each with a white bar.
 *
 * @package Halftone
 */

?>
<!-- wp:html -->
<div id="work" data-work>
   <div class="p-stage">
    <article class="project" aria-labelledby="p1-t">
      <img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/p1.webp' ) ); ?>" alt="A timber library pavilion with glass walls in a misty birch forest" loading="lazy" decoding="async">
      <div class="bar"><p class="label">A TAKU project</p><div><h2 class="d" id="p1-t">The library in the birches</h2><p>A reading pavilion set among birch trees. Its long roof and glass walls let the forest in on every side.</p></div><a class="d" href="#contact">View the project<span class="sr">: The library in the birches</span></a></div>
    </article>
    <article class="project" aria-labelledby="p2-t" data-from="right">
      <img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/p2.webp' ) ); ?>" alt="A row of narrow brick and glass townhouses on a harbour quay at dusk" loading="lazy" decoding="async">
      <div class="bar"><p class="label">A TAKU project</p><div><h2 class="d" id="p2-t">Townhouses on the quay</h2><p>Six narrow homes on a working harbour, each with a workshop at street level and a terrace above the water.</p></div><a class="d" href="#contact">View the project<span class="sr">: Townhouses on the quay</span></a></div>
    </article>
    <article class="project" aria-labelledby="p3-t" data-from="bottom">
      <img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/p3.webp' ) ); ?>" alt="A brick textile mill converted into a bright design studio with long timber tables" loading="lazy" decoding="async">
      <div class="bar"><p class="label">A TAKU project</p><div><h2 class="d" id="p3-t">The mill, reopened</h2><p>We kept the brick shell of a textile mill and fitted a design studio inside it, steel windows and all.</p></div><a class="d" href="#contact">View the project<span class="sr">: The mill, reopened</span></a></div>
    </article>
    <article class="project" aria-labelledby="p4-t" data-from="left">
      <img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/p4.webp' ) ); ?>" alt="A planted rooftop garden with timber decks above the city at golden hour" loading="lazy" decoding="async">
      <div class="bar"><p class="label">A TAKU project</p><div><h2 class="d" id="p4-t">A garden on the roof</h2><p>Seventy residents share a planted roof with decks, beds and benches above the city.</p></div><a class="d" href="#contact">View the project<span class="sr">: A garden on the roof</span></a></div>
    </article>
   </div>
  </div>
<!-- /wp:html -->
