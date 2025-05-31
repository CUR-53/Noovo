import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, ShoppingBag, Zap, CheckCircle, Users, BarChart, Terminal, Database, Globe, Phone, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileMenu } from '@/components/mobile-menu';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">
              Noovo<span className="text-emerald-500">.</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Portfolio
            </Link>
            <Link href="#tech-stack" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Tech Stack
            </Link>
            <Link href="#process" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Process
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileMenu />
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black">
              <Link href="#contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-background to-background dark:from-zinc-900 dark:via-background dark:to-background z-0"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-0"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center max-w-max space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                  <span>Next.js & Shopify Specialists</span>
                  <span className="rounded-full bg-emerald-500 px-1.5 py-0.5 text-xs text-black">v15</span>
                </div>
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    We Build <span className="text-emerald-500">Digital</span> Experiences That <span className="text-emerald-500">Perform</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Leveraging cutting-edge technologies to create high-performance Next.js websites and custom Shopify applications that drive results.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                    <Link href="#contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#portfolio">View Our Work</Link>
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Server Components</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>App Router</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Headless Commerce</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-xl border border-border bg-muted/50 p-2">
                <div className="absolute top-2 left-2 right-2 flex h-6 items-center space-x-2 rounded-t-md bg-muted px-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-muted-foreground">noovo.dk</div>
                </div>
                <div className="mt-6 h-[458px] w-full overflow-hidden rounded-md">
                  <Image src="/tech-code-interface.png" width={550} height={550} alt="Code interface visualization" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/20 via-muted/50 to-muted/50 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Our Services</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Advanced Development Solutions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We deliver cutting-edge web applications and e-commerce solutions using the latest technologies and best practices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-card">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-emerald-500">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Next.js Development</h3>
                  <p className="text-muted-foreground">
                    We build blazing-fast, SEO-friendly websites and web applications using Next.js and React, leveraging the latest features like Server
                    Components and App Router.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      React Server Components
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">App Router</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Server Actions
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Edge Runtime</span>
                  </div>
                  <div className="mt-2 rounded-lg bg-muted/50 p-4">
                    <code className="text-xs text-emerald-400">
                      <pre>
                        {`// Server Component
                          export default async function Page() {
                            const data = await getData()
                            return <Component data={data} />
                          }`}
                      </pre>
                    </code>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-card">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-emerald-500">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Shopify App Development</h3>
                  <p className="text-muted-foreground">
                    We create custom Shopify applications that extend your stores functionality and enhance the shopping experience for your customers.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Headless Shopify
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Storefront API
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Custom Storefronts
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Shopify Plus</span>
                  </div>
                  <div className="mt-2 rounded-lg bg-muted/50 p-4">
                    <code className="text-xs text-emerald-400">
                      <pre>
                        {`// Shopify Storefront API Query
                          const PRODUCTS_QUERY = \`
                            query Products {
                              products(first: 10) {
                                edges {
                                  node {
                                    id
                                    title
                                    handle
                                  }
                                }
                              }
                            }
                          \``}
                      </pre>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Tech Stack</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cutting-Edge Technologies</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We leverage the latest technologies to build fast, scalable, and maintainable applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Terminal className="h-10 w-10" />,
                  title: 'Next.js 15',
                  description: 'The React framework for building modern web applications with server components and app router.',
                },
                {
                  icon: <ShoppingBag className="h-10 w-10" />,
                  title: 'Shopify',
                  description: 'Headless commerce solutions with custom storefronts and Shopify Plus capabilities.',
                },
                {
                  icon: <Database className="h-10 w-10" />,
                  title: 'Serverless',
                  description: 'Vercel, Supabase, and other serverless technologies for scalable applications.',
                },
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: 'TypeScript',
                  description: 'Type-safe code that scales with your project and team for better maintainability.',
                },
              ].map((tech, index) => (
                <div key={index} className="group flex flex-col items-center text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted/30 text-emerald-500 transition-colors group-hover:bg-emerald-500/10">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold">{tech.title}</h3>
                  <p className="mt-2 text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Our Work</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Take a look at some of our recent projects that showcase our expertise in Next.js and Shopify development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'A headless Shopify store built with Next.js',
                  image: '/placeholder-2zava.png',
                  tags: ['Next.js', 'Shopify', 'Headless'],
                },
                {
                  title: 'SaaS Dashboard',
                  description: 'A responsive dashboard for a SaaS application',
                  image: '/placeholder-2zava.png',
                  tags: ['React', 'TypeScript', 'Tailwind'],
                },
                {
                  title: 'Shopify Inventory App',
                  description: 'Custom Shopify app for inventory management',
                  image: '/placeholder-qcpkm.png',
                  tags: ['Shopify App', 'Node.js', 'React'],
                },
                {
                  title: 'Corporate Website',
                  description: 'High-performance Next.js website with CMS',
                  image: '/placeholder.svg?height=400&width=600&query=sleek corporate website with dark theme',
                  tags: ['Next.js', 'Sanity CMS', 'TypeScript'],
                },
                {
                  title: 'Product Customizer',
                  description: 'Interactive product customizer for Shopify',
                  image: '/placeholder.svg?height=400&width=600&query=3D product customizer interface dark theme',
                  tags: ['Three.js', 'Shopify', 'WebGL'],
                },
                {
                  title: 'Marketing Platform',
                  description: 'Next.js marketing platform with analytics',
                  image: '/placeholder.svg?height=400&width=600&query=marketing analytics dashboard dark futuristic',
                  tags: ['Next.js', 'Chart.js', 'API'],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-emerald-500/50"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" className="mt-2 p-0 text-emerald-500 hover:text-emerald-400">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/10 via-background to-background z-0"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Our Process</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How We Work</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our streamlined development process ensures efficient delivery of high-quality solutions.
                </p>
              </div>
            </div>
            <div className="relative mx-auto max-w-5xl py-12">
              <div className="absolute left-[125px] top-[50px] h-[70%] w-0.5 -translate-x-1/2 bg-border"></div>
              {[
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'Discovery',
                  description: 'We start by understanding your business goals, target audience, and project requirements.',
                  code: '// Initial requirements gathering\nconst projectScope = {\n  goals: [],\n  audience: [],\n  features: []\n}',
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: 'Design & Planning',
                  description: 'Our team creates wireframes, designs, and technical specifications for your approval.',
                  code: "// System architecture\nconst architecture = {\n  frontend: 'Next.js',\n  backend: 'Node.js',\n  database: 'PostgreSQL'\n}",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Development',
                  description: 'We build your solution using agile methodologies with regular updates and feedback.',
                  code: "// Agile sprint planning\nconst sprint = {\n  duration: '2 weeks',\n  tasks: [],\n  deliverables: []\n}",
                },
                {
                  icon: <BarChart className="h-6 w-6" />,
                  title: 'Launch & Support',
                  description: 'After thorough testing, we deploy your project and provide ongoing maintenance.',
                  code: "// CI/CD pipeline\ndeploy({\n  environment: 'production',\n  version: '1.0.0',\n  rollback: true\n})",
                },
              ].map((step, index) => (
                <div key={index} className="relative mb-12 grid grid-cols-1 gap-6 md:grid-cols-[1fr_3fr]">
                  <div className="flex justify-end md:justify-center">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-emerald-500">
                      {step.icon}
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-black">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="relative z-20 rounded-xl border border-border bg-card/50 p-6">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                    <div className="mt-4 rounded-lg bg-muted/50 p-3">
                      <code className="text-xs text-emerald-400">
                        <pre>{step.code}</pre>
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Testimonials</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Dont just take our word for it. Heres what our clients have to say about working with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    'Noovo transformed our online presence with a lightning-fast Next.js website that significantly improved our conversion rates and user engagement metrics.',
                  author: 'Sarah Johnson',
                  role: 'CTO, TechCorp',
                  rating: 5,
                },
                {
                  quote:
                    'Their Shopify expertise helped us create a custom app that streamlined our inventory management and saved us countless hours of manual work.',
                  author: 'Michael Chen',
                  role: 'E-commerce Director, StyleBoutique',
                  rating: 5,
                },
                {
                  quote:
                    'Working with Noovo was a game-changer for our startup. They delivered a scalable solution that continues to grow with our business needs.',
                  author: 'Alex Rodriguez',
                  role: 'Founder, InnovateSaaS',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50"
                >
                  <div>
                    <div className="flex gap-0.5 text-emerald-500">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                    </div>
                    <blockquote className="mt-4">
                      <p className="text-muted-foreground">{testimonial.quote}</p>
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/20 via-background to-background z-0"></div>
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 relative z-10 mx-auto">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Transform Your Digital Presence?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Lets discuss how we can help you achieve your business goals with our Next.js and Shopify development expertise.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-emerald-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-emerald-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="font-medium">hello@noovo.dev</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project-type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Project Type
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nextjs">Next.js Website</SelectItem>
                      <SelectItem value="shopify">Shopify Development</SelectItem>
                      <SelectItem value="headless">Headless Commerce</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project" className="min-h-[120px] bg-background/50" />
                </div>
              </div>
              <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black">
                Send Message
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-emerald-500" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} Noovo. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
