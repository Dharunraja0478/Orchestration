// Import the SVG image asset from the specified relative path.
import images from '../assets/image/icon.svg';

// Create an object to group the imported asset.
// This allows multiple assets to be organized and accessed together.
const assets = {
  images // The `image` property references the imported `icon.svg` file.
};

// Export the `assets` object as the default export.
// This makes the grouped assets available for use in other parts of the application.
export default assets;
