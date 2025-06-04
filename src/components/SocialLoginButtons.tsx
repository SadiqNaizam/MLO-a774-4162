import React from 'react';
import { Button } from '@/components/ui/button';
// Import specific icons if needed, e.g., from lucide-react
// import { Chrome, Facebook, Github } from 'lucide-react';

interface SocialProvider {
  name: string;
  icon?: React.ReactNode; // Optional: Component for the icon
  onClick: () => void;
}

interface SocialLoginButtonsProps {
  providers: SocialProvider[];
  orientation?: 'vertical' | 'horizontal';
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
  providers,
  orientation = 'vertical',
}) => {
  console.log("Rendering SocialLoginButtons, providers count:", providers.length);

  if (!providers || providers.length === 0) {
    return null; // Don't render anything if no providers are given
  }

  const containerClasses = orientation === 'vertical' ? 'flex flex-col space-y-2' : 'flex flex-row space-x-2';

  return (
    <div className={`${containerClasses} w-full`}>
      {providers.map((provider) => (
        <Button
          key={provider.name}
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={provider.onClick}
        >
          {provider.icon && <span className="mr-2">{provider.icon}</span>}
          Login with {provider.name}
        </Button>
      ))}
    </div>
  );
};

export default SocialLoginButtons;