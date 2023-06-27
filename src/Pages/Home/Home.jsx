import React from 'react'
import './Home.css';
import img from '../../Assests/landscape.jpg'
// import '../../Components/Cards/Card'
// import Card from '../../Components/Cards/Card';

export default function Home() {
    return (
        <>
            <div className='main-div'>
                <div className='heading-bg-div'>
                        <img src={img} alt=''/>
                    <div className='heading-div-content'>
                    <h1 className='heading'>Cold to the body<br /> Warm to the Soul</h1>
                    </div>   
                    <div className='bg-filter'></div>                 
                </div>
                <div className='explore-container'>
                    <div className='explore-content-head'>
                    
                        <h2>Explore The Surroundings</h2>
                        
                        <h4>Manali offers a delightful blend of natural wonders, cultural heritage, and thrilling adventures. Whether you seek tranquility, cultural exploration, or exhilarating experiences, this vibrant city has it all. 
                        Start exploring Manali's treasures now and create memories that will last a lifetime.</h4>
                    </div>
                    {/* <div className='page-content'>
                        <Card
                            img="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                            title='Solang Valley'
                            />
                        <Card
                            img="https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                            title='Solang Valley'
                            />
                        <Card
                            img="https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                            title='Solang Valley'
                            />
                        <Card
                            img="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                            title='Solang Valley'
                            />
                    </div> */}
                </div>
            </div>
        </>
    )
}
