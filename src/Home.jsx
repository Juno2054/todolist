// src/pages/Home.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, switchTodo } from '../src/redux/modules/todos';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [title,setTitle]= useState('')
  const [contents,setContents]= useState('')
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = (title, contents) => {
    dispatch(addTodo(title, contents));
    setTitle('');
    setContents('');
    
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSwitchTodo = (id) => {
    dispatch(switchTodo(id));
  };

  const handleNavigateToDetail = (id) => {
    navigate(`/${id}`);
  };

  const compled =todos.filter((todo)=>todo.isDone);
  const incomple =todos.filter((todo)=>!todo.isDone);
  return (
    <div>
      <h1>내 할일 리스트</h1>
      <div>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <div></div>
        <input type="text" placeholder="Contents" value={contents} onChange={(e)=>{setContents(e.target.value)}}/>
        <button onClick={() => handleAddTodo(title,contents)}>추가</button>
      </div>
      <h1>하는중</h1>
      <ul>
        {incomple.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.contents}
            <button onClick={() => handleSwitchTodo(todo.id)}>
              {todo.isDone ? '취소' : '끝남'}
            </button>
            <button onClick={() => handleNavigateToDetail(todo.id)}>상세보기</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <div><h1> 끝남</h1>
      <ul>
        {compled.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.contents}
            <button onClick={() => handleSwitchTodo(todo.id)}>
              {todo.isDone ? '취소' : '끝남'}
            </button>
            <button onClick={() => handleNavigateToDetail(todo.id)}>상세보기</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
      </div>

      </div>
    </div>
  );
};

export default Home;
