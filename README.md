# ST. PVTC Website — Deployment Guide
# ======================================

## BEFORE YOU DEPLOY — CHECKLIST

### 1. Add Images
See images/IMAGES_README.txt for the full list of image filenames.
Add all images to the /images/ folder.

### 2. Add Your EmailJS Keys
Search for "YOUR_EMAILJS_PUBLIC_KEY", "YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID_APPLY", and "YOUR_TEMPLATE_ID_CONTACT"
in these files and replace with your real EmailJS values:

  pages/apply.html
  pages/contact.html

### 3. Add Social Media Links
Search for these placeholders in js/global.js and replace:
  FACEBOOK_URL
  TWITTER_URL
  INSTAGRAM_URL
  WHATSAPP_URL
  YOUTUBE_URL

### 4. Update Your Domain
Replace all instances of "https://stpvtc.ac.ke" with your
actual domain in:
  index.html (og:url, canonical, ld+json)
  pages/*.html (canonical tags)
  sitemap.xml
  robots.txt

---

## DEPLOY TO GITHUB + NETLIFY

### Step 1 — Create a GitHub Repository
1. Go to github.com and log in
2. Click "New repository"
3. Name it: stpvtc-website
4. Set to Public
5. Click "Create repository"

### Step 2 — Push the Website to GitHub
Open your terminal / Git Bash in the project folder and run:

  git init
  git add .
  git commit -m "Initial commit: ST. PVTC website"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/stpvtc-website.git
  git push -u origin main

### Step 3 — Connect to Netlify
1. Go to netlify.com and log in / sign up
2. Click "Add new site" > "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your stpvtc-website repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: . (just a dot — root folder)
6. Click "Deploy site"

### Step 4 — Custom Domain (Optional)
1. In Netlify: Site settings > Domain management > Add custom domain
2. Enter your domain (e.g. stpvtc.ac.ke)
3. Update your domain DNS settings to point to Netlify
   (Netlify will give you the nameservers)

### Step 5 — Future Updates
Whenever you make changes:

  git add .
  git commit -m "Update: describe your change"
  git push

Netlify will automatically redeploy within 1-2 minutes.

---

## PROJECT FILE STRUCTURE

stpvtc/
├── index.html              ← Homepage
├── robots.txt              ← SEO
├── sitemap.xml             ← SEO
├── netlify.toml            ← Netlify config (404 redirects)
├── css/
│   ├── global.css          ← Shared styles (nav, footer, components)
│   └── home.css            ← Homepage-specific styles
├── js/
│   └── global.js           ← Nav/footer injection + all shared JS
├── images/
│   ├── badge.png           ← College logo (already added)
│   └── IMAGES_README.txt   ← Image guide
└── pages/
    ├── courses.html        ← All courses overview
    ├── course-detail.html  ← Dynamic detail (uses ?course= param)
    ├── apply.html          ← Multi-step application form (EmailJS)
    ├── contact.html        ← Contact form (EmailJS) + map
    ├── about.html          ← About the college
    ├── student-work.html   ← Student project gallery
    ├── faculty.html        ← Staff / instructors
    ├── faq.html            ← FAQ accordion
    ├── blog.html           ← Blog index
    └── 404.html            ← Custom 404 page
