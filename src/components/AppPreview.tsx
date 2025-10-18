import { Smartphone } from "lucide-react";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";

const AppPreview = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the App
            <span className="block text-gradient">Before It Launches</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the future of digital payments. Clean interface, powerful features.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Instant Money Transfer</h3>
                  <p className="text-sm text-muted-foreground">Send money to anyone instantly with just their UPI ID or phone number.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Multi-Bank Support</h3>
                  <p className="text-sm text-muted-foreground">Connect all your bank accounts and manage them from one place.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Transaction History</h3>
                  <p className="text-sm text-muted-foreground">Track all your transactions with detailed history and insights.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">QR Code Payments</h3>
                  <p className="text-sm text-muted-foreground">Scan QR codes or generate your own for quick and easy payments.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 blur-3xl rounded-full" />
              <div className="relative flex gap-4 items-center justify-center">
                
                <div className="bg-black border-2 border-primary/30 rounded-[50px] p-6 shadow-2xl z-10 scale-110">
                  <img
                    src={appScreen2}
                    alt="PAYKAR App Screen 2"
                    className="rounded-[30px]"
                    style={{ width: '250px', height: '500px' }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
