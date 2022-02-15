import { useState } from "react";
import { NAVBAR } from "../../utils/navBar";
import { GiHamburgerMenu } from 'react-icons/gi';
import './nav.css';

// GiHamburgerMenu
const NavBar = () => {

    const [selectedId, setSelectedId] = useState("")
    const [show, setShow] = useState(false)

    const onclickItem = (data) => {
        setSelectedId(data)
        setShow(false)
    }

    const onClickMobile = () => {
        setShow(!show)
    }
    return (
        <section className="nav-bar-container">
            <div className="container">
                <div className={`nav-bar desktop-nav-bar`}>
                    {NAVBAR.map((item, index) => (
                        <div className={`${selectedId === item.id && 'active'}`} key={index}>
                            <span onClick={() => onclickItem(item.id)}>
                                <a href={`#${item.id}`}>
                                    {item.name}
                                </a>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mobile-nav-bar">
                Menu <GiHamburgerMenu onClick={() => onClickMobile()} />
            </div>
            {show ?
                <div className={`nav-bar mob-nav-bar`} >
                    {NAVBAR.map((item, index) => (
                        <div className={`${selectedId === item.id && 'active'}`} key={index} >
                            <span onClick={() => onclickItem(item.id)}>
                                <a href={`#${item.id}`}>
                                    {item.name}
                                </a>
                            </span>
                        </div>
                    ))}
                </div>
                : null
            }
        </section>
    )
}

export default NavBar;