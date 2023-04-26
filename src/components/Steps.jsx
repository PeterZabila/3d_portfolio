import React, { useState } from 'react';
import { projects } from '../constants';

const Steps = () => {
const [active, setActive] = useState();
const [image, setImage] = useState();
const [description, setDescription] = useState();

const images = projects.map(({image}) => image);

const handleClick = (event) => {
    setActive(event.target.id);
    setImage(images[event.target.id]);
    setDescription(descriptions[event.target.id - 1])
}

const descriptions = [
    "Make the best and most happy moments of your Wedding day stay on the photos, that will remind you about that very day you've had in your life that part different phases of your life into before and after",
    "Every sigle day, every single look, embrace, hug, kiss, touch is unique and will never be the same. Make sure to capture these precious moments of your life in photos!",
    "One famous actor once said: You can pretend in real life to be anybody, but in front of the lese of the camera you can not hide who you are. That is the greatest power of photography",
    "Family photography combines all kinds of photographic skills and is one of the most powerful"
]

const items = [
    {
        id: 1,
        name: "Wedding",
        location: images[0],
    },
    {
        id: 2,
        name: "LoveStory",
        location: images[1],
    },
    {
        id: 3,
        name: "Portrait",
        location: images[2],
    },
    {
        id: 4,
        name: "Family",
        location: images[3]
    }
]
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-20">
                {items.map(item => (
                    <a key={item.id} onClick={handleClick} id={item.id} className={"sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider" + (active === item.id ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t" : "border-gray-200 hover:text-gray-900")} >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    {item.name}
                </a>
                ))}
            
            </div>
            <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={image} />
            <div className="flex flex-col text-center w-full">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{description}</p>
            </div>
        </div>
     </section>

     <div id="default-carousel" className="relative w-full" data-carousel="slide">

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {projects.map(({ image, name }) => (
            <div key={name} className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        ))}
      
    </div>

 
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
    </>
  )
}

export default Steps;
