import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            duration: 500,
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
        let { post_links } = this.props;
        let links;

        if (post_links.length === 0) {
            links = <div className="no-content">No Post Links</div>
            return links
        } else {
            links = post_links.map((link, index) => {
                return (
                    <div className={ `${ type }-post__link` } key={ index }>
                        <div className={ `${ type }-post__link-box` }>
                            <img src="https://via.placeholder.com/70x70" />
                        </div>
                        <div className={ `${ type }-post__link-url` }>
                            <a href={ link.link_url }>{ this.getNameForPostLink(link.link_url) }</a>
                        </div>
                    </div>
                );
            });
            return links;
        }
    }

    getNameForPostLink = (linkUrl) => {
        let indexStart = linkUrl.lastIndexOf("/") + 1;
        let indexEnd = linkUrl.length;

        if (indexStart === indexEnd) {
            linkUrl = linkUrl.slice(0, indexStart - 1);
            indexStart = linkUrl.lastIndexOf("/") + 1;
            indexEnd = linkUrl.length;
        }

        if (linkUrl.includes(".html")) {
            linkUrl = linkUrl.slice(0, indexEnd - 5);
            indexEnd = linkUrl.length;
        }

        if (linkUrl.endsWith(".htm") || linkUrl.endsWith(".org")) {
            linkUrl = linkUrl.slice(0, indexEnd - 4);
            indexEnd = linkUrl.length;
        }

        let linkUrlDescription = linkUrl.substring(indexStart, indexEnd);

        let formattedLinkUrlDescription = linkUrlDescription.split("-").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");

        return formattedLinkUrlDescription;
    }

    render() {
        if(this.props.type === "recent") {
            return (
                <li className="recent-post">
                    <div className="recent-post__title">
                        <a href={this.props.url_for_post}>
                            { this.props.title }
                        </a>
                    </div>
                    <div className="recent-post__topics">
                        { this.renderTopics("recent") }
                    </div>
                </li>
            );
        } else if(this.props.type === "results") {
            return (
                <div
                        className="results-post__hover"
                        onMouseEnter={ () => this.setState({ height: "auto" })}
                        onMouseLeave={ () => this.setState({ height: 0 })}
                    >
                    <li className="results-post">
                        <div className="results-post__topics">
                            { this.renderTopics() }
                        </div>
                        <div className="results-post__title">
                            <a href={this.props.url_for_post}>
                                { this.props.title }
                            </a>
                        </div>
                        <AnimateHeight duration={ this.state.duration } height={ this.state.height }>
                            <div className="results-post__links">
                                { this.renderLinks("results") }
                            </div>
                        </AnimateHeight>
                    </li>
                </div>
            );
        } else {
            return "";
        }
    }
}

export default Post;