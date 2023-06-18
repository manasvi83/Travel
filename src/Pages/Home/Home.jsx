import React from 'react'
import './Home.css';
import img from '../../Assests/snow.jpg'
import '../../Components/Cards/Card'
import Card from '../../Components/Cards/Card';

export default function Home() {
    return (
        <>
            <div className='main-div'>
                <div className='heading-bg-div'>
                        <img src={img} alt=''/>
                    <div className='heading-div-content'>
                    <h1 className='heading'>Cold to the body<br /> Warm to the Soul</h1>
                    </div>                    
                </div>
                <div className='explore-container'>
                    <div className='explore-content-head'>
                        <h2>Explore The Surroundings</h2>
                        <h4>Explore the breathtaking beauty of Manali, a paradise nestled in the Himalayas. 
                        Whether you seek adventure, tranquility, or cultural immersion, Manali has something for everyone. 
                        Discover the wonders that await you!</h4>
                    </div>
                    <div className='explore-cards'>
                        <Card title='Solang Valley'  />
                    </div>
                </div>
            </div>
        </>
    )
}
