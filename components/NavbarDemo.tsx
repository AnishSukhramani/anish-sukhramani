"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Get in Touch">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/anishsukhramani/" target="_blank">LinkedIn</HoveredLink>
            <HoveredLink href="https://github.com/AnishSukhramani" target="_blank">GitHub</HoveredLink>
            <HoveredLink href="https://x.com/AnishSukhramani" target="_blank">X</HoveredLink>
            <HoveredLink href="https://www.instagram.com/anishsukhramani" target="_blank">Instagram</HoveredLink>
          </div>
        </MenuItem>
        <div className="hidden sm:block lg:block">
            <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                title="Zien"
                href="https://zien.vercel.app/"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="A video conferencing web app featuring real-time latency analytics."
                />
                <ProductItem
                title="Price Tracker"
                href="https://trackprice-hazel.vercel.app/"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Amazon based web scrapping application."
                />
                <ProductItem
                title="KanBan Task Manager"
                href="https://task-manager-theta-gules.vercel.app/"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="KanBan type React based drag and drop task manager."
                />
                <ProductItem
                title="More..."
                href="https://github.com/AnishSukhramani"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Check out my latest pojects here."
                />
            </div>
            </MenuItem>
        </div>
        <MenuItem setActive={setActive} active={active} item="Certifications">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://drive.google.com/file/d/1dzvAAaFkqPsaDlUZoRC9HFYb_MwDbOlq/view?usp=sharing">Cloud Digital Leader</HoveredLink>
            <HoveredLink href="https://drive.google.com/file/d/13mG1RQ6FP-wZRkj3EBBLUswLBkf5bw9X/view?usp=sharing">GCCF</HoveredLink>
            <HoveredLink href="https://drive.google.com/file/d/1Zr-4MNP8cKyKGdTRQb7a87dHDg7sZyHT/view?usp=sharing">IBM AI Engineering</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/anishsukhramani/">More...</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
