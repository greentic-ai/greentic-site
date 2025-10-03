import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FeatureCard } from "@/components/FeatureCard";
import { TeamMember } from "@/components/TeamMember";
import { UseCaseCard } from "@/components/UseCaseCard";
import { Github, Workflow, Plug, Shield, Store, Code, Mail, ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import maartenImage from "@/assets/maarten-ectors.png";
import rahulImage from "@/assets/rahul-patel.png";
import greenticLogo from "@/assets/greentic-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Digital Workers That Execute Boring Tasks —{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Fast, Secure, Extensible
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Greentic is building the future of digital workers — where agents can generate, 
              manage, and collaborate with each other.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity shadow-lg">
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              From Today's Automation to Tomorrow's Agentic Economy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="text-sm font-semibold text-muted-foreground mb-3">TODAY</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Traditional Automation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Static workflows and predefined flows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Manual tool configuration and channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Limited adaptability and scalability</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10 border-2 border-primary/30">
                <div className="text-sm font-semibold text-primary mb-3">FUTURE</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Agentic Economy</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Digital workers managing other workers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Autonomous generation and collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Self-optimizing, infinitely scalable systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Built for the Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful capabilities that enable true digital workforce automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Workflow}
              title="Agentic Flows"
              description="Structured Q&A with LLM fallback for intelligent decision-making and adaptive workflows."
            />
            <FeatureCard
              icon={Plug}
              title="MCP Tools & Connectors"
              description="Secure, pluggable architecture with extensible tool ecosystem for any integration."
            />
            <FeatureCard
              icon={Shield}
              title="Secure WASM Runtime"
              description="Fast, auditable, multi-cloud execution environment with enterprise-grade security."
            />
            <FeatureCard
              icon={Store}
              title="Greentic Store"
              description="Marketplace of reusable flows, tools, and channels to accelerate your automation."
            />
            <FeatureCard
              icon={Code}
              title="Extensible & Open Source"
              description="Built on open standards with full transparency and community-driven development."
            />
            <FeatureCard
              icon={Sparkles}
              title="AI-Powered Collaboration"
              description="Workers that autonomously generate, manage, and coordinate with sub-workers."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Imagine What Digital Workers Can Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world scenarios where autonomous agents transform operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <UseCaseCard
              title="Telecom AI Assistant"
              description="Network monitoring assistant that autonomously spawns specialized sub-workers for diagnostics, alerts, and incident response—scaling instantly to handle infrastructure complexity."
            />
            <UseCaseCard
              title="Healthcare Operations"
              description="Patient intake assistant that deploys specialized workers for insurance verification, clinical documentation, and care coordination—reducing administrative burden by 80%."
            />
            <UseCaseCard
              title="Startup Growth Engine"
              description="Founder's marketing worker that generates targeted sub-workers for content creation, outreach, and analytics—enabling one-person teams to execute at scale."
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              The Journey Ahead
            </h2>
            <p className="text-xl text-muted-foreground">
              From foundation to transformation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Today */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div className="w-1 flex-1 bg-gradient-to-b from-primary to-primary/30 mt-2" />
                </div>
                <div className="flex-1 pb-12">
                  <div className="text-sm font-semibold text-primary mb-2">TODAY</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Foundation</h3>
                  <p className="text-muted-foreground">
                    Lightweight flows & channels. Core infrastructure for agent orchestration with secure runtime and basic tool integrations.
                  </p>
                </div>
              </div>
              
              {/* Next */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/70 flex items-center justify-center text-primary-foreground font-bold">
                    2
                  </div>
                  <div className="w-1 flex-1 bg-gradient-to-b from-primary/30 to-primary/10 mt-2" />
                </div>
                <div className="flex-1 pb-12">
                  <div className="text-sm font-semibold text-primary/70 mb-2">NEXT</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Expansion</h3>
                  <p className="text-muted-foreground">
                    Greentic Store launch. OAuth connectors, OpenAPI-to-MCP generator, and community-driven marketplace for flows and tools.
                  </p>
                </div>
              </div>
              
              {/* Future */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-primary/50 mb-2">FUTURE</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Transformation</h3>
                  <p className="text-muted-foreground">
                    Digital workers that autonomously generate and manage other workers. The true agentic economy where systems self-optimize and scale infinitely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              The Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Visionary leaders building the future of work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <TeamMember
              name="Maarten Ectors"
              role="Multi-award winning innovator in tech, AI, telecom, cloud & security"
              image={maartenImage}
            />
            <TeamMember
              name="Rahul Patel"
              role="Enterprise Sales Executive Expert in go-to-market & enterprise adoption"
              image={rahulImage}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary-glow/10 border-2 border-primary/30">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Follow the Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our community and be part of the agentic revolution
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="text-lg py-6"
              />
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                <Mail className="mr-2 w-5 h-5" />
                Subscribe
              </Button>
            </div>
            
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="outline" size="lg">
                <Github className="mr-2 w-5 h-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                Discord
              </Button>
              <Button variant="outline" size="lg">
                LinkedIn
              </Button>
            </div>
            
            <Button size="lg" className="mt-4 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
              Join Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <img src={greenticLogo} alt="Greentic.ai Logo" className="w-8 h-8" />
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Greentic.ai
                </div>
              </div>
              <p className="text-muted-foreground">
                Contact: <a href="mailto:info@greentic.ai" className="text-primary hover:underline">info@greentic.ai</a>
              </p>
            </div>
            
            <div className="flex gap-8 text-muted-foreground">
              <a href="https://github.com/greentic-ai/greentic/tree/main/docs" className="hover:text-primary transition-colors">Docs</a>
              <a href="https://github.com/greentic-ai/greentic" className="hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2025 Greentic.ai. Building the future of digital workers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
