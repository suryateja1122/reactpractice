import './App.css'
import BasicFunctionComp from './components/BasicFunctionalComp'
import BasicClassComp from './components/BasicClassComp'
import ParentComponent from './components/ParentComponent'
import BasicFormHandling from './components/BasicFormHandling'
import HTTPRequest from './components/HTTPRequest'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
function App() {
  return (
    <div className='App'>
      {/* <BasicFunctionComp /> */}
      {/* <BasicClassComp name='Surya' /> */}
      {/* <HTTPRequest/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      <ClickCounter />
      <HoverCounter />
    </div>
  )
}

export default App
