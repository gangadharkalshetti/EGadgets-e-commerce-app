import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Loader from "./components/common/Loader.jsx";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className=" grow p-4">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
