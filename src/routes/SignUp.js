import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";

const SignUp = () => {
  const [uid, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();
  const serverAddress = useSelector(state=>state.serverConnector.serverAddress);

  const handleSignUp = async() => {
    // 여기에서 서버로 회원가입 요청을 보내고 회원 등록을 수행해야 합니다.
    // 이 예제에서는 간단히 사용자 이름과 비밀번호를 비교하여 회원 등록을 시뮬레이션합니다.
    const resp = (await axios.get(`${serverAddress}/userinfo`)).data;
    if ({uid:password} in resp){
      alert('이미 존재하는 아이디입니다.');
    }else{
      console.log(uid)
      console.log(password)
      let info = {};
      info[uid] = password
      await axios.post(`${serverAddress}/userinfo`,info).then((res)=>{
        setIsRegistered(true);
        navigate('/Home');
      }).catch(e=>{console.log(e.response)});};
  };

  const handleLogin = () => {
    // 로그인 페이지로 이동하거나 다른 작업을 수행할 수 있습니다.
    navigate('/signin');
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      {isRegistered ? (
        <div>
          <p>회원가입이 완료되었습니다. 환영합니다, {uid}!</p>
          <button onClick={handleLogin}>로그인</button>
        </div>
      ) : (
<div>
  <div>
    <label>아이디</label>
    <input
      type="text"
      placeholder="사용자 이름"
      value={uid}
      onChange={(e) => setUsername(e.target.value)}
    />
  </div>
  <div>
    <label>비밀번호</label>
    <input
      type="password"
      placeholder="비밀번호"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div>
    <label>비밀번호 확인</label>
    <input
      type="password"
      placeholder="비밀번호 확인"
      value={confirmedPassword}
      onChange={(e) => setConfirmedPassword(e.target.value)}
    />
  </div>
  <button onClick={handleSignUp}>회원가입</button>
</div>
      )}
    </div>
  );
};

export default SignUp;