"use client"
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";


const NavBar = () => {
  const [checked, setChecked] = useState(false)
  let styles = {
    menuItems:{
      transform:"translateX(-150%)"
    },
    line1:{
      transform:"rotate(0)"
    },
    line2:{
      transform:"scaleY(1)"
    },
    line3:{
      transform:"rotate(0)"
    }
  }
  if(checked){
    styles.menuItems.transform = "translateX(0)"

    styles.line1.transform = "rotate(45deg)"
    styles.line2.transform = "scaleY(0)"
    styles.line3.transform = "rotate(-45deg)"
  }
  else{
    styles.menuItems.transform = "translateX(-150%)"
    styles.line1.transform = "rotate(0)"
    styles.line2.transform = "scaleY(1)"
    styles.line3.transform = "rotate(0)"
  }

  return (
    <header>
      <nav className="shadow-sm w-full">
        <div className="">
          <div className="relative flex justify-between items-center h-[62px] text-[#0e2431]">
            <div className="md:hidden">
              <input className="checkbox absolute block h-8 w-8 top-5 left-5 z-[5] opacity-0 cursor-pointer" type="checkbox" name="" id="" onChange={()=>setChecked(!checked)} checked={checked}/>
              <div className="hamburger-lines h-[26px] w-8 absolute top-[17px] z-[2] left-5 flex flex-col justify-between group">
                <span className="line line1 h-1 w-full rounded-lg bg-[#0e2431] origin-[0%_0%] transition-transform duration-200 ease-in-out" style={styles.line1}></span>
                <span className="line line2 h-1 w-full rounded-lg bg-[#0e2431] transition-transform duration-400 ease-in-out" style={styles.line2}></span>
                <span className="line line3 h-1 w-full rounded-lg bg-[#0e2431] origin-[0%_100%] transition-transform duration-400 ease-in-out" style={styles.line3}></span>
              </div>
            </div>
            <div className="ms-5 text-2xl font-bold">
              <h1> <span className="text-primary">Mark</span> <span className="text-accent">Sell</span></h1>
            </div>

            <div className="md:hidden absolute top-[62px] h-screen bg-white bg-opacity-90 pt-[60px] w-full transition-transform duration-500 ease-in-out" style={styles.menuItems}>
              <div className="flex flex-col list-none text-center gap-2 text-2xl">
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700 group-hover:text-blue-400">Home</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">about</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">blogs</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">portfolio</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">contact</Link></li>

                <li><Button>Sign Up</Button></li>
                <li><Button>Sign In</Button></li>
              </div>
            </div>

            <div className="hidden md:flex list-none text-center gap-2 text-2xl items-center me-5">
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700 group-hover:text-blue-400">Home</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">about</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">blogs</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">portfolio</Link></li>
                <li><Link href="#" className="text-lg p-3 hover:text-purple-700">contact</Link></li>

                <li><Button type="secondary">Sign Up</Button></li>
                <li><Button>Sign In</Button></li>
              </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

