import React from "react";
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: primaryColor, /* 배경색을 원하는 색상으로 변경하세요. */
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <footer style={footerStyle}>
      <span style={{ color: 'white' }}>SW Jungle 7</span>
    </footer>
  );
};

export default Footer;