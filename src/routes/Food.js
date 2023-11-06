import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Food = () => {
  const [menus, setMenus] = useState([]);
  const url = 'https://www.kaist.ac.kr/kr/html/campus/053001.html?dvs_cd=icc';

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setMenus(response.data.menus);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>식단 정보</h1>
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default Food;