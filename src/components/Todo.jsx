import React, { useState } from 'react'
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from '../actions/Index';

const Todo = () => {

  const [inputData, setimputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  console.log('list-------------------', list.length)
  const dispatch = useDispatch();
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <h2>
            TODO LIST
          </h2>
          <div className='addItems'></div>
          <input type='text' placeholder='Add Items'
            value={inputData}
            onChange={(event) => setimputData(event.target.value)}
          />

          <i className=' fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setimputData(''))}></i>

        </div>
        <div className='showItems'>
          {
            list.map((elem) => {
              return (
                <div className='eachItem' key={elem.id}>
                  <h2>
                    {elem.data}
                    <span><i className=' far fa-trash-alt remove-btn' title='Delete item' onClick={() => dispatch(deleteTodo(elem.id))}></i></span>
                  </h2>

                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Todo
