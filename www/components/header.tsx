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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

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
      { name: "Industries", href: "/use-cases/industries" },
      { name: "Smart City", href: "/smart-city" },
      { name: "Smart Campus", href: "/use-cases/smart-campus" },
      { name: "Utilities", href: "/use-cases/utilities" },
    ],
  },
  { name: "About us", href: "/about" },
];

export function Header() {
  return (
    <header className="w-full px-4 py-4 md:px-8 sticky top-0 z-50 shadow-md border-b bg-black border-white/10">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/home/vandyamlogo-removebg-preview.png"
            alt="Vandyam Logo"
            width={200}
            height={70}
            priority
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.subItems ? (
                  <>
                    {/* Trigger */}
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent transition-all duration-300 rounded-full px-5 font-semibold text-white hover:bg-white/10 text-base"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>

                    {/* Dropdown Content */}
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-4 p-6 md:w-[600px] md:grid-cols-2 bg-white rounded-3xl shadow-2xl border border-gray-100">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block rounded-2xl p-4 transition-all duration-300 hover:bg-blue-50 group/item"
                              >
                                <div className="font-bold text-gray-900 group-hover/item:text-blue-700">
                                  {subItem.name}
                                </div>
                                <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                                  Explore our {subItem.name} solutions
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="transition-all duration-300 font-semibold px-5 py-2 rounded-full text-white hover:bg-white/10 text-base block"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden bg-white/10 border-white/20 hover:bg-white/20 text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] bg-black border-l border-white/10">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-8">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-blue-400 font-medium py-2 block text-base"
                  >
                    {item.name}
                  </Link>

                  {item.subItems && (
                    <div className="ml-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-white/70 hover:text-blue-400 block text-base"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}