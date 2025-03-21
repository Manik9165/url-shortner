import { Link, useNavigate } from "react-router-dom";
import ShortifyLogo from "../logos/ShortifyLogo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();
  const user = false;
  return (
    <nav className="py-4 px-4 flex justify-between items-center md:px-0">
      <Link to="/">
        <img src={ShortifyLogo} alt="Shortify Logo" className="h-14" />
      </Link>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full overflow-hidden">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Manik Kapoor</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LinkIcon />
              My Links
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 font-semibold">
              {" "}
              <LogOut className="text-red-500" />
              <span onClick={() => navigate("/")}>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button>Login</Button>
      )}
    </nav>
  );
};

export default Header;
