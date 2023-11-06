import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab,Tabs,Typography,Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Header = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
<header>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Home" component={Link} to="/" {...a11yProps(0)} />
        <Tab label="Board" component={Link} to="/board" {...a11yProps(1)} />
        <Tab label="Weather" component={Link} to="/Weather" {...a11yProps(2)} />
        <Tab label="Food" component={Link} to="/Food" {...a11yProps(3)} />
      </Tabs>
      <div>
        <Button style={{ backgroundColor: 'white', color: 'black' }} component={Link} to='/signin'>sign-in</Button>
        <Button style={{ backgroundColor: 'white', color: 'black' }} component={Link} to='/signup'>sign-up</Button>
      </div>
    </Box>
  </Box>
</header>
  );
};

export default Header;