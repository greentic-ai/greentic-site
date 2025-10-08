import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Github } from "lucide-react";
import greenticLogo from "@/assets/greentic-logo.png";

const Terms = () => {
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
            <p className="text-sm uppercase tracking-wide text-primary font-semibold">Terms & Conditions</p>
            <h1 className="text-4xl font-bold text-foreground mt-2">Greentic.ai Terms of Service</h1>
            <p className="mt-4 inline-flex items-center rounded-full bg-secondary/60 px-4 py-1 text-sm font-medium text-foreground shadow-sm">
              Effective date: 12 July 2025
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              These terms govern your use of the Greentic open-source platform, the Greentic CLI, flows, tools, channels,
              and any related services. By downloading, installing, or contributing to the project you agree to the
              conditions below.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                1
              </span>
              Use of the Software
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground space-y-3">
              <p>
                Greentic is released under the{" "}
                <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                  MIT License
                </a>
                . The software and all accompanying components are provided on an “AS IS” basis without warranties of any
                kind—express or implied.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Use of the platform is entirely at your own risk. We disclaim liability for bugs, outages, data loss,
                  security breaches, or misuse of flows, tools, channels, or processes.
                </li>
                <li>
                  You are responsible for ensuring compliance with any regulations or contractual obligations that apply
                  to your deployment of Greentic.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                2
              </span>
              Privacy Notice (GDPR-Aligned)
            </h2>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-muted-foreground space-y-4">
              <p>
                Greentic collects limited personal data to operate the platform. Please review the{" "}
                <Link to="/privacy" className="text-primary hover:underline font-semibold">
                  Privacy Policy
                </Link>{" "}
                for the full notice. In summary:
              </p>
              <ul className="grid gap-3 md:grid-cols-2">
                <li className="rounded-xl border border-border bg-card/70 p-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">What We Collect</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Optional marketing emails, logs of downloaded/executed flows/tools/channels, and anonymous telemetry.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card/70 p-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Lawful Basis</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Consent for marketing communications, legitimate interest for telemetry, abuse prevention, and
                    platform operation.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card/70 p-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Retention</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Marketing data persists until consent is withdrawn. Operational logs may be kept to maintain
                    platform quality.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card/70 p-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Your Rights</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Access, correction, deletion, consent withdrawal, and lodging complaints with your data protection
                    authority.
                  </p>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground/90">
                Privacy questions? Email{" "}
                <a href="mailto:legal@greentic.ai" className="text-primary hover:underline">
                  legal@greentic.ai
                </a>
                .
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                3
              </span>
              Security & Responsibility
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground space-y-3">
              <p>
                Greentic can run user-supplied or third-party artefacts—such as WebAssembly tools, plugins, and flows. We
                provide sandboxing and security features, but we cannot guarantee the safety or correctness of any
                component.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You must validate, audit, and monitor every component you install or execute with Greentic.
                </li>
                <li>
                  You assume responsibility for deploying the platform in secure environments and for the actions taken by
                  digital workers you configure.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                4
              </span>
              Contributions
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground space-y-3">
              <p>
                By submitting code, documentation, flows, or other artefacts, you agree that all contributions are licensed
                under the MIT License and that you have the legal right to contribute them.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  We may review, modify, or reject any contribution to maintain community standards and platform quality.
                </li>
                <li>
                  Refer to the{" "}
                  <a
                    href="https://github.com/greentic-ai/greentic/blob/main/docs/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    contributing guide
                  </a>{" "}
                  for full requirements and the code of conduct.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                5
              </span>
              Governing Law
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-muted-foreground">
                These terms are governed by the laws of England. Any disputes arising from the use of Greentic will be
                subject to the exclusive jurisdiction of the courts of England, unless a superseding legal framework
                applies.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                6
              </span>
              Changes to These Terms
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground space-y-3">
              <p>
                We may update these terms to reflect new features, legal requirements, or policy changes. When revisions
                are published, the “Effective date” badge on this page will be updated.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Continued use of Greentic after changes are posted indicates your acceptance of the updated terms. If you
                do not agree with the modifications, you should discontinue use of the platform.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-secondary/40 p-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground">
              Questions about these terms? Email{" "}
              <a href="mailto:legal@greentic.ai" className="text-primary hover:underline">
                legal@greentic.ai
              </a>{" "}
              or{" "}
              <a href="mailto:info@greentic.ai" className="text-primary hover:underline">
                info@greentic.ai
              </a>
              .
            </p>
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

export default Terms;
