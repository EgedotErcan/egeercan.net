import React from 'react';

import './Learning.css';

import CalendarGraph from './CalendarGraph';
import { CalendarData } from './CalendarData';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Learning = () => {
  const colorClasses = ["color-class-cyan", "color-class-red", "color-class-yellow", "color-class-green", "color-class-blue", "color-class-gray"];
  const tags = ["Linear Algebra", "Computer Network", "Python", "React", "OSI", "Algebra", "Complex Math","Kubernetes", "Docker", "GraphQL", "Flask", "Javascript", "Git"];
  const getRandomClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  };

  const tagClassMap = {}
  tags.forEach((tag) => {
    tagClassMap[tag] = getRandomClass();
  });

  return (
    <>
      <div className='container'>
        <div className='grid-item-1'>
          <h1>Learn With Me</h1>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et </p>
        </div>
        <div className='grid-item-2'>
          <CalendarGraph data={CalendarData} />
          <ReactTooltip id="react-tooltip" />
        </div>
        <div className='grid-item-3'>
          <h1>My Learning Journey</h1> 
          <div className='tags-container'>
            {tags.map((tag, index) => (
              <div key={index} className={`tag ${tagClassMap[tag]}`}>
                {tag}
              </div>
            ))}
          </div>
        </div> 
        <div className="grid-item-4">
          network graph
        </div>
        <div className="grid-item-5">
          <div className="articles">
            <div className="article-card">
              article one
            </div>
            <div className="article-card">
              article two
            </div>
            <div className="article-card">
              article three
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Learning;
