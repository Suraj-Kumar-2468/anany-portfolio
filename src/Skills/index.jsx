import React from 'react'
import SplitText from '../SplitText/SplitText'
import './skills.css';
import SkillStack from './scrollstack';
import ProfileCard from '../ProfileCard/ProfileCard';

const Skills = () => {
    const skillsData = [
        {
            name: 'React',
            score: 85,
            description: 'Skilled in building dynamic UI components and managing app state.',
        },
        {
            name: 'TypeScript',
            score: 75,
            description: 'Good understanding of static typing and interfaces for scalable code.',
        },
        {
            name: 'CSS/SCSS',
            score: 80,
            description: 'Proficient with modern CSS, Flexbox, Grid, and responsive design.',
        },
         {
            name: 'React',
            score: 85,
            description: 'Skilled in building dynamic UI components and managing app state.',
        },
        {
            name: 'TypeScript',
            score: 75,
            description: 'Good understanding of static typing and interfaces for scalable code.',
        },
        {
            name: 'CSS/SCSS',
            score: 80,
            description: 'Proficient with modern CSS, Flexbox, Grid, and responsive design.',
        },
         {
            name: 'React',
            score: 85,
            description: 'Skilled in building dynamic UI components and managing app state.',
        },
        {
            name: 'TypeScript',
            score: 75,
            description: 'Good understanding of static typing and interfaces for scalable code.',
        },
        {
            name: 'CSS/SCSS',
            score: 80,
            description: 'Proficient with modern CSS, Flexbox, Grid, and responsive design.',
        },
    ];


    return (
        // Animated Skills Section
        // This section can be animated using react bits
        <div className='skills-section'>

            <div className='skills-header'>
                <SplitText
                    text="Skills"
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
            </div>
            <div 
             className='skills-content-wrapper'
            >
                <div className='profile-card-wrapper'>
                    <ProfileCard
                        name="Javi A. Torres"
                        title="Software Engineer"
                        handle="javicodes"
                        status="Online"
                        contactText="Contact Me"
                        // avatarUrl="../assets/AnanyDeep.png"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                </div>
                <div className='skills-content'>
                    <SkillStack skills={skillsData} />
                </div>
            </div>
        </div>
    )
}

export default Skills