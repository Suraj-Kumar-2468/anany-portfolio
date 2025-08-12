import React from 'react';
import Particles from '../../Particles/Particles';
import './Hero.css';
import TextType from '../../TextType/TextType';
import SplitText from '../../SplitText/SplitText';

const Hero = () => {
  return (
    <div className="hero-section">
      <div
        style={{ width: '100%', height: 'calc(100vh - 90px)', position: 'relative' }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="hero-content">
          <div className="hero-title">
            <SplitText
              text="Anany Deep"
              className="hero-heading"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div className="hero-discription">
            <TextType
              text={['Building delightful web experiences.']}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

