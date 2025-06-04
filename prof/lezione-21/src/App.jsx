import { useState } from 'react'
import './App.css'
import Post from './components/Post/Post'
import Footer from './components/Footer/Footer'
import { LikeContext } from './context/LikeContext'
import {GandaLorem} from 'gandalorem';

function App() {
  const [post, setPost] = useState({
    id: 1,
    descr: 'foto bellissima della luna scattata ieri notte!',
    urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EeD12yjT1zzLZ0nycdU5xuoiAsQiQmXz1Q&s',
    likesCount: 42
  })

  return (
    <>
      <LikeContext.Provider value={post.likesCount}>
        <Post post={post} />
        <hr />
        <hr />
        <Footer />
      </LikeContext.Provider>

      <hr />

      <h2>
        <GandaLorem words={5} />
      </h2>
      <p>
        <GandaLorem words={25} />
      </p>
    </>
  )
}

export default App
