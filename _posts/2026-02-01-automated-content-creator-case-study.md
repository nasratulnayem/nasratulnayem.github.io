---
title: "Video Automation Engine That Posts Instagram Reels While You Sleep"
date: "2026-02-01 06:14:45 +0000"
permalink: "/blog/automated-content-creator-case-study/"
excerpt: "I built this Python automation engine because creating short videos every day manually was taking too much time. The process was always the same: choose a topic, write a script, create visuals, generate voiceover, add captions, render the video, upload it, and then save the publishing details somewh"
author_profile: true
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/create-and-post-reels-while-you-sleep.webp"
  image: "work/create-and-post-reels-while-you-sleep.webp"
categories:
  - "Python Automations"
---

{% raw %}
<section class="codex-block">
  <p>I built this Python automation engine because creating short videos every day manually was taking too much time. The process was always the same: choose a topic, write a script, create visuals, generate voiceover, add captions, render the video, upload it, and then save the publishing details somewhere.</p>

  <p>Now the system does that workflow for me. It reads topics from Google Sheets, generates the short video, creates captions, uploads it to Instagram Reels and YouTube Shorts, then saves the result back into the sheet.</p>

  <p>The best part is the schedule logic. I set the publishing schedule one time, and after that the engine follows it automatically. If I set it to post once a day, it runs once a day. If I set multiple publishing slots, it checks the sheet before each slot, picks the next pending topic, creates the video, publishes it, and logs the result.</p>

  <p>You can view the project here: <a href="https://github.com/nasratulnayem/VideoAutomation" target="_blank" rel="noopener noreferrer">VideoAutomation on GitHub</a>.</p>
</section>

<section class="codex-block">
  <h2>What this Python automation engine does</h2>
  <p>This is not just a script generator or a video renderer. It is a full short-form content pipeline built to move from topic to published video with as little manual work as possible.</p>

  <div class="cx-grid">
    <div class="cx-stat">
      <strong>01</strong>
      <span>Reads the next pending topic from a live Google Sheet.</span>
    </div>
    <div class="cx-stat">
      <strong>02</strong>
      <span>Generates script, voiceover, visuals, captions, and final MP4.</span>
    </div>
    <div class="cx-stat">
      <strong>03</strong>
      <span>Publishes to Instagram Reels and YouTube Shorts on schedule.</span>
    </div>
  </div>

  <p>The system uses Python as the main automation layer, GitHub Actions for scheduled runs, Google Sheets as the topic queue, and publishing APIs to push the final video online.</p>
</section>

<section class="codex-block">
  <h2>The schedule only needs to be set once</h2>
  <p>The schedule is handled through GitHub Actions cron. That means I do not need to open the dashboard every morning or keep my computer running in the background.</p>

  <p>Once the schedule is configured, the workflow runs according to that timing. Each scheduled run wakes up the pipeline, checks the Google Sheet, finds the next topic marked as pending, processes one video, uploads it, then updates the sheet with the result.</p>

  <p>This is what makes the system feel different from a normal video tool. A normal tool waits for you to click a button. This engine follows the schedule I already set and keeps publishing based on that rule.</p>
</section>

<section class="codex-block">
  <h2>Google Sheets controls the daily topics</h2>
  <p>The sheet is where the whole workflow starts. I add video topics there, set the status as pending, and the automation picks the next item when the scheduled run starts.</p>

  <div class="cx-proof-img">
    <img src="https://codex.nayem.dev/wp-content/uploads/2026/05/Screenshot-2026-05-25-105244.webp" alt="Google Sheet showing daily topics and publishing results for Python Instagram Reels automation">
  </div>
  <p class="cx-caption">This sheet shows how the automation reads daily topics and saves publishing details after each scheduled run.</p>

  <p>This makes the system easy to control. I do not need to open the codebase every day. I only need to update the sheet, and the engine knows what to process next.</p>
</section>

<section class="codex-block">
  <h2>It posts Instagram Reels automatically</h2>
  <p>The Instagram side is already part of the workflow. The automation creates the Reel, uploads it, and logs the result. That means the video does not just sit inside a folder waiting for me to upload it manually.</p>

  

  <p>The feed above shows the daily Instagram Reels output created by this automation while I am offline or sleeping.</p>
</section>

<section class="codex-block">
  <h2>How the video pipeline works</h2>
  <p>The pipeline starts with a topic from Google Sheets. Then the system generates a script, creates scene visuals, produces the voiceover, trims silence, adds captions, applies background music, renders the final MP4, and uploads the video.</p>

  <p>For script generation, the engine can use Gemini. For visuals, it can use Imagen through Vertex AI. For voice, it supports providers like ElevenLabs, Murf.ai, and Cartesia Sonic. For captions, it uses word-level timing so the text feels synced instead of randomly placed.</p>

  <p>The system also supports scheduled daily publishing through GitHub Actions. That is what makes it useful. My computer does not need to stay on for the workflow to run.</p>
</section>

