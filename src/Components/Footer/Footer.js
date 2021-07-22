import React from 'react';

const Footer = () => {
    return (
        <div className="flex">
            <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6 text-center">
                <h1>CONTACTS</h1>
                <a href="tel:+32484267794"><p>+32 484 26 77 94</p></a>
                <a href="tel:+32484267794"><p>+32 484 26 77 94</p></a>
                <a href="mailto:info@spacex.com"><p>info@spacex.com</p></a>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6 text-center">
                <h1>ABOUT</h1>
                <a href="" target="_blank"><p>Abous us</p></a>
                <a href="" target="_blank"><p>Careers</p></a>
                <a href="" target="_blank"><p>Shop</p></a>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6 text-center">
                <h1>SOCIAL MEDIA</h1>
                <a href="" target="_blank"><p>Facebook</p></a>
                <a href="" target="_blank"><p>Twitter</p></a>
                <a href="" target="_blank"><p>Vimeo</p></a>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 xl:w-1/6 text-center">
                <h1>ROCKETS</h1>
                <a href="" target="_blank"><p>Falcon Heavy</p></a>
                <a href="" target="_blank"><p>Falcon 9</p></a>
                <a href="" target="_blank"><p>Falcon 1</p></a>
            </div>
            <div className="w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6">
                <footer className="text-gray-600 body-font">
                    <div className="container  mx-auto">
                        <div className="flex flex-wrap md:text-left text-center order-first">

                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                        <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                                        <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                </div>
                                {/* <form>
                                    <div className="flex flex-col overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row">
                                        <input className="px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />
                                        <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                                    </div>
                                </form> */}
                                <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                                    <br className="lg:block hidden" />waistcoat green juice
                                </p>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>

        </div>
    );
};

export default Footer;