import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 실제로는 여기에서 서버로 로그인 요청을 보내고 인증을 수행해야 합니다.
    // 이 예제에서는 간단히 하드코딩한 사용자 정보와 비밀번호를 사용합니다.

    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('로그인 실패. 올바른 사용자 이름과 비밀번호를 입력하세요.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      {isLoggedIn ? (
        <div>
          <p>로그인 성공! 환영합니다, {username}!</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default SignIn;