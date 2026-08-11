---
title: "I got tired of Canva so I built a thumbnail engine with Playwright"
date: "2026-05-25 10:19:44 +0000"
permalink: "/blog/autofacebookpost-case-study/"
excerpt: "The manual design grind was killing me I spend way too much time staring at blank canvases in Canva or Photoshop. It starts with one post, then ten, then twenty, and suddenly I have spent four hours moving text layers..."
layout: post
author_profile: false
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/thumbnail-engine-canva.webp"
  image: "work/thumbnail-engine-canva.webp"
categories:
  - "Python Automations"
---

{% raw %}
<section class="codex-block">
    <h2>The manual design grind was killing me</h2>
    <p>I spend way too much time staring at blank canvases in Canva or Photoshop. It starts with one post, then ten, then twenty, and suddenly I have spent four hours moving text layers three pixels to the left. It is a massive waste of time for someone who actually knows how to code. I wanted a way to just dump a list of titles and images into a folder and have a script spit out professional-looking social media graphics without me touching a mouse.</p>
    <p>That is where autofacebookpost started. I did not want to deal with complex image processing libraries in Python like PIL or OpenCV because styling text with code is a nightmare. I already know CSS. I can build a layout in HTML in ten minutes that looks better than anything I can make in a dedicated design tool. So the goal was simple: use HTML as my design engine and use a headless browser to take screenshots of it.</p>
    <p>I am 21, I do not have a budget for expensive API credits or high-end servers. I needed something that could run in a container, handle bulk uploads, and eventually push those images straight to a Facebook page because logging into Meta&#8217;s Business Suite is its own circle of hell. This project was about reclaiming my time and proving that I could automate the boring parts of being online.</p>
</section>

<section class="codex-block">
    <h2>How the engine actually works</h2>
    <p>The stack is pretty straightforward but effective. I am using Flask for the web interface and Playwright to handle the heavy lifting of rendering. The core idea is that every thumbnail is just an HTML template. When I upload a CSV or enter data manually, the app injects those strings into the template, spins up a headless Chromium instance, and snaps a high-resolution screenshot.</p>
    <p>In <code>app.py</code>, I set up the basic routes to handle the dashboard and the file management. I decided to use a local <code>db.json</code> file instead of a full SQL database. Is it scalable for a million users? No. Does it work perfectly for a single developer running it on a VPS? Absolutely. It keeps the project lightweight and portable.</p>
    <p>The logic for actually generating the image is tucked away in <code>makethumb.py</code>. It uses Playwright&#8217;s async API to launch the browser. Here is a simplified look at how I handle that rendering process:</p>
<pre><code>import asyncio
from playwright.async_api import async_playwright

async def generate_screenshot(html_content, output_path):
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 720})
        await page.set_content(html_content)
        await page.screenshot(path=output_path)
        await browser.close()</code></pre>
    <p>By using <code>page.set_content()</code>, I can pass the fully rendered HTML string directly to the browser. I do not have to host the template on a public URL or deal with local file path permissions inside the browser context. It is fast, and because it is Chromium, I can use modern CSS features like Flexbox, Grid, and even complex text shadows or filters that would be impossible in a standard image library.</p>
</section>

<section class="codex-block">
    <h2>The Docker nightmare</h2>
    <p>I thought containerizing this would be easy. I was wrong. Playwright requires a massive list of system dependencies to run Chromium inside a Linux environment. My first <code>Dockerfile</code> was failing constantly because of missing shared libraries like <code>libnss3</code> and <code>libgbm1</code>. I spent an entire afternoon just trial-and-erroring the <code>apt-get install</code> list.</p>
    <p>I eventually settled on using <code>python:3.11-slim-bullseye</code> as the base image to keep the size down, but even then, the final image is nearly 1GB because of the browser binaries. I had to be very specific in the Dockerfile to only install Chromium and not the entire Playwright suite of Firefox and Webkit, which saved me a few hundred megabytes of disk space on my cheap VPS.</p>
    <pre><code># Install system dependencies required for Playwright
