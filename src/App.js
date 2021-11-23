import './App.css'
import BasicFunctionComp from './components/BasicFunctionalComp'
import BasicClassComp from './components/BasicClassComp'
import ParentComponent from './components/ParentComponent'
import BasicFormHandling from './components/BasicFormHandling'
import HTTPRequest from './components/HTTPRequest'

function App() {
  return (
    <div className='App'>
      {/* <BasicFunctionComp /> */}
      {/* <BasicClassComp name='Surya' /> */}
      <HTTPRequest/>
    </div>
  )
}

export default App
