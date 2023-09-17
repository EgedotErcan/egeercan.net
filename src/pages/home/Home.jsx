import React from 'react';

import GithubLogo from 'assets/github.svg';
import LinkedinLogo from 'assets/linkedin.svg';
import TwitterLogo from 'assets/twitter.svg';
import InstagramLogo from 'assets/instagram.svg';
import SpotifyLogo from 'assets/spotify.svg';
import ProfilePhoto from 'assets/pp.png';
import Typewriter from 'react-ts-typewriter';
import CodeEditor from 'pages/home/CodeEditor';
import Navbar from 'pages/home/Navbar';
import 'pages/home/Home.css'

const Home = () => {

  return (
      <div className='panel'>

        <div className="image_container">
          <img alt='Ege Ercan' src={ProfilePhoto} className='avatar'></img>
        </div>

        <div className='intro_container'>
          <h1 className='intro_text'>
            Hi, I am <span className='intro_name'>Ege Ercan</span>
          </h1>
          <h2 className='intro_desc'><span className='terminal'><Typewriter text={["CS", "Math"]} speed={400} loop={true} cursor={ false } /></span>Enthusiast</h2>
            <div className="social">
              <a href='https://github.com/egedotercan'>
                <img src={GithubLogo} alt='Github link' className='svg_icon' />
              </a>
              <a href='https://www.linkedin.com/in/ege-ercan'>
                <img src={LinkedinLogo} alt='Linkedin link' className='svg_icon' />
              </a>
              <a href='https://twitter.com/EgedotErcan'>
                <img src={TwitterLogo} alt='Twitter link' className='svg_icon' />
              </a>
              <a href='https://www.instagram.com/ege_ercann'>
                <img src={InstagramLogo} alt='Instagram link' className='svg_icon' />
              </a>
              <a href='https://open.spotify.com/user/21vnps5hoankrvcliwyxoktla'>
                <img src={SpotifyLogo} alt='Spotify link' className='svg_icon' />
              </a>
            </div>
        </div>
        
        <div className='editor'>
          <CodeEditor />
        </div>
        <div className="navbar">
          <Navbar />
        </div>

      </div>
  );
};

export default Home;
