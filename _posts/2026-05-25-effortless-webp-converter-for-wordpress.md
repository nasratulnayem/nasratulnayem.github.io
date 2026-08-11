---
title: "How I Built a Lightweight WebP Converter for WordPress Images"
date: "2026-05-25 09:22:21 +0000"
permalink: "/blog/effortless-webp-converter-for-wordpress/"
excerpt: "Why I built this instead of relying on another plugin A while ago, I was working on a WordPress site with more than 4,000 images in the media library. Most of them were old JPEG and PNG files, and many were much heavier..."
layout: post
author_profile: false
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/webp-converter.png"
  image: "work/webp-converter.png"
categories:
  - "Custom Plugins"
---

{% raw %}
<p></p>






<section class="codex-block">
<h2>Why I built this instead of relying on another plugin</h2>
<p>A while ago, I was working on a WordPress site with more than 4,000 images in the media library. Most of them were old JPEG and PNG files, and many were much heavier than they needed to be. When I tested the site in PageSpeed Insights, the result was not great. The score was sitting around the low 30s, and the image recommendations were mostly pointing to one thing: serve images in a next-gen format.</p>

<p>I checked a few popular plugins, but most of them came with a subscription model or required the images to be processed through an external cloud service. That did not feel right for this project. I wanted a tool that could run directly on the server, keep the workflow simple, and avoid adding another monthly cost.</p>

<p>The other issue was control. Some image optimisation tools can be too aggressive. They rewrite database values, remove original files, or make changes that are hard to reverse when something goes wrong. I have seen websites break because an optimisation process failed halfway through. So my main rule was simple: keep the original files untouched and only serve the WebP version when it exists and works properly.</p>

<p>That is how the idea for Effortless WebP Converter started. It became a dashboard-based WordPress tool that scans the media library, converts images in small batches, and uses WordPress filters to serve the WebP version on the front end. The goal was not to build a huge optimisation suite. I wanted something lightweight, predictable, and safe enough to use on real client sites.</p>

<p>The project is available on GitHub for anyone who wants to review the code, test it, or improve it further: <a href="https://github.com/nasratulnayem/effortless-webp-converter" target="_blank" rel="noopener noreferrer">Explore the Effortless WebP Converter source code</a>.</p>
</section>

<section class="codex-block">
<h2>The timeout problem that shaped the whole workflow</h2>
<p>The hardest part was not the WebP conversion itself. The real problem was server limits. Most shared hosting environments do not allow long-running PHP scripts. If a process takes more than 30 or 60 seconds, the server usually stops it.</p>

<p>That becomes a serious issue when you are trying to process thousands of images. If you try to convert everything in one request, the process will fail quickly. I tested that approach early on, and it was clear that increasing memory limits or execution time was not a reliable answer. On client hosting, you often do not control those settings.</p>

<p>So I built the conversion process around small batches. The admin dashboard sends a request to the server, the server processes a few images, saves the progress, and then the dashboard sends the next request. This keeps each request short and reduces the chance of a timeout.</p>

<p>The useful part is that the process can continue from where it stopped. If the browser tab closes, the internet drops, or the server pauses for a moment, the plugin still knows which images are pending. That required a clean state system using the WordPress Options API, but it made the whole workflow much more dependable.</p>
</section>

<section class="codex-block">
<h2>How the plugin is structured</h2>
<p>The plugin is built around a simple structure. There is a main loader file, a core class that handles the main logic, and a small set of admin assets for the dashboard interface. I kept the JavaScript plain and avoided build tools because this plugin did not need extra complexity.</p>

<p>The main class uses a singleton pattern so the hooks are managed from one place. That keeps the code easier to follow and prevents filters or actions from being registered more than once. For a small WordPress utility plugin, that approach works well.</p>

<p>For image conversion, the plugin checks the server environment first. It looks for Imagick, then falls back to GD when Imagick is not available. Imagick usually gives better results, but GD is available on many hosting setups. If neither extension exists, the plugin does not try to force anything. It simply shows that the server cannot handle the conversion.</p>

<h3>The conversion logic</h3>

<div class="codex-codebox">
  <div class="codex-codebox-header">
    <div class="codex-codebox-left">
      <div class="codex-codebox-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="codex-codebox-title">PHP · Batch conversion handler</div>
    </div>


  </div>

  <pre><code>public function ajax_convert_batch(): void {
    check_ajax_referer('webp_migrator_admin', 'nonce');

    $state = $this-&gt;get_state();
    $batch_size = 5;
    $attachments = array_slice($state['pending'], 0, $batch_size);

    foreach ($attachments as $attachment_id) {
        $this-&gt;process_attachment($attachment_id);
    }

    // Update the stored state and return the batch response.
}</code></pre>
</div>

<p>This is the basic idea behind the batching system. The plugin takes the pending attachment IDs, processes a small group, updates the saved state, and returns a response to the dashboard. It is not fancy, but it is stable. On lower-end hosting, that matters more than trying to process too much at once.</p>
</section>

<section class="codex-block">
<h2>Serving WebP images without breaking the front end</h2>
<p>Creating the WebP files is only part of the job. The site also needs to serve those files to visitors without breaking existing images. I did not want to depend on .htaccess rules because they can be difficult to debug, especially across different hosting environments.</p>

