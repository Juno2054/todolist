import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const location = useLocation();
  const navigate = useNavigate();
  const todoId = Number(location.pathname.substring(1));
  const todo = todos.find((todo) => todo.id === todoId);

  const handleNavigateBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Todo Detail</h2>
      {todo ? (
        <div>
          <p>
            <strong>제목:</strong> {todo.title}
          </p>
          <p>
            <strong>내용:</strong> {todo.contents}
          </p>
          <p>
            <strong>상태:</strong> {todo.isDone ? '끝남' : '진행중?'}
          </p>
          <button onClick={handleNavigateBack}>뒤로가기</button>
        </div>
      ) : (
        <p>몰.?루.?</p>
      )}
    </div>
  );
};

export default Detail;
