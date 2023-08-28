import Blogswiper from "./Blogswiper";


const LandingPage = () => {

    return (
        <div className="py-20">
            <div className="mb-16">
                <h2 className="text-center text-5xl mb-4">Upcoming Events</h2>
                <hr className="w-[9%] mx-auto border-1 border-black" />
            </div>
            <Blogswiper/>
        </div>
    );
};

export default LandingPage;
