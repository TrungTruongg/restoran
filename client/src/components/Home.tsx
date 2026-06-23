import About from "./About";
import { Button } from "./ui/button";
import Hero from "@/assets/hero.png"

const Home = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-accent-amber/30">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center brightness-[0.3] bg-(image:--bg-hero)"></div>
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="reveal">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary mb-6">
              Enjoy Our <br />
              <span className="text-accent-amber">Delicious Meal</span>
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted mb-10 max-w-xl leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit clita duo justo magna dolore erat amet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent-amber px-8 py-7 font-display-lg text-[18px] text-text-primary font-bold hover:scale-105 transition-transform shadow-xl shadow-accent-amber/20"
              >
                Book A Table
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-[18px] text-text-primary px-8 py-7 font-display-lg text-body-md font-bold hover:bg-white hover:text-black hover:border-white transition-all"
              >
                View Menu
              </Button>
            </div>
          </div>
          <div className="hidden lg:block reveal delay-200">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent-amber rounded-full opacity-5 blur-3xl animate-pulse"></div>
              <img
                className="relative z-10 w-full h-full object-contain animate-spin-slow animate-spin animation-duration-[60s]"
                data-alt="A top-down professional food photograph of a round barbecue grill filled with sizzling premium steaks, colorful vegetable skewers with tomatoes and bell peppers, and succulent sausages. The lighting is warm and dramatic, highlighting the textures of the charred meat and vibrant vegetables against a dark, atmospheric restaurant background."
                src={Hero}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow flex flex-col items-center gap-2 opacity-50">
          <span className="material-symbols-outlined text-text-primary">
            mouse
          </span>
          <div className="w-px h-12 bg-linear-to-b from-text-primary to-transparent"></div>
        </div>
      </section>
      {/* <!-- Services Section --> */}
      
     
     <About />

      <button
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-amber rounded-full text-background-deep flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:scale-110 shadow-lg z-50"
        id="backToTop"
      >
        <span className="material-symbols-outlined">expand_less</span>
      </button>
    </div>
  );
};

export default Home;
