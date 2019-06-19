import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryString: ""
    };
  }

  queryChanged = (event) => {
    const queryString = event.target.value;
    
    this.setState({
      queryString
    })

    this.props.searchCallback(queryString);
  }

  render() {
    return (
      <section>
        <label>
          Search <input name="search"
                        type="text"
                        value={this.state.queryString}
                        onChange={this.queryChanged} />
        </label>
      </section>
    );
  }
};

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired
};

export default SearchBar;
