import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:[]
    }
    onChange=e=>this.setState({text:e.target.value});
     onSubmit = e => {
        e.preventDefault();
        console.log(this.state.text[0]==null);
        if (this.state.text.length === 0 || this.state.text[0]===' ') {
          console.log("I am running")
          this.props.setAlert('Please enter something !', 'secondary');
        } 
        else {
          console.log("I am run")
          this.props.searchUsers(this.state.text);
          this.setState({text:""});
        }
      };
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type="text" name='text' onChange={this.onChange} className="form-control my-3" value={this.state.text} placeholder='Search Here...'/>
                <input type="submit"  className='btn btn-dark btn-block mb-3' value="Search" />
                </form> 
                {this.props.showClear && (<button onClick={this.props.clearState} className="btn btn-secondary btn-block mb-3" >Clear</button>)}
            </div>

        )
    }
}

export default Search
