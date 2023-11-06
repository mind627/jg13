import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from '../components/Board';
import { useSelector } from "react-redux";


const BoardDetail = () => {
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);
  const { id } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const getBoard = async () => {
    // const resp = await (await axios.get(`/${id}`)).data;
    const resp = await (await axios.get(`${serverAddress}/${id}`)).data;
    setBoard(resp);
    setLoading(false);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Board
          id={board.id}
          title={board.title}
          content={board.content}
          author={board.author}
        />
      )}
    </div>
  );
};

export default BoardDetail;