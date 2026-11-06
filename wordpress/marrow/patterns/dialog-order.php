<?php
/**
 * Title: Dialog: Order request
 * Slug: marrow/dialog-order
 * Categories: marrow
 * Inserter: no
 * Description: Recipe or treat, pack chips, quantity, delivery or pick-up, contact details. The recipe and treat buttons and Order now open it. A layout from the template: it does not send by itself. Set the form's action or replace it with a form plugin's block.
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<dialog id="d-order" aria-labelledby="order-title">
  <div class="dlg" tabindex="-1" autofocus>
    <button class="x" type="button" aria-label="<?php esc_attr_e( 'Close', 'marrow' ); ?>" data-close>×</button>
    <h2 id="order-title"><?php esc_html_e( 'Order request', 'marrow' ); ?></h2>
    <p class="intro"><?php esc_html_e( 'Pick a recipe and a pack size. We confirm the total and the delivery day by email or text. Nothing to pay now.', 'marrow' ); ?></p>
    <form class="form" id="f-order" method="post">
      <input type="hidden" name="subject" value="Order request">
      <label class="f full"><span><?php esc_html_e( 'Recipe or treat', 'marrow' ); ?></span>
        <select name="item" required data-item>
          <optgroup label="Dog recipes"><option><?php esc_html_e( 'Chicken & Pumpkin', 'marrow' ); ?></option><option><?php esc_html_e( 'Beef & Kale', 'marrow' ); ?></option><option><?php esc_html_e( 'Lamb & Carrot', 'marrow' ); ?></option><option><?php esc_html_e( 'Turkey & Blueberry', 'marrow' ); ?></option><option><?php esc_html_e( 'Duck & Apple', 'marrow' ); ?></option><option><?php esc_html_e( 'Salmon & Sweet Potato', 'marrow' ); ?></option></optgroup>
          <optgroup label="Cat recipes"><option><?php esc_html_e( 'Chicken & Liver (cats)', 'marrow' ); ?></option><option><?php esc_html_e( 'Rabbit (cats)', 'marrow' ); ?></option><option><?php esc_html_e( 'White Fish (cats)', 'marrow' ); ?></option></optgroup>
          <optgroup label="Treats"><option data-treat><?php esc_html_e( 'Chicken hearts', 'marrow' ); ?></option><option data-treat><?php esc_html_e( 'Beef liver bites', 'marrow' ); ?></option><option data-treat><?php esc_html_e( 'Lamb lung puffs', 'marrow' ); ?></option><option data-treat><?php esc_html_e( 'Sardine crisps', 'marrow' ); ?></option><option data-treat><?php esc_html_e( 'Duck neck chews', 'marrow' ); ?></option><option data-treat><?php esc_html_e( 'Salmon skin twists', 'marrow' ); ?></option></optgroup>
        </select>
      </label>
      <fieldset class="chips"><legend><?php esc_html_e( 'Pack', 'marrow' ); ?></legend><div class="opts">
        <label data-gram><input type="radio" name="pack" value="250 g"><span><?php esc_html_e( '250 g', 'marrow' ); ?></span></label>
        <label data-gram><input type="radio" name="pack" value="500 g" checked><span><?php esc_html_e( '500 g', 'marrow' ); ?></span></label>
        <label data-gram><input type="radio" name="pack" value="750 g"><span><?php esc_html_e( '750 g', 'marrow' ); ?></span></label>
        <label data-gram><input type="radio" name="pack" value="1000 g"><span><?php esc_html_e( '1000 g', 'marrow' ); ?></span></label>
        <label data-pouch hidden><input type="radio" name="pack" value="One pouch"><span><?php esc_html_e( 'One pouch', 'marrow' ); ?></span></label>
      </div></fieldset>
      <label class="f qty"><span><?php esc_html_e( 'Quantity', 'marrow' ); ?></span><input type="number" name="quantity" min="1" max="20" step="1" value="1" required></label>
      <fieldset class="chips half"><legend><?php esc_html_e( 'Delivery', 'marrow' ); ?></legend><div class="opts">
        <label><input type="radio" name="delivery" value="Local delivery" checked><span><?php esc_html_e( 'Local delivery', 'marrow' ); ?></span></label>
        <label><input type="radio" name="delivery" value="Pick up at the kitchen"><span><?php esc_html_e( 'Pick up at the kitchen', 'marrow' ); ?></span></label>
      </div></fieldset>
      <label class="f"><span><?php esc_html_e( 'Name', 'marrow' ); ?></span><input name="name" autocomplete="name" required maxlength="100"></label>
      <label class="f"><span><?php esc_html_e( 'Email', 'marrow' ); ?></span><input type="email" name="email" autocomplete="email" required maxlength="160"></label>
      <label class="f"><span><?php esc_html_e( 'Phone (optional)', 'marrow' ); ?></span><input type="tel" name="phone" autocomplete="tel" maxlength="40"></label>
      <label class="f"><span data-postcode-label><?php esc_html_e( 'Postcode', 'marrow' ); ?></span><input name="postcode" autocomplete="postal-code" required maxlength="20"></label>
      <label class="f full"><span><?php esc_html_e( 'Note (optional)', 'marrow' ); ?></span><textarea name="note" maxlength="2000" placeholder="<?php esc_attr_e( 'Allergies, a delivery time, a gate code…', 'marrow' ); ?>"></textarea></label>
      <button class="pill big" type="submit"><?php esc_html_e( 'Send order request', 'marrow' ); ?></button>
      <p class="status" data-status role="status" aria-live="polite"></p>
      <div class="thanks" tabindex="-1"><strong><?php esc_html_e( 'Thank you,', 'marrow' ); ?> <span data-name><?php esc_html_e( 'there', 'marrow' ); ?></span>.</strong><?php esc_html_e( 'We will confirm your order, the total and the day by email within one working day.', 'marrow' ); ?> <button type="button" data-again><?php esc_html_e( 'Send another', 'marrow' ); ?></button></div>
    </form>
  </div>
</dialog>
<!-- /wp:html -->
