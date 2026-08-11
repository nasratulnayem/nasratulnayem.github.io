---
title: "A faster way to edit WooCommerce products"
date: "2026-02-05 20:12:27 +0000"
permalink: "/blog/a-faster-way-to-edit-woocommerce-products/"
excerpt: "The problem with bulk editing I spent most of last Tuesday staring at the spinning loading icon in the WooCommerce dashboard. I had about sixty products that needed price updates and category shifts. If you have ever used the default bulk edit tool in WordPress, you know how clunky it feels. You sel"
author_profile: true
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/ChatGPT-Image-Feb-5-2026-12_53_49-AM.png"
  image: "work/ChatGPT-Image-Feb-5-2026-12_53_49-AM.png"
categories:
  - "PHP Snippets"
---

{% raw %}
<section class="codex-block">
  <h2>The problem with bulk editing</h2>
  <p>I spent most of last Tuesday staring at the spinning loading icon in the WooCommerce dashboard. I had about sixty products that needed price updates and category shifts. If you have ever used the default bulk edit tool in WordPress, you know how clunky it feels. You select the items, you click edit, you apply the changes, and then you pray that the server does not time out. It is slow. It feels like software built fifteen years ago. I did not want to buy a seventy dollar plugin just to change some numbers and text. I am a developer, so I figured I should just build the solution myself. I wanted something that looked like a spreadsheet but worked directly inside my admin panel without any extra bloat.</p>

  <p>The biggest issue was time. I did not have three days to build a full React based interface with a REST API. I needed something that worked right now. I had a deadline for a client and my own shop was falling behind. I needed a tool that let me see everything on one screen, type in the changes, and hit save once. No jumping between pages. No individual product screens. Just a clean list that lets me get the work done so I can go back to actually building things.</p>
</section>

<section class="codex-block">
  <h2>What this solves</h2>
  <p>This snippet creates a dedicated page in your WooCommerce menu called Inline Product Editor. It focuses on the three things people change most often. These are the title, the product category, and the regular price. I purposely left out things like weight or dimensions because adding too many fields makes the UI messy and hard to use on a laptop screen. Here is what this tool actually handles for you:</p>

  <ul>
    <li>It lets you search for products by name so you do not have to scroll through thousands of items.</li>
    <li>It provides a category filter to narrow down your list to a specific group.</li>
    <li>It allows you to change the number of products shown per page.</li>
    <li>It gives you a text input for the title and the price that you can edit instantly.</li>
    <li>It includes a category dropdown that replaces the current category with a new one.</li>
    <li>It highlights rows in green as soon as you change a value so you know what you have touched.</li>
  </ul>

  <p>Basically, it turns a thirty minute chore into a two minute task. You check the boxes for the rows you want to update, hit the save button at the top or bottom, and the script handles the database updates in the background. It is straightforward and does not try to be anything it is not.</p>
</section>

<section class="codex-block">
  <h2>The struggle of building a clean UI</h2>
  <p>I am not a designer. I usually stick to the backend because CSS makes me want to put my head through a wall. When I started writing this, the table looked terrible. It was just a bunch of inputs smashed together. I had to spend a couple of hours tweaking the styles to make it feel modern. I used a lot of flexbox and sticky positioning. I wanted the save button to stay visible even when you are scrolling through a long list of products. That sticky header was a pain to get right with the WordPress admin bar, but it makes a huge difference in how the tool feels. If you have to scroll all the way back to the top to save, the tool is broken in my opinion.</p>

  <p>I also had to think about mobile. Most people do not manage their shops on a phone, but sometimes you are on the train and you notice a typo in a price. I wrote some media queries that stack the table cells vertically on small screens. It is not perfect, but it is usable. The real win was the JavaScript logic for marking changed rows. I did not want the script to try and update every single product on the page every time you hit save. That is a waste of resources. By adding a CSS class to the row when an input changes, I can visually track my progress. I also added a feature where you can click the product ID cell to toggle the checkbox. It sounds small, but clicking those tiny checkboxes over and over is annoying. Making the whole cell clickable makes the experience feel much more fluid.</p>
</section>

