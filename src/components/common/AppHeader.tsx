import { Button, Layout } from 'antd';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

type Props = {}

const { Header } = Layout;

function AppHeader({ }: Props) {
    const navbarRef = useRef(null);
    const hamburgerRef = useRef(null);
    const handleToggleNavbar = () => {
        // navbarRef.current.classList.toggle('flex');
        // navbarRef.current.classList.toggle('hidden');
        // hamburgerRef.current.classList.toggle('open');
    };
    return (
        <Header className='h-20 relative container mx-auto'>
            {/* flex container */}
            <div className='flex items-center justify-between pt-6 md:pt-2'>
                {/* header logo */}
                <div>
                    <Link to='/'>
                        <h1 className='header-logo'>REACT BOILERPLATE</h1>
                    </Link>
                </div>

                {/* navbar menu */}
                <div className='hidden space-x-4 md:flex'>
                    <Link to='/'>
                        <span className='navbar-menu-item'>Home</span>
                    </Link>
                    <Link to='/dashboard'>
                        <span className='navbar-menu-item'>Dashboard </span>
                    </Link>
                    <Link to='/services'>
                        <span className='navbar-menu-item'>Services</span>
                    </Link>
                    <Link to='/portfolio'>
                        <span className='navbar-menu-item'>Portfolio</span>
                    </Link>
                    <Link to='/contact'>
                        <span className='navbar-menu-item'>Contact</span>
                    </Link>
                </div>

                {/* login/register button */}
                <Link to='/auth/login'>
                    <Button className='hidden font-bold md:block' type='primary' size='large' shape='round'>
                        CLICK TO LOGIN
                    </Button>
                </Link>

                {/* hamburger icon */}
                <button
                    className='block hamburger md:hidden focus:outline-none'
                    onClick={handleToggleNavbar}
                    ref={hamburgerRef}
                    id='menu-btn'
                    type='button'
                >
                    <span className='hamburger-top' />
                    <span className='hamburger-middle' />
                    <span className='hamburger-bottom' />
                </button>
            </div>

            {/* mobile menu */}
            <div className='md:hidden'>
                <div
                    id='menu'
                    ref={navbarRef}
                    className='bg-backgroundColorBlack absolute flex-col items-center hidden self-end font-bold mt-6 left-6 right-6 sm:w-auto sm:self-center'
                >
                    <Link to='/'>
                        <span className='mobile-menu-item'>Home</span>
                    </Link>
                    <Link to='/dashboard'>
                        <span className='mobile-menu-item'>dashboard</span>
                    </Link>
                    <Link to='/services'>
                        <span className='mobile-menu-item'>Services</span>
                    </Link>
                    <Link to='/contact'>
                        <span className='mobile-menu-item'>Contact</span>
                    </Link>
                    <Link to='/auth/login'>
                        <span className='mobile-menu-item'>Login</span>
                    </Link>
                </div>
            </div>
        </Header>
    )
}

export default Header