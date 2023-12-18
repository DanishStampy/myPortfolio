import React from "react";
import { AiOutlineBulb, AiOutlineContacts, AiOutlineUser } from "react-icons/ai";
import { BsBookmarkStar } from 'react-icons/bs';

const navItems = [
    {
        title: "About Me",
        id: "about",
        icon: <AiOutlineUser/>
    },
    {
        title: "Technical Skills",
        id: "experience",
        icon: <BsBookmarkStar/>
    },
    {
        title: "Projects",
        id: "projects",
        icon: <AiOutlineBulb/>
    },
    {
        title: "Contact",
        id: "contact",
        icon: <AiOutlineContacts/>
    }
]

export default navItems;