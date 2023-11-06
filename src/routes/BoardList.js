import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const BoardList = () => {
  const navigate = useNavigate();
  const [boardList,setBoardList] = useState([]);
  const getBoardList = async()=>{
  const resp = (await axios.get('http://3.36.130.238:8080/posts'));
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
            <Link to={`/board/${board.id}`}>{board.title}</Link>
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