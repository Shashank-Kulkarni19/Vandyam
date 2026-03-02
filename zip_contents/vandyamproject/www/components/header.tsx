"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "LoRaWAN", href: "/lorawan" },
  {
    name: "Product",
    href: "/product",
    subItems: [
      { name: "Asset Tracker", href: "/product/asset-tracker" },
      { name: "Human Detector", href: "/product/human-detector" },
      { name: "Radio Collar", href: "/product/radio-collar" },
      { name: "Fire Alerting", href: "/product/fire-alerting" },
      { name: "Gateway Network", href: "/product/gateway-network" },
    ],
  },
  { name: "Services", href: "/services" },
  {
    name: "Use Cases",
    href: "/use-cases",
    subItems: [
      { name: "Forest", href: "/use-cases/forest" },
      { name: "Industry", href: "/use-cases/industry" },
      { name: "Smart City", href: "/use-cases/smart-city" },
      { name: "Highway", href: "/use-cases/highway" },
    ],
  },
  { name: "About us", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    // Add scroll listener on all pages for transparent header behavior
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header is transparent initially on home page, becomes white when scrolled
  // On other pages, it should always have a white background
  const shouldUseWhiteBackground = isScrolled || !isHomePage;

  return (
    <header
      className={cn(
        "w-full px-4 py-6 md:px-6 sticky top-0 z-50 transition-all duration-300",
        shouldUseWhiteBackground ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <Image src="/home/logo.png" alt="Vandyam Logo" width={180} height={60} className="h-12 w-auto object-contain drop-shadow-lg" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.subItems ? (
                  <>
                    {" "}
                    <NavigationMenuTrigger
                      className={cn(
                        "drop-shadow-lg bg-transparent transition-colors",
                        shouldUseWhiteBackground ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
                      )}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "transition-colors font-medium px-4 py-2 drop-shadow-lg",
                          shouldUseWhiteBackground ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white/95 backdrop-blur-md">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                                )}
                              >
                                <div className=" font-medium leading-none text-gray-800">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors font-medium px-4 py-2 drop-shadow-lg",
                      shouldUseWhiteBackground ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-4">
          <Button
            className={cn(
              "px-6 py-2 rounded-full shadow-lg transition-all",
              shouldUseWhiteBackground ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-400/90 hover:bg-blue-500 text-white backdrop-blur-sm"
            )}
          >
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "lg:hidden transition-all",
                shouldUseWhiteBackground
                  ? "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                  : "bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
              )}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-md">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-8">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href} className="text-gray-700 hover:text-blue-500 transition-colors font-medium py-2 block">
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-600 hover:text-blue-500 transition-colors py-1 block"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full mt-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
