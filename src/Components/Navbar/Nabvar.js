import React from 'react';
import logo from '../../media/image/SpaceX-Logo.svg';

const Nabvar = () => {
    return (
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="" />

                </a>
                <nav className="md:ml-auto md:ml-4 md:py-1 md:pl-4  flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white">VISION & MISSION</a>
                    <a className="mr-5 hover:text-gray-900 border-l-2 pl-6 border-gray-400">PROJECTS</a>
                    <a className="mr-5 hover:text-gray-900 border-l-2 pl-6 border-gray-400">EQUIPE</a>
                    <a className="mr-5 hover:text-gray-900 border-l-2 pl-6 border-gray-400">CONTACT</a>
                </nav>
            </div>
        </header>
    );
};

export default Nabvar;