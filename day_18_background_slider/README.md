# Background Slider

A beautiful background image slider that fetches random images from the Unsplash API. Users can navigate through images using left and right arrow buttons.

## Features

- 🖼️ Dynamic image loading from Unsplash API
- 🎨 Smooth transitions between images
- ⬅️➡️ Navigation with arrow buttons
- 🔄 Fallback to default images if API fails
- 🔒 Secure API key management with environment variables

## Setup

### Prerequisites

- Node.js and npm installed
- An Unsplash API access key ([Get one here](https://unsplash.com/developers))

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd day_18_background_sllider
```

2. Install dependencies:

```bash
npm install
```

3. Create a `config.js` file from the example:

```bash
cp config.js.example config.js
```

4. Add your Unsplash API access key to `config.js`:

```javascript
var UNSPLASH_ACCESS_KEY = "your_actual_access_key_here";
```

5. Open `index.html` in your browser to view the slider.

**Note**: The `config.js` file is in `.gitignore` and will not be committed to git, keeping your API key safe.

## Usage

- Click the **right arrow** (➡️) to move to the next image
- Click the **left arrow** (⬅️) to move to the previous image
- Images are automatically fetched from Unsplash when the page loads

## Project Structure

```
.
├── index.html          # Main HTML file
├── script.js           # JavaScript logic
├── style.css           # Styling
├── config.js           # API key configuration (not committed to git)
├── config.js.example   # Example config file
├── build.js            # Optional build script (for .env approach)
├── .env                # Optional: Environment variables (not committed to git)
├── .gitignore          # Git ignore file
└── package.json        # Project dependencies
```

## Security Note

⚠️ **Important**: The `config.js` file is excluded from version control via `.gitignore`. Never commit your API key to the repository. Remember that client-side JavaScript is visible in the browser, so the API key will be visible in the browser's developer tools. For production use, consider using a backend proxy to hide your API key.

## Alternative: Using .env file

If you prefer using a `.env` file, you can use the build script:

1. Create a `.env` file with your API key:

```
UNSPLASH_ACCESS_KEY=your_actual_access_key_here
```

2. Run the build script:

```bash
npm run build
```

This will inject the API key from `.env` into `script.js`. However, the `config.js` approach is simpler and recommended.

## License

This project is part of the "50 Days 50 Projects" challenge.
