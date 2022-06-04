import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default class Fav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='cont'>
        {this.props.fav.length != 0 ? (
          <div>
            <div className='row mt-4'>
              {this.props.fav.map((song) => {
                return (
                  <div className='col-12 col-sm-6  col-md-4 col-lg-3 mb-5'>
                    <div
                      class='card  cardbox'
                      style={{ width: '18em', maxHeight: '100vh' }}
                    >
                      <img
                        class='img-fluid '
                        src={song['im:image'][2].label}
                        alt='...'
                      />
                      <div class='card-body cardbody'>
                        <h5 class='card-title'>{song['im:name'].label}</h5>
                        <p>
                          <div class='card-text'>
                            <b>Artist:</b> {song['im:artist'].label}
                          </div>
                          <div class='card-text'>
                            <b>Price:</b> {song['im:price'].label}
                          </div>

                          <Link
                            to={`song/${song['im:name'].label}`}
                            className='btn btn-dark btn-sm mt-2'
                          >
                            Check Now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div style={{ color: 'white' }}>
            <h1>
              <i className='far fa-heart mr-3'></i>
              Favourite list is empty!
            </h1>
          </div>
        )}
      </div>
    )
  }
}
