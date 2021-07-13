import React from 'react';
import flouride from '../../../images/001-dental.png'
import cavity from '../../../images/tooth (1).png'
import whitening from '../../../images/tooth.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: "Flouride Treatment",
        img: flouride
    },
    {
        name: "Cavity Filling",
        img: cavity
    },
    {
        name: "Teeth Whitenting",
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center">
                <h5 style={{color: "#13D0D4"}}>OUR SERVICES</h5>
                <h2 >Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row mt-5">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Services;