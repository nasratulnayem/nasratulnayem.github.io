---
title: "Add video to WooCommerce gallery for free"
date: "2026-03-10 18:18:32 +0000"
permalink: "/blog/add-video-to-woocommerce-gallery-for-free/"
excerpt: "The problem with paid plugins I was working on a project last week for a client who wanted a simple video in their WooCommerce product gallery. It sounds like a basic feature, right? But when I started looking for solutions, everything was behind a paywall. People are charging seventy or eighty doll"
author_profile: true
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/Untitled-design.png"
  image: "work/Untitled-design.png"
categories:
  - "Custom Plugins"
---

{% raw %}
<p></p>
<section class="codex-block">
<h2>The problem with paid plugins</h2>
<p>I was working on a project last week for a client who wanted a simple video in their WooCommerce product gallery. It sounds like a basic feature, right? But when I started looking for solutions, everything was behind a paywall. People are charging seventy or eighty dollars a year for a plugin that just adds a video tag to a slider. It felt like a total rip-off, especially for a small business just starting out. I have this thing where I hate adding bloat to a site if I can just write the logic myself. Every plugin you add is another potential security hole or something that will break during the next WordPress update. I decided I would rather spend a few hours struggling with the code than make my client pay for a subscription they do not really need.</p>
<p>The pressure was on because the site was supposed to go live in two days. I had a choice. I could tell them to buy the plugin and be done with it in ten minutes, or I could stay up late and build a custom solution. I chose the latter. It was not just about saving money. I wanted to learn how WooCommerce handles its gallery internally. I wanted to see if I could make something that felt native to the dashboard without making the interface look messy. It was a bit of a gamble because if I could not get it working, I would have wasted a whole night and still had to buy the plugin anyway.</p>
</section>
<section class="codex-block">
<h2>What this solves</h2>
<p>This snippet is designed to bridge the gap between a standard image gallery and a professional product showcase. Most themes only allow images. If you want a video, you usually have to put it in the long description where nobody sees it. This code does a few specific things:</p>
<ul>
<li>It adds a new section to the product edit page so you can upload a video file.</li>
<li>It lets you choose a specific thumbnail for that video so it does not look like a broken play button in the gallery.</li>
<li>It automatically allows your WordPress site to accept video formats like MP4 and WebM if they were restricted before.</li>
<li>It hooks directly into the gallery slider to inject the video right alongside the product photos.</li>
<li>It uses native WordPress media tools, so it feels like it belongs there.</li>
</ul>
<p>The main goal was to keep it lightweight. No extra database tables, no massive CSS libraries, just pure PHP and a bit of jQuery to handle the admin UI. I also wanted to make sure it worked with themes that use the Splide slider, which is common in a lot of custom WooCommerce builds lately. Standard WooCommerce hooks sometimes fail with these themes, so I had to find a way to target the HTML output directly.</p>
</section>
<section class="codex-block">
<h2>The struggle of building it</h2>
<p>The hardest part was definitely the admin interface. I am twenty-one, and I grew up with modern web apps, so working with the WordPress media library in JavaScript always feels a bit like stepping back in time. I spent about two hours just trying to get the &#8220;Select Video&#8221; button to open the media frame correctly. I kept getting these weird console errors because I forgot to enqueue the media scripts properly. It is those small, stupid mistakes that really get to you when it is 2 AM and you just want to go to sleep. I felt a lot of doubt. I kept thinking that maybe the eighty-dollar plugin was worth it just to avoid this headache.</p>
<p>Then there was the issue of the frontend. The theme I was using did not use the standard WooCommerce gallery hooks. It used a custom template from a developer named TemplateMela. My code kept working on the default Storefront theme but would disappear the moment I switched back to the client&#8217;s theme. I had to dig through the theme&#8217;s source code, looking for filter names. That is when I found the filters for the main image and the thumbnail list. Once I had those, I could finally inject my video HTML into the right spot. It was a huge win. Seeing that play button finally show up in the gallery felt better than any paycheck.</p>
<p>I also had to deal with the reality of video file sizes. If a user uploads a 50MB video, it is going to ruin the site&#8217;s performance. I could not solve that with just code, so I had to make sure the snippet used the &#8220;metadata&#8221; preload setting. This ensures the browser only downloads the video info instead of the whole file when the page loads. It is a small tradeoff, but it keeps the site fast while still giving the user what they want.</p>
</section>
<section class="codex-block">
<h2>Security and risks</h2>
<p>When you are writing code that handles file uploads and saves data to the database, you have to be careful. I have seen too many snippets online that are just wide open to attacks. I made sure to include some basic but essential security measures in this code.</p>
<ul>
<li><strong>Nonces:</strong> The code uses a nonce (number used once) to verify that the person saving the product video is actually the authorized user and not some random script.</li>
<li><strong>Capabilities:</strong> I added a check to ensure only people with the &#8216;edit_post&#8217; permission can actually change the video data.</li>
<li><strong>Sanitization:</strong> Every piece of data coming from the user is passed through functions like absint() or sanitize_text_field(). This prevents people from trying to inject malicious scripts into your database.</li>
<li><strong>File types:</strong> While the code allows video uploads, it still relies on the WordPress core to handle the actual file processing. It does not bypass the main security filters for the media library.</li>
</ul>
<p>The biggest risk with this snippet is not actually security, but server resources. If you are on a very cheap shared hosting plan, hosting your own videos can be tough. Videos take up a lot of bandwidth. If you have ten people watching a high-definition product video at the same time, it might slow down your site. This snippet is safe to use, but you should always try to compress your videos before uploading them. Keep them under 5MB if you can.</p>
</section>
<section class="codex-block">
<h2>How to use</h2>
<p>Getting this working on your site is pretty straightforward. You do not need to be a developer to do it, just follow these steps carefully. I always recommend using a child theme or a snippet plugin so you do not lose your changes when you update your main theme.</p>
<ol>
<li>Install the <strong>WPCode</strong> or Code Snippets plugin from the WordPress repository.</li>
<li>Create a new snippet and set the type to <strong>PHP Snippet</strong>.</li>
<li>Copy the entire block of code provided below.</li>
<li>Paste it into the code editor in the plugin.</li>
<li>Set the snippet to run everywhere and hit save.</li>
<li>Go to one of your products in the dashboard. You will see a new section in the right-hand sidebar or at the bottom of the image gallery box that says &#8220;Gallery video&#8221;.</li>
<li>Select your video and a thumbnail, then update the product.</li>
</ol>
<p>If you do not see the video on the front of the site, check if your theme uses a custom gallery. This code is specifically tailored for themes using the TemplateMela structure or standard WooCommerce hooks. If your theme is very unique, you might need to adjust the filter names in the code.</p>
<div class="codex-codebox">
<div class="codex-codebox-header">
<div class="codex-codebox-left">
<div class="codex-codebox-dots">
        <span></span><span></span><span></span>
      </div>
