const Footer = () => {
  return (
    <footer className="bg-background-deep pt-24 pb-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto mb-20">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-accent-amber text-3xl">
              restaurant
            </span>
            <span className="font-headline-sm text-accent-amber text-2xl">
              Restoran
            </span>
          </div>
          <p className="font-heebo text-body-md text-text-muted leading-relaxed mb-8">
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit, sed stet lorem sit clita.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-accent-amber text-background-deep flex items-center justify-center hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                face_nod
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-accent-amber text-background-deep flex items-center justify-center hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-accent-amber text-background-deep flex items-center justify-center hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                camera_alt
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-accent-amber text-background-deep flex items-center justify-center hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                play_arrow
              </span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline-sm text-text-primary mb-8 border-b-2 border-accent-amber w-fit pb-2">
            Quick Links
          </h4>
          <div className="flex flex-col gap-4">
            <a
              className="text-text-muted hover:text-accent-amber transition-colors flex items-center gap-2 group"
              href="#"
            >
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>{" "}
              About Us
            </a>
            <a
              className="text-text-muted hover:text-accent-amber transition-colors flex items-center gap-2 group"
              href="#"
            >
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>{" "}
              Contact Us
            </a>
            <a
              className="text-text-muted hover:text-accent-amber transition-colors flex items-center gap-2 group"
              href="#"
            >
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>{" "}
              Our Services
            </a>
            <a
              className="text-text-muted hover:text-accent-amber transition-colors flex items-center gap-2 group"
              href="#"
            >
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>{" "}
              Terms &amp; Condition
            </a>
            <a
              className="text-text-muted hover:text-accent-amber transition-colors flex items-center gap-2 group"
              href="#"
            >
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>{" "}
              Support
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline-sm text-text-primary mb-8 border-b-2 border-accent-amber w-fit pb-2">
            Contact Info
          </h4>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 text-text-muted">
              <span className="material-symbols-outlined text-accent-amber">
                location_on
              </span>
              <p className="text-body-md">123 Street, New York, USA</p>
            </div>
            <div className="flex items-start gap-4 text-text-muted">
              <span className="material-symbols-outlined text-accent-amber">
                call
              </span>
              <p className="text-body-md">+012 345 67890</p>
            </div>
            <div className="flex items-start gap-4 text-text-muted">
              <span className="material-symbols-outlined text-accent-amber">
                mail
              </span>
              <p className="text-body-md">info@example.com</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-headline-sm text-text-primary mb-8 border-b-2 border-accent-amber w-fit pb-2">
            Opening Hours
          </h4>
          <div className="space-y-4">
            <div className="border-b border-white/5 pb-2">
              <p className="text-text-primary font-bold">Monday - Friday</p>
              <p className="text-accent-amber">09:00 AM - 09:00 PM</p>
            </div>
            <div className="border-b border-white/5 pb-2">
              <p className="text-text-primary font-bold">Saturday</p>
              <p className="text-accent-amber">09:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-text-primary font-bold">Sunday</p>
              <p className="text-accent-amber">10:00 AM - 08:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm">
          © 2024 <span className="text-accent-amber">Restoran</span>. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a
            className="text-text-muted text-sm hover:text-accent-amber transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-text-muted text-sm hover:text-accent-amber transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-text-muted text-sm hover:text-accent-amber transition-colors"
            href="#"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
