import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from './post';

class RecentPosts extends Component {
    componentWillMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = () => {
        const posts = this.props.recentPosts.map((post, index) => {
            if (index < 3) {
                return (
                    <Post key={index} { ...post } />
                )
            }
        });
        return posts;
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper">
                    <div className="recent-posts__heading">
                        Recent Posts
                    </div>
                    <ul className="recent-posts__posts">
                        { this.renderPosts() }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const recentPosts = state.posts.recentPosts
    return {
        recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);