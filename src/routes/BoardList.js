import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const BoardList = () => {
  const [boardList,setBoardList] = useState([]);

  const getBoardList = async()=>{
    const resp = await (await axios.get('//localhost:4000/board')).data;
    setBoardList(resp.data);
  }

  useEffect(() => {
    getBoardList();
  },[]);

  return (
    <div>
      <ul>{boardList.map((board)=>(
          <li key={board.idx}>
            <Link to={`/board/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;