import { useState } from "react"
import Counter from "./components/Counter"
import  './styles/styles.css'

function App() {

  const [isShow, setIsShow] = useState(false)

  const handleShowHide = () =>setIsShow(!isShow)

  return (
    <div>
      <Counter/>
      <hr />
      <button onClick={handleShowHide}>Show/Hide Image</button>
      <hr />
      {
        isShow
        ? <img src="https://media.makeameme.org/created/inteligente-pero-inteligente.jpg" alt="" />
        : <h2> La imagen esta oculta</h2>
      }
      
    </div>
  )
}

export default App
