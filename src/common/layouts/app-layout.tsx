import { Outlet } from "react-router-dom";
import Header from "./header";

const AppLayout = () => {
  return (
    <div className="flex items-center flex-col">
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      <div className="p-10 mt-10 text-center bg-gray-800 w-full">
        url-shortner @ 2025
      </div>
    </div>
  );
};

export default AppLayout;
