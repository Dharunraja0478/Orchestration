// Import the OTP image asset from the specified path.
import otp from '../assets/image/otp.png';

// Create an object to group the imported asset.
// This allows the asset to be accessed as a property for better organization.
const otppng = {
  otp, // The `otp` property references the imported `otp.png` file.
};

// Export the `otppng` object as the default export.
// This makes the asset available for use in other parts of the application.
export default otppng;
