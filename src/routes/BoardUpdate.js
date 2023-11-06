import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";

const BoardUpdate = () => {
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);

  const navigate = useNavigate();
  const { id } = useParams(); // /update/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [board, setBoard] = useState({
    title: '',
    author: '',
    content: '',
  });
  const { title, author, content} = board; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const getBoard = async () => {
    // const resp = await (await axios.get(`/${id}`)).data;
    const resp = await (await axios.get(`${serverAddress}/board/${id}`)).data;
    setBoard(resp);
  };

  const updateBoard = async () => {
    if (board.title.length<3){
      alert('3글자 이상 제목을 입력해주세요');
    }else{
    // await axios.patch(`/${id}`, board).then((res) => {
    await axios.patch(`${serverAddress}/board/${id}`, board).then((res) => {
      navigate('/board/' + id);
    });}
  };

  const backToDetail = () => {
    navigate('/board/' + id);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input type="text" name="author" value={author} readOnly={true} />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={updateBoard} disabled={title===""||author===""||content===""}>수정</button>
        <button onClick={backToDetail}>취소</button>
      </div>
    </div>
  );
};

export default BoardUpdate;