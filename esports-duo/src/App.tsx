import { useState } from 'react'

interface ButtonProps {
  title: String;
  count: number;
  callback: Function
}

function Button(props: ButtonProps) {
  const { count, callback, title } = props;

  const handleClick = () => callback((count: any) => count + 1);

  return (
    <button onClick={handleClick}>
      {title} | {count}
    </button>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World</h1>
      <hr/>
      <div className="card">
        <Button title="Increment+" count={count} callback={setCount} />
      </div>
      <h3>Valor Atual: {count}</h3>
    </div>
  )
}

export default App
