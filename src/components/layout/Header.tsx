import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // For mobile menu
import { Menu, UserCircle, Bell } from 'lucide-react';
import AppLogo from '@/components/AppLogo'; // Assuming AppLogo is in src/components

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface HeaderProps {
  navItems?: NavItem[]; // Optional navigation items
  // Add props for user session, notifications, etc.
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ navItems = [], isLoggedIn = false }) => {
  console.log("Rendering Header, isLoggedIn:", isLoggedIn);

  // Placeholder navigation - replace with actual links
  const defaultNavItems: NavItem[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings', href: '/settings' },
  ];

  const currentNavItems = navItems.length > 0 ? navItems : defaultNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <AppLogo size="small" />
          {isLoggedIn && currentNavItems.length > 0 && (
            <nav className="flex items-center space-x-6 text-sm font-medium ml-6">
              {currentNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        {isLoggedIn && (
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link to="/" className="mr-6 flex items-center space-x-2">
                  <AppLogo size="small" />
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {currentNavItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="transition-colors hover:text-foreground text-foreground/70"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}


        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Link to="/profile"> {/* Or account page */}
                <Button variant="ghost" size="icon" aria-label="User Profile">
                  <UserCircle className="h-5 w-5" />
                  <span className="sr-only">User Profile</span>
                </Button>
              </Link>
              {/* Add Logout Button Here */}
            </>
          ) : (
             <nav className="flex items-center">
                <Link to="/login">
                    <Button variant="outline" className="mr-2">Login</Button>
                </Link>
                <Link to="/signup">
                    <Button>Sign Up</Button>
                </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;