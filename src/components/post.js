import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            height: 0
        }
    }

    renderTopics = (type) => {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className={ `${ type }-post__topic` } key={ index }>{ topic }</span>
        });
        return topics;
    }

    renderLinks = (type) => {
        let links = this.props.post_links.map((link, index) => {
            return (
                <div className={ `${ type }-post__link` } key={ index }>
                    <div className={ `${ type }-post__link-box` }>

                    </div>
                    <div className={ `${ type }-post__link-url` }>
                        <a href={ link.link_url }>Related Link #{ index + 1 }</a>
                    </div>
                </div>
            );
        });
        return links;
    }

    render() {
        if(this.props.type === "recent") {
            return (
                <li className="recent-post">
                    <div className="recent-post__title">
                        { this.props.title }
                    </div>
                    <div className="recent-post__topics">
                        { this.renderTopics("recent") }
                    </div>
                </li>
            );
        } else if(this.props.type === "results") {
            return (
                <li className="results-post">
                    <div className="results-topics">
                        { this.renderTopics() }
                    </div>
                    <div className="results-post__title">
                        <a
                            href={this.props.url_for_post}
                            onMouseEnter={ () => this.setState({ height: "auto" })}
                            onMouseLeave={ () => this.setState({ height: 0 })}
                        >
                            { this.props.title }
                        </a>
                    </div>
                    <AnimateHeight duration={ 500 } height={ this.state.height }>
                        <div className="results-post__links">
                            { this.renderLinks() }
                        </div>
                    </AnimateHeight>
                </li>
            );
        } else {
            return "";
        }
    }
}

export default Post;