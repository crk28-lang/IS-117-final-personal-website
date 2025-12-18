# Deployment Guide

How to get your website live on the internet for free or cheap.

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (FREE) ⭐ Recommended

**Pros:**
- Completely free
- No ads
- Easy automatic updates
- Good for developers

**Steps:**

1. **Check if already set up:**
   - Your repo is already at: `crk28-lang/IS-117-final-personal-website`
   - Go to GitHub.com and login

2. **Enable GitHub Pages:**
   - Go to repository → Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Click Save
   - Wait 2-3 minutes

3. **Your site is live at:**
   ```
   https://crk28-lang.github.io/IS-117-final-personal-website/
   ```

4. **Update your site:**
   ```bash
   cd /Users/cameronkurdyla/IS\ 117/IS-117-final-personal-website
   git add .
   git commit -m "Update website with my info"
   git push origin main
   ```
   Changes appear in 1-2 minutes.

---

### Option 2: Netlify (FREE with easy custom domain)

**Pros:**
- Free hosting
- Easy deployment
- Free SSL certificate
- Cheap custom domain integration
- Great dashboard

**Steps:**

1. **Visit Netlify:**
   - Go to https://netlify.com
   - Click "Sign up" (use GitHub account)

2. **Deploy:**
   - Click "Add new site"
   - Choose "Deploy manually"
   - Drag and drop your project folder

3. **Your site is live at:**
   ```
   https://[random-name].netlify.app
   ```

4. **Add custom domain (optional):**
   - Site Settings → Domain Management
   - Add your custom domain
   - Follow DNS instructions

5. **Update your site:**
   - Upload new files or reconnect GitHub

---

### Option 3: Traditional Web Hosting ($5-15/month)

**Pros:**
- Custom domain included
- Email hosting available
- Full control
- Good for businesses

**Providers:**
- GoDaddy
- HostGator
- Bluehost
- SiteGround

**Steps:**

1. Buy hosting plan
2. Get domain name
3. Upload files via FTP (Filezilla, WinSCP)
4. Point domain to hosting
5. Done!

---

## 🌐 Getting a Custom Domain

**You'll want a domain like:**
- `cameronkurdyla.com`
- `ckdesignconsulting.com`
- `yourcompanyname.com`

**Where to buy:**
- Namecheap ($9-15/year) - Cheap and reliable
- Google Domains ($12/year) - Easy to manage
- GoDaddy ($1-15/year) - Varies by extension
- Bluehost (included with hosting) - All-in-one

**Cost:** Usually $10-20 per year

---

## 📝 Pre-Deployment Checklist

Before going live:

- [ ] All customizations complete
- [ ] No placeholder text remaining
- [ ] All links work locally
- [ ] Website tested on mobile
- [ ] Contact form setup (or email set)
- [ ] Social media links updated
- [ ] All images load
- [ ] Page loads quickly
- [ ] Typos checked
- [ ] SEO title/description reviewed

---

## 🔐 Make Your Site Secure (HTTPS)

**Important:** Your website should use HTTPS (not HTTP)

