import React from 'react';
import '../CSS/Footer.css'
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <>
      <div className='footer-div'>
        {/* .......1...... */}

        <div className='footer-div-1'>

            <span><a href='ab' alt=''>Back to Top</a></span>

        </div>
        {/* ......2..... */}

        <div className='footer-div-2'>

            <div className='footer-div-2-inside'>
              
                <div>
                    <h2 className='list-head'>Get to Know Us</h2>
                   
                     <ul>
                        <li><a href='a' >About Us</a></li>
                        <li><a href='a' >Careers</a></li>
                        <li><a href='a' >Press Releases</a></li>
                        <li><a href='a' >Amazon Cares</a></li>
                        <li><a href='a' >Gift a Smile</a></li>
                        <li><a href='a' >Amazon Science</a></li>
                     
                     </ul>

                </div>

                <div>
                <h2 className='list-head'>Connect with Us</h2>
                 
                     <ul>
                        <li><a href='a' >Facebook</a></li>
                        <li><a href='a' >Twitter</a></li>
                        <li><a href='a' >Instagram</a></li>
                     
                     </ul>
                </div>

                <div>
                <h2 className='list-head'>Make Money with Us</h2>
                  
                     <ul>
                        <li><a href='a' >Sell on Amazon</a></li>
                        <li><a href='a' >Sell under Amazon accelerator</a></li>
                        <li><a href='a' >Amazon Global Selling</a></li>
                        <li><a href='a' >Become an Affiliate</a></li>
                        <li><a href='a' >Fulfilment by Amazon</a></li>
                        <li><a href='a' >Advertise Your Products</a></li>
                        <li><a href='a' >Amazon Pay on Merchants</a></li>
                     
                     </ul>
                </div>

                <div>
                <h2 className='list-head'>Let Us Help You</h2>
                  
                     <ul>
                        <li><a href='a' >COVID-19 and Amazon</a></li>
                        <li><a href='a' >Your Account</a></li>
                        <li><a href='a' >Returns Centre</a></li>
                        <li><a href='a' >100% Purchase Protection</a></li>
                        <li><a href='a' >Amazon App Download</a></li>
                        <li><a href='a' >Amazon Assistant Download</a></li>
                        <li><a href='a' >Help</a></li>
                     
                     </ul>
                </div>

            </div>

        </div>

        {/* .....3..... */}

        <div className='footer-div-3'>

            <div className='footer-div-3-inside'>
                <div style={{textAlign:"center",marginTop:"10px"}}>
                  
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

                        <div >
                        <img src={require('../CSS/amazon.png')} alt='' width='125px' height='55px' />
                        </div>
                
                        <div className='drop-footer-div'>
                            
                                <span><LanguageIcon/></span>
                                <span>English</span>
                        

                            <div className='drop-footer-content'>
                                <ul>
                                   <li>
                                    <input type='radio' name='btn-rads'/>
                                   <span>English-en</span>
                                    </li>
                                    <br></br>
                                    <hr/>
                                    <li><input type='radio' name='btn-rads'/><span>Hindi</span></li>
                                    <li><input type='radio' name='btn-rads'/><span>Urdu</span></li>
                                    <li><input type='radio' name='btn-rad'/><span>Bangla</span></li>
                                    
                                      <p><a href='a' alt='' id='learn-more'>Learn More</a></p>
                                  

                             
                                 </ul>
                             </div>

                    </div>
                  </div>
                   
                    
                 
            </div>

                <div className='country_list'>

                   <div><a href='a' alt=''>Australia</a></div>
                   <div><a href='a' alt=''>Brazil</a></div>
                   <div><a href='a' alt=''>Canada</a></div>
                   <div><a href='a' alt=''>China</a></div>
                   <div><a href='a' alt=''>France</a></div>
                   <div><a href='a' alt=''>Germany</a></div>
                   <div><a href='a' alt=''>Itly</a></div>
                   <div><a href='a' alt=''>Japan</a></div>
                   <div><a href='a' alt=''>Mexico</a></div>
                   <div><a href='a' alt=''>Netherlands</a></div>
                   <div><a href='a' alt=''>Polands</a></div>
                   <div><a href='a' alt=''>Singapure</a></div>
                   <div><a href='a' alt=''>Spain</a></div>
                   <div><a href='a' alt=''>Turkey</a></div>
                   <div><a href='a' alt=''>Kingdom</a></div>
                   <div><a href='a' alt=''>USA</a></div>
                   <div><a href='a' alt=''>UAE</a></div>

                   

                </div>

            </div>

        </div>

        {/* .........4....... */}

        <div className='footer-div-4'>
            <div className='footer-div-4-inside_1'>

            <div>
                    <h4 className='list-heads'>Get to Know Us</h4>
                   
                     <ul>
                        <li><a href='a' >About Us</a></li>
                        <li><a href='a' >Careers</a></li>
                        <li><a href='a' >Press Releases</a></li>
                        
                     </ul>

                </div>

                <div>
                <h4 className='list-heads'>Connect with Us</h4>
                 
                     <ul>
                        <li><a href='a' >Facebook</a></li>
                        <li><a href='a' >Twitter</a></li>
                        <li><a href='a' >Instagram</a></li>
                     
                     </ul>
                </div>

                <div>
                <h4 className='list-heads'>Make Money with Us</h4>
                  
                     <ul>
                        <li><a href='a' >Sell on Amazon</a></li>
                        <li><a href='a' >Sell under Amazon accelerator</a></li>
                       
                     
                     </ul>
                </div>

                <div>
                <h4 className='list-heads'>Let Us Help You</h4>
                  
                     <ul>
                        <li><a href='a' >COVID-19 and Amazon</a></li>
                        <li><a href='a' >Your Account</a></li>
                        
                     
                     </ul>
                </div>

            </div>
   {/* ........................... */}
          
   <div className='footer-div-4-inside_1'>

<div>
        <h4 className='list-heads'>Get to Know Us</h4>
       
         <ul>
            <li><a href='a' >About Us</a></li>
            <li><a href='a' >Careers</a></li>
            <li><a href='a' >Press Releases</a></li>
            
         </ul>

    </div>

    <div>
    <h4 className='list-heads'>Connect with Us</h4>
     
         <ul>
            <li><a href='a' >Facebook</a></li>
            <li><a href='a' >Twitter</a></li>
            <li><a href='a' >Instagram</a></li>
         
         </ul>
    </div>

    <div>
    <h4 className='list-heads'>Make Money with Us</h4>
      
         <ul>
            <li><a href='a' >Sell on Amazon</a></li>
            <li><a href='a' >Sell under Amazon accelerator</a></li>
           
         
         </ul>
    </div>

    <div>
    <h4 className='list-heads'>Let Us Help You</h4>
      
         <ul>
            <li><a href='a' >COVID-19 and Amazon</a></li>
            <li><a href='a' >Your Account</a></li>
            
         
         </ul>
     </div>

    </div>


       
   </div>

   <div className='last-footer'>
      <div  className='lst-footer'>

        <div><a href='adsa'>Condition of Use and Sale</a></div>
        <div><a href='adsa'>Privacy Notice</a></div>
        <div><a href='adsa'>Interest-Based Ads</a></div>
        <div><a href='adsa'>@1996-2022, Amazon.com, Inc. or its affiliates</a></div>
     
        
    </div>
   </div>

        
  </div>
</>
  )
}

export default Footer
