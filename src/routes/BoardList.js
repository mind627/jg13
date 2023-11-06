import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import BasicCard from '../components/Card';
import './BoardList.css';
import { Margin } from "@mui/icons-material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const BoardList = () => {
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);
  const navigate = useNavigate();
  const [boardList,setBoardList] = useState([]);
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  const getBoardList = async()=>{
  const resp = (await axios.get(serverAddress+'/board'));
  setBoardList(resp.data);
  };

  const moveToWrite = () => {
    navigate('/write');
  };

  useEffect(() => {
    getBoardList();
  },[]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
        <Button style={{backgroundColor:primaryColor,color:"white"}} onClick={moveToWrite}>Post</Button>
      </div>
      <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{boardList.map((board)=>(
          <BasicCard style={{border:`1px solid`}} id={board.id} title={board.title} author={board.author} content={board.content}/>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;