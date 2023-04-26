import React, { useState, useEffect } from "react";
import bgImg from '../../assets:images/explorebg.jpg'
import pop1 from '../../assets:images/p1.jpg';
import pop2 from '../../assets:images/p2.jpg';
import pop3 from '../../assets:images/p3.jpg';
import pop4 from '../../assets:images/p4.jpg';
import pop5 from '../../assets:images/p5.jpg';
import pop6 from '../../assets:images/p6.jpg';
import pop7 from '../../assets:images/p7.jpg';
import pop8 from '../../assets:images/p8.jpg';
import pop9 from '../../assets:images/p9.jpg';
import pop10 from '../../assets:images/p10.jpg';



export default function ExplorePage() {

    return(
        <>       
        <div className= 'exploreContainer'>
            <div className="carousel" style={{backgroundImage: `url(${bgImg})`}}></div>
            <div className= "genreContainer">
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop1})`}}></div>
                    <button className="btn">Pop</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop2})`}}></div>
                    <button className="btn">Rock</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop3})`}}></div>
                    <button className="btn">Country</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop4})`}}></div>
                    <button className="btn">Instrumental</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop5})`}}></div>
                    <button className="btn">Jazz</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop6})`}}></div>
                    <button className="btn">Classical</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop7})`}}></div>
                    <button className="btn">Latin</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop8})`}}></div>
                    <button className="btn">Techno</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop9})`}}></div>
                    <button className="btn">Hip Hop</button>
                </div>
                <div className="genreWrapper">
                    <div className="card" style={{marginTop: 35, backgroundImage: `url(${pop10})`}}></div>
                    <button className="btn">Blues</button>
                </div>
                
            </div>
        </div>
        
        
        
        </>
       
    )
}