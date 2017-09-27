import React from 'react';

import './styles.css';
import iLeft from './icons/left-arrow.svg';
import iRight from './icons/right-arrow.svg';
import img from  './images/banner-01.png'

class Banner extends React.Component {
    render() {
        return (
            <div classNameName="banner-container">
                <div classNameName="banner-section">
                    <img className="arrows arrows-left" src={iLeft}/>
                    <img className="arrows arrows-right" src={iRight}/>
                    <div className="slider_box">
                        <div className="slider sd-01">
                            <img className="banner-img" src={img}></img>
                            <div className="banner-cont">
                                <h1 className="banner-header">D. Luffy</h1>
                                <p className="banner-content">Luffy has a worldwide reputation for causing trouble,
                                    challenging the Shichibukai, the Marines, and two of the Yonko (Big Mom and Kaido),
                                    additionally committing felonies and actions which were deemed threatening by the
                                    World Government. Furthermore, in the majority of these confrontations, he emerges
                                    as the victor. He has gained a reputation for being "reckless" and, in some cases,
                                    "insane", after causing an incident in Enies Lobby, assaulting a World Noble at
                                    Sabaody Archipelago, entering and escaping from Impel Down, and joining the Battle
                                    of Marineford. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;