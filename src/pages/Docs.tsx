import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Github,
  BookOpen,
  Workflow,
  Plug,
  Shield,
  Cpu,
  FileCode,
  Users,
  MessageCircle,
  Lock,
  Rocket,
} from "lucide-react";
import greenticLogo from "@/assets/greentic-logo.png";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    summary:
      "Greentic.AI is the open-source platform for composing digital workers with agents, tools, channels, and processes.",
    content: (
      <>
        <p>
          Greentic.AI lets you build, deploy, and operate digital workers at lightning speed. Each worker combines
          messaging channels, LLM-powered agents, secure WebAssembly tools, and declarative processes.
        </p>
        <ul>
          <li>
            <strong>Fast</strong>: zero cold-starts for WebAssembly tools.
          </li>
          <li>
            <strong>Secure</strong>: tools are sandboxed and auditable via OpenTelemetry.
          </li>
          <li>
            <strong>Extensible</strong>: plug in your own agents, processes, tools, and channels.
          </li>
        </ul>
        <p>
          Version 0.2.0 includes a growing store of free flows, plugins, and tools. OAuth connectors land in v0.3.0, and
          full cloud deployment is on the roadmap for v0.4.0.
        </p>
      </>
    ),
  },
  {
    id: "digital-workers",
    title: "What is a Digital Worker?",
    summary:
      "A digital worker is a flow that orchestrates channels, agents, tools, and processes to complete tasks end to end.",
    content: (
      <>
        <p>
          Digital workers listen for inbound messages, understand intent, execute actions, and respond. They combine:
        </p>
        <ul>
          <li>
            <strong>Channels</strong>: Telegram, Slack, email, webhooks, and more.
          </li>
          <li>
            <strong>Agents</strong>: LLM-driven decision makers powered by Ollama.
          </li>
          <li>
            <strong>Tools</strong>: WebAssembly modules that call APIs or run custom logic.
          </li>
          <li>
            <strong>Processes</strong>: control flow nodes for QA, templating, scripting, and debugging.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "key-concepts",
    title: "Key Concepts",
    summary: "Tools, Channels, Processes, and Agents form the core building blocks of every Greentic flow.",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Plug className="w-5 h-5 text-primary" />
            Tools (MCP in Wasm)
          </h3>
          <p className="text-muted-foreground mt-2">
            Secure WebAssembly modules that expose actions via the Model Context Protocol. Build and publish tools that
            Greentic can call safely.
          </p>
          <a
            className="text-primary hover:underline text-sm font-medium"
            href="https://github.com/greentic-ai/greentic/blob/main/docs/TOOLS.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build MCP tools →
          </a>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <MessageCircle className="w-5 h-5 text-primary" />
            Channels
          </h3>
          <p className="text-muted-foreground mt-2">
            Plugins that connect flows to the outside world. Transport incoming events and dispatch responses across
            chat, voice, email, and custom transports.
          </p>
          <a
            className="text-primary hover:underline text-sm font-medium"
            href="https://github.com/greentic-ai/greentic/blob/main/docs/PLUGIN.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build channel plugins →
          </a>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Workflow className="w-5 h-5 text-primary" />
            Processes
          </h3>
          <p className="text-muted-foreground mt-2">
            Declarative control flow—debugging, scripting, templating, QA forms, and Wasm plugins. Shape how payloads
            move through the worker.
          </p>
          <a
            className="text-primary hover:underline text-sm font-medium"
            href="https://github.com/greentic-ai/greentic/blob/main/docs/PROCESSES.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore processes →
          </a>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Cpu className="w-5 h-5 text-primary" />
            Agents
          </h3>
          <p className="text-muted-foreground mt-2">
            LLM-powered reasoning using Ollama. Support chat, generate, and embed modes, tool-calling, and state updates
            for autonomous orchestration.
          </p>
          <a
            className="text-primary hover:underline text-sm font-medium"
            href="https://github.com/greentic-ai/greentic/blob/main/docs/AGENTS.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use Ollama agents →
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "getting-started",
    title: "Getting Started",
    summary: "Install Rust, install the CLI, initialise your environment, and run your first worker.",
    content: (
      <>
        <h3 className="text-lg font-semibold text-foreground">1. Install Rust</h3>
        <pre>
          <code className="language-bash">
            {"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"}
          </code>
        </pre>
        <p className="text-muted-foreground">
          Restart your terminal and verify with <code>cargo --version</code>.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6">2. Install Greentic</h3>
        <pre>
          <code className="language-bash">cargo install greentic</code>
        </pre>

        <h3 className="text-lg font-semibold text-foreground mt-6">3. Initialise your workspace</h3>
        <pre>
          <code className="language-bash">
            {`greentic init
greentic secrets add TELEGRAM_TOKEN <your_token>
greentic secrets add WEATHERAPI_KEY <your_token>`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-foreground mt-6">4. Run your flow</h3>
        <pre>
          <code className="language-bash">
            {`greentic flow validate telegram-weather.ygtc
greentic flow deploy telegram-weather.ygtc
greentic flow start telegram-weather`}
          </code>
        </pre>
      </>
    ),
  },
  {
    id: "flow-example",
    title: "Quick Flow Example",
    summary: "A Telegram weather worker that captures user input, calls a tool, and responds with a formatted forecast.",
    content: (
      <div className="bg-secondary/30 border border-border rounded-xl p-6 overflow-auto">
        <pre className="text-sm leading-6">
          <code>
            {`meta:
  flow_id: telegram-weather
  description: >
    Ask the user for a location and return a 3 day weather forecast

tools:
  - weather_api

channels:
  - telegram

nodes:
  telegram_in:
    channel: telegram
    in: true

  extract_city:
    qa:
      welcome_template: "Hi there! Let's get your weather forecast."
      questions:
        - id: q_location
          prompt: "👉 What location would you like a forecast for?"
          answer_type: text
          state_key: q
          max_words: 3
      fallback_agent:
        type: ollama
        model: gemma:instruct
        task: |
          The user wants the weather forecast. Find out for which city or location they want the weather.
          Assign it to the state value \`q\`. If they mention the number of days, capture it as \`days\`.
      routing:
        - to: forecast_weather

  forecast_weather:
    tool:
      name: weather_api
      action: forecast_weather
    parameters:
      q: "{{extract_city.payload.city}}"
      days: 3

  weather_out_template:
    template: |
      🌤️ Weather forecast for {{payload.location.name}}:

      {{#each payload.forecast.forecastday}}
      📅 Day {{@indexPlusOne}} ({{this.date}}):
      • High: {{this.day.maxtemp_c}}°C
      • Low: {{this.day.mintemp_c}}°C
      • Condition: {{this.day.condition.text}}
      {{/each}}

  telegram_out:
    channel: telegram
    out: true

connections:
  telegram_in:
    - extract_city
  extract_city:
    - forecast_weather
  forecast_weather:
    - weather_out_template
  weather_out_template:
    - telegram_out`}
          </code>
        </pre>
      </div>
    ),
  },
  {
    id: "flow-operations",
    title: "Controlling Flows, Channels & Tools",
    summary: "Validate, deploy, start, stop, and inspect your workers with the Greentic CLI.",
    content: (
      <pre>
        <code className="language-bash">
          {`# Validate a flow before deploying
greentic flow validate <file>.ygtc

# Deploy and run
greentic flow deploy <file>.ygtc
greentic flow start <flow-id>

# Stop when finished
greentic flow stop <flow-id>`}
        </code>
      </pre>
    ),
  },
  {
    id: "roadmap",
    title: "Roadmap & Coming Soon",
    summary: "What is shipping next as Greentic moves toward the v1.0.0 vision.",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
            <Rocket className="w-5 h-5 text-primary" />
            Near-Term
          </h3>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>v0.3.0 – OAuth-enabled MCP tools.</li>
            <li>v0.4.0 – Serverless cloud deployment.</li>
            <li>More agentic capabilities: memory, vector search, A2A collaboration.</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
            <BookOpen className="w-5 h-5 text-primary" />
            Vision
          </h3>
          <p className="text-muted-foreground">
            At v1.0.0, anyone can ask Greentic (via Slack, WhatsApp, Telegram, email, or voice) to generate a bespoke
            digital worker from a single sentence. Contributors, partners, and sponsors share in the value they unlock.
          </p>
          <a
            className="text-primary hover:underline text-sm font-medium"
            href="https://github.com/greentic-ai/greentic/blob/main/docs/VISION.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full vision →
          </a>
        </div>
      </div>
    ),
  },
];

