# 50 Days 50 Projects 🚀

A collection of 50 interactive web projects built with vanilla HTML, CSS, and JavaScript. This repository showcases modern front-end development techniques, creative UI/UX implementations, and practical JavaScript applications.

> **Status**: 🚧 Work in Progress (39/50 projects completed)

## 📋 About

This project collection serves multiple purposes:
- **Portfolio**: Showcase front-end development skills and creativity
- **Consulting**: Demonstrate practical solutions and implementation patterns
- **Learning**: Explore vanilla JavaScript, CSS animations, DOM manipulation, and modern web APIs

Each project is self-contained, focusing on a specific concept or feature, making it perfect for learning, reference, or integration into larger applications.

## 🎯 Projects

### Completed Projects (39/50)

| # | Project | Description |
|---|---------|-------------|
| 1 | [Expanding Cards](./day_1_expanding_cards) | Interactive card expansion on click |
| 2 | [Progress Steps](./day_2_progress_steps) | Multi-step progress indicator |
| 3 | [Rotating Navigation](./day_3_rotating_navigation) | Animated rotating navigation menu |
| 4 | [Hidden Search Widget](./day_4_hidden_search_widget) | Expandable search input with animation |
| 5 | [Blurry Loading](./day_5_blurry_loading) | Progressive image loading with blur effect |
| 6 | [Scroll Animation](./day_6_scroll_animation) | Animated content on scroll |
| 7 | [Split Landing Page](./day_7_split_landing_age) | Split-screen landing page with hover effects |
| 8 | [Form Wave Animation](./day_8_form_wave_animation) | Animated form inputs with wave effect |
| 9 | [Sound Board](./day_9_sound_board) | Interactive sound effects board |
| 10 | [Dad Jokes](./day_10_dad_jokes) | Random dad jokes generator |
| 11 | [Event Keycodes](./day_11_event_keycodes) | Display keyboard event information |
| 12 | [FAQ Collapse](./day_12_faq_collapse) | Accordion-style FAQ component |
| 13 | [Random Choice Picker](./day_13_random_choice_picker) | Random selection from comma-separated choices |
| 14 | [Animated Navigation](./day_14_animated_navigation) | Smooth animated navigation bar |
| 15 | [Incremental Counting](./day_15_incremental_counting) | Animated number counter |
| 16 | [Drink Water](./day_16_drink_water) | Water intake tracking interface |
| 17 | [Movie App](./day_17_movie_app) | Movie search and information display |
| 18 | [Background Slider](./day_18_background_slider) | Image slider with Unsplash API integration |
| 19 | [Theme Clock](./day_19_theme_clock) | Customizable themed clock display |
| 20 | [Button Ripple Effect](./day_20_button_ripple_effect) | Material Design-inspired ripple effect |
| 21 | [Drag N Drop](./day_21_drag_n_drop) | Drag and drop image gallery |
| 22 | [Drawing App](./day_22_drawing_app) | Canvas-based drawing application |
| 23 | [Kinetic CSS Loader](./day_23_kinetic_css_loader) | Animated CSS loading spinner |
| 24 | [Content Placeholder](./day_24_content_placeholder) | Skeleton loading placeholder animation |
| 25 | [Sticky Navbar](./day_25_sticky_navbar) | Sticky navigation with scroll effects |
| 26 | [Double Vertical Slider](./day_26_double_vertical_slider) | Dual-panel vertical image slider |
| 27 | [Toast Notifications](./day_27_toast_notifications) | Toast notification system |
| 28 | [GitHub Profiles](./day_28_github_profiles) | GitHub profile search and display |
| 29 | [Double Heart Click](./day_29_double_heart_click) | Instagram-like double-tap heart animation |
| 30 | [Auto Text Effect](./day_30_auto_text_effect) | Typing animation effect |
| 31 | [Password Generator](./day_31_password_generator) | Customizable password generator |
| 32 | [Good Cheap Fast](./day_32_good_cheap_fast) | Interactive checkbox toggle system |
| 33 | [Notes App](./day_33_notes_app) | Local storage-based notes application |
| 34 | [Animated Countdown](./day_34_animated_countdown) | Animated countdown timer |
| 35 | [Image Carousel](./day_35_image_carousel) | Image carousel with navigation |
| 36 | [Hoverboard](./day_36_hoverboard) | Interactive color grid on hover |
| 37 | [Pokedex](./day_37_pokedex) | Pokemon information display |
| 38 | [Mobile Tab Navigation](./day_38_mobile_tab_navigation) | Mobile-friendly tab navigation |
| 39 | [Password Strength Background](./day_39_password_strenght_background) | Dynamic background based on password strength |

### Coming Soon (11/50)

Projects 40-50 are currently in development. Stay tuned! 🎨

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- (Optional) Node.js and npm for projects with dependencies

### Running a Project

Each project is self-contained and can be run independently:

1. Navigate to any project folder:
   ```bash
   cd day_1_expanding_cards
   ```

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     # Right-click index.html > Open with Live Server
     ```

3. View the project in your browser at `http://localhost:8000`

### Projects with Dependencies

Some projects (like `day_18_background_slider`) require additional setup:

1. Navigate to the project folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Follow project-specific setup instructions (usually in the project's README)

## 🔐 Environment Variables & API Keys

Some projects require API keys or environment variables:

### Setup for Projects with API Keys

1. **Using `.env` files** (recommended):
   - Create a `.env` file in the project directory
   - Add your API keys:
     ```
     UNSPLASH_ACCESS_KEY=your_key_here
     ```
   - Run any build scripts if required:
     ```bash
     npm run build
     ```

2. **Using `config.js` files**:
   - Copy the example file:
     ```bash
     cp config.js.example config.js
     ```
   - Add your API key to `config.js`

### Security Note

⚠️ **Important**: All `.env` and `config.js` files are excluded from version control via `.gitignore`. Never commit API keys or sensitive information to the repository.

## 📁 Project Structure

```
50_days_50_projects/
├── .gitignore              # Git ignore rules for env files
├── README.md               # This file
├── _project_starter/       # Starter template for new projects
├── day_1_expanding_cards/  # Project 1
├── day_2_progress_steps/   # Project 2
├── ...                     # More projects
└── day_50_project_name/    # Project 50 (coming soon)
```

Each project typically contains:
- `index.html` - Main HTML structure
- `style.css` - Styling and animations
- `script.js` - JavaScript functionality
- `README.md` - Project-specific documentation (when applicable)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - No frameworks, pure JS
- **Modern Web APIs** - Fetch API, Local Storage, Canvas, etc.

## 📚 Learning Resources

This project collection is perfect for:
- Learning vanilla JavaScript fundamentals
- Understanding DOM manipulation
- Practicing CSS animations and transitions
- Exploring modern web APIs
- Building a portfolio of interactive projects

## 🤝 Contributing

This is a personal learning and portfolio project. However, suggestions and feedback are welcome!

## 📝 License

This project is open source and available for educational and portfolio purposes.

## 👤 Author

**Guilherme de Lima**

- Portfolio: [Your Portfolio URL]
- GitHub: [@guibslima94](https://github.com/guibslima94)
- LinkedIn: [Your LinkedIn]

---

**Note**: This project is part of a 50-day coding challenge. Each project is designed to be completed in a day, focusing on learning and building practical, interactive web applications.

⭐ If you find this project helpful, consider giving it a star!
