import React from 'react'
import axios from 'axios'
import DumbGrid from './DumbGrid.js'

class Featured extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'http://localhost:3000'
    }
    const result = await axios.get('https://api.spotify.com/v1/browse/featured-playlists?access_token=' + access_token).catch(err => { console.log(err) })
    this.setState({items: result.data.playlists.items})
  }

  render() {
    const items = this.state.items

    return (
      <DumbGrid sectionName='featured' items={items}/>
    )
  }
}

export default Featured;