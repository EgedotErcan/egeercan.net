import { React, useState } from 'react';

import Terminal from './Terminal';

import './About.css'
import { skillsContent, expContent, aboutContent, projectsContent } from './Content';
import DownloadIcon from 'assets/download.svg'
import CvPdf from 'assets/cv.pdf'
import { Link } from 'react-router-dom';

const About = () => {

    const [selectedButton, setSelectedButton] = useState(null);


    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        console.log(selectedButton);
    };

    const handleDownload = () => {
        window.location.href = CvPdf;
    };


    return (
        <>
            <div className='about_container margin_top'>
                <div className="navbar">
                    <Link to='/' className='link'>
                        <div className="image_container image_size" role="button">
                            <img alt='avatar' src='https://avatars.githubusercontent.com/u/79145337?v=4' className='avatar'/>
                        </div>
                    </Link>
                    <div className='about_bar'>
                        <div className="bar_card" role="button" onClick={() => handleButtonClick('about')}>
                            about
                        </div>
                        <div className="bar_card" role="button" onClick={() => handleButtonClick('skills')}>
                            skills
                        </div>
                        <div className="bar_card" role="button" onClick={() => handleButtonClick('experience')}>
                            experience
                        </div>
                        <div className="bar_card" role="button" onClick={() => handleButtonClick('projects')}>
                            projects
                        </div>
                        <div className="bar_card download" role="button" onClick={() => handleDownload()}>
                            cv <img src={DownloadIcon} alt='download cv' />
                        </div>
                    </div>
                </div>
                {(selectedButton === null || selectedButton === "about") && <Terminal catContent={aboutContent.cat} catFile={aboutContent.file} />}
                {selectedButton === "skills" && <Terminal catContent={skillsContent.cat} catFile={skillsContent.file} />}
                {selectedButton === "experience" && <Terminal catContent={expContent.cat} catFile={expContent.file} />}
                {selectedButton === "projects" && <Terminal catContent={projectsContent.cat} catFile={projectsContent.file} />}
            </div>
        </>
    );
};

export default About;
