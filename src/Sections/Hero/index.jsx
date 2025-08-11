import React from 'react'
import Particles from '../../Particles/Particles'
import './Hero.css';
import TextType from '../../TextType/TextType';
import SplitText from '../../SplitText/SplitText';
const Hero = () => {
    return (
        <div className='hero-section'>
            <div style={{ width: '100%', height: 'calc(100vh - 90px)', position: 'relative' }}>
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
                <div className='hero-content'>
                    <p className='hero-title'>
                        {/* <img src={ananyLogo} alt="Anany" className='hero-logo' /> */}
                        <SplitText
                            text="Anany Deep"
                            className="text-2xl font-semibold text-center"
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
                    </p>
                    <div className='hero-discription'>

                    <TextType
                        text={["Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."]}
                        typingSpeed={1}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero