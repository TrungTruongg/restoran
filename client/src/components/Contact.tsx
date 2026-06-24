import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Clock4, Home, Mail, MapPin, Phone } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <main className="py-20 bg-background text-on-surface selection:bg-accent-amber/30 ">
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-20 text-center animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact
          </h1>

          <Breadcrumb className="flex items-center justify-center gap-2 text-sm font-heebo">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="flex items-center justify-center gap-2 text-[16px] font-heebo"
                  asChild
                >
                  <Link to="/">
                    <Home size={16} /> Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-accent-amber font-semibold text-[16px]">
                  Contact
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto animate-fade-up delay-100">
          <h2 className="font-headline-md text-4xl font-bold text-white mb-8">
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-lg text-text-muted block">
                  Your Name
                </label>
                <input
                  className="w-full bg-surface-container border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent-amber focus:border-accent-amber outline-none transition-all placeholder-white/20"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-lg text-text-muted block">
                  Your Email
                </label>
                <input
                  className="w-full bg-surface-container border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent-amber focus:border-accent-amber outline-none transition-all placeholder-white/20"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-lg text-text-muted block">
                Subject
              </label>
              <input
                className="w-full bg-surface-container border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent-amber focus:border-accent-amber outline-none transition-all placeholder-white/20"
                placeholder="How can we help?"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-lg text-text-muted block">
                Message
              </label>
              <Textarea
                className="w-full bg-surface-container border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent-amber focus:border-accent-amber outline-none transition-all placeholder-white/20 resize-none"
                placeholder="Your message here..."
                rows={6}
              />
            </div>
            <Button
              size="lg"
              className="bg-accent-amber text-text-muted font-bold font-heebo px-10 py-6 rounded-lg hover:shadow-[0_0_20px_rgba(254,161,22,0.3)] transition-all transform active:scale-95"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </section>

        {/* Right Column: Info */}
        <section className="animate-fade-up delay-200">
          <h2 className="font-headline-md text-white mb-8">Get in Touch</h2>
          <div className="space-y-10">
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 shrink-0 rounded-full bg-accent-amber flex items-center justify-center">
                <MapPin className="text-background-deep" />
              </div>
              <div>
                <h3 className="font-headline-sm text-accent-amber mb-1">
                  Address
                </h3>
                <p className="text-text-muted text-body-lg">
                  123 Street, New York, USA
                </p>
              </div>
            </div>
            {/* <!-- Phone --> */}
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 shrink-0 rounded-full bg-accent-amber flex items-center justify-center">
                <Phone className="text-background-deep" />
              </div>
              <div>
                <h3 className="font-headline-sm text-accent-amber mb-1">
                  Phone
                </h3>
                <p className="text-text-muted text-body-lg">+012 345 67890</p>
              </div>
            </div>
            {/* <!-- Email --> */}
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 shrink-0 rounded-full bg-accent-amber flex items-center justify-center">
                <Mail className="text-background-deep" />
              </div>
              <div>
                <h3 className="font-headline-sm text-accent-amber mb-1">
                  Email
                </h3>
                <p className="text-text-muted text-body-lg">info@example.com</p>
              </div>
            </div>
            {/* <!-- Opening Hours --> */}
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 shrink-0 rounded-full bg-accent-amber flex items-center justify-center">
                <Clock4 className="text-background-deep" />
              </div>
              <div className="w-full">
                <h3 className="font-headline-sm text-accent-amber mb-2">
                  Opening Hours
                </h3>
                <div className="space-y-2 max-w-sm">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-text-muted">Monday - Friday</span>
                    <span className="text-white font-medium">
                      09:00 AM - 09:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-text-muted">Saturday</span>
                    <span className="text-white font-medium">
                      09:00 AM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Sunday</span>
                    <span className="text-white font-medium">
                      10:00 AM - 08:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
