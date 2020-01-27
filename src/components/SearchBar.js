import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    handleInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    handleSubmitForm = (event) => {
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.handleSubmitForm} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.handleInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;