import React, { Component } from 'react';
import { EditRepos } from '../../components';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRepos, editRepos } from '../../store/store';

class DashboardEditRepos extends Component {
  state = {
    repositories: []
  };

  handleSubmit = e => {
    e.preventDefault()
    console.log(`user hit submit button`)
  }

  handleChange = (e, _id) => {
    const { name, value } = e.target
    console.log(`change:\nname: ${name}\nvalue: ${value}\n_id: ${_id}`)
  };

  componentDidMount() {
    this.props.fetchRepos()
  }

  componentWillReceiveProps(nextProps) {
    const { repositories } = nextProps.userInfo
    this.setState({ repositories })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <EditRepos
          repositories={this.state.repositories}
          handleChange={this.handleChange}
        />
        <button type='submit'>
          Save Changes
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRepos, editRepos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEditRepos)