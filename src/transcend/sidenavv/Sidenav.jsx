import React, { useState } from 'react';
import './sidenav.css';
import { FaFacebookSquare, FaAdjust } from 'react-icons/fa';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Sidenav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
        document.body.style.backgroundColor = '0D0C0D';
    };

    const closeNav = () => {
        setIsOpen(false);
        document.body.style.backgroundColor = 'white';
    };

    return (
        <>
            <Link id="nav-expand" href="#" onClick={openNav}>
                <h6 className='icon-text'>MENU</h6>
                <span className="icon icon-menu"></span>

            </Link>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <Link id="nav-collapse" href="#" onClick={closeNav}>
                    <span className="icon icon-cross"></span>
                </Link>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Works</Link>
                <Link href="#">Contact</Link>
                <p>
                    Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
                    porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
                    neque reprehenderit
                </p>

                <div className="icon-section">
                    <span><FaFacebookSquare /></span>
                    <span><BsTwitter /></span>
                    <span><AiFillInstagram /></span>
                    <span><BsWhatsapp /></span>
                    <span><FaAdjust /></span>
                </div>
            </nav>
        </>
    )
}

export default Sidenav;
