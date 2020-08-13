import React, { Component } from "react";
import axios from 'axios'

class Movies extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount(){
    axios.get(`https://backendexample.sanbersy.com/api/movies`)
    .then( res => {
      let movies = res.data.map (e => { return {
        id: e.id,
        title: e.title,
        rating: e.rating,
        duration: e.duration,
        genre: e.genre,
        description: e.description
      }})
      this.setState({movies})
    })
  }


  render () {
    return(
      <>
        <h1>Daftar Film</h1>
        <div>
        {
          this.state.movies.map((item) => {
            return(
              <>
              <div>
                <h3>{item.title}</h3>
                <strong>Rating: {item.rating} </strong> <br/>
                <strong>Duration: {item.duration} </strong> <br/>
                <strong>Genre: {item.genre}</strong> <br/>
                <p>
                <strong>Deskripsi: </strong>
                {item.description}</p>
              </div>
              </>
              
            )
          })
        }
        </div>
      </>
    )
  }
  
  
  
}

export default Movies;