<div class="codex-codebox-title">PHP · WooCommerce product gallery video snippet</div>
</p></div>
<p>
  </div>
<pre><code>&lt;?php
/**
 * Plugin Name: WC Product Gallery Media
 * Description: Adds video controls inside WooCommerce Product Gallery and renders one video item in single-product gallery.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const AWI_PRODUCT_VIDEO_META_KEY       = '_awi_product_gallery_video_id';
const AWI_PRODUCT_VIDEO_THUMB_META_KEY = '_awi_product_gallery_video_thumb_id';

/**
 * Allow common video uploads.
 */
add_filter(
	'upload_mimes',
	static function ( $mimes ) {
		$mimes['mp4']  = 'video/mp4';
		$mimes['m4v']  = 'video/mp4';
		$mimes['mov']  = 'video/quicktime';
		$mimes['webm'] = 'video/webm';
		$mimes['ogv']  = 'video/ogg';
		$mimes['ogg']  = 'video/ogg';
		return $mimes;
	}
);

/**
 * Inject video controls into the existing WooCommerce Product Gallery metabox.
 */
add_action(
	'admin_enqueue_scripts',
	static function ( $hook_suffix ) {
		if ( ! in_array( $hook_suffix, array( 'post.php', 'post-new.php' ), true ) ) {
			return;
		}

		$screen = get_current_screen();
		if ( ! $screen || 'product' !== $screen-&gt;id ) {
			return;
		}

		$post_id  = isset( $_GET['post'] ) ? absint( wp_unslash( $_GET['post'] ) ) : 0;
		$video_id = $post_id ? (int) get_post_meta( $post_id, AWI_PRODUCT_VIDEO_META_KEY, true ) : 0;
		$thumb_id = $post_id ? (int) get_post_meta( $post_id, AWI_PRODUCT_VIDEO_THUMB_META_KEY, true ) : 0;

		$video_url      = $video_id ? wp_get_attachment_url( $video_id ) : '';
		$video_filename = $video_url ? wp_basename( $video_url ) : '';
		$thumb_url      = $thumb_id ? wp_get_attachment_image_url( $thumb_id, 'thumbnail' ) : '';

		wp_enqueue_media();
		wp_register_script( 'awi-product-gallery-video-admin', '', array( 'jquery' ), '1.1.0', true );
		wp_enqueue_script( 'awi-product-gallery-video-admin' );

		$config = array(
			'nonce'         =&gt; wp_create_nonce( 'awi_save_product_video' ),
			'videoId'       =&gt; $video_id,
			'thumbId'       =&gt; $thumb_id,
			'videoFilename' =&gt; $video_filename,
			'thumbUrl'      =&gt; $thumb_url,
		);

		$js = 'window.awiProductGalleryVideo = ' . wp_json_encode( $config ) . ';';
		wp_add_inline_script( 'awi-product-gallery-video-admin', $js, 'before' );

		$inline_js = &lt;&lt;&lt;'JS'
jQuery(function($) {
	var cfg = window.awiProductGalleryVideo || {};
	var $box = $('#woocommerce-product-images .inside');
	var $form = $('#post');

	if (!$box.length || !$form.length) {
		return;
	}

	if ($('#awi-product-gallery-video-wrap').length) {
		return;
	}

	if (!$('#awi_product_video_id').length) {
		$form.append('&lt;input type="hidden" id="awi_product_video_id" name="awi_product_video_id" value="' + (cfg.videoId || '') + '"&gt;');
	}
	if (!$('#awi_product_video_thumb_id').length) {
		$form.append('&lt;input type="hidden" id="awi_product_video_thumb_id" name="awi_product_video_thumb_id" value="' + (cfg.thumbId || '') + '"&gt;');
	}
	if (!$('#awi_product_video_nonce').length) {
		$form.append('&lt;input type="hidden" id="awi_product_video_nonce" name="awi_product_video_nonce" value="' + (cfg.nonce || '') + '"&gt;');
	}

	var ui = '' +
		'&lt;div id="awi-product-gallery-video-wrap"&gt;' +
			'&lt;hr /&gt;' +
			'&lt;p&gt;&lt;strong&gt;Gallery video&lt;/strong&gt;&lt;/p&gt;' +
			'&lt;p&gt;Select one video and one thumbnail image.&lt;/p&gt;' +
			'&lt;div class="awi-pgv-row"&gt;' +
				'&lt;button type="button" class="button" id="awi-select-product-video"&gt;Select video&lt;/button&gt; ' +
				'&lt;button type="button" class="button" id="awi-remove-product-video"&gt;Remove&lt;/button&gt;' +
			'&lt;/div&gt;' +
			'&lt;div class="awi-pgv-file" id="awi-product-video-filename"&gt;&lt;/div&gt;' +
			'&lt;div class="awi-pgv-row"&gt;' +
				'&lt;button type="button" class="button" id="awi-select-product-video-thumb"&gt;Select thumbnail&lt;/button&gt; ' +
				'&lt;button type="button" class="button" id="awi-remove-product-video-thumb"&gt;Remove&lt;/button&gt;' +
			'&lt;/div&gt;' +
			'&lt;div class="awi-pgv-thumb-wrap"&gt;&lt;img id="awi-product-video-thumb-image" alt="Video thumbnail" /&gt;&lt;/div&gt;' +
		'&lt;/div&gt;';

	var $anchor = $box.find('p.add_product_images');
	if ($anchor.length) {
		$anchor.after(ui);
	} else {
		$box.append(ui);
	}

	var $videoId = $('#awi_product_video_id');
	var $thumbId = $('#awi_product_video_thumb_id');
	var $videoName = $('#awi-product-video-filename');
	var $thumbImg = $('#awi-product-video-thumb-image');
	var videoFrame = null;
	var thumbFrame = null;

	function setVideoLabel(name) {
		$videoName.html(name ? name : '&lt;em&gt;No video selected&lt;/em&gt;');
	}

	function setThumb(url) {
		if (url) {
			$thumbImg.attr('src', url).show();
		} else {
			$thumbImg.attr('src', '').hide();
		}
	}

	setVideoLabel(cfg.videoFilename || '');
	setThumb(cfg.thumbUrl || '');

	$('#awi-select-product-video').on('click', function(e) {
		e.preventDefault();
		if (videoFrame) {
			videoFrame.open();
			return;
		}

		videoFrame = wp.media({
			title: 'Select product gallery video',
			button: { text: 'Use this video' },
			library: { type: ['video'] },
			multiple: false
		});

		videoFrame.on('select', function() {
			var attachment = videoFrame.state().get('selection').first().toJSON();
			if (!attachment || !attachment.id) {
				return;
			}
			$videoId.val(String(attachment.id));
			setVideoLabel(attachment.filename || ('ID: ' + attachment.id));
		});

		videoFrame.open();
	});

	$('#awi-remove-product-video').on('click', function(e) {
		e.preventDefault();
		$videoId.val('');
		setVideoLabel('');
	});

	$('#awi-select-product-video-thumb').on('click', function(e) {
		e.preventDefault();
		if (thumbFrame) {
			thumbFrame.open();
			return;
		}

		thumbFrame = wp.media({
			title: 'Select product video thumbnail',
			button: { text: 'Use this image' },
			library: { type: ['image'] },
			multiple: false
		});

		thumbFrame.on('select', function() {
			var attachment = thumbFrame.state().get('selection').first().toJSON();
			if (!attachment || !attachment.id) {
				return;
			}
			$thumbId.val(String(attachment.id));
			var thumbUrl = attachment.sizes &amp;&amp; attachment.sizes.thumbnail ? attachment.sizes.thumbnail.url : attachment.url;
			setThumb(thumbUrl || '');
		});

		thumbFrame.open();
	});

	$('#awi-remove-product-video-thumb').on('click', function(e) {
		e.preventDefault();
		$thumbId.val('');
		setThumb('');
	});
});
JS;

		$inline_css = &lt;&lt;&lt;'CSS'
#awi-product-gallery-video-wrap {
	margin: 12px 0 0;
	padding: 12px 8px 0;
	border-top: 1px solid #dcdcde;
	box-sizing: border-box;
}

#awi-product-gallery-video-wrap .awi-pgv-file {
	margin-top: 8px;
	word-break: break-all;
	color: #1d2327;
}

