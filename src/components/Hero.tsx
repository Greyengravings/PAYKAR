import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import paykarLogo from "@/assets/paykar-logo.png";
import makeInIndiaLogo from "@/assets/make-in-india.png";
import appScreen1 from "@/assets/app-screen-1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
          {/* Logo and Make in India */}
          

          {/* Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-sm font-medium text-green-400">Made In India 🇮🇳</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-sm font-medium text-blue-400">Made For India</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The Future of
            <span className="block text-gradient">Digital Payments</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            PAYKAR is revolutionizing how India transacts. Send money instantly, manage multiple accounts, 
            and experience seamless digital banking—all in one powerful app.
          </p>

          {/* Company Attribution */}
          <p className="text-sm md:text-base text-muted-foreground">
            A product by <span className="text-foreground font-semibold">Sigiwent Group of Companies</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4 max-w-md mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(255,140,50,0.4)] hover:shadow-[0_0_40px_rgba(255,140,50,0.6)] transition-all duration-300"
            >
              <Link to="/waitlist">
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-full"
              onClick={() => {
                const featuresSection = document.getElementById('features');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">Instant</div>
              <div className="text-sm text-muted-foreground">Transfers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">Secure</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 blur-3xl rounded-full" />
              <div className="relative flex justify-center">
                <div className="bg-transparent border-0 rounded-[50px] p-4 md:p-6 z-10 scale-110">
                  <img
                    src={appScreen1}
                    alt="PAYKAR App Screen 1"
                    className="rounded-[30px] w-[300px] md:w-[400px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated decoration */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
