import { rooms } from "../../data";

const Rooms = () => {
    return (
        <section>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    rooms.map(({ id, pic, description, price, names }) => {
                        return (
                            <div key={id} className="hover:shadow">
                                <img src={pic} alt={names} className="relative m-auto overflow-hidden w-full ease-in-out duration-300 hover:scale-110 cursor-pointer" />
                                <div className="bg-white p-4 text-center">
                                    <h2>{description}</h2>
                                    <p className="text-gray-500">{price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
        </section>
    )
}

export default Rooms;