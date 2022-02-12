import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment" style={{marginTop: '10px'}}>
        <form className="ui form">
          <div className="field">
            <label htmlFor='text' >Image search</label>
            <input onChange={this.onInputChange} id="text" type={'text'} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
