import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return (
            <Link className="logo__main" to="/">
                <img style={size} alt="DailySmarty UI image logo big" src="/assets/ds_circle_logo.png" />
            </Link>
        );
    }
}

export default Logo;