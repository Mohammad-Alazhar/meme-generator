import React from 'react'
import {useState , useEffect} from 'react'
const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState([])
    
        useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    

  return (
    <main className='px-20 mt-20 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='flex justify-between'>
                <input 
                className='border-2 border-solid rounded-md border-[#D5D4D8] py-2.5 pl-2' 
                type="text" 
                placeholder='top'
                name='topText'
                value={meme.topText}
                onChange={handleChange} />
                <input 
                className='border-2 border-solid rounded-md border-[#D5D4D8] py-2.5 pl-2' 
                type="text" 
                placeholder='bottom'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}  />
            </div>
            
            <button 
            className='mt-10 py-4 rounded-md bg-indigo-900 text-white'
            onClick={getMemeImage}
            >
                Get a new meme image
            </button>
            <div className='relative'>
            <img className='my-10 mw-[100%]' src={meme.randomImage}/>
            <h2 className="absolute top-16 left-[35%] text-4xl font-black text-white">{meme.topText}</h2>
            <h2 className="absolute bottom-16 left-[35%] text-4xl font-black text-white">{meme.bottomText}</h2>
            </div>
            
        </div>
        
    </main>
  )
}

export default Meme