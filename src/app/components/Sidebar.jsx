"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { FcLeft, FcVoicePresentation, FcHome, FcAddressBook, FcViewDetails, FcServices, FcDiploma1, FcEngineering, FcSearch } from "react-icons/fc";
import logo from "../../../public/logo.jpg"
export default function Navigation(){
    const [open, setOpen] = useState(true);
    const router = usePathname();
    return(
        <aside className="bg-slate-700 text-white p-1">
            <nav role='navigation' className="flex flex-col gap-1">
                <div className={`bg-primary h-auto p-5 pt-8 relative duration-500 ${open ? 'w-72' : 'w-20'}`}>
                    <FcLeft className={`bg-white text-primary cursor-pointer text-3xl rounded-full absolute -right-3 top-9 border-2 ${!open && 'rotate-180'}`} onClick={()=>setOpen(!open)}/>
                    <div className="inline-flex mb-6">
                    <span className={`${open ? "border-2" : "border-transparent"} flex justify-between`}>
                    <FcVoicePresentation className={`w-24 h-24 cursor-pointer rounded-full ${!open && 'w-16 h-16 p-2 object-cover'}`} />
                    
                    <h1 className={`text-white origin-left font-medium uppercase text-2xl mt-1 ml-3 ${!open && 'scale-0'}`}>MD Faysal Mahmud</h1>
                    </span>
                    </div>

                    <div className={`flex items-center rounded-lg bg-gradient-to-r from-slate-600 to-gray-500 py-2 ${!open ? 'px-2.5' : 'px-4'}`}>
                        <FcSearch className={`h-8 w-12 text-white text-lg block float-left mr-2 ${!open && 'mr-0 h-12 w-12'}`}/>
                        <input disabled type='text' placeholder='Network Engineer' className={`bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}></input>
                    </div>

                    <Link href={'/'} className='text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/40 rounded-md mt-2 hover:bg-slate-500'>
                        <span className='text-2xl block float-left'>
                        <FcHome />
                        </span>
                        <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                        Home
                        </span>
                    </Link>

                    <Link href={'/'} className='text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/40 rounded-md mt-2 hover:bg-slate-500'>
                        <span className='text-2xl block float-left'>
                        <FcAddressBook />
                        </span>
                        <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                        Education
                        </span>
                    </Link>

                    <Link href={'/'} className='text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/40 rounded-md mt-2 hover:bg-slate-500'>
                        <span className='text-2xl block float-left'>
                        <FcServices />
                        </span>
                        <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                        Skills
                        </span>
                    </Link>

                    <Link href={'/'} className='text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/40 rounded-md mt-2 hover:bg-slate-500'>
                        <span className='text-2xl block float-left'>
                        <FcViewDetails />
                        </span>
                        <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                        Projects
                        </span>
                    </Link>

                    <Link href={'/'} className='text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/40 rounded-md mt-2 hover:bg-slate-500'>
                        <span className='text-2xl block float-left'>
                        <FcDiploma1 />
                        </span>
                        <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                        Certifications
                        </span>
                    </Link>

                    <Link href={'/'} className='text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/40 rounded-md mt-2 hover:bg-slate-500'>
                        <span className='text-2xl block float-left'>
                        <FcEngineering />
                        </span>
                        <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                        Specialization
                        </span>
                    </Link>

                </div>
            </nav>
        </aside>
    );
}