import './App.css'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Button onClick={() => console.log('text')} variant='contained'>
        Boton
      </Button>
    </div>
  )
}

export default App
