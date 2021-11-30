import React from 'react'
import './Home.css'
import Banner from '../../images/Banner.jpg'
import Product from '../Product/Product'
import Watch from '../../images/watch.jpg'
import HandsFree from '../../images/hands free.jpg'
import Mobile from '../../images/mobile.png'
import Dress from '../../images/dress.webp'
import Shoes from '../../images/shoes.jpg'
import Laptop from '../../images/laptop.jpg'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img src={Banner} className='home__image'/>

            <div className='home__row'>
                <Product id={12345678} title='Smart Watch, 1.69 inch Fitness Tracker,
                 Smartwatch with Heart Rate/Sleep Monitor, Calorie/Step Counter
                  Activity Tracker, Stopwatch, Blood Oxygen Monitor, Full Touch Fitness Watch for Men Women' 
                 image={Watch} price={69.99} rating={4}/>
                <Product id={12345679} title='Marnana Bluetooth Headset with Voice Command Control, Bluetooth Earpiece w/Noise Cancelling Mic & 13 Hrs Playtime, V5.0 Wireless Headset Hands-Free Call for iPhone Samsung Android Cell Phone - Black' 
                 image={HandsFree} price={19.99} rating={3}/>
            </div>

            <div className='home__row'>
                <Product id={12345670} title='OnePlus 9 Astral Black, 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage,120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge,15W Wireless Charge, with Alexa Built-in' 
                 image={Mobile} price={129.99} rating={5}/>
                <Product id={12345671} title='Wild Meadow Womens Bib Front U Back Knit Dress' 
                 image={Dress} price={50.00} rating={4}/>
                <Product id={12345672} title=' adidas Womens Cloudfoam Pure Running Shoe ' 
                 image={Shoes} price={69.99} rating={4}/>
            </div>

            <div className='home__row'>
                <Product id={12345673} title='HP 14 Laptop for Business and Student, 14" LED Touchscreen, AMD Ryzen 3 3250U Processor, 16GB RAM, 512GB SSD, NanoEdge,Webcam, WiFi, Ethernet, HDMI, No DVD, USBA&C, Win 10, Silver W/ MTC Mousepad' 
                 image={Laptop} price={529.99} rating={5}/>
            </div>
            </div>
            
        </div>
    )
}

export default Home
