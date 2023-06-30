import React from 'react'
import './Bestspot.css'

export default function Bestspot() {
    return (
        <>
            <div>
                <div className='map-page' >
                    <div className='map-box' >
                        <div className="map-canvas">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.532519570806!2d77.1665201785801!3d32.23947037910967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1687873134159!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowfullscreen="" 
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}