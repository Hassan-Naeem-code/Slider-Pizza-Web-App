import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Logo from '../Assets/pizza-remove.png';
import Image from '../Assets/Screenshot_2.png';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
    heading: 'Buffallo Chicken',
    description: 'Lorem ipsum is a good man here lorem ipsum is a good man here lorem ipsum is a good man here',
    specs: ''
  },
  {
    src: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/Round%20Table%20Pizza%20Clubhouse.jpg',
    heading: 'Chicken Pizza',
    description: 'Lorem ipsum is a good man here lorem ipsum is a good man here lorem ipsum is a good man here',
    specs: ''
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZm9sRzfvv1uFe37T0-x2WSN8x3ec61g2meaV44WvGPW1Wa0ttMV8R7qehT6ESMGFDMRc&usqp=CAU',
    heading: 'Chicken Elpeno Pizza',
    description: 'Lorem ipsum is a good man here lorem ipsum is a good man here lorem ipsum is a good man here',
    specs: 'New'
  },
];

const Index = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [showFirst,setShowFirst] = useState(true);
    const [showSecond,setShowSecond] = useState(false);
    const [getIndex,setGetIndex] = useState(5);
    const [getName,setGetName] = useState('');
    const [showSPecs,setShowSpecs] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
      setShowFirst(false);
      setShowSecond(true);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
      setShowFirst(true);
      setShowSecond(false);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const handleClick = (index,heading)=>{
       if(index == 0){
         setGetIndex(index);
         setGetName(heading);
         setShowSpecs(true);
       }
       else if(index == 1){
        setGetIndex(index);
        setGetName(heading);
        setShowSpecs(true);
       }
       else if(index == 2){
         setGetIndex(index);
         setGetName(heading);
         setShowSpecs(true);
       }
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <div className='container' style={{maxWidth:'1920px',display: showSecond ? 'none': 'block'}}>
              <div className='row'>
                  <div className='col-md-12 bg-new h-35-px'>
                     <div className="row">
                       <div className="col-md-3 text-center bg-black">
                         <img src={Logo} alt={"Main Logo"} className="img-respsonsive w-14" />
                       </div>
                       <div className="col-md-9 text-right bg-black">
                         <div className='row'>
                           <div className='col-md-12'>
                             <ul className='navs'>
                               <li className="font-12 font-500 color-yellow">Log in</li>
                               <li className="font-12 font-500 color-yellow">Location</li>
                               <li className="font-12 font-500 color-yellow">Contact Us</li>
                               <li className="font-12 font-500 color-yellow"><i class="fas fa-bars color-yellow"></i></li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>
                  </div>
                  <div className="col-md-12 bg-image">
                   <img src={'http://timelessfoodrestaurant.com/wp-content/uploads/2020/09/pngguru.com1_.png'} className="img-responsive image-side" />
                  </div>
              </div>
          </div>
          <div className="container" style={{maxWidth:'1920px',display: showFirst ? 'none': 'block'}}>
          <div className='row'>
                  <div className='col-md-12 bg-new h-35-px'>
                     <div className="row">
                       <div className="col-md-3 text-center bg-black">
                         <img src={Logo} alt={"Main Logo"} className="img-respsonsive w-14" />
                       </div>
                       <div className="col-md-9 text-right bg-yellow">
                         <div className='row'>
                           <div className='col-md-12'>
                             <ul className='navs'>
                               <li className="font-12 font-500 color-black">Log in</li>
                               <li className="font-12 font-500 color-black">Location</li>
                               <li className="font-12 font-500 color-black">Contact Us</li>
                               <li className="font-12 font-500 color-black"><i class="fas fa-bars color-black"></i></li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>
                  </div>
                  <div className="col-md-12 bg-image-second">
                   <img src={'http://timelessfoodrestaurant.com/wp-content/uploads/2020/09/pngguru.com1_.png'} className="img-responsive image-side-left" />
                   <div className="row">
                     <div className="col-md-12">
                       <div className='row'>
                         <div className="col-md-3"></div>
                         <div className="col-md-7">
                           <div className='row'>
                             <div className="col-md-7">
                               <div className='row'>
                                 <div className='col-md-12'>
                                   <ul className='sub-navs'>
                                     <li className="font-12 font-500 select-active">Pizza</li>
                                     <li className="font-12 font-500 color-black">Sauce</li>
                                     <li className="font-12 font-500 color-black">Drinks</li>
                                     <li className="font-12 font-500 color-black">Cookies</li>
                                     <li className="font-12 font-500 color-black">Bread</li>
                                   </ul>
                                 </div>
                                 <div className='col-md-12'>
                                   <div className='row'>
                                   {
                                    items && items.length > 0 ? (
                                      items.map((item,index)=>{
                                        return(
                                          <div className='col-md-12 pos-rel border-shadow mb-2 mt-1 show-area-hidden'>
                                            <img src={item.src} className="img-responsive w-100 h-10"  style={{boxShadow: getIndex == index ? ("1px 1px 2px 2px rgb(255,205,54)") : 'none'}}/>
                                            <div className='area-select' onClick={()=>{handleClick(index,item.heading)}}>
                                              <span>Select</span>
                                            </div>
                                            <div className='area-nutrition'>
                                              <span>Nutrition Info</span>
                                            </div>
                                            {
                                              item.specs !== '' ? (
                                                <div className='round-circle'>
                                                  {item.specs}
                                                </div>
                                              ) : ''
                                            }
                                            <div className="area-for-description">
                                              <h2 className="font-14 font-700 color-white text-capitalise word-space">{item.heading}</h2>
                                              <p className="font-12 font-500 color-white l-h-12">
                                                {item.description} 
                                              </p>
                                            </div>
                                         </div>
                                        )
                                      })
                                    ) : null
                                   }
                                     
                                   </div>
                                 </div>
                               </div>
                             </div>
                             <div className="col-md-5">
                             {
                               showSPecs == true ? (
                                <div className='row bg-white mt-5'>
                                 <div className="col-md-12">
                                   <span className='font-14 font-700'>{getName}</span>
                                 </div>
                                 <div className="col-md-12">
                                   <span className='font-10 font-500'>Select Size*</span>
                                 </div>
                                  <div className='col-md-12 mt-2'>
                                    <span className="round-circle-black">S</span>
                                    <span className="round-circle-black">M</span>
                                    <span className="round-circle-black">L</span>
                                    <span className="round-circle-black">XL</span>
                                  </div>
                                  <div className='col-md-12 mt-2'>
                                    <img src={Image} className="img-responsive w-100" />
                                  </div>
                               </div>
                               ) : ''
                             }
                               
                               <div className="row">
                                 <div className='col-md-12 mt-5 bg-yellow border-radius-25 border-shadow-new h-auto'>
                                   <div className='row'>
                                     <div className='col-md-1 pl-0 pr-0'></div>
                                     <div className="col-md-10">
                                          <div className='row'>
                                            <div className='col-md-12'>
                                              <div className='row'>
                                                <div className='col-md-6'>
                                                  <span className='font-12 font-700 color-black'>CART</span>
                                                </div>
                                                <div className='col-md-6 text-right'>
                                                <span className='font-12 font-700 color-black'>CLEAR</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='col-md-12'>
                                              <hr  className="m-0" />
                                            </div>
                                            <div className='col-md-12'>
                                              <textarea className='form-control font-10 text-center' rows="2" cols="3" placeholder="Your cart is Empty" />
                                            </div>
                                            <div className='col-md-12'>
                                            <hr  className="m-0" />
                                            </div>
                                            <div className='col-md-12'>
                                              <span className='font-12 font-700 color-black'>Enter Coupon Code</span>
                                              <div className='row'>
                                                <div className='col-md-8'>
                                                  <input type="text" className="form-control font-8" placeholder="Enter Coupon Code" />
                                                </div>
                                                {/* <div className='col-md-1'></div> */}
                                                <div className='col-md-3'>
                                                  <span className="font-12 font-500 select-active">Submit</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='col-md-12'>
                                            <hr />
                                            </div>
                                            <div className='col-md-12'>
                                             <div className="row">
                                               <div className='col-md-6'>
                                                 <span className='font-10 font-700'>Sub Total</span>
                                               </div>
                                               <div className='col-md-6 text-right'>
                                                 <span className='font-10 font-500'>Rs.000</span>
                                               </div>
                                               <div className='col-md-6'>
                                                 <span className='font-10 font-700'>Delivery Charges</span>
                                               </div>
                                               <div className='col-md-6 text-right'>
                                                 <span className='font-10 font-500'>Rs.000</span>
                                               </div>
                                             </div>
                                            </div>
                                            <div className='col-md-12'>
                                            <hr  className="m-0" />
                                            </div>
                                            <div className='col-md-12 text-center mt-1 mb-2'>
                                             <button className="font-10 bg-black color-yellow border-radius-25 pt-1 pb-1 pl-3 pr-3 ot-b-none">CHECKOUT</button>
                                            </div>
                                          </div>
                                     </div>
                                     <div className='col-md-1'></div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="col-md-2"></div>
                       </div>
                     </div>
                   </div>
                  </div>
              </div>
          </div>
        </CarouselItem>
      );
    });
    return (
        <React.Fragment>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    interval={null}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
        </React.Fragment>
    )
}


export default Index;
