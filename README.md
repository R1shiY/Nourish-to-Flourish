# Nourish to Flourish - Nonprofit Website

A modern, responsive website for the "Nourish to Flourish" nonprofit organization focused on educating communities about harmful chemicals and ingredients in everyday foods and products.

## 🌟 Features

### Design & User Experience
- **Modern, Clean Design**: Warm, natural color palette with greens and earthy tones
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **Accessibility**: Clean typography using Inter font family for excellent readability

### Sections Included
1. **Hero Section**: Eye-catching introduction with mission statement and call-to-action buttons
2. **About Section**: Organization story with impact statistics
3. **Team Section**: Team member profiles with photos, bios, and social media links
4. **Contact Section**: Contact information and contact form
5. **Footer**: Newsletter signup and social media links

### Technical Features
- **Mobile-First Design**: Responsive navigation with hamburger menu
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation
- **Performance Optimized**: Lightweight code with efficient animations
- **Cross-Browser Compatible**: Works on Chrome, Safari, Edge, and Firefox

## 📁 Project Structure

```
Nourish to Flourish Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Safari, Edge, Firefox)
- No additional software installation required

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The website will load immediately - no build process required

### Local Development
For local development, you can use any of these methods:

**Option 1: Direct File Opening**
- Simply double-click `index.html` to open in your default browser

**Option 2: Live Server (Recommended)**
- Install Live Server extension in VS Code
- Right-click `index.html` and select "Open with Live Server"

**Option 3: Python HTTP Server**
```bash
# Navigate to project directory
cd "Nourish to Flourish Website"

# Start Python server
python -m http.server 8000

# Open browser and go to http://localhost:8000
```

## 🎨 Customization

### Colors
The website uses a warm, natural color palette:
- Primary Green: `#4a7c59`
- Dark Green: `#2d5a27`
- Text Color: `#2c3e50`
- Light Text: `#5a6c7d`
- Background: `#fafbfc`

### Content Updates
To update content, edit the following sections in `index.html`:

1. **Hero Section**: Update title and mission statement
2. **About Section**: Modify organization story and statistics
3. **Team Section**: Replace team member information and photos
4. **Contact Section**: Update contact details and form
5. **Footer**: Modify newsletter signup and social links

### Team Member Photos
Currently using placeholder images from Unsplash. Replace the image URLs in the team section with your actual team photos:

```html
<img src="path/to/your/photo.jpg" alt="Team Member Name">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome 60+
- Safari 12+
- Firefox 55+
- Edge 79+

### Performance Features
- Optimized images with responsive sizing
- Efficient CSS animations using transform properties
- Minimal JavaScript footprint
- Fast loading times

## 📧 Form Integration

The contact and newsletter forms are currently set up with client-side validation and simulated submission. To integrate with a backend:

1. **Contact Form**: Update the form action in `index.html`
2. **Newsletter Form**: Connect to your email service provider
3. **Form Validation**: Server-side validation should be added

### Example Backend Integration
```javascript
// Replace the simulated form submission in script.js
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
})
.catch(error => {
    showNotification('Error sending message. Please try again.', 'error');
});
```

## 🚀 Future Enhancements

The website is designed to be easily expandable. Future sections can include:

1. **Nourish Notes**: Blog section for health tips and ingredient education
2. **News**: Latest updates and community events
3. **Resources**: Downloadable guides and educational materials
4. **Events**: Upcoming workshops and seminars
5. **Donate**: Donation integration for nonprofit support

## 📞 Support

For questions or customization requests, please contact:
- Email: hello@nourishtoflourish.org
- Instagram: @nourishtoflourish

## 📄 License

This project is created for the Nourish to Flourish nonprofit organization. All rights reserved.

---

**Built with ❤️ for community health and education** 