import './App.css';
import Todo from './Components/Todo.jsx'
import Title from './Components/Title.jsx'
import Modal from './Components/modal.jsx'

function App() {
  return (
    <>
       <Title />
       <div className="todo__wrapper">
          <Todo /> 
          <Todo />
          <Todo />
        </div>
        <Modal />
    </>
  );
}

export default App;
