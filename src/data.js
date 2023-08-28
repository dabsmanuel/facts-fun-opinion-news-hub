import room1 from "./assets/img_1.jpg.webp"
import room2 from "./assets/img_2.jpg.webp"
import room3 from "./assets/img_3.jpg"
import room4 from "./assets/img_4.jpg"
import room5 from "./assets/cover.jpg"
import room7 from "./assets/cover2.jpg"
import room6 from "./assets/img_7.jpg.webp"

// icons
import { FaSwimmingPool } from "react-icons/fa"
import { RiHotelLine } from "react-icons/ri"
import { GiExitDoor, GiPartyPopper } from "react-icons/gi"
import { AiOutlineCar } from "react-icons/ai"
import { MdOutlineLocalLaundryService, MdOutlineNoDrinks } from "react-icons/md"
import { BiBed } from "react-icons/bi"
import { AiOutlineArrowRight } from "react-icons/ai"


// staff photos
import staff1 from "./assets/person_1.jpg.webp"
import staff2 from "./assets/person_2.jpg.webp"
import staff3 from "./assets/person_3.jpg.webp"
import staff4 from "./assets/person_4.jpg.webp"


export const rooms = [
  {
    id: 1,
    pic: room1,
    description: "STANDARD ROOM",
    price: "$350.00 / per night",
    names: "room details"
  },

  {
    id: 2,
    pic: room2,
    description: "FAMILY ROOM",
    price: "$400.00 / per night",
    names: "room details"
  },

  {
    id: 3,
    pic: room3,
    description: "SINGLE ROOM",
    price: "$260.00 / per night",
    names: "room details"
  },

  {
    id: 4,
    pic: room4,
    description: "DELUXE ROOM",
    price: "$150.00 / per night",
    names: "room details"
  },

  {
    id: 5,
    pic: room1,
    description: "LUXURY ROOM",
    price: "$200.00 / per night",
    names: "room details"
  },

  {
    id: 6,
    pic: room2,
    description: "SINGLE ROOM",
    price: "$155.00 / per night",
    names: "room details"
  }
]

export const features = [
  {
    id: 1,
    icon: <FaSwimmingPool/>,
    descr: "Swimming Pool"
  },

  {
    id: 2,
    icon: <RiHotelLine/>,
    descr: "Hotel Teller"
  },

  {
    id: 3,
    icon: < GiExitDoor />,
    descr: "Fire Exit"
  },

  {
    id: 4,
    icon: <AiOutlineCar />,
    descr: "Car Parking"
  },

  {
    id: 5,
    icon: <MdOutlineLocalLaundryService />,
    descr: "Laundry Services"
  },

  {
    id: 6,
    icon: <BiBed />,
    descr: "Relaxation"
  },

  {
    id: 7,
    icon: <MdOutlineNoDrinks />,
    descr: "Drinks"
  },

  {
    id: 8,
    icon: <GiPartyPopper />,
    descr: "Party"
  }
];

export const gallery = [
  {
    id: 1,
    pic: room1,
  },

  {
    id: 2,
    pic: room2,
  },

  {
    id: 3,
    pic: room3,
  },

  {
    id: 4,
    pic: room4,
  },

  {
    id: 5,
    pic: room5
  },

  {
    id: 6,
    pic: room7,
  },

  {
    id: 7,
    pic: room5,
  },

  {
    id: 8,
    pic: room6,
  }
]

export const staff = [
  {
    id: 1,
    pics: staff1,
    title: "ANGELLA LOPEZ",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
    link: "Read More",
    icon: <AiOutlineArrowRight />
  },

  {
    id: 2,
    pics: staff2,
    title: "MARINA STALKS",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
    link: "Read More",
    icon: <AiOutlineArrowRight />
  },

  {
    id:3,
    pics: staff3,
    title: "ETHAN HOOVER",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
    link: "Read More",
    icon: <AiOutlineArrowRight />
  },

  {
    id: 4,
    pics: staff4,
    title: "MEGAN PEARSON",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
    link: "Read More",
    icon: <AiOutlineArrowRight />
  },

  {
    id: 5,
    pics: staff1,
    title: "CRISTINE SMITH",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
    link: "Read More",
    icon: <AiOutlineArrowRight />
  },

  {
    id: 6,
    pics: staff2,
    title: "MARINA STALKS",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
    link: "Read More",
    icon: <AiOutlineArrowRight />
  },

]