import './App.css'
import BasicFunctionComp from './components/BasicFunctionalComp'
import BasicClassComp from './components/BasicClassComp'
import ParentComponent from './components/ParentComponent'
import BasicFormHandling from './components/BasicFormHandling'

function App() {
  return (
    <div className='App'>
      {/* <BasicFunctionComp /> */}
      {/* <BasicClassComp name='Surya' /> */}
      <BasicFormHandling />
    </div>
  )
}

export default App
