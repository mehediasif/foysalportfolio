"use client"
import Navigation from "./Sidebar";

export default function Layout({children}){
    return (
        <div className="bg-slate-600 min-h-screen min-w-screen flex">
          <Navigation />
          {children}
        </div>
      )
}