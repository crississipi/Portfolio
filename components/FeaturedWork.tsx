import React from 'react'

interface FeaturedWorkProps {
    srcImage: string;
}

const FeaturedWork: React.FC<FeaturedWorkProps> = ({ srcImage }) => {
  return (
    <button className='bg-transparent w-full ease-in-out duration-150 hover:scale-105 ring-0'>
        <img src={srcImage} alt='image' className='rounded-md shadow-md shadow-blackish'></img>
    </button>
  )
}

export default FeaturedWork
