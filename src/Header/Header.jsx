import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import DeLawVeryLogo from '../../src/imgs/DeLawVeryLogo.svg'
import '../App.css';
import Grid from '@mui/material/Grid';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sm={2} md={2}>
          </Grid>
          <Grid item sm={2} md={2}>
            <Link className="linkHome floatLeft" to="/">בית</Link>
          </Grid>
          <Grid item sm={1} md={1}>
          </Grid>
          <Grid item sm={2} md={2}>
            <img className="logo floatLeft" src={DeLawVeryLogo} />
          </Grid>
          <Grid item sm={1} md={1}>
          </Grid>
          <Grid item sm={4} md={4}>
          </Grid>
        </Grid>

      </AppBar>


    </Box>
  );
}