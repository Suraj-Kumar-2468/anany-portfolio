import React from 'react'
import GooeyNav from './GooeyNav/GooeyNav'
import './HeaderSection.css';

const HeaderSection = () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ];
    return (
        <div>
            <div 
            className='header-section'
            >
            <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            </div>
        </div>

    )
}

export default HeaderSection