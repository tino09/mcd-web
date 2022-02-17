import React from 'react'
import '../components/Mission.css'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Mission = () => {
  return (
    <div>

<Grid container spacing={2}>
  <Grid  item xs={4}>
    <Paper >
        <h3>Who we are our philosophy</h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis tempora distinctio deserunt, odit nam perspiciatis vitae illo soluta nemo! Suscipit, quas. Deserunt, cumque labore omnis voluptate perferendis amet harum.</p>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper>
    <h3>Our Philosophy</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia vel soluta voluptatum placeat odit accusantium, dicta non facilis laboriosam eius doloribus adipisci. Veniam quis aspernatur ullam id, animi in.</p>
        </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper>
    <h3>How we work</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi quibusdam quo in, maxime impedit iusto nulla deserunt eligendi officiis cum aspernatur dolore id odio nesciunt esse quasi nobis vitae!</p>
        </Paper>
  </Grid>
</Grid>
    </div>)
    
  }
export default Mission