<p>Instead, I used WordPress filters. The plugin works with common image output points such as wp_get_attachment_url, wp_calculate_image_srcset, and the_content. This gives the plugin a safer way to replace image URLs only when a WebP version is available.</p>

<p>The srcset handling needed extra care. Responsive images in WordPress can include several URLs and width values in one attribute. If that string is changed incorrectly, the browser can ignore it or load the wrong image. So the plugin checks each possible replacement carefully before changing the output.</p>

<p>For images inside post content, the plugin uses a straightforward replacement approach. It is lighter than parsing the whole HTML document and works well for common WordPress content output. The priority is set so the filter runs after most content changes, but before the final markup reaches the browser.</p>

<h3>How the URL filter works</h3>

<div class="codex-codebox">
  <div class="codex-codebox-header">
    <div class="codex-codebox-left">
      <div class="codex-codebox-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="codex-codebox-title">PHP · Safe WebP URL fallback</div>
    </div>


  </div>

  <pre><code>public function filter_attachment_url($url, $post_id) {
    if (is_admin()) {
        return $url;
    }

    $webp_url = str_replace(['.jpg', '.jpeg', '.png'], '.webp', $url);
    $path = str_replace(content_url(), WP_CONTENT_DIR, $webp_url);

    if (file_exists($path)) {
        return $webp_url;
    }

    return $url;
}</code></pre>
</div>

<p>This is the safety check that makes the plugin reliable. It only changes the image URL when the matching WebP file exists on the server. If the WebP file is missing or the conversion failed for that image, the original file stays in place. The visitor never sees a broken image because the plugin always has a fallback.</p>
</section>

<section class="codex-block">
<h2>What I chose not to add</h2>
<p>I kept the first version focused. One thing I did not include was automatic CSS background image replacement. Finding and replacing background images inside CSS files can get messy very quickly. Themes and builders handle those images in different ways, and parsing CSS through PHP would add more risk than value for this version.</p>

<p>I also skipped WP-CLI support for the first release. I know it would be useful for developers, but the main goal was to create a dashboard-first workflow. Most clients and site owners are more comfortable running a tool from the WordPress admin area than using the command line.</p>

<p>I also decided not to delete original images. Some tools offer that feature to save disk space, but I do not think it is worth the risk by default. Storage is usually cheaper than losing an original file that cannot be recovered later.</p>

<p>The interface is intentionally simple as well. It uses familiar WordPress admin styling instead of a heavy custom UI. I spent more time making the conversion logic safe than making the dashboard look overly polished. For this kind of plugin, that felt like the right tradeoff.</p>
</section>

<section class="codex-block">
<h2>Who this plugin is useful for</h2>
<p>This plugin is useful for WordPress sites that need better image performance without adding a heavy optimisation service. It is especially helpful for older websites with large media libraries full of JPEG and PNG files.</p>

<ul>
<li>Site owners who want to convert existing media library images to WebP.</li>
<li>Developers who want a transparent server-side tool without cloud processing.</li>
<li>WordPress users on hosting environments where rewrite rules are not easy to manage.</li>
<li>Anyone who wants to keep original files as a safety backup.</li>
</ul>

<p>It is not trying to replace every image optimisation platform. It is built for a specific job: scan the media library, create WebP versions, and serve them safely when they are available.</p>
</section>

<section class="codex-block">
<h2>How to install and use it</h2>
<p>The setup is standard for a WordPress plugin. There are no API keys, external accounts, or subscription settings. The server only needs PHP 7.4 or higher with either GD or Imagick enabled.</p>

<p>You can download the plugin directly from the release file here: <a href="https://github.com/nasratulnayem/effortless-webp-converter/releases/download/v0.1.0/effortless-webp-converter.zip" target="_blank" rel="noopener noreferrer">Download the Effortless WebP Converter plugin</a>.</p>

<ol>
<li>Download the plugin ZIP file from the release link.</li>
<li>Open your WordPress dashboard and go to Plugins.</li>
<li>Click Add New, then Upload Plugin.</li>
<li>Upload the effortless-webp-converter.zip file.</li>
<li>Activate the plugin after installation.</li>
<li>Go to Tools and open the Effortless WebP Converter screen.</li>
<li>Click Scan Library to find JPEG and PNG images in the media library.</li>
<li>Start the conversion and keep the browser tab open while the batches run.</li>
<li>Check the front end in an incognito window to confirm that WebP images are loading.</li>
</ol>

<p>After conversion, I usually test the homepage, a blog post, and any page with large visual sections. Opening an image in a new tab is a quick way to confirm whether the WebP version is being served. Once everything looks right, the plugin continues handling the URL replacement automatically.</p>
</section>

<section class="codex-block">
<h2>What I learned while building it</h2>
<p>This project reminded me how useful a focused tool can be. The plugin does not need a complex framework or an external API to solve the problem. It only needs a reliable way to scan files, convert them safely, track progress, and avoid breaking the existing media library.</p>

<p>The most important work was in the edge cases. Some files had unusual names. Some servers had permission issues. Some images failed conversion. The plugin had to handle those problems quietly without damaging the site.</p>

<p>Seeing the process reach 100 percent and then watching the site serve lighter image files felt like a proper win. It is a small improvement on the surface, but those small improvements add up fast when you care about performance, user experience, and clean WordPress development.</p>
</section>
{% endraw %}
