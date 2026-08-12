#!/usr/bin/env node

/*
 * Converts a WordPress REST API post list into Jekyll posts.
 *
 * Usage:
 *   curl .../wp-json/wp/v2/posts?per_page=100\&_embed | node scripts/import-wordpress-posts.js
 *
 * The importer intentionally keeps published HTML and media URLs but removes
 * WordPress-only style and script blocks. AcademicPages supplies the visual
 * layer here, and importing those blocks would override it or leave broken
 * plugin interactions behind.
 */

const fs = require("fs");
const targetDirectory = process.argv[2] || "_posts";
const source = fs.readFileSync(0, "utf8");
const posts = JSON.parse(source);

if (!Array.isArray(posts)) {
  throw new Error("Expected a JSON array of WordPress posts.");
}

const decodeEntities = (value) => value
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
  .replace(/&#([0-9]+);/g, (_, decimal) => String.fromCodePoint(parseInt(decimal, 10)))
  .replace(/&nbsp;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/&quot;/gi, '"')
  .replace(/&apos;|&#39;/gi, "'")
  .replace(/&lt;/gi, "<")
  .replace(/&gt;/gi, ">");

const stripTags = (value) => decodeEntities(value
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<\/(p|h[1-6]|li|section|div|figure|figcaption)>/gi, " ")
  .replace(/<br\s*\/?>(\r?\n)?/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim());

const cardExcerpt = (value, limit = 135) => {
  const text = stripTags(value);
  if (text.length <= limit) return text;

  const shortened = text.slice(0, limit + 1).replace(/\s+\S*$/, "").trim();
  return `${shortened}...`;
};

const cleanHtml = (value) => value
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "")
  .replace(/\sdata-[\w-]+=("[^"]*"|'[^']*')/gi, "")
  .replace(/\sdecoding=("[^"]*"|'[^']*')/gi, "")
  .replace(/\sloading=("[^"]*"|'[^']*')/gi, "")
  .replace(/<button\b[^>]*\bdata-codex-copy\b[^>]*><\/button>/gi, "")
  .replace(/<div\b[^>]*\binavii-social-feed\b[^>]*>\s*<\/div>/gi, "")
  .replace(/<p class="wp-block-paragraph"><\/p>/gi, "")
  .replace(/[ \t]+$/gm, "")
  .trim();

const featuredMedia = (post) => {
  const embedded = post._embedded && post._embedded["wp:featuredmedia"];
  return embedded && embedded[0] && embedded[0].source_url ? embedded[0].source_url : "";
};

const localImagePath = (url) => {
  if (!url) return "";
  return `work/${url.split("/").pop()}`;
};

const categoriesFor = (post) => {
  const embedded = post._embedded && post._embedded["wp:term"];
  if (!embedded) return [];
  return embedded.flat()
    .filter((term) => term && term.taxonomy === "category")
    .map((term) => term.name)
    .filter(Boolean);
};

const asYamlString = (value) => JSON.stringify(value);

fs.mkdirSync(targetDirectory, { recursive: true });

for (const post of posts) {
  if (post.status !== "publish") continue;

  const title = decodeEntities((post.title && post.title.rendered) || post.slug);
  const content = cleanHtml((post.content && post.content.rendered) || "");
  const excerpt = cardExcerpt(content);
  const date = (post.date_gmt || post.date || "").replace("T", " ");
  const normalizedDate = date ? `${date} +0000` : "2026-01-01 00:00:00 +0000";
  const image = localImagePath(featuredMedia(post));
  const categories = categoriesFor(post);
  const frontMatter = [
    "---",
    `title: ${asYamlString(title)}`,
    `date: ${asYamlString(normalizedDate)}`,
    `permalink: ${asYamlString(`/blog/${post.slug}/`)}`,
    `excerpt: ${asYamlString(excerpt)}`,
    "layout: post",
    "author_profile: false",
    "read_time: true",
    "comments: false",
    "share: false",
    "related: false",
    "header:",
    `  teaser: ${asYamlString(image)}`,
    `  image: ${asYamlString(image)}`,
  ];

  if (categories.length) {
    frontMatter.push("categories:");
    for (const category of categories) frontMatter.push(`  - ${asYamlString(category)}`);
  }

  frontMatter.push("---", "", "{% raw %}", content, "{% endraw %}", "");
  const filename = `${normalizedDate.slice(0, 10)}-${post.slug}.md`;
  fs.writeFileSync(`${targetDirectory}/${filename}`, frontMatter.join("\n"));
  console.log(`Imported ${filename}`);
}