<section class="codex-block">
  <h2>The technical logic and tradeoffs</h2>
  <p>I made some specific choices with the PHP logic here. For the price cleaning, I had to handle different formats. Some people use commas for decimals and others use dots. I wrote a small helper function called price_clean that strips out the garbage and ensures the database gets a clean float. If you leave a price field blank, the script just ignores it instead of setting your product price to zero. That was a bug I hit in the first version and it nearly ruined my day. Checking for empty strings versus actual numerical zeros is a classic PHP headache.</p>

  <p>I decided to use the admin_post hook for the saving logic. Some people would argue for an AJAX save every time a field loses focus. I thought about that, but AJAX in the WordPress admin can be flaky if you have other plugins interfering. I went with a standard form submission. It is more robust. When you hit save, it processes the data, redirects you back to the page, and shows a success notice. It feels solid. You know for a fact that the data went through. The tradeoff is a page reload, but for a bulk tool, I think that is a fair exchange for reliability. I also made sure to clear the WooCommerce product transients. If you do not do that, the old prices might still show up on your front end for a while because of caching. That is one of those small details that separate a quick hack from a real tool.</p>
</section>

<section class="codex-block">
  <h2>The code</h2>

  <div class="codex-codebox">
    <div class="codex-codebox-header">
      <div class="codex-codebox-left">
        <div class="codex-codebox-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="codex-codebox-title">PHP · WooCommerce inline bulk product editor</div>
      </div>

      
    </div>

    <pre><code>&lt;?php
/**
 * Plugin Name: WPCup Inline Bulk Product Editor (WooCommerce)
 * Description: Edit WooCommerce product Title, Category, and Regular Price directly from a list UI in WP Admin.
 * Version: 1.1.0
 * Author: WPCup
 */

if (!defined('ABSPATH')) exit;

class WPCUP_Inline_Bulk_Product_Editor {
  const SLUG = 'wpcup-inline-bulk-product-editor';
  const NONCE_ACTION = 'wpcup_inline_bpe_save';

  public function __construct() {
    add_action('admin_menu', array($this, 'menu'));
    add_action('admin_post_wpcup_inline_bpe_save', array($this, 'handle_save'));
    add_action('admin_enqueue_scripts', array($this, 'assets'));
  }

  public function menu() {
    add_menu_page(
      'Inline Product Editor',
      'Inline Product Editor',
      'manage_woocommerce',
      self::SLUG,
      array($this, 'page'),
      'dashicons-edit',
      56
    );
  }

