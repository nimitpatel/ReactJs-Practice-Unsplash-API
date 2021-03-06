import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
        //console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Search Images"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
