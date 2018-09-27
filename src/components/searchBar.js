import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    handleFormSubmit = (query) => {
        this.props.onSubmit(query);
    }

    renderInput = (field) => {
        return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input } />
    }

    render() {
        const { handleSubmit, page } = this.props;
        return (
            <form className={`search-bar search-bar__${page}`} onSubmit={handleSubmit(this.handleFormSubmit)}>
                <div className="search-bar__wrapper">
                    <Field name="query" component={this.renderInput} />
                    <p>Press return to search</p>
                </div>
            </form>
        );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;