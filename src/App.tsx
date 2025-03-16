import { Button } from "@/components/ui/button";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./common/layouts/app-layout";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Link from "./pages/link";
import RedirectLink from "./pages/redirect-link";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button variant="destructive">Click me</Button>
    </div>
  );
}

export default App;
