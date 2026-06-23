import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Home } from "lucide-react";

const Service = () => {
  return (
    <main className="py-20 bg-background text-on-surface selection:bg-accent-amber/30">
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-20 text-center animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>

          <Breadcrumb className="flex items-center justify-center gap-2 text-sm font-heebo">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="flex items-center justify-center gap-2 text-[16px] font-heebo"
                  asChild
                >
                  <Link to="/">
                    <Home size={16} />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-accent-amber font-semibold text-[16px]">
                  Service
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <section className="py-20 bg-background px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="reveal group p-8 rounded-xl bg-surface-container-low hover:bg-accent-amber transition-all duration-500 cursor-default">
            <span className="material-symbols-outlined text-accent-amber text-5xl mb-6 group-hover:text-background-deep transition-colors">
              groups
            </span>
            <h3 className="font-headline-sm text-headline-sm text-text-primary mb-3 group-hover:text-background-deep transition-colors">
              Master Chefs
            </h3>
            <p className="font-body-md text-body-md text-text-muted group-hover:text-background-deep/80 transition-colors">
              Diam elitr kasd sed at elitr sed ipsum justo amet kasd eos rebum.
            </p>
          </div>
          <div className="reveal delay-100 group p-8 rounded-xl bg-surface-container-low hover:bg-accent-amber transition-all duration-500 cursor-default">
            <span className="material-symbols-outlined text-accent-amber text-5xl mb-6 group-hover:text-background-deep transition-colors">
              restaurant
            </span>
            <h3 className="font-headline-sm text-headline-sm text-text-primary mb-3 group-hover:text-background-deep transition-colors">
              Quality Food
            </h3>
            <p className="font-body-md text-body-md text-text-muted group-hover:text-background-deep/80 transition-colors">
              Diam elitr kasd sed at elitr sed ipsum justo amet kasd eos rebum.
            </p>
          </div>
          <div className="reveal delay-200 group p-8 rounded-xl bg-surface-container-low hover:bg-accent-amber transition-all duration-500 cursor-default">
            <span className="material-symbols-outlined text-accent-amber text-5xl mb-6 group-hover:text-background-deep transition-colors">
              shopping_cart
            </span>
            <h3 className="font-headline-sm text-headline-sm text-text-primary mb-3 group-hover:text-background-deep transition-colors">
              Online Order
            </h3>
            <p className="font-body-md text-body-md text-text-muted group-hover:text-background-deep/80 transition-colors">
              Diam elitr kasd sed at elitr sed ipsum justo amet kasd eos rebum.
            </p>
          </div>
          <div className="reveal delay-300 group p-8 rounded-xl bg-surface-container-low hover:bg-accent-amber transition-all duration-500 cursor-default">
            <span className="material-symbols-outlined text-accent-amber text-5xl mb-6 group-hover:text-background-deep transition-colors">
              support_agent
            </span>
            <h3 className="font-headline-sm text-headline-sm text-text-primary mb-3 group-hover:text-background-deep transition-colors">
              24/7 Service
            </h3>
            <p className="font-body-md text-body-md text-text-muted group-hover:text-background-deep/80 transition-colors">
              Diam elitr kasd sed at elitr sed ipsum justo amet kasd eos rebum.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
