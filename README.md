# Cameron Kurdyla | Web Design Consulting Portfolio

A professional, modern personal website for a web design consulting company specializing in websites for blue collar businesses. Built with a clean explorer/sidebar architecture for seamless navigation.

## 🎨 Design Philosophy

This website follows the **Explorer Archetype** with a professional dark theme inspired by GitHub's design system. It features:

- **Sidebar Navigation**: Fixed explorer-style sidebar for easy navigation
- **Dark Theme**: Modern dark UI that reduces eye strain
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Professional Aesthetic**: Clean, minimal design that showcases expertise
- **Accessibility**: WCAG compliant with keyboard navigation and focus indicators

## 📁 Project Structure

```
/
├── index.html          # Main HTML file with all page sections
├── styles.css          # Complete CSS styling and responsive design
├── script.js           # JavaScript for interactivity and form handling
└── README.md           # This file
```

## 🚀 Features

### Navigation
- **Fixed Sidebar**: Easy access to all sections from anywhere
- **Active State Tracking**: Automatically highlights current section
- **Smooth Scrolling**: Elegant transitions between sections

### Sections
1. **Home** - Eye-catching hero section with CTAs
2. **About** - Company background and value proposition
3. **Services** - 6 key services with icons and descriptions
4. **Portfolio** - Showcase of sample projects (6 examples)
5. **Contact** - Contact form and business information

### Interactive Elements
- Hover effects on cards and buttons
- Form validation and feedback
- Success/error notifications
- Ripple effect on buttons
- Smooth animations and transitions
- Keyboard navigation support

## 🛠️ Customization Guide

### 1. **Personal Information**

Edit `index.html` to replace placeholder information:

```html
<!-- Logo/Company Name -->
<h2 class="logo">CK Design</h2>  <!-- Change to your company name -->

<!-- Contact Information -->
<a href="mailto:cameron@example.com">cameron@example.com</a>
<a href="tel:+1234567890">(123) 456-7890</a>

<!-- Social Links -->
<a href="#">LinkedIn</a>
<a href="#">GitHub</a>
```

### 2. **Customize Colors**

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0366d6;      /* Main brand color */
    --secondary-color: #1f6feb;    /* Hover/secondary color */
    --accent-color: #28a745;       /* Accent/success color */
    --dark-bg: #0d1117;            /* Main background */
    --sidebar-bg: #161b22;         /* Sidebar background */
}
```

### 3. **Update Services**

In the Services section of `index.html`, modify the service cards:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-globe"></i>  <!-- Change icon -->
    </div>
    <h3>Website Design & Development</h3>
    <p>Custom description here...</p>
</div>
```

**Available Icons**: Uses Font Awesome 6.4.0. Browse icons at [fontawesome.com](https://fontawesome.com/icons)

### 4. **Portfolio Examples**

Replace sample portfolio items with your actual work:

```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <i class="fas fa-hammer"></i>
    </div>
    <div class="portfolio-info">
        <h3>Your Project Title</h3>
        <p>Project description...</p>
        <div class="portfolio-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
```

### 5. **Form Handling**

The contact form includes validation. To connect it to a backend service:

1. **Using FormSubmit (Free)**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using Formspree**:
   - Visit [formspree.io](https://formspree.io)
   - Create an account and new form
   - Replace form action

3. **Custom Backend**:
   - Modify `handleFormSubmit()` in `script.js` to send data to your server

### 6. **About Section Image**

Currently uses an icon placeholder. To add a real photo:

```html
<div class="about-image">
    <img src="your-photo.jpg" alt="Your Name" class="profile-photo">
</div>
```

Then add CSS:
```css
.profile-photo {
    width: 300px;
    height: 300px;
    border-radius: 12px;
    border: 2px solid var(--border-color);
    object-fit: cover;
}
```

## 🎯 Blue Collar Business Focus

This website is specifically designed to appeal to blue collar businesses with:

- **Clear, Direct Messaging**: No jargon, easy to understand value proposition
- **Work Showcase**: Portfolio section to display before/after projects
- **Trust Building**: About section emphasizing reliability and affordability
- **Local Focus**: Built-in support for local SEO messaging
- **Mobile First**: Customers can reach you from job sites
- **Fast Loading**: Optimized for various internet speeds

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

The sidebar converts to a horizontal navigation on tablets and mobile devices.

## 🔧 Installation

1. **Clone/Download** this repository
2. **Open** `index.html` in a web browser
3. **Customize** content as needed (see Customization Guide above)
4. **Deploy** to a web host:
   - GitHub Pages (free)
   - Netlify (free)
   - Traditional web hosting
   - Custom domain hosting

### Deployment Options

**GitHub Pages** (Free):
```bash
git add .
git commit -m "Update website"
git push origin main
```
Then enable GitHub Pages in repository settings.

**Netlify** (Free):
1. Drag and drop your folder to [netlify.com](https://netlify.com)
2. Or connect your GitHub repository
3. Get automatic HTTPS and continuous deployment

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Focus indicators for keyboard users
- Semantic HTML structure
- ARIA labels where appropriate
- Color contrast ratios meet accessibility standards
- Form labels properly associated with inputs

## ⚡ Performance

- Lightweight HTML/CSS/JS (no build tools required)
- Minimal external dependencies (Font Awesome icons only)
- No jQuery or heavy frameworks
- Fast loading on all devices
- Optimized animations for smooth 60fps

## 📝 Tips for Content

### Services Section
Focus on outcomes, not features:
- ❌ "We use React and Node.js"
- ✅ "We build websites that get you customers"

### Portfolio Section
Include before/after or results:
- ❌ "Built website for contractor"
- ✅ "Built website for contractor → Increased online leads by 40%"

### About Section
Show your story and why you're different:
- Emphasize reliability and trustworthiness
- Show understanding of blue collar industries
- Keep it honest (mention 1 year experience)

### Contact Form
Make it easy and quick:
- Only essential fields
- Clear call-to-action
- Fast response commitment

## 🆘 Troubleshooting

**Sidebar not showing?**
- Check that styles.css is loaded
- Verify file path in HTML

**Icons not displaying?**
- Ensure internet connection (Font Awesome loads from CDN)
- Check Font Awesome icon names are correct

**Form not submitting?**
- Check browser console for errors
- Verify form backend is configured
- Test with validation disabled

**Styling looks off?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check CSS is properly loaded

## 📈 Next Steps

1. **Customize** all content with your information
2. **Add actual portfolio projects** with real work examples
3. **Set up contact form** with your email
4. **Add real profile photo** to About section
5. **Deploy** to a web host
6. **Get domain name** if desired
7. **Monitor analytics** to see what visitors are interested in

## 🎓 Learning Resources

- **HTML/CSS/JS**: [MDN Web Docs](https://developer.mozilla.org)
- **Web Design**: [Design Patterns](https://www.smashingmagazine.com)
- **Web Hosting**: [Netlify](https://netlify.com) or [GitHub Pages](https://pages.github.com)
- **Domain**: [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google)

## 📄 License

This website template is provided as-is. Feel free to customize and use for your business.

## 🤝 Support

For customization help or technical questions:
1. Check the troubleshooting section above
2. Review the customization guide
3. Check browser console for error messages
4. Test in a different browser

---

**Built with ❤️ for blue collar businesses**

Good luck growing your web design consulting business! Remember: great websites help great businesses shine.