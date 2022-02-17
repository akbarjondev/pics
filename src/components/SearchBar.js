import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment" style={{marginTop: '10px'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor='text' >Image search</label>
            <input 
              value={this.state.term} 
              onChange={(e) => this.setState({term: e.target.value})} 
              id="text" 
              type={'text'}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
