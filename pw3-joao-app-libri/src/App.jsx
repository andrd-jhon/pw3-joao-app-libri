import './App.css'
import './components/CardBooks.jsx'
import CardBooks from './components/CardBooks.jsx'
import cavernas from './assets/livros/cavernas_aco.jpg'
function App() {
  return (
    <>
      <CardBooks
        titulo='As Cavernas de Aço'
        autor='joão'
        nome='Isaac Asimov'
        imagem={cavernas}
      />
    </>
  )
}

export default App
