---
title: "Building a simple tool to move content to WordPress"
date: "2026-02-04 18:03:25 +0000"
permalink: "/blog/wordpress-content-importer-case-study/"
excerpt: "Why I started this project I was helping a friend move a bunch of articles from an old site to a new WordPress setup. If you have ever..."
layout: post
author_profile: false
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/ChatGPT-Image-Feb-5-2026-12_01_38-AM.png"
  image: "work/ChatGPT-Image-Feb-5-2026-12_01_38-AM.png"
categories:
  - "Python Automations"
---

{% raw %}
<section class="codex-block">
  <h2>Why I started this project</h2>
  <p>I was helping a friend move a bunch of articles from an old site to a new WordPress setup. If you have ever done this, you know it is a total pain. You either spend hours copying and pasting or you install a shady plugin that might break your site or charge you fifty dollars for a basic feature. I am twenty one and do not have that kind of money to throw away on simple tasks. I figured I could build a cleaner version myself. It is called wordpress-content-importer, or WPCup for short.</p>

  <p>The goal was simple: make a tool where you put in a URL and get back a WordPress-ready XML file. I wanted it to be fast, typed, and easy to look at. I did not want any extra bloat. Just a direct path from point A to point B. This project is my attempt at solving that without the corporate overhead or the clunky interfaces of the early 2000s that most WordPress tools still use.</p>
</section>

<section class="codex-block">
  <h2>The technical stack I chose</h2>
  <p>I went with React and TypeScript. I know some people say it is overkill for a small tool, but I hate debugging runtime errors that could have been caught while I was typing. TypeScript is like a safety net when I am tired and coding at 2 AM. For the build tool, I used Vite. It is so much faster than the old stuff. I do not have the patience to wait ten seconds for a dev server to start up anymore. I want it to be instant.</p>

  <p>For the styling, I used Tailwind CSS. I am not a designer by trade, so being able to just throw classes like &#8220;flex items-center justify-center&#8221; onto a div is a life saver. It keeps the CSS file small and prevents the whole &#8220;global style collision&#8221; nightmare. I also added Lucide React for icons because they are lightweight and look sharp on high-resolution screens.</p>

  <div class="codex-codebox">
    <div class="codex-codebox-header">
      <div class="codex-codebox-left">
        <div class="codex-codebox-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="codex-codebox-title">JSON · package dependencies</div>
      </div>


    </div>

    <pre><code>// From package.json
"dependencies": {
  "@supabase/supabase-js": "^2.57.4",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}</code></pre>
  </div>

  <p>You might notice Supabase in the dependencies. Right now, I am using the frontend for the core logic, but I kept Supabase there because I plan to add a database later to save import history. For now, it stays as a placeholder while I focus on the main UI and the XML generation logic.</p>
</section>

<section class="codex-block">
  <h2>How the code actually works</h2>
  <p>The core of the app lives in App.tsx. I wanted to simulate the feeling of a real import process so I could test the user experience before I fully hooked up a backend scraper. I built a state-driven UI that tracks the progress of the &#8220;import&#8221; and gives the user feedback at every step. This matters because if a user clicks a button and nothing happens for ten seconds, they think it is broken and leave.</p>

  <p>Here is how the main import function looks right now:</p>

  <div class="codex-codebox">
    <div class="codex-codebox-header">
      <div class="codex-codebox-left">
        <div class="codex-codebox-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="codex-codebox-title">TypeScript · import progress handler</div>
      </div>


    </div>

    <pre><code>const handleImport = async () =&gt; {
  if (!url.trim()) return;

  setIsImporting(true);
  setIsComplete(false);
  setProgress(0);

  const steps = [
    { progress: 15, text: 'Connecting to website...' },
    { progress: 35, text: 'Analyzing content structure...' },
    { progress: 55, text: 'Extracting posts and pages...' },
    { progress: 75, text: 'Processing media files...' },
    { progress: 90, text: 'Generating WordPress XML...' },
    { progress: 100, text: 'Import complete!' }
  ];

  for (const step of steps) {
    await new Promise(resolve =&gt; setTimeout(resolve, 800));
    setProgress(step.progress);
    setProgressText(step.text);
  }

  setIsImporting(false);
  setIsComplete(true);
};</code></pre>
  </div>

  <p>It uses an array of steps to update the progress bar. This gives the user a sense of what is happening under the hood. Even though the current version is a simulation, it sets the stage for the real asynchronous calls I will be making to a scraping service later on. I used a simple loop with a timeout to handle the timing.</p>
</section>

