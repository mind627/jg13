import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";


const BoardList = () => {
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);
  const navigate = useNavigate();
  const [boardList,setBoardList] = useState([]);
  const getBoardList = async()=>{
  const resp = (await axios.get(serverAddress));
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
      <ul>{boardList.map((board)=>(
          <li key={board.id}>
            <Link to={`/posts/${board.id}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={moveToWrite}>글쓰기</button>
      </div>
    </div>
  );
};

export default BoardList;