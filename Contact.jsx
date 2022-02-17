import React from 'react';
import '../components/Contact.css';
import { Grid, Paper } from '@mui/material';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

const Contact = () => {
  return <div class="cover" id="Contact">
    <div class="map">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper class="contact">
            <h5 class="touch">Get in Touch</h5>
            <h2 class="brandname">Let's Make your brand a household name</h2>
            <br />
            <br />
            <h3>Lagos Office:</h3>
            <br />

            <div class="info">
            <div class="icons">
            <MapsHomeWorkRoundedIcon/>
            <a href="https://www.google.com/maps/place/Monumental+Concepts+%26+Displays+Limited/@6.6048334,3.3930891,17z/data=!3m1!4b1!4m5!3m4!1s0x103b9312f66cb40f:0xfd2b14943fbd4e53!8m2!3d6.6048334!4d3.3952778">No 26, Akintoye Shogunle street, Allen Ikeja.</a>
            </div>

            <div class="icons">
            <AttachEmailOutlinedIcon/>
            <a href="mailto:tinoava9@gmail.com">Email Us hello@mcanddltd.com</a>
            </div>

            <div class="icons">
            <PhoneInTalkRoundedIcon/>
            <a href="tel:5554280940">Call us at 555-428-0940</a>
            </div>
            </div>
            
            
            

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
          <iframe width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.378969694858!2d3.3427440147711183!3d6.599736295227245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922f5d7e7489%3A0x80dd8f4c599c0dd4!2sMonumental%20Concepts%20%26%20Design!5e0!3m2!1sen!2sng!4v1644323687618!5m2!1sen!2sng&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br />
          </Paper>
        </Grid>

      </Grid>
      
    </div>
  </div>;
};

export default Contact;
