import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./login";

const Auth = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col gap-10 items-center mt-10">
      <h1 className="text-5xl font-semibold">
        {searchParams.get("createNew")
          ? "Hold a bit, Let's login you first"
          : "Login / Signup"}
      </h1>
      <Tabs defaultValue="Login" className="w-[400px] gap-5">
        <TabsList className="w-full h-12">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Login />
        </TabsContent>
        <TabsContent value="Signup">Signup</TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
