import React from 'react';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectPlaylist = this.selectPlaylist.bind(this);
  }

  selectPlaylist(e) {
    e.preventDefault();
    const {
      playlist,
      song,
      createPlaylistSong,
      toggleAddToPlaylist
    } = this.props;
    createPlaylistSong(song.id, playlist.id);
    toggleAddToPlaylist(e);
  }

  render() {
    const { playlist } = this.props;
    let content;
    if (playlist) {
      let src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/${playlist.image_url}`;
      content = (
       <div className='playlist-index-item'>
          <button
            onClick={this.selectPlaylist}>
            <div className="playlist-image">
              <img src={src}/>
              <div className="playlist-cover-select">
                <i className="fa fa-music" aria-hidden="true"></i>
              </div>
            </div>
            <p>{playlist.title}</p>
          </button>
       </div>
     );
    }
    return(
      <div>
        {content}
      </div>
    );
  }
}

export default PlaylistIndexItem;
