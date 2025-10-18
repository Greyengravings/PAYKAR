import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">PAYKAR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-menu hidden md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full w-full"
                >
                  <Link to="/waitlist">Join Waitlist</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full hidden md:inline-flex"
            >
              <Link to="/waitlist">Join Waitlist</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => {
                const menu = document.querySelector('.mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
