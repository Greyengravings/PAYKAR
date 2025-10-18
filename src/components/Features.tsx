import { Smartphone, Shield, Zap, QrCode, CreditCard, Users, Globe, Bell, Wallet, TrendingUp, Lock, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Globe,
    title: "IPS - International Payment System",
    description: "Revolutionary bank-to-bank transfers worldwide. Send money directly to any international bank account without wallets or third-party intermediaries.",
    featured: true
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive money instantly to any bank account across India with zero delays."
  },
  {
    icon: QrCode,
    title: "QR Code Payments",
    description: "Scan and pay anywhere. Generate your unique QR code for receiving payments effortlessly."
  },
  {
    icon: CreditCard,
    title: "Multi-Account Management",
    description: "Link multiple bank accounts and cards. Switch between them seamlessly for all transactions."
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your money and data are protected with industry-leading encryption and security measures."
  },
  {
    icon: Users,
    title: "Easy Bill Splitting",
    description: "Split bills with friends and family. Request and send money with just a few taps."
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Store money securely in your PAYKAR wallet. Instant access to your funds anytime, anywhere."
  },
  {
    icon: TrendingUp,
    title: "Transaction Analytics",
    description: "Track your spending patterns with detailed insights and analytics. Make smarter financial decisions."
  },
  {
    icon: Lock,
    title: "Biometric Authentication",
    description: "Secure your account with fingerprint and face recognition. Your money, your control."
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Get instant alerts for every transaction. Stay updated on all your account activities."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you with any queries or issues."
  },
  {
    icon: Smartphone,
    title: "Intuitive Interface",
    description: "Beautiful, easy-to-use interface designed for everyone. Banking has never been this simple."
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Handle multiple currencies with ease. Real-time exchange rates and seamless conversion for international transactions."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need,
            <span className="block text-gradient">In One App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PAYKAR combines powerful features with simplicity to give you complete control over your finances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card border-border transition-all duration-300 group ${
                feature.featured 
                  ? 'md:col-span-2 lg:col-span-3 border-primary/50 shadow-[0_0_40px_rgba(255,140,50,0.2)]' 
                  : 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,140,50,0.15)]'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`inline-flex p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors ${feature.featured ? 'p-4' : ''}`}>
                  <feature.icon className={`text-primary ${feature.featured ? 'h-8 w-8' : 'h-6 w-6'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`font-semibold text-foreground group-hover:text-primary transition-colors ${feature.featured ? 'text-2xl' : 'text-xl'}`}>
                      {feature.title}
                    </h3>
                    {feature.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">Super Feature</Badge>
                    )}
                  </div>
                  <p className={`text-muted-foreground leading-relaxed ${feature.featured ? 'text-lg' : ''}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
