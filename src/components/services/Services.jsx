import React from 'react';
import './services.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import aeroplane from '../../photos/aeroplane.jpg'
import train from '../../photos/train.jpg'
import bus from '../../photos/bus.jpg'
import car from '../../photos/car.jpg'

// Array of feature data including title, description, and icon for each feature
const featuresData = [
    {
        title: 'Aeroplane',
        description: 'Soaring through the sky, reaching destinations in a matter of hours on an aeroplane..',
        icon: aeroplane,
    },
    {
        title:'Train',
        description: 'A train journey certainly is a wonderfully joyous occasion.',
        icon: train,
    },
    {
        title: 'Bus',
        description: 'Journey by bus., "Take a bus trip., and "Travel via public bus.. ',
        icon: bus, 
    },
    {
        title: 'Car',
        description: 'Exploring by car., "A journey on four wheels., and "Cruising down the highway.. ',
        icon: car, 
    },
]

const Services = (props) => {
    return (
        <section className='features' data-aos={props['data-aos']}>
            <h2>Services</h2>
            <div className='features-container'>
                {featuresData.map((feature, index) => (
                    <div className='feature-card' key={index}>
                        {/* Lazy loading images for performance optimization */}
                        <LazyLoadImage
                            src={feature.icon}
                            alt={feature.title}
                            className='feature-icon'
                            effect='blur'
                        />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;
