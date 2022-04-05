import React from "react";
import profile from '../images/image.png';
import { FaGithub } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import { FaRegEnvelope } from 'react-icons/fa';

function Card() 
{
    return(  
        <div className = 'w-full'>
            <div className = 'flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
                <div className = ''>
                    <img className = 'w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt='profile face' />
                </div>
                <div className = 'text-center mt-5'>
                    <p className = 'text-xl sm:text-2xl font-semibold text-gray-900'>
                            Hemanth Chandran
                        </p>
                        <p className = 'text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                            Machine Learning Engineer,  Record Producer

                        </p>

                        <div className = 'flex align-center justify-center mt-4'>


                            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href="https://twitter.com/hecshzye">
                                
                                <FaTwitter />
                                <span class = 'sr-only'>Twitter</span>  
                            
                            </a>

                            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-600 hover:bg-green-600 rounded-full hover:text-white transition-colors duration-300' href="https://open.spotify.com/album/70AbaIoBHwFNchQw2TRVNh?si=o1Fd40eGTCak8LjZjRnlbw">
                                
                                <FaSpotify />
                                <span class = 'sr-only'>Spotify</span>
                            
                            </a>

                            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-orange-500 hover:bg-orange-600 rounded-full hover:text-white transition-colors duration-300' href="https://hecshzye.substack.com">
                                
                                <SiSubstack />
                                <span class = 'sr-only'>Metafour Blog</span>  
                            
                            </a>
                            
                            
                            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://github.com/hecshzye">
                                
                                <FaGithub />
                                <span class = 'sr-only'>Github</span>

                            </a>


                            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300' href="mailto:hemanth@hecshzye.com">
                                
                                <FaRegEnvelope />
                                <span class = 'sr-only'>Email</span>  
                            
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card; 
