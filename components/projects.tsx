export default function Project(){
    return(
        <div className="min-h-screen scroll-mt-20" id="project"> 
            <h1 className="font-bold lg:text-6xl text-3xl p-6 text-center">Projects</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 p-4 mt-8 mx-4 ">
                <div className="p-4 rounded-lg bg-black border-2 border-[#39686c] shadow-[inset_0_0_20px_#39686c]">
                    <h3 className="text-center mb-5 text-xl">Restaurant Website</h3>
                    <p>i built a restaurant website using html, css and bootstrap, that connects the restaurant to 
                        there customer's directly onliine. were foods are listed with price tag and preferences based 
                        on the availability of the dish in the restaurant.<br></br>i used HTML, CSS and Bootstrap for the Front-end
                    </p>
                </div>

                <div className="travel p-4 rounded-lg bg-black border-2 border-[#39686c] shadow-[inset_0_0_20px_#39686c] ">
                    <h3 className="text-center mb-5 text-xl">Travel Agency Website</h3>
                    <p>i built a travelling agency website, where one can book there destination via the 
                        website for proper travel process. i used HTML, CSS and Bootstrap for the Front-end
                    </p>
                </div>

                <div className="movie p-4 rounded-lg bg-black border-2 border-[#39686c] shadow-[inset_0_0_20px_#39686c] ">
                    <h3 className="text-center mb-5 text-xl">Movie Review Platform</h3>
                    <p>i built a Movie Review website, where one can review movies and can add to the Movie
                        Review, with ReactJs for the Front-end
                    </p>
                </div>

            </div>
        </div>
    )
}