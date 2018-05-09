import React from 'react';
import SongDetail from '../components/SongDetail.js';

class ITunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // iTunesMusic: []
    };

  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();

    request.open('GET', url)

    request.addEventListener('load', () => {
      if(request.status !== 200) return;

      const jsonString = request.responseText;
      const iTunesMusic = JSON.parse(jsonString);

      this.setState({iTunesMusic: iTunesMusic})
    });

    request.send();
  }



  render(){
    return (
      <div className = "itunes-container">
        <h2>iTunes Top 20</h2>
        <SongDetail
          iTunesMusic = { this.state.iTunesMusic }
        />
      </div>
    );
  }
}

export default ITunesContainer;
