import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ReactDOM from "react-dom";
import Slider from './slides';


const HorizontalMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab label="ELECTRONICS"/>  
      <Tab label="MEN" />
      <Tab label="WOMEN" />
      <Tab label="BEAUTY & FRAGRANCE" />
      <Tab label="BABY" />
      <Tab label="VEHICLES" />
      <Tab label="REAL ESTATE" />
      <Tab label="FOODS" />
      <Tab label="TRAVELING" />
      <Tab label="GIFTS" />
      <Tab label="SPECIAL OFFERS" />
    </Tabs>
  );
};

export default HorizontalMenu;
