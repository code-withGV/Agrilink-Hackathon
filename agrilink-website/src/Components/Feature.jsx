import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/image1.png';  
import fimage2 from '../images/image2.png';
import fimage3 from '../images/image3.png';
import fimage4 from '../images/image4.png';




function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
      <Featurebox image={fimage2} title="Direct Marketplace Access" para="AgriLink connects farmers directly with consumers and businesses, eliminating middlemen and ensuring better prices for their produce."/>
      <Featurebox image={fimage1} title="Government Scheme Updates" para="Stay informed with the latest government schemes and subsidies. AgriLink provides real-time updates to help farmers take advantage of available benefits."/>
      <Featurebox image={fimage3} title="Real-time Damage Alerts" para="Receive real-time alerts about weather conditions and other factors that could damage crops, helping farmers take timely preventive actions."/>
      <Featurebox image={fimage4} title="Easy Registration" para="AgriLink offers a simple and quick registration process, allowing farmers to join the platform using just their mobile number and state information."/>
        
       
      </div>
    </div>
  )
}

export default Feature;