import React, { Component } from 'react'
//import '../App.css'
export default class Selected extends Component {
  render() {
    const { data, match } = this.props
    const item = data.find(
      (song) => song['im:name'].label === match.params.name
    )
    console.log(item)
    return (
      <div className='cont'>
        <div class='card mb-3' style={{ width: '100%' }}>
          <div class='row no-gutters'>
            <div class='col-md-4'>
              <img
                class='img-fluid'
                src={item['im:image'][2].label}
                alt='...'
                class = 'card-img'
              />
            </div>
            <div class='col-md-8'>
              <div class='card-body'>
                <h2 class='card-title'>{item['im:name'].label}</h2>
                <p class='card-text'>
                  <b>Artist:</b> {item['im:artist'].label}
                </p>
                <p class='card-text'>
                  {' '}
                  <b>Price: </b>
                  {item['im:price'].label}
                </p>
                <p class='card-text'>
                  {' '}
                  <b>Release Date:</b> {item['im:releaseDate'].attributes.label}
                </p>
                <p class='card-text'>
                  {' '}
                  <b>Category:</b> {item['category'].attributes.term}
                </p>
                <p class='card-text'>
                  {' '}
                  <h5>Want to Listen now?</h5>
                </p>
                <p class='card-text'>
                  {' '}
                  <a
                    className='btn btn-success '
                    href={item['link'].attributes.href}
                    target='_blank'
                    style={{ color: 'white' }}
                  >
                    <i class='fas fa-music mr-2'></i>
                    Listen
                  </a>
                </p>
                <p class='card-text text-muted'> {item['rights'].label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
