"use client"
import Layout from "../components/Layout";

export default function EducationPage(){
    return(
        <Layout>

        <div className="p-8 w-full bg-slate-500 border-4">
        <h2 className="text-slate-300 text-2xl text-center mb-4 font-mono"> Education</h2>

        <ul className="list-disc">
        <li>
            <h3>Poznan University of Technology</h3>
            <p>Bachelor&apos;s degree, Electronics & Telecommunication Engineering</p>
            <p>Sep 2017 – Jun 2018</p>
            <p>
            &quot;I attended Poznan University of Technology in Poland as a student of Electronics and Telecommunication for my Bachelor&apos;s degree. Although I was only able to complete the first semester due to personal reasons, the knowledge and experience I gained during that time have been invaluable. I have developed a strong foundation in electrical engineering concepts and gained exposure to the latest technology trends in the industry. While I was not able to complete my degree at Poznan University of Technology, the skills and knowledge I gained have been instrumental in shaping my career aspirations and professional development.&quot;
            </p>
        </li>
        </ul>
        </div>
        </Layout>)
}