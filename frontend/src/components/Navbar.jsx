import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const exploreItems = [
  {
    title: "Popular Restaurants",
    href: "/explore/popular",
    description: "Discover the most loved restaurants in your area.",
  },
  {
    title: "New Arrivals",
    href: "/explore/new",
    description: "Check out the latest additions to our restaurant collection.",
  },
  {
    title: "Cuisines",
    href: "/explore/cuisines",
    description: "Browse restaurants by your favorite cuisine type.",
  },
  {
    title: "Special Offers",
    href: "/explore/offers",
    description: "Great deals and discounts from selected restaurants.",
  },
];

export default function Navbar() {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="container flex h-16 items-center px-4 mx-auto">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Restaurant App</span>
        </Link>

        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {exploreItems.map((item) => (
                    <Link key={item.href} to={item.href}>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
