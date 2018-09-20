import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

class Home extends Component {
    handleSearchBarSubmit = (query) => {
        this.props.history.push('/results');
    }

    render() {
        return (
            <div className='home'>
                <div>
                    <Logo />
                    <SearchBar onSubmit={query => this.handleSearchBarSubmit(query)} />
                    <RecentPosts />
                </div>
            </div>
        );
    }
}

export default Home;