import './App.css';
import Todo from './components/Todo'
import Title from './components/Title.jsx' ;
import Modal from './components/Modal.jsx';
import React, {useState} from 'react';

function App() {
  const [showModal, setShowModal] = useState(true)
  setShowModal(false)
  return (
    <>
       <Title />
       <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add todo</button>
       </div>
       <div className="todo__wrapper">
          <Todo 
            title="Finish Frontend Simplified"
            paragraph="Code along with Frontend Simplified step by step."
          /> 
          <Todo 
            title="Finish Interview Section"
            paragraph="Finish every interview question in the next 6 weeks."
          />
          <Todo 
            title="Land a 100k Job"
            paragraph="Apply to 100 jobs."
          />
        </div>
       {showModal && <Modal title="Confirm Delete?" />}
    </>
  );
}

export default App;
