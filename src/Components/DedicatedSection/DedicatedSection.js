import React from 'react';

const DedicatedSection = () => {
    return (
        <section className="text-blueGray-700 ">
            <div className="container flex flex-col items-center px-5  py-8 mx-auto">
                <div className="flex flex-col w-full mb-2 text-left ">
                    <div className="w-full mx-auto lg:w-1/2 text-center">
                        <h1 className="mx-auto mb-1 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> DEDICATED ESPA CLASS </h1>
                        <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> MISSIONS AS LOW AS $1M </h1>
                        {/* <h2 className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font"> A small headline to switch your visitors into users. </h2> */}
                        {/* <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "> Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George. Stop it. We're gonna take a little break but we'll be back in a while so, don't nobody go no where. </p> */}
                    </div>
                </div>
            </div>
            <div className="container items-center px-5 mx-auto lg:px-28">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2">
                        <div className="p-8">
                            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> THE PROGRAM </h1>
                            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">SpaceX‘s SmallSat Rideshare Program  will provide small satellite operators with regularly scheduled, dedicated Falcon 9 rideshare missions to sun synchronous orbit  SSO for  ESPA  class payloads  for as low 1 million dollar per mission, which includes  you up to 200  kg of payload mass. </p>
                            {/* <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-black " title="read more"> Read More » </a> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="p-8">
                            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> PAYLOADS </h1>
                            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">For payloads who run into development or production challenges leading up to launch, spaceX will allow them to apply 100% of  monies paid towards the cost of rebooking of a subsequent mission, subject to 10% rebooking fee. </p>
                            {/* <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-black " title="read more"> Read More » </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DedicatedSection;