import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {

    const { name, price, benefits } = props.option;

    return (
        <div className='bg-white mt-8 p-3 rounded-lg'>
            <h2 className='bg-purple-300 py-3 rounded-lg shadow-xl text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-300'>/mo</span>
            </p>
            <div>
                <h3 className='text-left font-semibold'>Benefits: </h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit} ></Benefit>)
                }
            </div>
            <button className='bg-white border border-lime-100 hover:bg-neutral-900 hover:text-white shadow-md flex justify-center w-full py-2 rounded mt-6  font-semibold'>Buy Now <ArrowCircleRightIcon className='w-6 h-6 ml-2'></ArrowCircleRightIcon></button>
        </div>
    );
};

export default PricingOption;