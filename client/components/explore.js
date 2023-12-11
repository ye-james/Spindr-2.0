import React, { useState, useEffect } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import Navbar from './navbar';

/* IMPORTING IMAGES */
import bgImg from '../assets_images/explorebg.jpg'
import pop1 from '../assets_images/p1.jpg';
import pop2 from '../assets_images/p2.jpg';
import pop3 from '../assets_images/p3.jpg';
import pop4 from '../assets_images/p4.jpg';
import pop5 from '../assets_images/p5.jpg';
import pop6 from '../assets_images/p6.jpg';
import pop7 from '../assets_images/p7.jpg';
import pop8 from '../assets_images/p8.jpg';
import pop9 from '../assets_images/p9.jpg';
import pop10 from '../assets_images/p10.jpg';

const genreList = ['Pop','Rock','Country','Ambient','Jazz','Classical','Latin','Techno','Hip-Hop', 'Blues'];
const popList =[pop1,pop2,pop3,pop4,pop5,pop6,pop7,pop8,pop9,pop10 ];



export default function ExplorePage() {
const [genre, setGenre] = useState("");
const navigate = useNavigate();
// const history = useHistory();

const handleClick = async(e) => {
   
    console.log((e.target.name), 'genre');
    navigate('/songs', {state: {genre: e.target.name}})
}

const handleChange = async(value) => {
   
    console.log((value), 'genre');
    navigate('/songs', {state: {genre: value}})
}
   
    return(
        <>       
        <Navbar/>
         <div className= 'exploreContainer'>
            <div className="carousel" style={{backgroundImage: `url(${bgImg})`}}></div>
            <div className='searchContainer'>
                <input id = "inputField" placeholder="Enter Genre here" ></input>
                <button className='searchBtn' onClick={(e) => handleChange(document.getElementById('inputField').value)}>Search</button>
            </div>
            <div className= "genreContainer">  {/* generates genre containers based on the genreList array */}
               {( 
                    genreList.map((el, i) => {
                       return  <div key={i} className="genreWrapper">
                            <div className="card" style={{marginTop: 35, backgroundImage: `url(${popList[i]})`}}></div>
                            <button className="btn" id='btn' onClick={handleClick} name={el}>{el}</button>
                        </div> 
                    })
                )}                
            </div>
        </div>
        
        
        
        </>
       
    )
}



{/* <div className="genreWrapper">
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
                </div>   */}