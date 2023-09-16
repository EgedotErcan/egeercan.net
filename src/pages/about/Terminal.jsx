import { React, useEffect, useState} from 'react';

import './About.css'
import Typewriter from 'react-ts-typewriter';

const Terminal = ({ catContent, catFile }) => {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 3500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className='prompt'>
            <h1 className={`${showAnimation ? "terminal" : ""}`}>~$
                <Typewriter text={` cat ${catFile}.sh`} cursor={false} speed={150} />
            </h1>
            <div className='output'>{catContent}</div>
            <h1 className='terminal_normal'>~$&nbsp;</h1>
        </div>
    );
};

export default Terminal;





