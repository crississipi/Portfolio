import React from 'react'
import FeaturedWork from './FeaturedWork'
import Header from './Header'
import NavBtn from './NavBtn'

const Hero = () => {
  return (
    <div className='h-full w-full relative overflow-hidden flex items-center justify-center'>
      <div className='h-full w-full grid grid-cols-30 items-center bg-blackish fixed -top-3 z-10 before:'>
        { Array.from({length: 450}).map((_, i) => (
            <span key={i} className='col-span-1 aspect-square rounded-xs bg-whitish hover:scale-115 hover:shadow-sm hover:z-10 ease-in duration-75'></span>
        )) }
      </div>
      <div className='w-1/3 h-full z-50 flex flex-col justify-between pl-10 pt-10'>
        <Header/>
        <div className='flex flex-col'>
          <h1 className='text-5xl'>Hey! I'm Cris</h1>
          <h2 className='text-base'>&gt;&gt; <a href="#" className='hover:underline'>Connect With Me!</a></h2>
        </div>
        <div className='flex flex-col mb-20 gap-2'>
          <NavBtn 
            icon={0} 
            link='https://www.linkedin.com/in/crismalipico12/'
            label='in/crismalipico12/'
          />
          <NavBtn 
            icon={1} 
            link='https://github.com/crississipi'
            label='github.com/crississipi'
          />
          <NavBtn 
            icon={2} 
            link='https://mail.google.com/mail/?view=cm&fs=1&to=crismalipico12@gmail.com'
            label='crismalipico12@gmail.com'  
          />
        </div>
      </div>
      <div className='h-full w-2/3 z-50 grid grid-cols-3 gap-x-5 gap-y-5 left-1/3 translate-x-1/3' style={{transform: 'perspective(800px) rotate(45deg)', transformStyle: 'preserve-3d'}}>
        <div className='col-span-1 flex flex-col gap-5'>
          <FeaturedWork srcImage='./sample.jpg'/>
          <FeaturedWork srcImage='./sample2.jpg'/>
          <FeaturedWork srcImage='./sample.jpg'/>
          <FeaturedWork srcImage='./sample2.jpg'/>
          <FeaturedWork srcImage='./sample.jpg'/>
        </div>
        <div className='col-span-1 flex flex-col gap-5'>
          <FeaturedWork srcImage='./sample.jpg'/>
          <FeaturedWork srcImage='./sample2.jpg'/>
          <FeaturedWork srcImage='./sample.jpg'/>
          <FeaturedWork srcImage='./sample2.jpg'/>
        </div>
        <div className='col-span-1 flex flex-col gap-5'>
          <FeaturedWork srcImage='./sample.jpg'/>
          <FeaturedWork srcImage='./sample2.jpg'/>
          <FeaturedWork srcImage='./sample.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