#awi-product-gallery-video-wrap .awi-pgv-thumb-wrap {
	margin-top: 8px;
}

#awi-product-gallery-video-wrap #awi-product-video-thumb-image {
	display: none;
	max-width: 100%;
	height: auto;
	border: 1px solid #dcdcde;
}
CSS;

		wp_add_inline_script( 'awi-product-gallery-video-admin', $inline_js );
		wp_register_style( 'awi-product-gallery-video-admin-style', false, array(), '1.1.0' );
		wp_enqueue_style( 'awi-product-gallery-video-admin-style' );
		wp_add_inline_style( 'awi-product-gallery-video-admin-style', $inline_css );
	}
);

/**
 * Save video and thumbnail IDs.
 */
add_action(
	'save_post_product',
	static function ( $post_id ) {
		if ( defined( 'DOING_AUTOSAVE' ) &amp;&amp; DOING_AUTOSAVE ) {
			return;
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		if ( ! isset( $_POST['awi_product_video_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['awi_product_video_nonce'] ) ), 'awi_save_product_video' ) ) {
			return;
		}

		$video_id = isset( $_POST['awi_product_video_id'] ) ? absint( wp_unslash( $_POST['awi_product_video_id'] ) ) : 0;
		$thumb_id = isset( $_POST['awi_product_video_thumb_id'] ) ? absint( wp_unslash( $_POST['awi_product_video_thumb_id'] ) ) : 0;

		if ( $video_id &gt; 0 ) {
			update_post_meta( $post_id, AWI_PRODUCT_VIDEO_META_KEY, $video_id );
		} else {
			delete_post_meta( $post_id, AWI_PRODUCT_VIDEO_META_KEY );
		}

		if ( $thumb_id &gt; 0 ) {
			update_post_meta( $post_id, AWI_PRODUCT_VIDEO_THUMB_META_KEY, $thumb_id );
		} else {
			delete_post_meta( $post_id, AWI_PRODUCT_VIDEO_THUMB_META_KEY );
		}
	}
);

/**
 * Get video data for current product gallery.
 *
 * @return array&lt;string, string|int&gt;|null
 */
function awi_get_product_gallery_video_data() {
	if ( ! function_exists( 'wc_get_product' ) ) {
		return null;
	}

	global $product;
	if ( ! $product || ! is_a( $product, 'WC_Product' ) ) {
		return null;
	}

	$product_id = $product-&gt;get_id();
	$video_id   = (int) get_post_meta( $product_id, AWI_PRODUCT_VIDEO_META_KEY, true );
	if ( $video_id &lt;= 0 ) {
		return null;
	}

	$video_url = wp_get_attachment_url( $video_id );
	if ( ! $video_url ) {
		return null;
	}

	$mime = (string) get_post_mime_type( $video_id );
	if ( 0 !== strpos( $mime, 'video/' ) ) {
		$mime = 'video/mp4';
	}

	$thumb_id  = (int) get_post_meta( $product_id, AWI_PRODUCT_VIDEO_THUMB_META_KEY, true );
	$thumb_url = $thumb_id ? wp_get_attachment_image_url( $thumb_id, 'woocommerce_gallery_thumbnail' ) : '';
	if ( ! $thumb_url ) {
		$thumb_url = wp_mime_type_icon( $video_id );
	}

	return array(
		'product_id' =&gt; $product_id,
		'video_url'  =&gt; $video_url,
		'mime'       =&gt; $mime,
		'thumb_url'  =&gt; (string) $thumb_url,
	);
}

/**
 * Add video slide to TemplateMela custom gallery main list.
 */
add_filter(
	'base_single_product_image_main_html',
	static function ( $html, $slide_id ) {
		static $added_for_product = array();

		$video_data = awi_get_product_gallery_video_data();
		if ( ! $video_data ) {
			return $html;
		}

		$product_id = (int) $video_data['product_id'];
		if ( ! empty( $added_for_product[ $product_id ] ) ) {
			return $html;
		}

		$added_for_product[ $product_id ] = true;

		$video_html  = '&lt;li class="splide__slide awi-woo-video-slide"&gt;';
		$video_html .= '&lt;video class="awi-product-gallery-video" controls preload="metadata" playsinline poster="' . esc_url( (string) $video_data['thumb_url'] ) . '"&gt;';
		$video_html .= '&lt;source src="' . esc_url( (string) $video_data['video_url'] ) . '" type="' . esc_attr( (string) $video_data['mime'] ) . '" /&gt;';
		$video_html .= '&lt;/video&gt;';
		$video_html .= '&lt;/li&gt;';

		return $html . $video_html;
	},
	20,
	2
);

/**
 * Add video thumbnail item to TemplateMela custom gallery thumbnails list.
 */
add_filter(
	'base_single_product_image_thumbnail_html',
	static function ( $html, $slide_id ) {
		static $added_for_product = array();

		$video_data = awi_get_product_gallery_video_data();
		if ( ! $video_data ) {
			return $html;
		}

		$product_id = (int) $video_data['product_id'];
		if ( ! empty( $added_for_product[ $product_id ] ) ) {
			return $html;
		}

		$added_for_product[ $product_id ] = true;

		$thumb_html  = '&lt;li class="bt-woo-gallery-thumbnail splide__slide awi-woo-video-thumb"&gt;';
		$thumb_html .= '&lt;img src="' . esc_url( (string) $video_data['thumb_url'] ) . '" alt="Product video" /&gt;';
		$thumb_html .= '&lt;/li&gt;';

		return $html . $thumb_html;
	},
	20,
	2
);

/**
 * Frontend styling for gallery video slide.
 */
add_action(
	'wp_enqueue_scripts',
	static function () {
		if ( ! function_exists( 'is_product' ) || ! is_product() ) {
			return;
		}

		wp_register_style( 'awi-product-gallery-video', false, array(), '1.1.0' );
		wp_enqueue_style( 'awi-product-gallery-video' );
		wp_add_inline_style(
			'awi-product-gallery-video',
			'.single-product .woocommerce-product-gallery__image--video,.single-product .awi-woo-video-slide{background:#000;border-radius:6px;overflow:hidden}.single-product .woocommerce-product-gallery__image--video .awi-product-gallery-video,.single-product .awi-woo-video-slide .awi-product-gallery-video{display:block;width:100%;height:auto;aspect-ratio:1/1;object-fit:contain;background:#000}.single-product .awi-woo-video-thumb img{object-fit:cover;width:100%;height:100%}'
		);
	}
);
</code></pre>
</div>
</section>
<section class="codex-block">
<h2>What I learned from this</h2>
<p>Looking back, I am glad I did this. It was frustrating at times, but I now have a snippet I can reuse for any project. I also saved my client money and kept their site lean.</p>
<p>If you use this, test it on a staging site first. Every theme is different, and while I have tried to make this as compatible as possible, there is always a chance of a conflict.</p>
<p>If something does not work, start by checking your browser console for JavaScript errors or your server logs for PHP issues. Most problems are usually simple typos, missing hooks, or theme-specific gallery markup.</p>
</section>
{% endraw %}
