
import Login from "./Input";
import FocusableInput from "./Ref";
import Colors, {colorData} from "./Rendering-lists/Lists";
import TodoList from "./Rendering-lists/Lists-and-state";


function App() {

  return(
    <>
    <Login/>
    <FocusableInput/>
    <Colors colors={colorData} />
    <TodoList/>
    </>
  )
}

export default App;