import React from 'react';
import './App.css';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import FavoriteList from "./components/FavoriteList";

const App = () => {
  return (
    <div className="App">
      <FavoriteList />
    </div>
  );
}

export default App;
