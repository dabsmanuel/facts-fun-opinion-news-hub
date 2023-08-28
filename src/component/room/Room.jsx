import Rooms from "./Rooms";

const Room = () => {
    return (
    <section className=" mb-12 bg-[#f8f9fa]">
        <div className="lg:w-[82%] w-[85%] m-auto py-20">
            <div className="mb-16">
                <h2 className="text-center text-5xl mb-2">Our Rooms</h2>
                <hr className="w-[9%] mx-auto border-1 border-black" />
            </div>
            <Rooms />
        </div>    
        </section>
    )
}

export default Room;