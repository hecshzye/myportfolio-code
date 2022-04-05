import React from 'react'

import { SiPython } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiScikitlearn } from 'react-icons/si';
import { SiTensorflow } from 'react-icons/si';
import { SiPytorch } from 'react-icons/si';
 
function Stack() 
{
    return (

        <div className='max-w-4xl mx-auto justify-center py-12' id="I">
            <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-6">
                I love using... 
            </p>
            <div className ="flex flex-wrap justify-center pt-2">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPython color="#4584b6" className='mx-auto text-4xl' />
                    <p className="mt-6 text-xl font-semibold text-center">Python</p>
    
                </div>
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript color="#ffdf00" className="mx-auto text-4xl " />
                    <p className="mt-6 text-xl font-semibold text-center">JavaScript</p>
                
                </div>
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiScikitlearn color="orange" className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl font-semibold text-center">Scikit-Learn</p>
                
                </div>
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiTensorflow color="#eb8c23" className="mx-auto text-4xl" />
                <p className="mt-6 text-base font-semibold text-center">TensorFlow</p>
                
                </div>
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPytorch color="#ee4c2c" className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl font-semibold text-center">PyTorch</p>
                
                </div>


        
            </div>
        </div>
    )
}

export default Stack