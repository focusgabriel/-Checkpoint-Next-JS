import Image from "next/image"
export default function Skills(){
    return(
        <div className="min-h-screen my-30 scroll-mt-20" id="skills">
            <h1 className="font-bold lg:text-6xl text-3xl p-6 text-center">SKills</h1>
            <div className="text-center lg:*:text-xl p-4">
                <p>i use the below languages/frameworks to solve problems and bring software Ideas to life.</p>
                <p>i use co-pilot for debuggging and sorting out problems for faster pace in development.</p>
                <p>i use Git and GitHub tools for collaboration and version control.</p>
                <p>Deployment with Vercel, Netlify and other cloud services.</p>
            </div>
            <h2 className="text-center text-2xl mt-10 mb-10">Tech/Skill Stack</h2>
            <ol className="text-center grid grid-cols-3 gap-4 lg:flex lg:justify-between lg:align-center mx-12 *:rounded-lg *:border-2 *:border-[#39686c] *:w-full *:p-2 *:hover:shadow-[0_0_30px_#39686c,0_0_60px_#39686c] *:h-34 *:hover:scale-90 lg:*:hover:scale-125 lg:*:transition">
                <li> <Image src="/icons/js.svg" alt="javascript logo" width={30} height={30} className="block mx-auto my-4"/> JavaScript</li>
                <li> <Image src="/icons/ts.svg" alt="TypeScript logo" width={30} height={30} className="block mx-auto my-4"/> TypeScript</li>
                <li> <Image src="/icons/express.jpg" alt="Express logo" width={30} height={30} className="block mx-auto my-4"/> ExpressJs</li>
                <li> <Image src="/icons/mongodb.jpg" alt="Mongodb logo" width={30} height={30} className="block mx-auto my-4"/> MongoDB</li>
                <li> <Image src="/icons/sql.svg" alt="SQL logo" width={30} height={30} className="block mx-auto my-4"/> MySQL</li>
                <li> <Image src="/icons/react.svg" alt="React logo" width={30} height={30} className="block mx-auto my-4"/> ReactJs</li>
                <li> <Image src="/icons/nextjs.jpg" alt="Nextjs logo" width={30} height={30} className="block mx-auto my-4"/> NextJs</li>
                <li> <Image src="/icons/node.svg" alt="Node logo" width={30} height={30} className="block mx-auto my-4"/> NodeJs</li>
                <li> <Image src="/icons/html.svg" alt="HTML logo" width={30} height={30} className="block mx-auto my-4"/> HTML</li>
                <li> <Image src="/icons/css.svg" alt="CSS logo" width={30} height={30} className="block mx-auto my-4"/> CSS</li>
            </ol>
        </div>
    )
}