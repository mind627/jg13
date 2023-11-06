import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BoardUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // /update/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [board, setBoard] = useState({
    title: '',
    author: '',
    content: '',
    password: ''
  });
  const { title, author, content, password } = board; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const getBoard = async () => {
    const resp = await (await axios.get(`http://3.36.130.238:8080/posts/${id}`)).data;
    setBoard(resp);
  };

  const updateBoard = async () => {
    await axios.patch(`http://3.36.130.238:8080/posts/${id}`, board).then((res) => {
      alert('수정되었습니다.');
      navigate('/board/' + id);
    });
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
      <div>
        <span>비밀번호</span>
        <textarea 
          name="password"
          value={password}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={updateBoard}>수정</button>
        <button onClick={backToDetail}>취소</button>
      </div>
    </div>
  );
};

export default BoardUpdate;