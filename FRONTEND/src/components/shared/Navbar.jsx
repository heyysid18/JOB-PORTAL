import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Button } from "../ui/button";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import store from "../../redux/store";

const Navbar = () => {

  const {user} = useSelector(store=>store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-1xl font-bold">
            Get<span className="text-[#8E44AD]">Placed</span>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex font -medium items-center gap-5">
            <li><Link to= "/Home">Home</Link></li>
            <li><Link to= "/Jobs">Jobs</Link></li>
            <li><Link to= "/Browse">Browse</Link></li>
          </ul>
          {!user ? (
            <div className="flex item-center gap-2">
              <Link to="/login">
                <button style={{backgroundColor: "white"}}>Login</button>
              </Link>
              <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">btp</h4>
                    <p className="text-sm text-muted-foreground">Aorem</p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  <User2 />
                  <button className="text-gray-100" variant="link">
                    View Profile
                  </button>
                  <LogOut />
                  <button className="text-gray-100" variant="link">
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
