


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/data/navigation";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "block py-3 text-lg font-bold text-primary"
      : "block py-3 text-lg font-medium text-on-surface-variant hover:text-primary transition-colors";

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="p-2 text-primary-fixed-dim"
      >
        <Menu className="text-xl" />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-dvh w-72 border-l border-white/10 bg-surface transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
          <span className="font-display font-bold text-primary-fixed-dim">
            Menu
          </span>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 text-on-surface-variant hover:text-primary"
          >
            <X className="text-xl" />
          </button>
        </div>

        <nav className="px-6 py-4">
          <ul className="list-none">
            {navigationLinks.map((navItem) => (
              <li key={navItem.href}>
                <NavLink
                  to={navItem.href}
                  onClick={() => setOpen(false)}
                  className={linkStyle}
                >
                  {navItem.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 px-6 pt-4">
          {/* <Button
            
            variant="ghost"
            className="w-full font-bold text-primary-fixed-dim hover:bg-transparent hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Button> */}

          <Button
            variant="default"
            className="glow-btn w-full rounded-lg bg-primary-container font-bold text-on-primary-container hover:bg-primary-container"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;