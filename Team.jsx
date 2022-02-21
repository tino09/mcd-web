import React from 'react'
import team from '../img/about-us.jpeg'

const Team = () => {
  return (
    <div id="#About">
    <div className="container">
        <div className="row">

            <div className="col-md-6">
                <h1>We are
Monumental Concepts & Displays</h1>

    <p>...an Out of Home (Billboard) media solution provider and a Pan Nigeria player.

Established in 2001, is a company driven by innovation and professionalism with a philosophy of adding value to our client’s portfolio.

Registered with: The Advertising Practitioners Council of Nigeria (APCON), the Outdoor Advertising Association of Nigeria (OAAN) the sectorial regulatory body; Lagos State Signage & Advertising Agency (LASAA ) to practice outdoor in Lagos State, the Federal Capital Development Authority (FCDA) to practice out door in Abuja and all agencies in States where outdoor is regulated in Nigeria.

We aspire to be the leading player within our category through sustained innovation, technology and creativity that will add value to service delivery using seamless system of administration that focuses on team work, creativity, passion and goal getting attitude from the workforce.</p>
            </div>
            <div className="col-md-6">
            <img src={team} alt="" srcset=""  height="500" width="285"/>
            </div>
        </div>

        <div className="row team">
            <h2>MEET OUR AWESOME TEAM</h2>
            <div className="col-md-6">
            <h1>ONYINYE IGBO-UGWU</h1>
            <h4>HEAD (MARKETING & STRATEGY)</h4>
            </div>
            <div className="col-md-6">
            <p>Mrs. Onyinye had her first degree in Architecture from Imo state University
             as well as a Masters Degree in Architecture from University of Nigeria, Nsukka. 
             She has over 15 years’ experience spanning Architecture, Banking, Information 
             Technology and Outdoor Advertising. Her passion for aesthetics and functionality 
             has made her an advocate of Out-Of-Home Branding as a tool for positively changing 
             the ambience of the cityscape Before joining Monumental Concepts & Displays Limited, 
             she worked with leading advertising agencies such as Plural Media Limited, Rocana 
             Outdoor Advertising Agency covering the South South/South East Geopolitical zones 
             of Nigeria as well as Proview Advertising Limited an Integrated Marketing 
             Communications Agency based in Lagos. She is an Associate member of the Advertising 
             Practitioners Council of Nigeria (APCON)</p>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Team