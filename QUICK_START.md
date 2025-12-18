# Quick Start Guide

## 📋 What You Have

Your professional personal website includes:
- ✅ Explorer-style sidebar navigation
- ✅ Professional dark theme
- ✅ 5 main sections (Home, About, Services, Portfolio, Contact)
- ✅ Fully responsive design
- ✅ Interactive elements and animations
- ✅ Contact form with validation

## 🚀 Get Started in 3 Steps

### Step 1: Open & View
1. Open the `index.html` file in your web browser
2. Click through all sections using the sidebar
3. Test the contact form (it shows success message locally)

### Step 2: Customize Your Content
Edit `index.html` and replace these key sections:

**Logo/Brand Name** (Line 29):
```html
<h2 class="logo">CK Design</h2>  ← Change to your business name
```

**Your Email** (Search for "cameron@example.com" and replace)

**Your Phone** (Search for "+1234567890" and replace)

**About Text** (Lines 135-165):
- Replace the about paragraph with your story
- Update the bullet points with your value props

**Services** (Lines 178-220):
- Change service titles and descriptions
- You can change icons (see Font Awesome list below)

**Portfolio Projects** (Lines 235-310):
- Replace sample projects with your actual work
- Change project names, descriptions, and tags

### Step 3: Deploy (Choose One)

**Option A: GitHub Pages (Free)**
```bash
cd /Users/cameronkurdyla/IS\ 117/IS-117-final-personal-website
git add .
git commit -m "Add professional website"
git push origin main
```
Then go to GitHub → Repository Settings → Pages → Enable GitHub Pages

**Option B: Netlify (Free)**
1. Visit https://netlify.com
2. Click "Deploy manually"
3. Drag and drop your website folder
4. Done! Your site is live

**Option C: Traditional Web Hosting**
- Upload files via FTP to any web hosting provider
- Point your domain to the host

## 🎨 Common Customizations

### Change Colors
Edit lines 5-15 in `styles.css`:
```css
:root {
    --primary-color: #0366d6;      ← Main color (change hex code)
    --accent-color: #28a745;       ← Accent color
}
```

### Change Sidebar Width
In `styles.css`, line 88:
```css
.sidebar {
    width: 260px;  ← Change this number (in pixels)
}
```

### Add Your Photo
1. Save your photo as `profile.jpg` in the project folder
2. In `index.html`, find the About image section (around line 175)
3. Replace:
   ```html
   <i class="fas fa-user-circle"></i>
   ```
   With:
   ```html
   <img src="profile.jpg" alt="Cameron Kurdyla" style="width:300px; height:300px; border-radius:12px; border:2px solid var(--border-color); object-fit:cover;">
   ```

### Change Background Colors
Dark theme is in CSS variables. Options:
- Keep dark (professional, modern)
- Change `--dark-bg` to white and `--text-primary` to black for light theme

## 🔗 Font Awesome Icons

The website uses Font Awesome for icons. Here are some useful ones for blue collar businesses:

**Popular Icon Names:**
- `fa-hammer` - Construction
- `fa-wrench` - Repairs/HVAC
- `fa-paint-brush` - Painting
- `fa-bolt` - Electrical
- `fa-truck` - Hauling/Landscaping
- `fa-hard-hat` - General contracting
- `fa-tools` - General tools
- `fa-toolbox` - Toolbox
- `fa-cogs` - Mechanical
- `fa-building` - Commercial

Find more at: https://fontawesome.com/icons

## ✅ Before Deploying

- [ ] Update company name/logo
- [ ] Add real email address
- [ ] Add real phone number
- [ ] Update About section with your story
- [ ] Update Services with what you actually offer
- [ ] Add real portfolio projects
- [ ] Review all text for typos
- [ ] Add profile photo
- [ ] Test on mobile (shrink browser window)
- [ ] Test contact form
- [ ] Check all links work

## 📱 Testing on Mobile

1. Open website in browser
2. Press F12 (Developer Tools)
3. Click device icon (top left)
4. Select "iPhone" or "Android" 
5. Test navigation and buttons

## 🚨 If Something Breaks

**White page or no styling?**
- Check browser console (F12)
- Make sure `styles.css` is in the same folder as `index.html`
- Try refreshing with Ctrl+F5 (hard refresh)

**Icons not showing?**
- Check your internet connection
- Font Awesome loads from the internet

**Form not working?**
- Console shows you're logged in locally (success message displays)
- To actually send emails, use Formspree or similar service

**Navigation not working?**
- Check browser console for errors
- Make sure `script.js` is in the same folder
- Try a different browser

## 📊 File Checklist

You should have these 4 files:
- ✅ `index.html` - Main website content
- ✅ `styles.css` - Styling and layout
- ✅ `script.js` - Interactivity and form handling
- ✅ `README.md` - Documentation

All files should be in the same folder.

## 🎯 Content Tips for Blue Collar Businesses

**Do:**
- Use clear, simple language
- Show real before/after project photos
- Highlight reliability and trustworthiness
- Include quick contact options
- Mobile-friendly (jobsite friendly)
- Show local service areas
- Keep pages fast-loading

**Don't:**
- Use technical jargon
- Make contact hard to find
- Use distracting animations
- Auto-play videos/audio
- Force pop-ups
- Require lots of scrolling

## 📈 Analytics (Optional)

Add Google Analytics to track visitors:
1. Get tracking code from Google Analytics
2. Add to `<head>` section of `index.html`
3. View visitor stats in Google Analytics dashboard

## 💡 Pro Tips

1. **Update regularly** - Keep portfolio fresh with new projects
2. **Get reviews** - Add testimonials to Services section
3. **Mobile first** - Most customers visit from phones on job sites
4. **Fast loading** - Keep images small and optimized
5. **Clear CTA** - Make "Contact Us" button obvious
6. **Local SEO** - Mention your service area explicitly
7. **Phone integration** - Make phone number clickable on mobile

## 📞 Next Steps

1. Customize your website
2. Deploy it
3. Share the link with potential clients
4. Update portfolio as you complete projects
5. Collect testimonials from happy clients
6. Drive traffic through local networking

---

**Questions?** Check the full README.md for detailed documentation.

Good luck! 🚀
