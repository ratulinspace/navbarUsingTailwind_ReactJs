import React from 'react';
import PricingOption from '../PricingOption/PricingOption';
import './Pricing.css'

const Pricing = () => {

    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime free',
                'Area based deals',
                'Free Features',
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on free',
                'Localized Deals',
                'Updated Features'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Special Pass with K-E-Y',
                'Global Deals',
                'Special Membership Card'
            ]
        },
    ]


    return (
        <div>

            <div className='bg-purple-300 p-8 mt-8 shadow-lg rounded-lg m-2'>

                <h1 className='font-bold text-4xl'>Amazing <span className='text-red-600'>Deals</span> and <span className='text-red-600'>Discount</span></h1>
                {<div className='grid gap-7 grid-cols-2'>
                    <div className='div-style'>
                        <h3 className='font-bold text-2xl'>A01</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi esse nulla, aperiam aliquid suscipit sapiente veniam iusto ducimus itaque architecto nisi, impedit aliquam totam consequatur beatae quasi possimus accusantium enim! Vero nulla exercitationem, accusamus cum consectetur iste commodi nemo consequuntur aliquid nam amet ipsa similique, autem quas id distinctio?</p>
                    </div>
                    <div className='div-style'>
                        <h3 className='font-bold text-2xl'>B01</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi esse nulla, aperiam aliquid suscipit sapiente veniam iusto ducimus itaque architecto nisi, impedit aliquam totam consequatur beatae quasi possimus accusantium enim! Vero nulla exercitationem, accusamus cum consectetur iste commodi nemo consequuntur aliquid nam amet ipsa similique, autem quas id distinctio?</p>
                    </div>
                </div>}
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        pricingOption.map(option => <PricingOption
                            key={option.id}
                            option={option}
                        >
                        </PricingOption>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Pricing;