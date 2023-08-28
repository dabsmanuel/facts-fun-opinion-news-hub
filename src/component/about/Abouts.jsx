import Writeup from "./Writeup"
import img1 from "../../assets/img_1.jpg"
import img2 from "../../assets/img_2.jpg"

const About = () =>{
    return(
        <section className="bg-white mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32 gap-8 w-[82%] m-auto pt-20">
                <div className="relative flex flex-col m-auto">
                    <img src={img2} alt="photo1" className="w-5/1" />
                    <img src={img1} alt="photo1" className="w-64 absolute -bottom-10 -right-20 border-4 border-white" />
                </div>
                <article>
                    <Writeup/>
                </article>
            </div>
        </section>
    )
}

export default About