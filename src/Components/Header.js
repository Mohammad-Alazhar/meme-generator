import React from 'react'

const Header = () => {
  return (
    <div className='bg-indigo-900 text-white flex justify-between items-center h-16 px-20'>
        <div className='flex items-center'>
            <img className='w-10 mr-2.5' src='./images/Troll-Face.png' alt="memeIcon" />
            <h1 className='font-bold text-xl'>Meme Generator</h1>
        </div>
        <p>React Course - Project 3</p>
    </div>
  )
}

export default Header