  public function assets($hook) {
    if (empty($_GET['page']) || $_GET['page'] !== self::SLUG) return;

    $css = "
      .wpcup-wrap{max-width:1280px;}
      .wpcup-header{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:8px;}
      .wpcup-title{margin:0;line-height:1.15;}
      .wpcup-sub{color:#6b7280;margin:6px 0 0;font-size:13px;}
      .wpcup-badge{display:inline-block;padding:4px 10px;border-radius:999px;background:#f3f4f6;border:1px solid #e5e7eb;font-size:12px;}
      .wpcup-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:16px;margin:16px 0;box-shadow:0 1px 0 rgba(0,0,0,.02);}
      .wpcup-row{display:flex;gap:12px;flex-wrap:wrap;align-items:end;}
      .wpcup-row &gt; div{flex:1 1 240px;}
      .wpcup-label{display:block;font-weight:600;margin-bottom:6px;}
      .wpcup-input,.wpcup-select{width:100%;padding:10px 12px;border:1px solid #d1d5db;border-radius:12px;background:#fff;}
      .wpcup-input:focus,.wpcup-select:focus{outline:none;box-shadow:0 0 0 3px rgba(59,130,246,.18);border-color:#93c5fd;}
      .wpcup-btn{padding:10px 14px;border-radius:12px;border:1px solid #111827;background:#111827;color:#fff;cursor:pointer;}
      .wpcup-btn:hover{opacity:.92;}
      .wpcup-btn-secondary{background:#fff;color:#111827;border:1px solid #d1d5db;}
      .wpcup-btn-secondary:hover{background:#f9fafb;}
      .wpcup-note{color:#6b7280;font-size:13px;margin-top:6px;}
      .wpcup-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}
      .wpcup-toolbar-left{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
      .wpcup-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid #e5e7eb;border-radius:999px;background:#fafafa;color:#111827;font-size:13px;}
      .wpcup-table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;}
      .wpcup-table th,.wpcup-table td{padding:12px 12px;border-bottom:1px solid #e5e7eb;vertical-align:top;}
      .wpcup-table th{background:#f9fafb;text-align:left;font-weight:700;position:sticky;top:0;z-index:1;}
      .wpcup-muted{color:#6b7280;font-size:12px;margin-top:6px;}
      .wpcup-changed{outline:2px solid rgba(34,197,94,.25);background:rgba(34,197,94,.06);}
      .wpcup-price{max-width:160px;}
      .wpcup-title-input{min-width:260px;}
      .wpcup-sticky{position:sticky;top:32px;z-index:5;}
      .wpcup-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center;}
      .wpcup-divider{height:1px;background:#e5e7eb;margin:12px 0;}
      @media (max-width: 900px){
        .wpcup-sticky{position:static;}
        .wpcup-table thead{display:none;}
        .wpcup-table, .wpcup-table tbody, .wpcup-table tr, .wpcup-table td{display:block;width:100%;}
        .wpcup-table tr{border:1px solid #e5e7eb;border-radius:14px;margin-bottom:12px;overflow:hidden;}
        .wpcup-table td{border-bottom:1px solid #e5e7eb;}
        .wpcup-table td:last-child{border-bottom:none;}
        .wpcup-table td[data-label]::before{
          content: attr(data-label);
          display:block;
          font-weight:700;
          color:#111827;
          margin-bottom:6px;
        }
        .wpcup-price{max-width:100%;}
      }
    ";
    wp_register_style('wpcup_inline_bpe_css', false);
    wp_enqueue_style('wpcup_inline_bpe_css');
    wp_add_inline_style('wpcup_inline_bpe_css', $css);

    $js = "
      document.addEventListener('DOMContentLoaded', function(){
        var selectAll = document.getElementById('wpcup_select_all');
        if(selectAll){
          selectAll.addEventListener('change', function(){
            var cbs = document.querySelectorAll('input[name=\"product_ids[]\"]');
            for (var i=0; i&lt;cbs.length; i++) cbs[i].checked = selectAll.checked;
            updateSelectedCount();
          });
        }

        function updateSelectedCount(){
          var cbs = document.querySelectorAll('input[name=\"product_ids[]\"]');
          var count = 0;
          for (var i=0; i&lt;cbs.length; i++) if (cbs[i].checked) count++;
          var el = document.getElementById('wpcup_selected_count');
          if(el) el.textContent = count;
        }

        var rowInputs = document.querySelectorAll('.wpcup-row-input');
        for (var i=0; i&lt;rowInputs.length; i++){
          rowInputs[i].addEventListener('input', markChanged);
          rowInputs[i].addEventListener('change', markChanged);
        }

        function markChanged(e){
          var tr = e.target.closest('tr');
          if(tr) tr.classList.add('wpcup-changed');
        }

        var checkboxes = document.querySelectorAll('input[name=\"product_ids[]\"]');
        for (var i=0; i&lt;checkboxes.length; i++){
          checkboxes[i].addEventListener('change', updateSelectedCount);
        }

        var toggles = document.querySelectorAll('[data-toggle-check]');
        for (var i=0; i&lt;toggles.length; i++){
          toggles[i].addEventListener('click', function(){
            var tr = this.closest('tr');
            if(!tr) return;
            var cb = tr.querySelector('input[type=\"checkbox\"][name=\"product_ids[]\"]');
            if(cb){ cb.checked = !cb.checked; updateSelectedCount(); }
          });
        }

        updateSelectedCount();
      });
    ";
    wp_register_script('wpcup_inline_bpe_js', false);
    wp_enqueue_script('wpcup_inline_bpe_js');
    wp_add_inline_script('wpcup_inline_bpe_js', $js);
  }

  private function categories() {
    $terms = get_terms(array(
      'taxonomy' =&gt; 'product_cat',
      'hide_empty' =&gt; false,
      'orderby' =&gt; 'name',
      'order' =&gt; 'ASC'
    ));
    if (is_wp_error($terms)) return array();
    return $terms;
  }

  private function price_clean($v) {
    $v = trim((string)$v);
    if ($v === '') return '';
    $v = str_replace(',', '.', $v);
    if (!is_numeric($v)) return '';
    $n = (float)$v;
    if ($n &lt; 0) $n = 0;
    return number_format($n, 2, '.', '');
  }

  public function page() {
    if (!current_user_can('manage_woocommerce')) wp_die('No permission.');
    if (!class_exists('WooCommerce')) {
      echo '&lt;div class="wrap"&gt;&lt;h1&gt;Inline Product Editor&lt;/h1&gt;&lt;div class="notice notice-error"&gt;&lt;p&gt;WooCommerce is not active.&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;';
      return;
    }

    $paged = isset($_GET['paged']) ? max(1, (int)$_GET['paged']) : 1;
    $per_page = isset($_GET['per_page']) ? max(10, min(200, (int)$_GET['per_page'])) : 25;
    $s = isset($_GET['s']) ? sanitize_text_field(wp_unslash($_GET['s'])) : '';
    $cat = isset($_GET['cat']) ? (int)$_GET['cat'] : 0;

    $args = array(
      'post_type' =&gt; 'product',
      'post_status' =&gt; array('publish','draft','private'),
      'posts_per_page' =&gt; $per_page,
      'paged' =&gt; $paged,
      'orderby' =&gt; 'date',
      'order' =&gt; 'DESC',
      's' =&gt; $s
    );

    if ($cat &gt; 0) {
      $args['tax_query'] = array(
        array(
          'taxonomy' =&gt; 'product_cat',
          'field' =&gt; 'term_id',
          'terms' =&gt; array($cat)
        )
      );
    }

    $q = new WP_Query($args);
    $cats = $this-&gt;categories();

    $notice = '';
    if (!empty($_GET['wpcup_saved'])) {
      $notice = '&lt;div class="notice notice-success is-dismissible"&gt;&lt;p&gt;&lt;strong&gt;Saved.&lt;/strong&gt; Selected products updated.&lt;/p&gt;&lt;/div&gt;';
    } elseif (!empty($_GET['wpcup_error'])) {
      $notice = '&lt;div class="notice notice-error is-dismissible"&gt;&lt;p&gt;&lt;strong&gt;Error:&lt;/strong&gt; ' . esc_html($_GET['wpcup_error']) . '&lt;/p&gt;&lt;/div&gt;';
    }

    echo '&lt;div class="wrap wpcup-wrap"&gt;';

    echo '&lt;div class="wpcup-header"&gt;';
    echo '&lt;div&gt;';
    echo '&lt;h1 class="wpcup-title"&gt;Inline Product Editor &lt;span class="wpcup-badge"&gt;Title • Category • Regular Price&lt;/span&gt;&lt;/h1&gt;';
    echo '&lt;p class="wpcup-sub"&gt;Edit directly in the list. Tick the products you want, then click &lt;strong&gt;Save Selected&lt;/strong&gt;.&lt;/p&gt;';
    echo '&lt;/div&gt;';
    echo '&lt;div class="wpcup-actions"&gt;';
    echo '&lt;span class="wpcup-pill"&gt;Selected: &lt;strong id="wpcup_selected_count"&gt;0&lt;/strong&gt;&lt;/span&gt;';
    echo '&lt;/div&gt;';
    echo '&lt;/div&gt;';

    echo $notice;

    echo '&lt;div class="wpcup-card"&gt;';
    echo '&lt;form method="get" class="wpcup-row"&gt;';
    echo '&lt;input type="hidden" name="page" value="' . esc_attr(self::SLUG) . '"&gt;';

    echo '&lt;div&gt;&lt;label class="wpcup-label"&gt;Search&lt;/label&gt;&lt;input class="wpcup-input" name="s" value="' . esc_attr($s) . '" placeholder="Search product title..."&gt;&lt;/div&gt;';

    echo '&lt;div&gt;&lt;label class="wpcup-label"&gt;Category filter&lt;/label&gt;&lt;select class="wpcup-select" name="cat"&gt;';
    echo '&lt;option value="0"&gt;All categories&lt;/option&gt;';
    foreach ($cats as $t) {
      echo '&lt;option value="' . esc_attr($t-&gt;term_id) . '"' . selected($cat, (int)$t-&gt;term_id, false) . '&gt;' . esc_html($t-&gt;name) . '&lt;/option&gt;';
    }
    echo '&lt;/select&gt;&lt;/div&gt;';

    echo '&lt;div&gt;&lt;label class="wpcup-label"&gt;Per page&lt;/label&gt;&lt;select class="wpcup-select" name="per_page"&gt;';
    $opts = array(25, 50, 100, 200);
    foreach ($opts as $pp) {
      echo '&lt;option value="' . esc_attr($pp) . '"' . selected($per_page, $pp, false) . '&gt;' . esc_html($pp) . '&lt;/option&gt;';
    }
    echo '&lt;/select&gt;&lt;/div&gt;';

    echo '&lt;div&gt;';
    echo '&lt;button class="wpcup-btn" type="submit"&gt;Apply&lt;/button&gt; ';
    echo '&lt;a class="button wpcup-btn-secondary" href="' . esc_url(admin_url('admin.php?page=' . self::SLUG)) . '"&gt;Reset&lt;/a&gt;';
    echo '&lt;/div&gt;';

    echo '&lt;/form&gt;';
    echo '&lt;div class="wpcup-note"&gt;Tip: click the product cell to quickly tick/untick a row. Green highlight means you changed something.&lt;/div&gt;';
    echo '&lt;/div&gt;';

    echo '&lt;form method="post" action="' . esc_url(admin_url('admin-post.php')) . '"&gt;';
    echo '&lt;input type="hidden" name="action" value="wpcup_inline_bpe_save"&gt;';
    wp_nonce_field(self::NONCE_ACTION, '_wpcup_nonce');
    echo '&lt;input type="hidden" name="return_page" value="' . esc_attr(wp_unslash($_SERVER['REQUEST_URI'])) . '"&gt;';

    echo '&lt;div class="wpcup-card wpcup-sticky"&gt;';
    echo '&lt;div class="wpcup-toolbar"&gt;';
    echo '&lt;div class="wpcup-toolbar-left"&gt;';
    echo '&lt;strong&gt;Ready to save?&lt;/strong&gt;';
    echo '&lt;span class="wpcup-note"&gt;Only checked products will be saved.&lt;/span&gt;';
    echo '&lt;/div&gt;';
    echo '&lt;div class="wpcup-actions"&gt;';
    echo '&lt;button class="wpcup-btn" type="submit"&gt;Save Selected&lt;/button&gt;';
    echo '&lt;/div&gt;';
    echo '&lt;/div&gt;';
    echo '&lt;/div&gt;';

    echo '&lt;div class="wpcup-card"&gt;';

    if (!$q-&gt;have_posts()) {
      echo '&lt;p&gt;No products found.&lt;/p&gt;';
      echo '&lt;/div&gt;&lt;/form&gt;&lt;/div&gt;';
      return;
    }

    echo '&lt;table class="wpcup-table"&gt;';
    echo '&lt;thead&gt;&lt;tr&gt;';
    echo '&lt;th&gt;&lt;input id="wpcup_select_all" type="checkbox" title="Select all"&gt;&lt;/th&gt;';
    echo '&lt;th&gt;Product (edit title)&lt;/th&gt;';
    echo '&lt;th&gt;Category (dropdown)&lt;/th&gt;';
    echo '&lt;th&gt;Regular price&lt;/th&gt;';
    echo '&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;';

    while ($q-&gt;have_posts()) {
      $q-&gt;the_post();
      $id = get_the_ID();
      $title = get_the_title();

      $terms = get_the_terms($id, 'product_cat');
      $current_cat_id = 0;
      if (!is_wp_error($terms) &amp;&amp; !empty($terms)) {
        $current_cat_id = (int)$terms[0]-&gt;term_id;
      }

      $price = get_post_meta($id, '_regular_price', true);
      $price = ($price !== '') ? $price : '';

      echo '&lt;tr&gt;';
      echo '&lt;td&gt;&lt;input type="checkbox" name="product_ids[]" value="' . esc_attr($id) . '"&gt;&lt;/td&gt;';

      echo '&lt;td data-toggle-check&gt;';
      echo '&lt;div class="wpcup-muted"&gt;ID: ' . esc_html($id) . ' (tap/click to tick)&lt;/div&gt;';
      echo '&lt;input class="wpcup-input wpcup-row-input wpcup-title-input" type="text" name="title[' . esc_attr($id) . ']" value="' . esc_attr($title) . '"&gt;';
      echo '&lt;/td&gt;';

      echo '&lt;td&gt;';
      echo '&lt;select class="wpcup-select wpcup-row-input" name="cat[' . esc_attr($id) . ']"&gt;';
      echo '&lt;option value="0"&gt;No change&lt;/option&gt;';
      foreach ($cats as $t) {
        $sel = selected($current_cat_id, (int)$t-&gt;term_id, false);
        echo '&lt;option value="' . esc_attr($t-&gt;term_id) . '"' . $sel . '&gt;' . esc_html($t-&gt;name) . '&lt;/option&gt;';
      }
      echo '&lt;/select&gt;';
      echo '&lt;div class="wpcup-note"&gt;When saved, this replaces existing categories with the selected one.&lt;/div&gt;';
      echo '&lt;/td&gt;';

      echo '&lt;td&gt;';
      echo '&lt;input class="wpcup-input wpcup-row-input wpcup-price" type="text" name="price[' . esc_attr($id) . ']" value="' . esc_attr($price) . '" placeholder="e.g. 19.99"&gt;';
      echo '&lt;div class="wpcup-note"&gt;Regular price only.&lt;/div&gt;';
      echo '&lt;/td&gt;';

      echo '&lt;/tr&gt;';
    }

    wp_reset_postdata();

    echo '&lt;/tbody&gt;&lt;/table&gt;';

    $total_pages = (int)$q-&gt;max_num_pages;
    if ($total_pages &gt; 1) {
      $base = add_query_arg(
        array(
          'page' =&gt; self::SLUG,
          's' =&gt; $s,
          'cat' =&gt; $cat,
          'per_page' =&gt; $per_page
        ),
        admin_url('admin.php')
      );

      echo '&lt;div class="wpcup-divider"&gt;&lt;/div&gt;';
      echo '&lt;div class="wpcup-toolbar"&gt;';
      echo '&lt;div class="wpcup-note"&gt;Page ' . esc_html($paged) . ' of ' . esc_html($total_pages) . '&lt;/div&gt;';
      echo '&lt;div class="wpcup-actions"&gt;';
      if ($paged &gt; 1) {
        echo '&lt;a class="button wpcup-btn-secondary" href="' . esc_url(add_query_arg('paged', $paged - 1, $base)) . '"&gt;Prev&lt;/a&gt;';
      }
      if ($paged &lt; $total_pages) {
        echo '&lt;a class="button wpcup-btn-secondary" href="' . esc_url(add_query_arg('paged', $paged + 1, $base)) . '"&gt;Next&lt;/a&gt;';
      }
      echo '&lt;/div&gt;&lt;/div&gt;';
    }

    echo '&lt;/div&gt;';
    echo '&lt;/form&gt;';
    echo '&lt;/div&gt;';
  }

  public function handle_save() {
    if (!current_user_can('manage_woocommerce')) wp_die('No permission.');

    $nonce = isset($_POST['_wpcup_nonce']) ? sanitize_text_field(wp_unslash($_POST['_wpcup_nonce'])) : '';
    if (!wp_verify_nonce($nonce, self::NONCE_ACTION)) wp_die('Security check failed.');

    $return = isset($_POST['return_page']) ? esc_url_raw(wp_unslash($_POST['return_page'])) : admin_url('admin.php?page=' . self::SLUG);

    $ids = isset($_POST['product_ids']) ? (array)$_POST['product_ids'] : array();
    $ids = array_filter(array_map('intval', $ids));

    if (empty($ids)) {
      wp_safe_redirect(add_query_arg(array('wpcup_error' =&gt; rawurlencode('No products selected.')), $return));
      exit;
    }

    $titles = (isset($_POST['title']) &amp;&amp; is_array($_POST['title'])) ? $_POST['title'] : array();
    $cats   = (isset($_POST['cat']) &amp;&amp; is_array($_POST['cat'])) ? $_POST['cat'] : array();
    $prices = (isset($_POST['price']) &amp;&amp; is_array($_POST['price'])) ? $_POST['price'] : array();

    foreach ($ids as $product_id) {
      $post = get_post($product_id);
      if (!$post || $post-&gt;post_type !== 'product') continue;

      if (isset($titles[$product_id])) {
        $new_title = sanitize_text_field(wp_unslash($titles[$product_id]));
        if ($new_title !== '' &amp;&amp; $new_title !== $post-&gt;post_title) {
          wp_update_post(array(
            'ID' =&gt; $product_id,
            'post_title' =&gt; $new_title
          ));
        }
      }

      if (isset($cats[$product_id])) {
        $new_cat_id = (int) sanitize_text_field(wp_unslash($cats[$product_id]));
        if ($new_cat_id &gt; 0) {
          wp_set_object_terms($product_id, array($new_cat_id), 'product_cat', false);
        }
      }

      if (isset($prices[$product_id])) {
        $raw = sanitize_text_field(wp_unslash($prices[$product_id]));
        $clean = $this-&gt;price_clean($raw);

        if ($raw !== '' &amp;&amp; $clean !== '') {
          update_post_meta($product_id, '_regular_price', $clean);
          $sale = get_post_meta($product_id, '_sale_price', true);
          if ($sale === '' || !is_numeric($sale)) {
            update_post_meta($product_id, '_price', $clean);
          }
        }
      }

      if (function_exists('wc_delete_product_transients')) {
        wc_delete_product_transients($product_id);
      }
    }

    wp_safe_redirect(add_query_arg(array('wpcup_saved' =&gt; 1), $return));
    exit;
  }
}

new WPCUP_Inline_Bulk_Product_Editor();
?&gt;</code></pre>
  </div>
</section>

<section class="codex-block">
  <h2>Security &amp; risks</h2>
  <p>Whenever you write a script that updates the database, you have to be careful. I put in several layers of protection here to make sure this does not break your store or open it up to hackers. Here is what you need to know about safety.</p>

  <ul>
    <li><strong>User Permissions:</strong> I used the manage_woocommerce capability check. This means only admins or shop managers can see this page. A regular subscriber or a customer cannot access this menu or trigger the save function.</li>
    <li><strong>Nonces:</strong> The save form uses a WordPress nonce. This prevents cross site request forgery. Basically, it ensures that the request actually came from your admin panel and not from some external site trying to mess with your data.</li>
    <li><strong>Sanitization:</strong> Every single input is sanitized using sanitize_text_field and wp_unslash. I am not letting any raw HTML or weird characters into your database.</li>
    <li><strong>Safe Redirects:</strong> The script uses wp_safe_redirect to return you to the editor page. This is a standard security practice to prevent malicious redirects.</li>
    <li><strong>Risk:</strong> The biggest risk is human error. This tool replaces the category for the selected product. If you accidentally select the wrong category and hit save on fifty products, they will all move to that category. There is no undo button. Always make a database backup before doing large bulk edits. That is just common sense.</li>
  </ul>
</section>

<section class="codex-block">
  <h2>How to use</h2>
  <p>Getting this running is easy. You do not even need to create a plugin file if you do not want to. You can just use a snippet manager.</p>

  <ol>
    <li>Install the <strong>WPCode</strong> plugin or Code Snippets on your WordPress site.</li>
    <li>Create a new snippet and choose <strong>PHP Snippet</strong>.</li>
    <li>Copy the code provided above and paste it into the editor.</li>
    <li>Set the snippet to run everywhere or specifically in the admin area.</li>
    <li>Hit save and activate the snippet.</li>
    <li>Look for the <strong>Inline Product Editor</strong> link in your sidebar menu, usually near the WooCommerce icon.</li>
    <li>Search for your products, check the boxes for the ones you want to change, and click <strong>Save Selected</strong>.</li>
  </ol>

  <p>If you prefer to make it a standalone plugin, just save the code as a .php file in your plugins folder and activate it. It is self contained and does not require any external libraries or files to work.</p>
</section>

<section class="codex-block">
  <h2>What I learned from the build</h2>
  <p>I feel pretty good about how this turned out. It is not a revolutionary piece of software, but it solved a real problem I was having. I learned a lot about how WooCommerce stores prices and how to efficiently clear transients.</p>

  <p>The real win for me was getting the CSS to look decent without using a library like Bootstrap. It keeps the page load fast and the code footprint small. If you find yourself spending way too much time in the standard WooCommerce bulk editor, give this a try.</p>

  <p>It is free, simple, and useful for the exact job it was built for. I might add more fields later like stock status or SKU, but for now, this handles the bulk of my work.</p>
</section>
{% endraw %}
