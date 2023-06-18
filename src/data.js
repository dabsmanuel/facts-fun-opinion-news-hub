import {AiOutlineTwitter} from 'react-icons/ai';
import {TiSocialFacebook} from 'react-icons/ti';
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";


export const footerSocials = [
    {
        id: 1,
        icon: <AiOutlineTwitter/>,
        link: "https://twitter.com/"
    },

    {
        id: 2,
        icon: <TiSocialFacebook/>,
        link: "https://facebook.com"
    },
]


export const contact = [
  {
    id: 1,
    icon: <GrLocation />,
    title: "Address",
    description: "198 west 12th street, suites 721 PH",
  },

  {
    id: 2,
    icon: <BsTelephone />,
    title: "Phone",
    description: 234 - 816 - 124 - 9608,
  },

  {
    id: 3,
    icon: <SiMinutemailer />,
    title: "Email",
    description: "goodnewsjoseph218@gmail.com",
  },
];