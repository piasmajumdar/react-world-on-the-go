import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {

    const {name, price, description, features, duration} = pricing;

    return (
        <div  className='border flex flex-col p-4 bg-amber-600 rounded-2xl'>
            {/* Card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>${price}/{duration}</h4>
            </div>
            {/* Card body */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index)=> <PricingFeature
                        key={index} 
                        feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn max-w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;