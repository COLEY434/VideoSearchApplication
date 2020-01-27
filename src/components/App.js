import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetails'

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount(){
        this.onFormSubmit('houses')
    }
    onFormSubmit = (term) => {
        this.setState({selectedVideo: null})
        const KEY = "AIzaSyAH4nMpl9_Hll4p2UI82kaufRx-Ftwd_EQ"
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                key: KEY,
                part: 'snippet',
                maxResults: 6,
            }
        }).then((response) => {
            this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
        });
    }

    onvideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList onVideoSelect={this.onvideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default App;