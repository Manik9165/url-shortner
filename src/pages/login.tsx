import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SyncLoader } from "react-spinners";
import Error from "./error";
import { useState } from "react";
import * as yup from "yup";

interface FormDataProps {
  email: string;
  password: string;
}

const Login = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    setErrors([]);
    try {
      const schema: yup.Schema = yup.object().shape({
        email: yup
          .string()
          .email("Invalid email")
          .required("Email is a mandatory field"),
        password: yup
          .string()
          .min(6, "Password must be atleast 6 characters")
          .required("Password is a mandatory field"),
      });

      await schema.validate(formData, { abortEarly: false });
    } catch (e: unknown) {
      const newErrors: any = {};
      if (e instanceof yup.ValidationError) {
        e.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
      }
      setErrors(newErrors);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardDescription className="text-lg">
          Already have an account, Login here 👇🏻
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Input
          className="w-full p-2 border h-10 border-[#525252] focus:outline-none"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={(e) => handleInputChange(e)}
        />
        {errors.email && <Error message={errors.email} />}
        <Input
          className="w-full p-2 border h-10 border-[#525252] focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleInputChange(e)}
        />
        {errors.password && <Error message={errors.password} />}
      </CardContent>
      <CardFooter>
        <Button className="w-full text-md" onClick={handleLogin}>
          {false ? <SyncLoader size={12} /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
