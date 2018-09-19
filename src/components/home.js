import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div>
                    <Logo />
                    <SearchBar />
                    <RecentPosts />
                </div>
            </div>
        );
    }
}

export default Home;