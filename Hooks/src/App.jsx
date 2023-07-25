import './App.css'
import Memo from './Memo/Memo'
import AppCallback from './useCallback/AppCallback'
import AppContext from './useContext/AppContext'
import ThemeProvider from './useContext/ThemeContext'
import AppRender from './useEffect/AppRender'
import Content from './useEffect/Content'
import Tab from './useEffect/Tab'
import AppMemo from './useMemo/AppMemo'
import AppReduce from './useReduce/AppReduce'
import TodoApp from './useReduce/Todo/TodoApp'
import TodoReduce from './useReduce/TodoReduce'
import TimeCount from './useRef/TimeCount'
import Count from './useState/Count'
import Form from './useState/Form'
import RamdomGift from './useState/RamdomGift'
import TodoList from './useState/TodoList'

function App() {

  return (
    <>
     <ThemeProvider>
        <AppContext/>
      </ThemeProvider>
      {/* <Count/> */}
      <hr/>
      {/* <RamdomGift/> */}
      <hr/>
      {/* <Form/> */}
      <hr/>
      {/* <TodoList/> */}
      <hr/>
      {/* <Content/> */}
      <hr/>
      {/* <Tab/> */}
      <hr/>
      {/* <AppRender/> */}
      <hr/>
      {/* <TimeCount/> */}
      <hr/>
      {/* <AppCallback/> */}
      <hr/>
      {/* <Memo/> */}
      <hr/>
      {/* <AppMemo/> */}
      {/* <AppReduce/> */}
      {/* <TodoReduce/> */}
      {/* <TodoApp/> */}
      <hr/>
      
    </>
  )
}

export default App
