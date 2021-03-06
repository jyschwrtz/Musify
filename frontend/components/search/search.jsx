import React from 'react';
import SongSearchResultsContainer from './song_search_results_container';
import PlaylistSearchResults from './playlist_search_results';
import UserSearchResults from './user_search_results';
import BrowseIndexItemContainer from '../browse/browse_index_item_container';
import NavBar from '../nav_bar/nav_bar';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    return (e) => {
      this.setState({ searchInput: e.target.value });
      this.props.searchDatabase(e.target.value);
    };
  }

  render() {
    const { songSearch, userSearch, playlistSearch, currentUser,
            play, upNext, pastSongsInPlaylists } = this.props;
    const { searchInput } = this.state;
    let navTitles = [];
    let playlist = {};
    let topPlaylist = <div></div>;
    if (playlistSearch && playlistSearch.length > 0) {
      playlist = playlistSearch[0];
      topPlaylist = <BrowseIndexItemContainer playlist={playlist} />;
    }
    if (songSearch && songSearch.length > 0) {
      navTitles = ["Top Results"];
    }
    let content;
    if ( searchInput !== "") {
      content = (
        <div>
          <NavBar navTitles={navTitles} page="search"/>
          <div className="search-results-top">
            { topPlaylist }
            <SongSearchResultsContainer
              songs={songSearch} />
          </div>
          <PlaylistSearchResults
            playlists={playlistSearch}
            currentUser={currentUser} />
          <UserSearchResults users={userSearch} />
        </div>
      );
    }
    return(
      <div className="search">
        <div className="search-bar">
          <h2>{"Search for an Artist, Song, or Playlist"}</h2>
          <input
            type="text"
            onChange={this.handleChange()}
            value={searchInput}
            placeholder="Start typing..."
            autoFocus
            />
        </div>
        { content }
      </div>
    );
  }
}

export default Search;
