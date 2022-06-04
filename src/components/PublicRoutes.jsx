import React, { Component } from 'react'
import Homepage from './Homepage'
import Fav from './Fav'
import Selected from './Selected'
import { Link, Route, Switch } from 'react-router-dom'
import Axios from 'axios'
class PublicRoutes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
      fav: [],
      icon: false,
      search: '',
    }
  }

  componentDidMount() {
    Axios.get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data.feed.entry,
          loading: false,
          fav: [],
        })
      })
      .catch((err) => console.log(err))
  }

  addFav = (e, song) => {
    e.preventDefault()
    this.setState({
      fav: [...this.state.fav, song],
      icon: true,
    })
    console.log(this.state.fav, 'hi')
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
    console.log(this.state.search)
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Homepage
                {...props}
                data={this.state.data}
                loading={this.state.loading}
                addFav={this.addFav}
                icon={this.props.icon}
                search={this.state.search}
                updateSearch={this.updateSearch}
              />
            )}
          />
          <Route
            path='/favourites'
            render={(props) => <Fav {...props} fav={this.state.fav} />}
          />
          <Route
            path='/song/:name'
            render={(props) => <Selected {...props} data={this.state.data} />}
          />
        </Switch>
      </div>
    )
  }
}

export default PublicRoutes
