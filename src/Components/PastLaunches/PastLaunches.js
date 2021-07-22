import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const PastLaunches = () => {

    const [missions, setMissions] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => {
                console.log("datfgfffa", data.slice(0, 8))
                setMissions(data.slice(0, 8))
            })
    }, [])


    return (
        <section className="py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">OUR PAST LAUNCHES</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

                    {
                        missions.map(mission => {

                            <article className="flex flex-col bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52" src="https://source.unsplash.com/201x201/?fashion" />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum" />
                                    <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">{mission.mission_name}</a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span><FontAwesomeIcon icon={faChevronCircleRight} /> Go to Wikipedia Page</span>

                                    </div>
                                </div>
                            </article>

                        })
                    }





                </div>
            </div>
        </section>
    );
};

export default PastLaunches;