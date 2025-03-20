import { Input } from "@/components/ui/input";
import LandingImg from "../common/logos/shortify_home.png";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [longURL, setLongURL] = useState<string>("");
  const navigate = useNavigate();
  const handleShortenURL = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (longURL) {
      navigate(`/auth?createNew=${longURL}`);
    }
  };
  return (
    <div className="flex flex-col gap-10 md:gap-5 items-center md:items-baseline">
      <div className="flex flex-col items-center gap-5 w-full md:flex-row">
        <img src={LandingImg} alt="Landing Image" className="sm:h-52 md:h-96" />
        <form
          onSubmit={(e) => handleShortenURL(e)}
          className="flex flex-col justify-center gap-10 w-[90%] md:w-full"
        >
          <Input
            placeholder="Enter your looooooooong URL"
            className="h-[50px] bg-[#0a0a0a]/80 placeholder-[#0a0a0a] placeholder:font-bold placeholder:text-lg placeholder:tracking-wider p-2 rounded-md focus:outline-none"
            onChange={(e) => setLongURL(e.target.value)}
            value={longURL}
          />
          <Button type="submit" className="text-lg">
            Convert to Short URL
          </Button>
        </form>
      </div>
      <div className="flex flex-col gap-6 w-[90%] md:w-full">
        <p className="text-3xl md:text-5xl font-bold py-2">FAQ's</p>
        <Accordion type="multiple" className="w-full flex flex-col">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl md:text-3xl font-semibold">
              What is shortify ?
            </AccordionTrigger>
            <AccordionContent className="text-xl md:text-xl">
              Ever wondered what to do with those hefty long ULR's, no worry
              just make it short 🤷‍♂️. Shortify will do this for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl md:text-3xl font-semibold">
              Except for the short link, will a QR code will also be generated ?
            </AccordionTrigger>
            <AccordionContent className="text-xl md:text-xl">
              Yes, a alternative QR code is also generated that user can
              download.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Landing;