<section class="codex-block">
  <h2>Why this saves real time</h2>
  <p>Short-form content looks easy until you try to publish every day. The boring work is not one big task. It is ten small tasks repeated over and over.</p>

  <p>This automation removes most of that repetitive work. I still control the ideas, topics, and direction, but I do not have to manually build and upload every single Reel.</p>

  <p>That is the result I wanted: wake up, check the sheet, and see that the video was already created, posted, and logged.</p>
</section>

<section class="codex-block">
  <h2>Same video examples from the pipeline</h2>
  <p>These examples show the kind of short-form videos the engine is designed to produce. The focus is tight pacing, readable captions, voice flow, and simple vertical video output.</p>

  <div class="cx-wrap" id="cxPlaylist2">
    <div class="cx-shell">
      <div class="cx-player">
        <div class="cx-player-frame">
          <iframe id="cxMainPlayer2" src="https://www.youtube-nocookie.com/embed/PEEUrCk7tC4" title="They Lied About Power | The Unbreakable Path of Silence" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
        </div>
      </div>

      <div class="cx-playlist-panel">
        <div class="cx-panel-head">
          <div>Playlist</div>
          <div class="cx-pill">6 videos</div>
        </div>

        <div class="cx-list" id="cxList2">
          <div class="cx-item" role="button" tabindex="0" aria-current="true">
            <div class="cx-thumb">
              <img src="https://i.ytimg.com/vi/PEEUrCk7tC4/hqdefault.jpg" alt="They Lied About Power thumbnail">
            </div>
            <div>
              <p class="cx-item-title">They Lied About Power | The Unbreakable Path of Silence</p>
              <p class="cx-item-sub">Tight pacing. No wasted seconds.</p>
            </div>
          </div>

          <div class="cx-item" role="button" tabindex="0" aria-current="false">
            <div class="cx-thumb">
              <img src="https://i.ytimg.com/vi/KHgiz39tGAA/hqdefault.jpg" alt="The 3 Unseen Pillars thumbnail">
            </div>
            <div>
              <p class="cx-item-title">The 3 Unseen Pillars of Mental Dominance</p>
              <p class="cx-item-sub">Hook clarity test.</p>
            </div>
          </div>

          <div class="cx-item" role="button" tabindex="0" aria-current="false">
            <div class="cx-thumb">
              <img src="https://i.ytimg.com/vi/TfCB3bqjb-k/hqdefault.jpg" alt="How Manipulators Control Your Mind thumbnail">
            </div>
            <div>
              <p class="cx-item-title">How Manipulators Control Your Mind</p>
              <p class="cx-item-sub">Caption rhythm and timing.</p>
            </div>
          </div>

          <div class="cx-item" role="button" tabindex="0" aria-current="false">
            <div class="cx-thumb">
              <img src="https://i.ytimg.com/vi/U_zo7XQueoE/hqdefault.jpg" alt="The Silent Prison of Desire thumbnail">
            </div>
            <div>
              <p class="cx-item-title">The Silent Prison of Desire</p>
              <p class="cx-item-sub">Voice cadence and flow.</p>
            </div>
          </div>

          <div class="cx-item" role="button" tabindex="0" aria-current="false">
            <div class="cx-thumb">
              <img src="https://i.ytimg.com/vi/DWPxr1V24go/hqdefault.jpg" alt="When Everything Goes Wrong thumbnail">
            </div>
            <div>
              <p class="cx-item-title">WHEN EVERYTHING GOES WRONG: The Art of Rising in Silence</p>
              <p class="cx-item-sub">Scene transitions without being cheesy.</p>
            </div>
          </div>

          <div class="cx-item" role="button" tabindex="0" aria-current="false">
            <div class="cx-thumb">
              <img src="https://i.ytimg.com/vi/bMFMX5VqoLg/hqdefault.jpg" alt="Your Suffering Is Meaningless thumbnail">
            </div>
            <div>
              <p class="cx-item-title">Your Suffering Is Meaningless. This Is Your Only Path to Power.</p>
              <p class="cx-item-sub">Punchy delivery test.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</section>

<section class="codex-block">
  <h2>Who this is for</h2>
  <p>This Python automation engine is for creators, developers, and channel builders who want to publish short-form videos consistently without doing the same manual editing and uploading work every day.</p>

  <p>It is not a no-code tool. You still need API keys, setup, and accounts connected. But once the workflow is ready, it can run on schedule and create real content while you are offline.</p>
</section>

<section class="codex-block">
  <h2>Final result</h2>
  <p>The final result is simple. I add topics to Google Sheets, set the schedule once, and the automation handles the rest according to that schedule. It creates videos, posts them as Instagram Reels and YouTube Shorts, then saves the run details back into the sheet.</p>

  <p>That is what makes this useful. It is not just a generator. It is a scheduled publishing system that keeps working after I close the laptop.</p>

  <p><a href="https://github.com/nasratulnayem/VideoAutomation" class="cx-btn cx-btn-primary" target="_blank" rel="noopener noreferrer">View GitHub Repo</a></p>
</section>
{% endraw %}
