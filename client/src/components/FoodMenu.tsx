import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Burger from "@/assets/burger.png";
import Beef from "@/assets/beef.png";
import Beef2 from "@/assets/beef-2.png";
import Beef3 from "@/assets/beef-3.png";
import Pizza from "@/assets/pizza.png";
import Pizza2 from "@/assets/pizza-2.png";
import Chicken from "@/assets/chicken-1.png";
import Food1 from "@/assets/food-1.png";
import { Home, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const menuItems = [
  {
    name: "Chicken Burger",
    type: "burger",
    price: "$115",
    des: "Juicy grilled chicken fillet with crispy lettuce, tomato, and our signature golden sauce.",
    src: Burger,
  },
  {
    name: "Roast Brisket",
    type: "beef",
    price: "$130",
    des: "Slow-roasted beef brisket with smoky seasoning, tender and full of rich, deep flavor.",
    src: Beef,
  },
  {
    name: "Pepperoni Pizza",
    type: "pizza",
    price: "$145",
    des: "Classic thin-crust pizza loaded with spicy pepperoni, melted mozzarella, and tangy tomato sauce.",
    src: Pizza,
  },
  {
    name: "Fried Chicken",
    type: "snack",
    price: "$85",
    des: "Crispy golden-fried chicken with a perfectly seasoned crust and tender, juicy meat inside.",
    src: Chicken,
  },
  {
    name: "Roast Brisket",
    type: "beef",
    price: "$160",
    des: "Premium cut brisket roasted to perfection, served with herb-infused jus and seasonal sides.",
    src: Beef2,
  },
  {
    name: "Roast Brisket",
    type: "beef",
    price: "$155",
    des: "Melt-in-your-mouth brisket with caramelized crust, slow-cooked for hours in our secret spice blend.",
    src: Beef3,
  },
  {
    name: "Cheese Pizza",
    type: "pizza",
    price: "$175",
    des: "Four-cheese blend of mozzarella, cheddar, gouda, and parmesan on a buttery hand-tossed crust.",
    src: Pizza2,
  },
  {
    name: "Spring Roll",
    type: "snack",
    price: "$75",
    des: "Crispy golden rolls filled with fresh vegetables and glass noodles, served with sweet chili dipping sauce.",
    src: Food1,
  },
];

const FoodMenu = () => {
  return (
    <main className="py-20 bg-background text-on-surface selection:bg-accent-amber/30 ">
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-20 text-center animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Food Menu
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
                  Menu
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <section className="max-w-max-width mx-auto px-margin-desktop mb-16 text-center">
        <h2 className="font-headline-lg text-headline-lg mb-4 flex items-center justify-center gap-4">
          <span className="w-12 h-0.5 bg-accent-amber hidden md:block"></span>
          Most Popular Items
          <span className="w-12 h-0.5 bg-accent-amber hidden md:block"></span>
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto font-body-lg mb-10">
          Discover our chef's handpicked selection of global favorites, prepared
          with the finest ingredients and a touch of nocturnal elegance.
        </p>
        {/* <!-- Category Chips --> */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-2 rounded-lg bg-accent-amber text-on-primary-container font-label-lg shadow-lg hover:shadow-accent-amber/20 transition-all">
            All
          </button>
          <button className="px-8 py-2 rounded-lg bg-surface-container text-on-surface font-label-lg hover:bg-surface-container-highest transition-all">
            Burgers
          </button>
          <button className="px-8 py-2 rounded-lg bg-surface-container text-on-surface font-label-lg hover:bg-surface-container-highest transition-all">
            Snacks
          </button>
          <button className="px-8 py-2 rounded-lg bg-surface-container text-on-surface font-label-lg hover:bg-surface-container-highest transition-all">
            Beverages
          </button>
        </div>
      </section>

      <section className="max-w-max-width mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {menuItems.map((item) => (
            <Card className="relative mx-auto w-full max-w-sm pt-0 group bg-surface-card rounded-xl border-black overflow-hidden transition-all duration-500 ring-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt={item.name}
                  src={item.src}
                />
                <div className="absolute top-4 right-4 bg-accent-amber text-on-primary-container font-bold px-3 py-1 rounded-md shadow-md text-sm">
                  {item.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-headline-sm text-headline-sm! mb-2">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-text-muted! line-clamp-2">
                  {item.des}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t-transparent">
                <Button
                  size="lg"
                  className="w-full py-6 bg-accent-amber/10 border border-accent-amber/30 text-accent-amber rounded-lg font-label-lg hover:bg-accent-amber hover:text-on-primary-container transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Order Now
                  <ShoppingCart size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoodMenu;
