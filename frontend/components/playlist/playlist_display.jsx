import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PlaylistDisplay extends React.Component {

  handleClickDelete(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlist.id);
    this.props.history.push('/collection/playlists');
  }

  render() {
    const { playlist, owner, playPlaylist, songCount } = this.props;
    let playlistOwnerName, songNumber, deleteButton, src;
    if (owner) {
      playlistOwnerName = owner.username;
      if (playlist.owner_id == this.props.match.params.userId) {
        deleteButton = (
          <button
            className="typ-btn black-btn"
            onClick={this.handleClickDelete.bind(this)}>
            DELETE
          </button>
        );
      }
    }
    if (songCount > 1) {
      songNumber =  <h3 className="song-count">{songCount} SONGS</h3>;
    } else if(songCount === 1) {
      songNumber =  <h3 className="song-count">{songCount} SONG</h3>;
    }
    if (playlist) {
      src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/${playlist.image_url}`;
    }
    return (
      <div className="playlist-display">
        <div className="album-cover">
          <img
            src={src}
            />
          <div className="playlist-cover-select">
            <i
              onClick={playPlaylist}
              className="fa fa-play-circle-o"
              aria-hidden="true"></i>
          </div>
        </div>
        <div className="playlist-info">
          <div>
            <h1>{playlist.title}</h1>
            <h2>
              <span>By </span>
              <Link
                to="/browse/featured">
                {playlistOwnerName}
              </Link>
            </h2>
            {songNumber}
          </div>
          <div className="buttons">
            <button
              onClick={playPlaylist}
              className="typ-btn green-btn">
              PLAY
            </button>
            {deleteButton}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistDisplay);


// <button
//   className="delete-btn"
//   onClick={this.togglePlaylistMenu.bind(this)}>
//   ...
// </button>
