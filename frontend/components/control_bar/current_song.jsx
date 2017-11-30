import React from 'react';
import { Link } from 'react-router-dom';

class CurrentSong extends React.Component {
  handlePlayPause(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.play();
  }

  render() {
    const { song, artist, playlist, currentUser, playing } = this.props;
    let songName, artistName, playlistImage;
    if (song) {
      songName = song.song_name;
    }
    if (artist) {
      artistName = artist.username;
    }
    if (playlist) {
      let playPauseIconClass = playing ? (
        "fa fa-pause-circle-o"
      ) : (
        "fa fa-play-circle-o"
      );
      let src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/${playlist.image_url}`;
      playlistImage = (
        <Link
          className="playlist-image-link"
          to={`/user/${currentUser.id}/playlist/${playlist.id}`}>
          <div>
            <img className="playlist-image" src={src}/>
            <div className="playlist-cover-select">
              <i
                onClick={this.handlePlayPause.bind(this)}
                className={playPauseIconClass} aria-hidden="true"></i>
            </div>
          </div>
        </Link>
      );
    }
    return(
      <div className="current-song">
          { playlistImage }
        <div className="current-song-info">
          <h1 className="song-name">{songName}</h1>
          <h2 className="artist-name">{artistName}</h2>
        </div>
      </div>
    );
  }
}

export default CurrentSong;
