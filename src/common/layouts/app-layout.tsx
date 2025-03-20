import { Outlet } from "react-router-dom";
import Header from "./header";

const AppLayout = () => {
  return (
    <div className="flex items-center flex-col">
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      <div className="py-8 text-center w-full font-bold text-2xl">
        url-shortner @ 2025
      </div>
    </div>
  );
};

export default AppLayout;
