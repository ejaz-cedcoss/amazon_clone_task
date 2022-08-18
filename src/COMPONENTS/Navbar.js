import React from 'react'
import '../CSS/Navbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carosoul from './Carosoul';
import Cards from './Cards';
import Footer from './Footer';



const Navbar = () => {

 const change_border = (event)=>{

    document.getElementById('div-3').style.border = "5px solid yellow";
    document.getElementById('div-3').style.borderRadius = '5px'  

 

  }

  const Blur = ()=>{
    document.getElementById('div-3').style = "none";
  }
  


  return (
    <>
       <div className='header'>

            <div className='navbar-top'>

                <div id='div-1'>
                    <img src={require('../CSS/amazon.png')} alt='' id='img-1'/>
                </div>

                <div id='div-2'>
                       <p>hello</p>
                       <img src='https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg' alt='' height='32vh' id='img-2'/>
                       <span id='addr'>Select Your Addresses</span>
                  
                  
                </div>


                <div id='div-3'>
                    <div id='dropdown-1'>
                
                        <select id='select-1'>
                            <option selected disabled>All</option>
                            <option>All Categories</option>
                            <option>Alexa skills</option>  
                            <option>Alexa skills</option>
                            <option>Amazon Devies</option>
                            <option>Amazon Fashions</option>
                            <option>Amazon Fresh</option>
                            <option>Amazon Pharmacy</option>
                            <option>Appliances</option>
                            <option>App and Games</option>
                            <option>Baby</option>
                            <option>Beauty</option>
                            <option>Books</option>
                            <option>Amazon Devies</option>
                            <option>Amazon Fashions</option>
                            <option>Amazon Fresh</option>
                            <option>Amazon Pharmacy</option>
                            <option>Appliances</option>
                            <option>App and Games</option>
                            <option>Baby</option>
                            <option>Beauty</option>
                            <option>Books</option>   
                            <option>Alexa skills</option>
                            <option>Amazon Devies</option>
                            <option>Amazon Fashions</option>
                            <option>Amazon Fresh</option>
                            <option>Amazon Pharmacy</option>
                            <option>Appliances</option>
                            <option>App and Games</option>
                            <option>Baby</option>
                            <option>Beauty</option>
                            <option>Books</option>   
                            <option>Alexa skills</option>
                            <option>Amazon Devies</option>
                            <option>Amazon Fashions</option>
                            <option>Amazon Fresh</option>
                            <option>Amazon Pharmacy</option>
                            <option>Appliances</option>
                            <option>App and Games</option>
                            <option>Baby tools and home improvement</option>
                            <option>Beauty</option>
                            <option>Books</option>
                 
                         </select>
                     
                    </div>

                    <div id='input-div'>
                        <input onFocus={change_border} onBlur={Blur} type='text' id='input' />
                      
                    </div>

                    <div id='search'>
                      <button id='search-btn'>
                         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' alt='' height='48vh'/>
                      </button>
                    </div>
                
                </div>


                <div id='div-4'>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-a6DCmabsxeF47H4aj82tcY54tARqHzagJTZaXEU&s' alt='' height='28vh' id='india-img'/>

                    <i class="fa-solid fa-sort-down" style={{color:"white",fontSize:"22px",marginLeft:"8px"}}></i>

                    <div className='dropdown-2'>

                        <div className='drop2-content'>
                          <ul>
                            <li>
                              <input type='radio' name='btn-rad'/>
                              <span>English-en</span>
                            </li>
                            <br></br>
                            <hr/>
                            <li><input type='radio' name='btn-rad'/><span>Hindi</span></li>
                            <li><input type='radio' name='btn-rad'/><span>Urdu</span></li>
                            <li><input type='radio' name='btn-rad'/><span>Bangla</span></li>
                            <li><input type='radio' name='btn-rad'/><span>Marathi</span></li> <br></br>

                            <a href='a' id='learn'>Learn More</a> 

                             <br></br>
                             <hr></hr>

                            <h3 id='h3'> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-a6DCmabsxeF47H4aj82tcY54tARqHzagJTZaXEU&s' height='28vh' alt='a'/>You are shopping on amazon.in</h3>  <br></br><br></br>
                            <a href='a' id='change_country'>change country or region.</a>
                          </ul>
                        </div>

                       

                    </div>
              
                 </div>


                <div id='div-5'>
                  <div className='nav-opt2'>
                     <span className='opt'><small>Hello 
                        SignIn</small>
                     </span>

                     <span className='opt'>
                     <strong>Accounts & Lists</strong>
                     </span>
                  </div>
            
               
                    <div className='drop3-content' >
                      <div style={{borderBottom:"1px solid gray",textAlign:"center"}}>
                       <button id='sigin-btn' >SignIn</button>
                       <p >new Customer <a href='#'>Start here</a></p>
                      </div>

                      <div className='list-container'>

                        <div className='list-1'>

                          <h2 style={{marginBottom:"8px"}}>Your Lists</h2>
                          <ul id='list-1_1'>
                            <li>Create wishList</li>
                            <li>Wish from any Website</li>
                            <li>Baby Wishlist</li>
                            <li>Discover Your Style</li>
                            <li>Explore Showroom</li>
                          </ul>

                        </div>


                        <div className='list-2'>

                          <h2 style={{marginBottom:"8px"}}>Your Accounts</h2>
                          <ul id='list-1_1'>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Your Wishlist</li>
                            <li>Your Recommendations</li>
                            <li>Your Prime membership</li>
                            <li>Your Prime video</li>
                            <li>membership and Subscription </li>
                            <li>Your Subscribe and save items</li>
                            <li>Manage Your Devices</li>

                          </ul>

                        </div>

                      </div>

                    </div>
                    
                </div>

                <div id='div-6'>
                  <span>
                     <small>returns</small>
                  </span>

                  <span>
                    <strong>& Orders</strong>
                  </span>
                </div>

                <div id='div-7'>
                 
                   <span><ShoppingCartIcon id='cartIcon'/></span>
                   <span><strong>Cart</strong></span>

                 </div>

            </div>

      

    {/* <===================> */}
            <div className='navbar-bottom'>

              <div className='nav-bt-list'>

              <div>
               <MenuIcon/>All
              </div>

              <div><a href='t' alt='a'>Best Sellers</a></div>
              <div><a href='t' alt='a'>Today's Deals</a></div>
              <div><a href='t' alt='a'>Mobiles</a></div>
              <div><a href='t' alt='a'>Customer Services</a></div>
              <div><a href='t' alt='a'>Books</a></div>
              <div><a href='t' alt='a'>Electronics</a></div>
              <div><a href='t' alt='a'>Prime</a></div>
              <div><a href='t' alt='a'>Fashion</a></div>
              <div><a href='t' alt='a'>New Releases</a></div>
              <div><a href='t' alt='a'>Home & Kitchen</a></div>
              <div><a href='t' alt='a'>Amazon Pay</a></div>

              <div>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CrashCourse/400x39-SWM_179._CB631175051_.jpg' alt='a' id='bt-img'/>
              </div>
                 
            </div>
            </div>

            {/* ................... */}

       </div>

      
    </>
  )
}

export default Navbar
