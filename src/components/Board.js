import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";
import { Margin } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';

const Board = ({id,title,content,author,password}) => {
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
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
<div style={{ textAlign: 'center' }}>
  <h2>{title}</h2>
  <hr/>
  <h5 style={{ textAlign: 'right' }}>{author}</h5>
  <hr/>
  <p style={{textAlign:'left'}}>{content}</p>
  <hr/>
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <button style={{ margin: 5, backgroundColor: primaryColor, color: 'white', borderColor: 'white', borderRadius: 5 }} onClick={moveToUpdate}>
      수정
    </button>
    <button style={{ margin: 5, backgroundColor: primaryColor, color: 'white', borderColor: 'white', borderRadius: 5 }} onClick={deleteBoard}>
      삭제
    </button>
    <button style={{ margin: 5, backgroundColor: primaryColor, color: 'white', borderColor: 'white', borderRadius: 5 }} onClick={moveToList}>
      목록
    </button>
  </div>
</div>
  );
};

export default Board;