<section class="codex-block">
  <h2>Handling the WordPress XML format</h2>
  <p>WordPress expects a very specific XML structure. If you miss one tag or have a weird character in there, the whole import fails. For the initial prototype, I built a function that generates a basic XML header. It is not a full export yet, but it proves the concept of generating a file directly in the browser using a Blob. This saves money on server costs because I am not processing files on a backend yet. Everything happens on the client side.</p>

  <div class="codex-codebox">
    <div class="codex-codebox-header">
      <div class="codex-codebox-left">
        <div class="codex-codebox-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="codex-codebox-title">TypeScript · XML download handler</div>
      </div>


    </div>

    <pre><code>const handleDownload = () =&gt; {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent('&lt;?xml version="1.0" encoding="UTF-8"?&gt;\n&lt;!-- WordPress Export for ' + url + ' --&gt;'));
  element.setAttribute('download', 'wordpress-import.xml');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};</code></pre>
  </div>

  <p>This approach has its limits. Browsers can be weird about large files. But for a few dozen blog posts, this is the most efficient way to do it. No login required, no data leaving the user&#8217;s computer until they decide to download it. It is privacy-first by accident, but I like it that way.</p>
</section>

<section class="codex-block">
  <h2>Real struggles and tradeoffs</h2>
  <p>The biggest struggle was deciding where to stop. I wanted to build a full web scraper that could bypass things like Cloudflare and handle JavaScript-rendered sites. But that takes a lot of time and a lot of money for proxy servers. As a solo dev, I had to be realistic. I decided to focus on the UI and the local file generation first. I chose to build a &#8220;shell&#8221; that looks and feels right, knowing I can plug in the heavy-duty scraping logic later.</p>

  <p>Another issue was the CSS. I spent way too much time fiddling with the progress bar colors. I wanted a dark mode look that didn&#8217;t feel depressing. I ended up with a deep slate background and blue accents. It is clean and doesn&#8217;t distract from the main task. I also had to make sure it worked on my phone because I find myself checking my projects on the bus all the time. I added specific media queries in the index.css file to shrink the headings and padding on smaller screens.</p>

  <p>I also struggled with the TypeScript config. Getting the module resolution right for Vite can sometimes be a headache. I had to look through the tsconfig.json and tsconfig.app.json to make sure everything was playing nice with the bundler. It is the kind of work nobody sees but it makes the development experience so much better.</p>
</section>

<section class="codex-block">
  <h2>The design decisions</h2>
  <p>I chose the Poppins font because it looks modern and is very readable. I imported it from Google Fonts in the index.html. I also used a wrapper class for the app container that uses flexbox to keep everything perfectly centered. It feels like a premium tool even though it is just a side project. I also made sure to include smooth transitions for the buttons and inputs. It is a small detail but it makes the app feel less &#8220;stiff.&#8221;</p>

  <p>I decided not to use a heavy UI library like Material UI or Mantine. They are great but they add so much extra weight. I wanted this to load fast. Tailwind gives me exactly what I need without the overhead. The whole project is very light as a result.</p>
</section>

<section class="codex-block">
  <h2>Who this is for</h2>
  <ul>
    <li>Developers who need a quick way to generate a WordPress XML skeleton.</li>
    <li>People moving small sites who do not want to use heavy plugins.</li>
    <li>Anyone interested in how to build a progress-based UI in React.</li>
    <li>Me, when I inevitably have to move another site in six months.</li>
  </ul>
</section>

<section class="codex-block">
  <h2>How to run it locally</h2>
  <p>If you want to play with the code, it is pretty standard. You will need Node.js installed. Follow these steps:</p>

  <ul>
    <li>Clone the repo from GitHub.</li>
    <li>Run <code>npm install</code> to get all the packages.</li>
    <li>Run <code>npm run dev</code> to start the Vite server.</li>
    <li>Open your browser to the local address provided.</li>
  </ul>

  <p>You can then edit App.tsx and see the changes instantly. The linting is handled by ESLint, so it will yell at you if you do something weird with the types.</p>
</section>

<section class="codex-block">
  <h2>What I would change next</h2>
  <p>If I had more time and a budget for a server, I would build a Node.js backend using Puppeteer. That would allow the tool to actually visit the URL the user provides, find the blog posts, and extract the content automatically. Right now, it is a manual-input simulation. Real scraping is hard because every website has a different structure. I would probably need to use some basic AI or a set of rules to find the title and the body content of a post.</p>

  <p>I would also improve the XML export to include categories, tags, and featured images. Right now it is just a header. A real WordPress import file is hundreds of lines of XML. Mapping the scraped data to those specific fields is the next big hurdle. But I am happy with the foundation I have here. It is a solid starting point for a tool that I actually need.</p>

  <p>I also want to add a way to preview the content before downloading the XML. A simple table or list showing what was found would give users more confidence. It is all about building trust that the tool is doing the right thing. For now, the clean UI and the progress feedback are a good start toward that goal.</p>
</section>

<section class="codex-block">
  <a href="https://github.com/nasratulnayem/wordpress-content-importer" class="cx-btn cx-btn-primary" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
</section>
{% endraw %}
