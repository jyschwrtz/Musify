import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.song = this.props.song;
    this.handleClick = this.handleClick.bind(this);
    console.log(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveCurrentSong(this.props.song);
  }

  render() {
    const { song, idx } = this.props;
    return(
      <li
        className="song-index-item"
        onClick={this.handleClick}
        >
        <div className="song-number">
          <span

            >{idx + 1}.</span>
        </div>
        <div className="song-title">
          <span

            >{song.song_name}</span>
        </div>
        <div className="song-length">
          <span

            >4:38</span>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
