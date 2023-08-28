import img1 from "../../assets/cover.jpg"
import Address from "./Address";
import Form from "./Form";


const Contact = () => {
  return (
    <>
      <div className='mb-20'>
        <img src={img1} alt="image1" className="w-full h-screen object-fill bg-black bg-opacity-75 brightness-50" />
        <div className="flex flex-col justify-center items-center w-full h-screen text-center absolute bottom-0 text-white">
          <small className=' uppercase tracking-widest'>Chat with us</small>
          <h1 className='lg:text-7xl text-5xl pt-8 font-bold '>Get In Touch</h1>
        </div>

        <div className="lg:w-[78%] w-[85%] m-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-20">
            <Form />
            <Address />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact