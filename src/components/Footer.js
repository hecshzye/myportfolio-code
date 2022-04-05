import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { SiAmazon } from 'react-icons/si';
import { SiKaggle } from 'react-icons/si';
import { SiSubstack } from 'react-icons/si';

function Footer() 
{
    return (
        <div className = 'py-5 border-t-3/2'>
            <div className = 'flex align-center justify-center mt-4'>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://github.com/hecshzye">
                                
                <FaGithub />
            <span class = 'sr-only'>Github</span>

            </a>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-orange-500 hover:bg-orange-800 rounded-full hover:text-white transition-colors duration-300' href="https://hecshzye.substack.com">
                                
                <SiSubstack />
            <span class = 'sr-only'>Metafour AI Blog</span>  

            </a>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-600 hover:bg-green-800 rounded-full hover:text-white transition-colors duration-300' href="https://open.spotify.com/album/70AbaIoBHwFNchQw2TRVNh?si=o1Fd40eGTCak8LjZjRnlbw">
                                
                <FaSpotify />
            <span class = 'sr-only'>Spotify</span>
                            
            </a>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-800 rounded-full hover:text-white transition-colors duration-300' href="https://music.apple.com/in/artist/hecshzye/1587509537">
                                
                <SiApplemusic />
            <span class = 'sr-only'>Apple Music</span>  

            </a>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-indigo-700 hover:bg-indigo-800 rounded-full hover:text-white transition-colors duration-300' href="https://music.amazon.co.uk/artists/B074KRTFTH/hecshzye?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_QxAS6F9IqaBmXHlzTiCtCNJaE">
                                
                <SiAmazon />
            <span class = 'sr-only'>Amazon Music</span>  

            </a>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href="https://www.kaggle.com/hecshzye">
                                
                <SiKaggle />
            <span class = 'sr-only'>Kaggle</span>  

            </a>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href="https://twitter.com/hecshzye">
                                
                <FaTwitter />
            <span class = 'sr-only'>Twitter</span>  

            </a>

            <a className = 'text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300' href="mailto:hemanth@hecshzye.com">
                                
                <FaRegEnvelope />
            <span class = 'sr-only'>Email</span>  
                            
            </a>
             
             
        </div>
        <div className = 'flex align-center justify-center mt-4'>
            <p className = 'text-black mb-4'>
                Cooked with <span className = "mr-2" role="img" aria-label="heart">💜</span>by <a className="text-teal-800 hover:underline" href="https://twitter.com/hecshzye">Hemanth Chandran</a>
                </p>
        </div>
        </div> 
    )
}

export default Footer