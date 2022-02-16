import React from 'react'

const dummyData = {
    date: "2021-12-23",
    explanation: "some dummy data",
    hdurl: "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
    title: "Three planets and a comet"
  }

const NasaPhoto = (props) => {
    return (
        <div className ="nasa-photo-wrapper">
        <h3>{props.photo.title}</h3>    
        <p>{props.photo.data}</p>
        <img src={props.photo.hdurl} />
        <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;