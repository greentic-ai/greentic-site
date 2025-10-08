import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Github } from "lucide-react";
import greenticLogo from "@/assets/greentic-logo.png";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={greenticLogo} alt="Greentic.ai Logo" className="w-8 h-8" />
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Greentic.ai
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/">
                  <Home className="mr-2 w-4 h-4" />
                  Home
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/greentic-ai/greentic" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
            <p className="text-muted-foreground mb-0">
              This is a placeholder privacy policy. Actual privacy policy content will be added here.
            </p>
          </div>

          <h2 id="information-collection" className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-muted-foreground">
            Information about how Greentic.ai collects and uses your data will be detailed here.
          </p>

          <h2 id="data-usage" className="text-2xl font-semibold text-foreground mt-8 mb-4">
            How We Use Your Data
          </h2>
          <p className="text-muted-foreground">
            Details about data usage and processing will be provided here.
          </p>

          <h2 id="data-protection" className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Data Protection
          </h2>
          <p className="text-muted-foreground">
            Information about our security measures and data protection practices will be outlined here.
          </p>

          <h2 id="contact" className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            For privacy-related inquiries, please contact us at{" "}
            <a href="mailto:info@greentic.ai" className="text-primary hover:underline">
              info@greentic.ai
            </a>
          </p>
        </article>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary/30 mt-24">
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
              <Link to="/docs" className="hover:text-primary transition-colors">Docs</Link>
              <a href="https://github.com/greentic-ai/greentic" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
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

export default Privacy;
