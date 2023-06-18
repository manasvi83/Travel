import React from 'react'
import './Card.css'


export default function Card(props) {


    return (
        <div>
            <div className='Card-holder' >
            <img src={props.urlToImage} className="card-img-top" alt="..." />
            <div className='card-content'>
                <h5 className='card-heading'>{props.title}</h5>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
            {/* <figure>
                <img src="https://picsum.photos/id/287/250/300" alt="Mountains" />
                <figcaption>Solang Valley</figcaption>
            </figure>
            <figure style="--c:#fff5">
                <img src="https://picsum.photos/id/475/250/300" alt="Mountains" />
                <figcaption>Rohtang Pass</figcaption>
            </figure>
            <figure style="--c:#fff5">
                <img src="https://picsum.photos/id/475/250/300" alt="Mountains" />
                <figcaption>Hadimba Temple</figcaption>
            </figure> */}
        </div>
    )
}
