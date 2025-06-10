import { useEffect, useState } from 'react';

import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { HiCode } from "react-icons/hi";
import { Link } from 'react-router-dom'

const Navbar = () => {
  
    const [menu,Setmenu] = useState([
        {id:1,
         name:"ទំព័រដើម",
         link:"/"
        },
         {id:2,
         name:"សេវាកម្ម",
         link:"#"
        },
         {id:3,
         name:"Top Rate",
         link:"#"
        },
        
    ]);

    const [drop,Setdrop] = useState([
        {id:1,
         name:"ថ្នាក់ HTML",
         link:"/html",
         icon:<FaHtml5 className=' inline-block' />
        },
         {id:2,
         name:"ថ្នាក់ HTML&CSS",
         link:"/css",
         icon:<FaCss3 className=' inline-block' />
        },
         {id:3,
         name:"ថ្នាក់ JavaScript",
         link:"#",
         icon:<IoLogoJavascript className=' inline-block' />
        },
        
    ]);

    const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
    return ( 
        <nav className='bg-slate-200 shadow-md dark:bg-gray-900 dark:text-white duration-200 relative z-50'> 
            {/* Upper Nav */}
            <div>
                <div className='container flex justify-between text-center items-center h-10'>
                    <div className=' font-bold top-4'> 
                        <a href="" className='flex mt-4 items-center text-3xl gap-4 font-English  sm:block'>
                            
                            <span><HiCode className='text-yellow-500 animate-spin inline-block mx-2'/></span>
                            JVLearn.com
                        </a>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative search top-4 hidden sm:block'>
                            <input type="text"
                            className="w-[200px] border border-sky-900 sm:w-[200px] px-3 py-1 rounded-full 
                            hover:w-[300px] transition-all duration-200 focus:outline-none 
                            focus:border-1 focus:border-yellow-500 bg-transparent" 
                            placeholder='search'
                            />
                            <FaSearch className=' absolute top-1/4 right-3 text-sky-900 dark:text-white'/>
                        </div>
                        
                      
                        {/* darkMode */}
                        <MdDarkMode onClick={toggleDarkMode}
                        className='text-2xl mt-8 cursor-pointer'
                        />
                    </div>
                </div>
                {/* Lowwer Nav */}
                {/* Menu */}
                <div className=' h-10 font-khmer font-semibold p-2'>
                    <ul className='flex justify-center gap-8'>
                       {
                        menu.map((item)=>{
                            return(
                                <li className=' hover:scale-110 duration-200'>
                                    <a href={item.link}
                                        className=' hover:text-yellow-500 hover:underline'
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })
                       }
                       {/* drop-down */}
                       <li className='group relative hover:scale-110 duration-200'>
                            <a href="" className=' hover:text-yellow-500 hover:underline font-khmer cursor-pointer '>
                                ថ្នាក់រៀន
                                <span className=' inline-block'>
                                    <IoMdArrowDropdown />
                                </span>
                            </a>
                            <div className='absolute font-normal z-50 hidden 
                                group-hover:block w-[150px] bg-gray-400 p-2 rounded-md
                                 '>
                                    
                                <ul>
                                    {
                                    drop.map((item)=>{
                                        return(
                                            <li key={item.id}>
                                                <a href={item.link}
                                                className=' hover:text-yellow-500 text-sky-900 inline-block hover:underline'>
                                                    {item.icon} {item.name}
                                                </a>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                       </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;