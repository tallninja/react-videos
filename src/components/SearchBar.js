import React from "react";

class SearchBar extends React.Component {
  state = { search_term: "" };

  onInputChange = (event) => {
    this.setState({ search_term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onInputSubmit(this.state.search_term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Search Videos</label>
          <div className="field">
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
