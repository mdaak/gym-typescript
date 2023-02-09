import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"

useState
type Props = {}

const Navbar = (props: Props) => {
    const flexBetween ="flex items-center justify-between";

  return (
    <nav>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full `}
        >
        <div className={`${flexBetween} mx-auto w-5/6`}>
        
        </div>  
        </div>
    </nav>
  )
}
export default Navbar;