RUN apt-get update &amp;&amp; apt-get install -y --no-install-recommends \
    libnss3 libnspr4 libdbus-1-3 libatk1.0-0 \
    libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 \
    libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
    libgbm1 libasound2 &amp;&amp; rm -rf /var/lib/apt/lists/*

# Install only the necessary browser
RUN playwright install chromium</code></pre>
    <p>Even after getting the dependencies right, I ran into memory limits. Chromium is a resource hog. Running multiple concurrent screenshot requests would occasionally crash the container. I had to implement some basic queueing logic in the Flask app to ensure I was not trying to open twenty browser tabs at once on a machine with only 2GB of RAM.</p>
</section>

<section class="codex-block">
    <h2>Templates and design decisions</h2>
    <p>I did not just want one look. I wanted variety. The <code>thumbnail_templates/</code> folder is filled with different HTML files like <code>template_gaming.html</code>, <code>template_corporate.html</code>, and <code>template_minimalist.html</code>. Each of these uses specific Google Fonts and CSS variables for quick color swaps.</p>
    <p>One of the tougher decisions was how to handle images within the thumbnails. Initially, I tried to upload them directly, but managing paths inside the templates was messy. I shifted to using external URLs or a dedicated <code>image_uploads</code> folder that the Flask app serves. This allows me to use a standard <code>&lt;img src="..."&gt;</code> tag in the HTML and let the browser handle the scaling and cropping via <code>object-fit: cover</code>.</p>
    <p>I also built a &#8220;Manual Entry&#8221; mode. Sometimes I don&#8217;t have a CSV; I just have three ideas in my head. I created a UI where I can paste a list of titles and badges into separate textareas. The app splits these by newlines and matches them up. If I provide 5 titles and 5 images, it generates 5 thumbnails in a single click. It is a small feature, but it is the one I use the most.</p>
</section>

<section class="codex-block">
    <h2>The Facebook Graph API struggle</h2>
    <p>Getting the images generated was only half the battle. I wanted to post them. The Facebook Graph API is notoriously annoying to work with. You need a User Token, which you then have to exchange for a Long-Lived Page Access Token. If you get the scopes wrong, the API just returns a cryptic error message.</p>
    <p>I wrote a helper function in <code>app.py</code> called <code>get_page_access_token</code> to handle this exchange. It was a headache to debug because Meta&#8217;s documentation doesn&#8217;t always match the actual behavior of their v19.0 endpoints. I had to deal with permissions like <code>pages_manage_posts</code> and <code>pages_read_engagement</code> just to get a simple photo upload working.</p>
    <pre><code>def get_page_access_token(user_token, page_id):
    url = f"https://graph.facebook.com/v19.0/{page_id}"
    params = {"fields": "access_token", "access_token": user_token}
    try:
        r = requests.get(url, params=params)
        r.raise_for_status()
        data = r.json()
        return data.get("access_token"), None
    except Exception as e:
        return None, str(e)</code></pre>
    <p>The app now saves these credentials in the <code>db.json</code> file. Once set up, I can pick any generated thumbnail from my library, write a caption, and hit &#8220;Post&#8221;. It even supports a &#8220;First Comment&#8221; feature, which is great for putting hashtags or links without cluttering the main post caption.</p>
</section>

<section class="codex-block">
    <h2>How to run this yourself</h2>
    <p>If you want to use this, you need Docker. I wouldn&#8217;t recommend trying to install the Playwright dependencies on your local machine unless you&#8217;re on a clean Linux distro, otherwise you will mess up your system libraries.</p>
    <ul>
        <li>Clone the repo to your server or local machine.</li>
        <li>Create a <code>db.json</code> file if it is not already there with the basic structure <code>{"thumbnails": [], "social_media_credentials": {}}</code>.</li>
        <li>Build the image: <code>docker build -t autofacebookpost .</code></li>
        <li>Run the container: <code>docker run -p 5002:5002 autofacebookpost</code></li>
        <li>Access the dashboard at <code>http://localhost:5002</code>.</li>
    </ul>
    <p>You will need to go to the Settings page to add your Facebook Access Token and Page ID if you want to use the posting features. For the templates, you can either use the ones I built or upload your own HTML files to the <code>thumbnail_templates</code> directory. Just make sure your HTML uses the variables the app expects, like <code>{{ main_title }}</code> and <code>{{ image_url }}</code>.</p>
</section>

<section class="codex-block">
    <h2>Who this is for</h2>
    <p>This is for the developer who is running a side project or a niche news site and cannot justify hiring a designer. It is for people who believe that if you have to do something more than twice, you should probably write a script for it. It is not a replacement for a real creative director, but it is a massive upgrade over default, boring social media posts.</p>
    <p>I built this for me. I needed a way to maintain a social presence for my projects without it becoming a second full-time job. It is grounded, it is a bit rough around the edges, and it solves exactly one problem: making and sharing graphics fast.</p>
</section>

<section class="codex-block">
    <h2>What I would change next</h2>
    <p>The biggest thing missing is a proper scheduling system. Right now, it posts immediately. I have some UI code in <code>facebook_post.html</code> for a scheduler, but the backend logic for a task runner like Celery or Redis isn&#8217;t there yet. I did not want to add that complexity in version one, but as I use it more, I realize that being able to batch-create and schedule a week&#8217;s worth of posts on Sunday night is the ultimate goal.</p>
    <p>I also want to add support for more platforms. Instagram is the obvious next step, but their API is even more restrictive about third-party uploads. I might have to look into using Playwright to actually automate the web-based upload flow if the API continues to be a bottleneck. Finally, I&#8217;d like to integrate a basic AI prompt that can generate the titles based on a URL, so I don&#8217;t even have to think of the headlines myself.</p>
</section>

<section class="codex-block">
    <a href="https://github.com/nasratulnayem/autofacebookpost" class="cx-btn cx-btn-primary">View GitHub Repo</a>
</section>
{% endraw %}
