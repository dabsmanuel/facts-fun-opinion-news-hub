import About from "../component/about/Abouts"
import Hotelfeatures from "../component/features/Hotelfeatures"
import LandingPage from "../component/landingpage/LandingPage"
import Room from "../component/room/Room"
import Countdown from "../component/countdown/Countdown"
import Gallery from "../component/gallery/Gallery"
import Blog from "../component/blog/Blog"
import Testimonials from "../component/testimonial/Testimonials"

const Home = () => {
    return (
        <>
            <LandingPage/>
            <Room/>
            <About/>
            <Hotelfeatures/>
            <Countdown/>
            <Gallery/>
            <Blog/>
            <Testimonials/>
        </>
    )
}

export default Home