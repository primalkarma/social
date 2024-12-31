import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              SOCIAL
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
