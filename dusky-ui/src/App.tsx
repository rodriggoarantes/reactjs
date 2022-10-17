import './styles/global.css';

import { Login } from './pages/Login/Login';

export function App() {
  return (
    <div className={
      " w-screen h-screen bg-gray-900 text-gray-100"
    }>
      {/* TODO adicionar route */}
      <Login/>
    </div>
  )
}
