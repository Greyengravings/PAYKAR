import { Building2, Award, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import makeInIndiaLogo from "@/assets/make-in-india.png";

const About = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Powered By</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sigiwent Group of Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A trusted name in innovation and technology, bringing you the next generation of financial solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border text-center group hover:border-primary/50 transition-all">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to delivering world-class products and services
              </p>
            </Card>

            <Card className="p-6 bg-card border-border text-center group hover:border-primary/50 transition-all">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Pioneering cutting-edge solutions for modern challenges
              </p>
            </Card>

            <Card className="p-6 bg-card border-border text-center group hover:border-primary/50 transition-all">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Trust</h3>
              <p className="text-muted-foreground">
                Building lasting relationships through reliability and integrity
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-3 p-8 md:p-12 bg-gradient-to-br from-card to-secondary/50 border-border">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Our Mission with PAYKAR
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Sigiwent Group, we believe in making financial technology accessible to everyone. 
                  PAYKAR represents our commitment to revolutionizing digital payments in India, 
                  combining security, simplicity, and speed in one powerful platform.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just building an app—we're creating a financial ecosystem that empowers 
                  millions of Indians to manage their money with confidence and ease.
                </p>
              <div className="bg-black rounded-3xl p-2 inline-flex justify-center items-center">
                <img
                  src={makeInIndiaLogo}
                  alt="Make in India"
                  className="h-auto object-contain max-h-32 rounded-lg"
                />
              </div>
              </div>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
