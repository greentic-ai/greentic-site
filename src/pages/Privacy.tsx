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
        <article className="max-w-none space-y-12">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-primary-glow/10 p-10 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold">Privacy Notice</p>
            <h1 className="text-4xl font-bold text-foreground mt-2">Greentic.ai Privacy Policy</h1>
            <p className="mt-4 inline-flex items-center rounded-full bg-secondary/60 px-4 py-1 text-sm font-medium text-foreground shadow-sm">
              Effective date: 12 July 2025
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              We are committed to protecting your privacy while you collaborate with digital workers. This policy
              explains the limited data we collect, how it is used, and the rights you maintain under GDPR.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                1
              </span>
              What We Collect
            </h2>
            <ul className="space-y-3 rounded-2xl border border-border bg-card p-6 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Marketing opt-ins</span>: if you explicitly subscribe to
                updates, we store your email address in plain text.
              </li>
              <li>
                <span className="font-semibold text-foreground">Platform usage</span>: we log which flows, tools,
                channels, and processes are downloaded or executed to improve stability and highlight popular content.
              </li>
              <li>
                <span className="font-semibold text-foreground">Telemetry</span>: anonymous, aggregate runtime data may
                be collected to diagnose issues and guide roadmap decisions.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                2
              </span>
              Lawful Basis for Processing
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground space-y-3">
              <p>
                We only process personal data when we have a clear legal foundation in line with GDPR principles:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-foreground">Consent</span> for marketing communications—you can
                  withdraw it at any time.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Legitimate interest</span> for anonymous telemetry,
                  abuse prevention, and core platform operation.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                3
              </span>
              Data Retention
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <h3 className="text-lg font-semibold text-foreground">Marketing Data</h3>
                <p className="mt-2 text-muted-foreground">
                  Retained indefinitely while consent remains active. Remove yourself at any time by using the unsubscribe
                  links or contacting us directly.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <h3 className="text-lg font-semibold text-foreground">Operational Logs</h3>
                <p className="mt-2 text-muted-foreground">
                  Flow and tool usage information may be stored to maintain quality, troubleshoot issues, and identify
                  emerging security risks.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                4
              </span>
              Your GDPR Rights
            </h2>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-muted-foreground">
                You stay in control of your information. You can exercise the following rights at any point:
              </p>
              <ul className="mt-4 grid gap-3 md:grid-cols-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Access or correct the personal data we hold.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Request deletion of your personal data.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Withdraw consent for marketing communications.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Lodge a complaint with your local data protection authority.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Contact the Privacy Team</h3>
              <p className="mt-2 text-muted-foreground">
                Email us at{" "}
                <a href="mailto:legal@greentic.ai" className="text-primary hover:underline">
                  legal@greentic.ai
                </a>{" "}
                to submit any request related to your rights or to ask a question about this privacy notice.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                5
              </span>
              Security & Responsibility
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground space-y-3">
              <p>
                Greentic empowers you to run user-supplied or third-party tools (for example WebAssembly modules) inside
                your own environment. While we provide sandboxing and best-practice defaults, you are responsible for
                verifying any external code you execute.
              </p>
              <p className="text-sm text-muted-foreground/80">
                No warranties are provided for the safety, correctness, or suitability of any downloaded flows, tools,
                or channels. Evaluate every component before deploying it into production workloads.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                6
              </span>
              Changes to this Policy
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground space-y-3">
              <p>
                We may update this privacy notice as Greentic evolves. We will publish the revised version here, and the
                “Effective date” badge will always show you when the last change was made.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Continuing to use Greentic after an update means you accept the latest version of this policy.
              </p>
            </div>
          </section>
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
