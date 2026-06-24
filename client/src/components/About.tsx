import About1 from "@/assets/about-1.png";
import About2 from "@/assets/about-2.png";
import About3 from "@/assets/about-3.png";
import About4 from "@/assets/about-4.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const About = () => {
  return (
    <main className="py-20 bg-background text-on-surface selection:bg-accent-amber/30 ">
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-20 text-center animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About Us
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
                  About
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* <!-- Bento Grid Images --> */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-150 reveal">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                data-alt="A luxurious interior shot of a modern restaurant at night with warm, ambient lighting, wooden furniture, and elegant architectural pillars. The atmosphere is sophisticated and inviting, with a focus on premium materials and high-end design."
                src={About1}
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl mt-12">
              <img
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                data-alt="A stylish bar area within a high-end restaurant, featuring a long counter with backlit shelves of premium liquor, warm overhead lighting, and modern bar stools. The scene captures the nocturnal exclusivity of the brand."
                src={About2}
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl -mt-12">
              <img
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                data-alt="A close-up shot of a gourmet salad being served, showing fresh vibrant greens, textures, and fine plating details. The soft lighting emphasizes the freshness and professional preparation of the food."
                src={About3}
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                data-alt="A beautifully plated main course featuring grilled meats and artisanal sides arranged on a rustic wooden board. The composition is artistic and focuses on the culinary excellence of the master chefs."
                src={About4}
              />
            </div>
          </div>
          <div className="reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-accent-amber"></div>
              <span className="text-accent-amber font-accent-text text-xl italic font-semibold">
                About Us
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary mb-8 leading-tight">
              Welcome to <br />
              <span className="flex items-baseline gap-3">
                <span className="material-symbols-outlined text-accent-amber text-4xl">
                  restaurant
                </span>
                <span className="text-accent-amber">Restoran</span>
              </span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted mb-6 leading-relaxed">
              We are a passionate team dedicated to bringing you fresh,
              delicious food made from quality ingredients. Every dish is
              prepared with care and served with heart.
            </p>
            <p className="font-body-md text-body-md text-text-muted mb-10 leading-relaxed">
              Whether you're here for a quick bite or a special night out, we
              make sure every visit feels warm, welcoming, and worth coming back
              for.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-6 border-l-4 border-accent-amber pl-6">
                <span className="text-accent-amber font-display-lg text-5xl">
                  15
                </span>
                <div>
                  <p className="text-text-muted font-body-md uppercase tracking-wider text-xs">
                    Years of
                  </p>
                  <h4 className="text-text-primary font-headline-sm text-lg font-bold uppercase">
                    Experience
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-6 border-l-4 border-accent-amber pl-6">
                <span className="text-accent-amber font-display-lg text-5xl">
                  50
                </span>
                <div>
                  <p className="text-text-muted font-body-md uppercase tracking-wider text-xs">
                    Popular
                  </p>
                  <h4 className="text-text-primary font-headline-sm text-lg font-bold uppercase">
                    Master Chefs
                  </h4>
                </div>
              </div>
            </div>
            <button className="bg-accent-amber text-background-deep px-10 py-4 rounded-lg font-display-lg text-body-md font-bold hover:shadow-2xl hover:shadow-accent-amber/30 transition-all">
              Read More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
