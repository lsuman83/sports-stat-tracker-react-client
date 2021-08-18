import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBusiness } from './actions/businessActions';
import BusinessList from './BusinessList';


class App extends Component {

 
  render() {
    console.log(this.props.businessNames);

    return(
      <div className='App'>
          <h1>Business List</h1>
          <BusinessList businessNames={this.props.businessNames} />
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    businessNames: state.businessNames,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: () => dispatch(fetchBusiness())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)