import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="main-container container">
        <Outlet />
      </main>
      <footer className="border-top py-3 mt-5">
        <div className="container text-center small">
          React Data Table Demo
        </div>
      </footer>
    </>
  );
}
