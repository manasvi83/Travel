import React from 'react'
import './Card.css'


export default function Card(props) {


    return (
        <>
            <div className="card">
                <div className='card-img' >
                    <img
                        src={props.img}
                        />
                </div>
                <div className="content">
                    <h2 className="title">{props.title}</h2>
                    <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                    <button className="btn">View Trips</button>
                </div>
            </div>
        {/* <main className="page-content"> */}
            {/* <div className="card">
                <div className="content">
                <h2 className="title">To The Beach</h2>
                <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                <button className="btn">View Trips</button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                <h2 className="title">Desert Destinations</h2>
                <p className="copy">It's the desert you've always dreamed of</p>
                <button className="btn">Book Now</button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                <h2 className="title">Explore The Galaxy</h2>
                <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                <button className="btn">Book Now</button>
                </div>
            </div> */}
        {/* </main> */}
            {/* <div className='Card-holder' >
            <img src={props.urlToImage} className="card-img-top" alt="..." />
            <div className='card-content'>
                <h5 className='card-heading'>{props.title}</h5>
                <p className="card-text">{props.content}</p>
            </div>
        </div> */}
            {/* <figure>
                <img src="https://picsum.photos/id/287/250/300" alt="Mountains" />
                <figcaption>Solang Valley</figcaption>
            </figure> */}
            {/* <figure style={{"--c" : "#fff5"}}>
                <img src="https://picsum.photos/id/475/250/300" alt="Mountains" />
                <figcaption>Rohtang Pass</figcaption>
            </figure>
            <figure style={{"--c" : "#fff5"}}>
                <img src="https://picsum.photos/id/475/250/300" alt="Mountains" />
                <figcaption>Hadimba Temple</figcaption>
            </figure> */}
        </>
    )
}
