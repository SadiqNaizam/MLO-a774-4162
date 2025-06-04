import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

interface AppLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ size = 'medium', className }) => {
  console.log("Rendering AppLogo, size:", size);

  let textSizeClass = 'text-2xl';
  if (size === 'small') {
    textSizeClass = 'text-xl';
  } else if (size === 'large') {
    textSizeClass = 'text-3xl';
  }

  // Placeholder for an actual logo (SVG or Image)
  // For now, it's text-based.
  return (
    <Link to="/" className={`font-bold ${textSizeClass} text-blue-600 hover:text-blue-700 transition-colors ${className}`}>
      {/* Replace this with your actual logo image or SVG */}
      YourApp
    </Link>
  );
};

export default AppLogo;