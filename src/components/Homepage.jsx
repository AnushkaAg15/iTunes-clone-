import React, { Component } from 'react'
//import Axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'
export default class Homepage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.data)
    let finalData = this.props.data
    let searchString = this.props.search.trim().toLowerCase()
    if (searchString.length > 0) {
      finalData = finalData.filter(function (i) {
        return i['im:name'].label.toLowerCase().match(searchString)
      })
    }
    return (
      <div className='cont'>
        <div className='mt-3 mb-5'>
          <input
            placeholder='search your song..'
            value={this.props.search}
            onChange={this.props.updateSearch}
          />
        </div>
        {this.props.loading === false ? (
          <div className='row mt-4'>
            {finalData.map((song) => {
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
                        <p className='mt-2'>
                          <button
                            type='button'
                            onClick={(e) => this.props.addFav(e, song)}
                            class='btn btn-success btn-sm'
                          >
                            <i class='fas fa-heart mr-2'></i>
                            Add to favourite
                          </button>
                        </p>
                        <Link
                          to={`song/${song['im:name'].label}`}
                          className='btn btn-dark btn-sm'
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
        ) : (
          ''
        )}
      </div>
    )
  }
}
