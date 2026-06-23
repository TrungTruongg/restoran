import { NavLink } from "react-router-dom"
import { Button } from "./ui/button";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Service", to: "/service" },
  { label: "Menu", to: "/menu" },
  { label: "Contact", to: "/contact" },
];

const activeClass = "font-heebo text-body-md text-accent-amber font-bold border-b-2 border-accent-amber pb-1";
const inactiveClass = "font-heebo text-body-md text-text-muted hover:text-accent-amber transition-colors";

const Navbar = () => {

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-md border-b border-white/5">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-amber text-3xl">restaurant</span>
          <span className="font-display-lg text-accent-amber tracking-tight text-2xl md:text-3xl">Restoran</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? activeClass : inactiveClass}
          >
            Home
          </NavLink>
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? activeClass : inactiveClass}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Button size="lg" className="bg-primary-container text-on-primary-container! px-6 py-6 rounded-lg font-heebo text-body-md font-bold hover:bg-accent-amber/90 transition-all active:scale-95 shadow-lg shadow-accent-amber/20">
          Book A Table
        </Button>
      </div>
    </nav>
  );
};


export default Navbar