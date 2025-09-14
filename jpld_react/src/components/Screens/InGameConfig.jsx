import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
    useAppContext,
    setVolume,
    setBrightness,
    setLetterSize,
} from '../../context/DirectoryProvider';

function InGameConfig(){
    const { dispatch, state } = useAppContext();
    
    return(
        <div>
            <div>
                <button onClick={() => setVolume(dispatch, state.settings.volume - 0.1)}> - </button>
                    Volume = {100 * state.settings.volume}
                <button onClick={() => setVolume(dispatch, state.settings.volume + 0.1)}> + </button>
            </div>

            <div>
                <button onClick={() => setBrightness(dispatch, state.settings.brightness - 0.1)}> - </button>
                    Brightness = {100 * state.settings.brightness}
                <button onClick={() => setBrightness(dispatch, state.settings.brightness + 0.1)}> + </button>
            </div>

            <div>
                <button onClick={() => setLetterSize(dispatch, state.settings.letterSize - 0.1)}> - </button>
                    LetterSize = {100 * state.settings.letterSize}
                <button onClick={() => setLetterSize(dispatch, state.settings.letterSize + 0.1)}> + </button>
            </div>

        </div>
        
    );
}

export default InGameConfig;