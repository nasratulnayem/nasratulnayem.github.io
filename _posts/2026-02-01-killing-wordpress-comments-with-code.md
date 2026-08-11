---
title: "How to Stop Spam Comments in WordPress Without a Plugin"
date: "2026-02-01 10:37:10 +0000"
permalink: "/blog/killing-wordpress-comments-with-code/"
excerpt: "Spam comments are one of those small WordPress problems that quickly become annoying. A few fake comments turn into hundreds of bot submissions, random links, pingbacks, moderation emails, and dashboard clutter. For a..."
layout: post
author_profile: false
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/disable-wordpress-comments-without-plugin.webp"
  image: "work/disable-wordpress-comments-without-plugin.webp"
categories:
  - "PHP Snippets"
---

{% raw %}
<section class="codex-block">
  <p>Spam comments are one of those small WordPress problems that quickly become annoying. A few fake comments turn into hundreds of bot submissions, random links, pingbacks, moderation emails, and dashboard clutter.</p>

  <p>For a normal business website, portfolio, landing page, or service site, comments usually do not add any real value. They just create another place for bots to attack and another thing for the site owner to manage.</p>

  <p>This is why I prefer disabling the WordPress comment system properly instead of only hiding the comment form with CSS. The goal is simple: stop spam comments before they reach the dashboard, remove unnecessary comment areas, and keep the site cleaner without installing a heavy plugin.</p>
</section>

<section class="codex-block">
  <h2>Why spam comments happen in WordPress</h2>
  <p>WordPress includes comments by default because it started as a blogging platform. That is useful for blogs and communities, but it becomes a problem when the site does not need public discussion.</p>

  <p>Spam bots look for comment forms, pingback endpoints, and trackback behaviour because those areas can be used to push junk links or trigger unwanted notifications.</p>

  <p>Even if comments are not visible in your design, some themes or old settings can still leave comment logic active. That is why a proper snippet should close comments, block pings, clear displayed comment arrays, and remove comment UI from the dashboard.</p>
</section>

<section class="codex-block">
  <h2>WordPress spam comments disable snippet</h2>
  <p>Use this PHP snippet if you want to stop spam comments and pingbacks across the whole WordPress site. It is best for websites where comments are not needed at all.</p>

  <div class="codex-codebox">
    <div class="codex-codebox-header">
      <div class="codex-codebox-left">
        <div class="codex-codebox-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="codex-codebox-title">PHP · Stop WordPress spam comments</div>
      </div>


    </div>

    <pre><code>add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

add_filter('comments_array', '__return_empty_array', 10, 2);

add_action('admin_menu', function () {
    remove_menu_page('edit-comments.php');
});

add_action('init', function () {
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
});</code></pre>
  </div>
</section>

<section class="codex-block">
  <h2>What this snippet does</h2>
  <p>The <code>comments_open</code> filter tells WordPress that comments are closed across the site. This stops the comment form from being treated as active.</p>

  <p>The <code>pings_open</code> filter disables pingbacks and trackbacks. This helps reduce those random notification emails that often look confusing to clients.</p>

  <p>The <code>comments_array</code> filter returns an empty comments list. This prevents old or existing comments from being displayed by themes that still try to output them.</p>

  <p>The <code>admin_menu</code> action removes the Comments menu from the WordPress dashboard. The <code>init</code> action removes the comments icon from the admin bar for logged-in users.</p>
</section>

<section class="codex-block">
  <h2>Why this helps reduce comment spam</h2>
  <p>This snippet reduces the places where spam comments can appear or be shown. It also cleans up the admin area so the site owner is not distracted by comment menus and moderation links they do not need.</p>

  <p>It is a lightweight option compared with installing a full plugin just to switch off comments. There is no extra settings screen, no upsell banner, and no plugin dependency to maintain.</p>

  <p>It is also non-destructive. The snippet does not delete existing comments from the database. It simply stops comments and pings from being active and visible.</p>
</section>

<section class="codex-block">
  <h2>How to add this to WordPress</h2>
  <p>The safest way to add this code is through a snippet manager such as WPCode or Code Snippets. This is safer than editing your theme file directly, especially if you are not comfortable with PHP.</p>

  <ol>
    <li>Install WPCode or Code Snippets.</li>
    <li>Create a new PHP snippet.</li>
    <li>Paste the code from this page.</li>
    <li>Set the snippet to run everywhere.</li>
    <li>Save and activate it.</li>
    <li>Check the dashboard and frontend to confirm comments are removed.</li>
  </ol>
</section>

<section class="codex-block">
  <h2>When not to use this snippet</h2>
  <p>This is a global solution. It is not right for websites that still need blog comments, product reviews, testimonials submitted through comments, or community discussion.</p>

  <p>WooCommerce product reviews can depend on the WordPress comment system. So if your store uses reviews, test this carefully on staging before using it on a live store.</p>

  <p>For a simple business website that only wants to stop WordPress spam comments and keep the dashboard clean, this snippet is a strong lightweight option.</p>
</section>
{% endraw %}
