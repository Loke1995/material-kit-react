import React, { Component } from 'react';
import PostList from './PostList';
import { withRouter, Redirect } from 'react-router-dom';
const Styles = {
  myPaper: {
    margin: '20px 0px',
    padding: '20px'
  },
  wrapper: {
    padding: '0px 60px'
  }
};
class Post extends Component {
  state = {
    posts: [],
    loading: true,
    isEditing: false
  };
  // async componentWillMount() {
  //   await this.props.GetPosts();
  //   this.setState({ loading: false });
  //   const reduxPosts = this.props.myPosts;
  //   const ourPosts = reduxPosts;
  //   console.log(reduxPosts); // shows posts line 35
  // }

  formEditing = () => {
    if (this.state.isEditing) {
      this.setState({
        isEditing: false
      });
    } else {
      this.setState({
        isEditing: true
      });
    }
  };

  render() {
    const { loading } = this.state;
    const { myPosts } = this.props;
    if (!this.props.isAuthenticated) {
      return <Redirect to="/signIn" />;
    }
    if (loading) {
      return 'loading...';
    }
    return (
      <div className="App" style={Styles.wrapper}>
        <h1> Posts </h1>
        <PostList
          isEditing={this.state.isEditing}
          editForm={this.formEditing}
          posts={myPosts}
        />
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.user.isAuthenticated,
//   myPosts: state.post.posts
// });
// const mapDispatchToProps = (dispatch, state) => ({
//   GetPosts: () => dispatch(GetPosts())
// });
export default Post;