- GitHub Pages: ✅ Automatic
- Netlify: ✅ Automatic  
- Traditional hosting: Get free SSL certificate (Let's Encrypt)

**Your address should look like:**
```
https://yoursite.com  ✅ Good (has lock icon)
http://yoursite.com   ❌ Bad (not secure)
```

---

## 📊 Analytics Setup (Track Visitors)

### Google Analytics (FREE)

1. Go to https://analytics.google.com
2. Sign in with Google account
3. Create new property for your website
4. Get tracking code
5. Add to your `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your tracking ID.

### What you'll see:
- How many visitors
- Where they're from
- What pages they visit
- How long they stay
- Contact form clicks

---

## 📧 Email Setup for Contact Form

### Option 1: Formspree (FREE)

1. Go to https://formspree.io
2. Create account
3. Create new form
4. Update form action in index.html:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace with your form ID. Emails sent to your email automatically.

### Option 2: Basin (FREE)

1. Go to https://basin.io
2. Create form
3. Update form action:

```html
<form action="https://usebasin.com/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom Backend (Advanced)

If you know Node.js/Python, set up your own email service.

---

## 🚨 Troubleshooting Deployment

**My site shows "Page not found"**
- Make sure files are in the right folder
- Check GitHub Pages is enabled
- Wait 5 minutes for changes to appear
- Clear browser cache (Ctrl+Shift+Delete)

**Domain doesn't work**
- DNS changes take 24-48 hours
- Check domain DNS settings
- Verify domain points to hosting provider

**Contact form doesn't work**
- Check email address is correct
- Test with Formspree or Basin
- Check spam folder for emails
- Review browser console for errors

**Site looks different online than locally**
- CSS might not be loading
- Check file paths are correct
- Clear browser cache
- Hard refresh (Ctrl+F5)

**My changes aren't showing**
- GitHub Pages caches for 5-10 minutes
- Netlify caches for 1-2 minutes
- Hard refresh (Ctrl+F5) your browser
- Check files were actually pushed to GitHub

---

## 🆚 Comparing Deployment Options

| Feature | GitHub Pages | Netlify | Traditional |
|---------|-------------|---------|-------------|
| **Cost** | FREE | FREE | $5-15/mo |
| **Setup Time** | 5 min | 5 min | 30 min |
| **Custom Domain** | $10/yr (separate) | $10/yr (separate) | Usually included |
| **Performance** | Excellent | Excellent | Good-Excellent |
| **Ease of Use** | Git push | Drag & drop | FTP upload |
| **Scalability** | Excellent | Excellent | Good |
| **Support** | Community | Email support | Phone support |
| **Email Hosting** | No | No | Often included |

---

## 📱 Testing After Deployment

After your site goes live:

1. **Desktop browsers:**
   - Chrome ✅
   - Firefox ✅
   - Safari ✅
   - Edge ✅

2. **Mobile browsers:**
   - iOS Safari ✅
   - Chrome Mobile ✅
   - Samsung Internet ✅

3. **Test functionality:**
   - Navigation works
   - Links work
   - Contact form submits
   - Images load
   - Animations smooth
   - Page loads fast

4. **Performance test:**
   - Visit https://pagespeed.web.dev
   - Enter your URL
   - Check score (aim for 85+)

---

## 🔄 Keeping Your Site Updated

### Update your website:

1. **Make changes locally** in your files
2. **Test in browser** (F12 Developer Tools)
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Updated portfolio with new project"
   git push origin main
   ```
4. **Changes appear** in 2-5 minutes

### Regular maintenance:
- Update portfolio when you finish projects
- Update services if offerings change
- Fix any broken links monthly
- Update testimonials regularly
- Keep contact info current

---

## 💰 Cost Summary

**Option 1: GitHub Pages (Complete Free)**
- Hosting: FREE
- Domain: $10-20/year (optional)
- Email: FREE (Gmail, Yahoo, Outlook)
- **Total: FREE-$20/year**

**Option 2: Netlify (Mostly Free)**
- Hosting: FREE
- Domain: $10-20/year (optional)
- Email: FREE
- **Total: FREE-$20/year**

**Option 3: Traditional Hosting**
- Hosting: $5-15/month
- Domain: Often included
- Email: Often included
- SSL: FREE (Let's Encrypt)
- **Total: $60-180/year**

---

## 🎯 Next Steps After Deployment

1. **Share your website:**
   - Email link to prospects
   - Post on social media
   - Add to business cards
   - Include in emails

2. **Promote it:**
   - Google My Business
   - Local directories
   - Social media
   - Business listings

3. **Monitor performance:**
   - Check analytics weekly
   - Note which pages get visits
   - Track contact form submissions
   - Adjust based on data

4. **Keep it updated:**
   - Add new portfolio projects
   - Update testimonials
   - Keep contact info current
   - Fix any issues quickly

---

## 📞 Getting Help

**GitHub Pages Issues:**
- Check GitHub Pages documentation
- Search GitHub Issues
- Ask on Stack Overflow

**Netlify Issues:**
- Visit Netlify Help docs
- Contact Netlify support
- Check Netlify Community

**Domain Issues:**
- Contact domain registrar support
- Check domain DNS settings
- Wait 24-48 hours for changes

**General Web Questions:**
- Visit MDN Web Docs
- Check Stack Overflow
- Search Google

---

**Congratulations on launching your website! 🎉**

Now focus on:
1. Getting actual projects for portfolio
2. Reaching out to potential clients
3. Building your reputation
4. Growing your business

Good luck! 🚀
