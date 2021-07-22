import React, { useEffect, useState } from 'react';
import LoadMission from '../LoadMission/LoadMission';

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
                        missions.map(mission => (<LoadMission mission={mission}></LoadMission>))
                    }


                </div>
            </div>
        </section>
    );
};

export default PastLaunches;