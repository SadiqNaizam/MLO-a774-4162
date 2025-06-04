import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils'; // For conditional classes
// Import icons as needed, e.g., from lucide-react
// import { Home, Settings, Users } from 'lucide-react';

interface SidebarNavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  external?: boolean;
  label?: string; // Optional badge/label
}

interface SidebarProps {
  navItems: SidebarNavItem[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, className }) => {
  const location = useLocation();
  console.log("Rendering Sidebar, current path:", location.pathname);

  if (!navItems || navItems.length === 0) {
    console.warn("Sidebar rendered without navItems.");
    return null;
  }

  return (
    <aside className={cn("hidden md:flex md:flex-col md:w-64 border-r bg-background", className)}>
      <div className="flex flex-col space-y-1 p-4">
        {/* Optional: Sidebar Header/Logo */}
        {/* <div className="p-2 mb-2">
             <AppLogo size="small" />
           </div>
        */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            item.href ? (
              <Link
                key={item.href}
                to={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  location.pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                <span>{item.title}</span>
                {item.label && (
                  <span className="ml-auto rounded-lg bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    {item.label}
                  </span>
                )}
              </Link>
            ) : (
              <span
                key={item.title} // Use title if href is missing (e.g. for a section header)
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground"
              >
                {item.title}
              </span>
            )
          ))}
        </nav>
      </div>
      {/* Optional: Sidebar Footer Content */}
      {/* <div className="mt-auto p-4">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} YourApp</p>
          </div>
      */}
    </aside>
  );
};

export default Sidebar;