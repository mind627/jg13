import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";

const BoardWrite = () => {
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);

  const navigate = useNavigate();

  const [board,setBoard] = useState({
    title:'',
    author:'',
    content: '',
    password: '',
  });

  const {title,author,content,password} = board;

  const onChange = (event) => {
    const {value, name} = event.target;
    setBoard({
      ...board,[name]:value,
    });
  };

  const saveBoard = async() => {
    if (board.title.length<3){
      alert('3글자 이상 제목을 입력해주세요');
    }else{
    // await axios.post(`/`,board).then((res)=>{
    await axios.post(`${serverAddress}`,board).then((res)=>{
      alert('등록되었습니다.');
      navigate('/board');
    });}
  };

  const backToList = () => {
    navigate('/board');
  };

  return (
    <div>
      <div>
        <span>제목</span>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={onChange} />
      </div>
      <br/>
      <div>
        <span>작성자</span>
        <input 
          type="text" 
          name="author" 
          value={author} 
          onChange={onChange}/>
      </div>
      <br/>
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
      <br/>
      <div>
        <button onClick={saveBoard} disabled={title===""||author===""||content===""||password===""}>저장</button>
        <button onClick={backToList}>취소</button>
      </div>
    </div>
  );
};

export default BoardWrite;