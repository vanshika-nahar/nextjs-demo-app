import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";

const teamMembers = [
  {
    name: "John Doe",
    role: "Chief Executive Officer",
    description: "Leads the company strategy and overall business direction.",
  },
  {
    name: "Sarah Smith",
    role: "Chief Technology Officer",
    description: "Responsible for technology, engineering, and innovation.",
  },
  {
    name: "Mike Johnson",
    role: "Operations Head",
    description: "Manages operations and ensures smooth business processes.",
  },
];

const services = [
  {
    title: "Company Management",
    description:
      "Manage company information, stakeholders, and business operations from one place.",
  },
  {
    title: "Business Analytics",
    description:
      "Get meaningful insights from your business data to make informed decisions.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive processes and improve operational efficiency.",
  },
];

const reasons = [
  {
    title: "Simple & Easy",
    description:
      "A clean and intuitive platform designed to make your work easier.",
  },
  {
    title: "Secure",
    description:
      "Your business information is handled with security and reliability in mind.",
  },
  {
    title: "Scalable",
    description:
      "Built to support your business as it grows.",
  },
  {
    title: "Reliable Support",
    description:
      "Our team is available to help you whenever you need assistance.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a
            href="/"
            data-testid="logo"
            className="text-xl font-bold tracking-tight"
          >
            CompanyName
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              data-testid="nav-home"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </a>

            <a
              href="/dashboard"
              data-testid="nav-dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Dashboard
            </a>

            <a
              href="/onboard-company"
              data-testid="nav-company"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Company
            </a>
          </nav>

          <a
            href="#contact"
            data-testid="header-contact-button"
            className={buttonVariants({ variant: "default", size: "default" })}
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        data-testid="hero-section"
        className="border-b bg-muted/40"
      >
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border bg-background px-4 py-2 text-sm font-medium">
              Smart Business Management
            </div>

            <h1
              data-testid="hero-heading"
              className="text-4xl font-bold tracking-tight md:text-6xl"
            >
              Build Better.
              <br />
              <span className="text-primary">Grow Faster.</span>
            </h1>

            <p
              data-testid="hero-description"
              className="max-w-xl text-lg text-muted-foreground"
            >
              A simple and powerful platform designed to help businesses
              manage their operations, teams, and companies efficiently.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/company"
                className={buttonVariants({ size: "lg" })}
                data-testid="hero-get-started"
              >
                Get Started
              </a>

              <a
                href="#about"
                className={buttonVariants({ variant: "outline", size: "lg" })}
                data-testid="hero-learn-more"
              >
                Learn More
              </a>
            </div>
          </div>

          <div
            data-testid="hero-card"
            className="rounded-2xl border bg-background p-8 shadow-sm"
          >
            <div className="space-y-6">
              <div className="h-48 rounded-xl bg-muted" style={{ backgroundImage: "url('https://i.pinimg.com/736x/b9/0c/be/b90cbe10ddf242f7bd05f82451fd84a6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />

              <div>
                <h2 className="text-2xl font-semibold">
                  Everything in one place
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Manage your business, monitor operations, and collaborate
                  with your team using a single platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        data-testid="about-section"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            We help businesses work smarter
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our platform brings important business processes together so
            organizations can manage their operations efficiently, reduce
            manual work, and focus on growth.
          </p>
        </div>
      </section>

      <Separator />

      {/* Why Choose Us */}
      <section
        id="why-choose-us"
        data-testid="why-choose-us-section"
        className="bg-muted/40 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built around your business
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <Card key={reason.title} data-testid="reason-card">
                <CardHeader>
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section
        id="services"
        data-testid="services-section"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Solutions designed for modern businesses
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} data-testid="service-card">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section
        id="team"
        data-testid="team-section"
        className="bg-muted/40 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Meet our team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A team focused on building simple, reliable, and scalable
              solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} data-testid="team-member-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-muted text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>

                  <CardTitle>{member.name}</CardTitle>

                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        data-testid="contact-section"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Get in touch with us
            </h2>

            <p className="mt-4 text-muted-foreground">
              Have a question or want to know more? Send us a message.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <form
                data-testid="contact-form"
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                    >
                      Name
                    </label>

                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      data-testid="contact-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >
                      Email
                    </label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      data-testid="contact-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium"
                  >
                    Subject
                  </label>

                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    data-testid="contact-subject"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium"
                  >
                    Message
                  </label>

                  <Input
                    id="message"
                    name="message"
                    placeholder="Write your message"
                    className="min-h-32"
                    data-testid="contact-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  data-testid="contact-submit"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-testid="footer"
        className="border-t bg-muted/40"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">CompanyName</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Building better solutions for modern businesses.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm">
            <a
              href="/"
              data-testid="footer-home"
              className="hover:text-primary"
            >
              Home
            </a>

            <a
              href="/dashboard"
              data-testid="footer-dashboard"
              className="hover:text-primary"
            >
              Dashboard
            </a>

            <a
              href="/company"
              data-testid="footer-company"
              className="hover:text-primary"
            >
              Company
            </a>

            <a
              href="#contact"
              data-testid="footer-contact"
              className="hover:text-primary"
            >
              Contact
            </a>
          </nav>
        </div>

        <Separator />

        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CompanyName. All rights reserved.
        </div>
      </footer>
    </main>
  );
}