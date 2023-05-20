"use client"
import Image from "next/image";
import Logo from "../../../public/portfoliopicture.webp"
export default function AboutSection(){
    return(
        <div className="ml-4 mt-4 w-full">
        <h1 className="text-center text-2xl text-black bg-gradient-to-r from-slate-600 via-slate-300 to-gray-500 mb-2 mr-4 rounded-lg shadow-lg shadow-slate-200 font-SFMono-Regular font-light leading-loose tracking-wide">Looking for Network Engineer? let me introduce myself</h1>
        <div className="flex w-full">
        <Image src={Logo} alt="faysal Mahmud" className="float-left rounded-md mt-12 w-full h-96"/>
        
        <p className="clear-right text-xl text-gray-600 ml-2 mr-2 border border-slate-300 shadow-xl p-2 rounded-md">I am a detail-oriented individual with a passion for technology and a strong work ethic. Over the years, I have gained extensive experience in the field of computer hardware and software. As a Computer Administrative Support, I provided technical support to clients and helped them troubleshoot issues with their desktop and laptop computers. Additionally, I assembled custom-built computers and configured operating systems and other software applications to meet the needs of my clients.<br />

        I am proficient in several programming languages including Python, HTML, and CSS, and I have experience working with databases using MYSQL. I am also skilled in Microsoft Office and Microsoft Azure, which allows me to provide a wide range of services to clients.<br />
      
        In addition to my technical skills, I am knowledgeable in computer networking, router configuration, Power-shell, Linux, and basics of cybersecurity. This diverse skill set allows me to tackle complex technical problems and provide effective solutions to clients.<br />
      
        Although I was not able to complete my Bachelor&apos;s degree in Electronics and Telecommunication at Poznan University of Technology due to personal reasons, I gained valuable knowledge and experience in electrical engineering concepts and exposure to the latest technology trends in the industry during the first semester of my studies. This experience has been instrumental in shaping my career aspirations and professional development.</p>
        </div>
        
        </div>
    );
}