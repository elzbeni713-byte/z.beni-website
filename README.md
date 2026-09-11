# Z. Beni — Writer Vlog Website

A simple static writer/vlog website made with:

- HTML
- CSS
- Vanilla JavaScript
- JPG images

There is no React, Node.js, npm, database, or build process.

## Files

```text
writer-vlog-site/
│
├── index.html
├── aboutme.html
├── blog.html
├── bookshelf.html
├── gallery.html
├── vault.html
├── blog-post-template.html
├── vault-post-template.html
├── styles.css
├── script.js
├── netlify.toml
├── _headers
├── README.md
│
└── assets/
    ├── hero.jpg
    ├── portrait.jpg
    ├── post-1.jpg
    ├── post-2.jpg
    ├── post-3.jpg
    ├── blog-1.jpg
    ├── blog-2.jpg
    ├── blog-3.jpg
    ├── work-1.jpg
    ├── work-2.jpg
    ├── work-3.jpg
    └── video-1.jpg ... video-4.jpg
```

## Adding your pictures

Open `assets/` and replace the JPG placeholders with your own pictures.

Keep the filenames the same.

For example:

```text
hero.jpg
portrait.jpg
blog-1.jpg
```

You can use pictures directly from your phone or computer.

## Creating a blog post

Copy:

```text
blog-post-template.html
```

Rename it, for example:

```text
my-first-post.html
```

Then edit the title, image and text.

To make the post appear on `blog.html`, add a link to it from the blog page.

## Creating a vault post

Copy:

```text
vault-post-template.html
```

Rename it, for example:

```text
my-first-vault-post.html
```

Then edit the title, image and text.

To make the post appear on `vault.html`, add a link to it from the vault page.

## Deploying on Netlify

This is already configured for Netlify.

### Option 1 — easiest: Netlify website

You can upload the entire `writer-vlog-site` folder to Netlify's deploy interface.

The important thing is that `index.html` is at the top level of the folder.

### Option 2 — GitHub + Netlify

Put the folder in a GitHub repository and connect that repository to Netlify.

Because this is a plain static site:

```text
Build command: leave empty
Publish directory: .
```

The included `netlify.toml` already contains this configuration.

### Option 3 — Netlify CLI

After installing the Netlify CLI and logging in:

```bash
cd writer-vlog-site
netlify deploy
```

For the first deployment, Netlify will ask for a site or let you create one.

When you are ready for the public production deployment:

```bash
netlify deploy --prod
```

## Important

The newsletter form is currently only a front-end demo. It does not send emails yet.

The social links, YouTube links and portfolio links currently use `#`. Replace them with your real URLs.

You can change all website text directly inside the HTML files.
