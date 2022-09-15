import './styles/main.css'

import logo from './assets/Logo.png'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="eSports DUO" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-duo-gradient bg-clip-text'>DUO</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative">
          <img src="/games/game-1.png" alt="" />
        </a>
        <a href="">
          <img src="/games/game-2.png" alt="" />
        </a>
        <a href="">
          <img src="/games/game-3.png" alt="" />
        </a>
        <a href="">
          <img src="/games/game-4.png" alt="" />
        </a>
        <a href="">
          <img src="/games/game-5.png" alt="" />
        </a>
        <a href="">
          <img src="/games/game-6.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App
