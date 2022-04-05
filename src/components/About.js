import React from 'react'
import ScrollIntoView from 'react-scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';


function About() 
{
    return (
        <div className="max-w-4xl mt-20 mx-auto">
            
            <p className="text-2xl text-black  md:text-3xl font-bold text-center">
                Great seeing you here! 👋  
            
            </p>
            <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
                I'm a self-taught Data Scientist and Machine Learning Engineer. I love acoustics, and I was a Record Producer and Mix/Mastering Engineer before losing my right ear; right now, probably brainstorming about Cybernetics and Philosophy at a cafe. 
            
            </p>

      
        <ScrollIntoView selector = "#I">

            <div class='mx-auto p-28'>
          
                <FaChevronDown class= "animate-bounce mx-auto text-3xl text-teal-500"/> 
      
            </div>

        </ScrollIntoView>
        
        
        </div>
    )
}

export default About