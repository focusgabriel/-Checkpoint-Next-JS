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
            <ol className="text-center grid grid-cols-3 gap-4 lg:flex lg:justify-between lg:align-center mx-12 *:rounded-full *:border-2 *:border-[#39686c] *:p-2 *:hover:shadow-[0_0_30px_#39686c,0_0_60px_#39686c] *:hover:scale-125 *:transition duration-500 ease-in-out 2s">
                <li>JavaScript</li>
                <li >TypeScript</li>
                <li >ExpressJs</li>
                <li >MongoDB</li>
                <li >MySQL</li>
                <li >ReactJs</li>
                <li >NextJs</li>
                <li >NodeJs</li>
                <li >HTML</li>
                <li >CSS</li>
            </ol>
        </div>
    )
}