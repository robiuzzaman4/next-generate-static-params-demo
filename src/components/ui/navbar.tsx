import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium">
          Supafast Next
        </Link>
        <Link href="https://github.com/robiuzzaman4/next-generate-static-params-demo" className="text-sm underline">
          Github
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
