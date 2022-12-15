import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

import { useForm } from './hooks/useForm'

import './App.css'

function App() {

  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ];

  const { currentStep, currentComponent } = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, avalie sua experiência abaixo</p>
      </div>
      <div className="container">
        <p>etapas</p>
        <form action="">
          <div className="inputsContainer">
            {currentComponent}
          </div>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
