import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {logIn} from '../../context/DirectoryProvider';
function Home(){
    return(
        <div>
             <nav>
                <Link to="/Configuration">Configuration</Link> |{" "}
                <Link to="/InGame">InGame</Link> |{" "}
                <Link to="/LevelOverlay">LevelOverlay</Link> |{" "}
                <Link to="/LevelSelector">LevelSelector</Link> |{" "}
                <Link to="/PlayerSelector">PlayerSelector</Link> |{" "}
                <Link to="/">Home</Link>
            </nav>
           
            <button onClick={logIn}>LogIn</button>
        </div>
    );
}

export default Home;