const guides = [
  {
    title: "Build MCP Tools",
    description: "Create secure WebAssembly tools with wit-bindgen, secrets handling, and JSON schemas.",
    icon: FileCode,
    href: "https://github.com/greentic-ai/greentic/blob/main/docs/TOOLS.md",
  },
  {
    title: "Telegram Channel Setup",
    description: "Generate a bot token with BotFather and connect Telegram to your flows in minutes.",
    icon: MessageCircle,
    href: "https://github.com/greentic-ai/greentic/blob/main/docs/TELEGRAM.md",
  },
  {
    title: "Channel Plugin Guide",
    description: "Implement JSON-RPC plugins in Rust, Node.js, Go, or any language that speaks stdio.",
    icon: Plug,
    href: "https://github.com/greentic-ai/greentic/blob/main/docs/PLUGIN.md",
  },
  {
    title: "Process Nodes",
    description: "Use debug, script, template, QA, and Wasm process nodes to control your flows.",
    icon: Workflow,
    href: "https://github.com/greentic-ai/greentic/blob/main/docs/PROCESSES.md",
  },
  {
    title: "Contributing Guide",
    description: "Fork the repo, run the test suite, and ship improvements with our community.",
    icon: Users,
    href: "https://github.com/greentic-ai/greentic/blob/main/docs/CONTRIBUTING.md",
  },
  {
    title: "Security Policy",
    description: "Report vulnerabilities responsibly and keep Greentic safe for everyone.",
    icon: Shield,
    href: "https://github.com/greentic-ai/greentic/blob/main/docs/SECURITY.md",
  },
  {
    title: "Code of Conduct",
    description: "Help maintain a respectful, inclusive community for all contributors.",
    icon: Users,
    href: "https://github.com/greentic-ai/greentic/blob/main/docs/CODE_OF_CONDUCT.md",
  },
];

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
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

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[240px_1fr_220px] gap-8">
          <aside className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-3">Docs Index</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="space-y-16">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-primary-glow/10 p-10 shadow-sm">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-primary font-semibold">Documentation Hub</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Build, run, and scale digital workers with Greentic
                  </h1>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Everything you need from the{" "}
                  <a
                    href="https://github.com/greentic-ai/greentic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Greentic repository
                  </a>{" "}
                  to create MCP tools, channel plugins, Ollama agents, and production-grade flows.
                </p>
              </div>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {sections.indexOf(section) + 1}
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
                    <p className="text-muted-foreground">{section.summary}</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none dark:prose-invert">{section.content}</div>
              </section>
            ))}

            <section id="resources" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  {sections.length + 1}
                </span>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Deep Dive Guides</h2>
                  <p className="text-muted-foreground">
                    Explore every Markdown guide from the repository with summaries tailored for digital worker builders.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {guides.map((guide) => (
                  <a
                    key={guide.title}
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <guide.icon className="w-6 h-6 text-primary" />
                    <h3 className="mt-4 text-xl font-semibold text-foreground">{guide.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{guide.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      Read guide →
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase">Quick Links</h3>
              <div className="space-y-3 text-sm">
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="https://github.com/greentic-ai/greentic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="https://github.com/greentic-ai/greentic/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="w-4 h-4" />
                  README Overview
                </a>
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="mailto:info@greentic.ai"
                >
                  <Users className="w-4 h-4" />
                  Contact Support
                </a>
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="mailto:security@greentic.ai"
                >
                  <Lock className="w-4 h-4" />
                  Report a Vulnerability
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

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
                Contact:{" "}
                <a href="mailto:info@greentic.ai" className="text-primary hover:underline">
                  info@greentic.ai
                </a>
              </p>
            </div>

            <div className="flex gap-8 text-muted-foreground">
              <Link to="/docs" className="hover:text-primary transition-colors">
                Docs
              </Link>
              <a
                href="https://github.com/greentic-ai/greentic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
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

export default Docs;
