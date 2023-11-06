import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";

const Board = ({id,title,content,author,password}) => {
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);

  const navigate = useNavigate();

  const moveToUpdate = () => {
    navigate('/update/'+id);
  };

  const deleteBoard = async() => {
    await axios.delete(`${serverAddress}/${id}`).then((res)=>{
      navigate('/board');
    });
  };

  const moveToList = () => {
    navigate('/board');
  }

  return (
    <div>
      <h2>{id}. {title}</h2>
      <hr/>
      <h5>{author}</h5>
      <hr/>
      <p>{content}</p>
      <div>
        <button onClick={moveToUpdate}>수정</button>
        <button onClick={deleteBoard}>삭제</button>
        <button onClick={moveToList}>목록</button>
      </div>
    </div>
  );
};

export default Board;