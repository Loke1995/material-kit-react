import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { connect } from 'react-redux';
import Editable from './Editable';
const Styles = {
  myPaper: {
    margin: '20px 0px',
    padding: '20px'
  }
};
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Return a new function. Otherwise the DeletePost action will be dispatch each
  // time the Component rerenders.
  removePost = (id) => () => {
    this.props.DeletePost(id);
  };
  onChange = (e) => {
    e.preventDefault();
    // maybe their is issue with it calling title from name in the editable
    // component
    this.setState({
      [e.target.title]: e.target.value
    });
  };
  render() {
    const { posts, editForm, isEditing } = this.props;
    return (
      <div>
        {posts.map((post, i) => (
          <Paper key={i} style={Styles.myPaper}>
            <Typography variant="h6" component="h3">
              {/* if else teneray operator */}
              {isEditing ? (
                <Editable editField={post.title} onChange={this.onChange} />
              ) : (
                <div>{post.title}</div>
              )}
            </Typography>
            <Typography component="p">
              {post.post_content}
              <h5>by: {post.username}</h5>
              <Typography color="textSecondary">
                {moment(post.createdAt).calendar()}
              </Typography>
            </Typography>
            {!isEditing ? (
              <Button variant="outlined" type="submit" onClick={editForm}>
                Edit
              </Button>
            ) : (
              <Button variant="outlined" type="submit" onClick={editForm}>
                Update
              </Button>
            )}
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={this.removePost(post.id)}
            >
              Remove
            </Button>
          </Paper>
        ))}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  // Pass id to the DeletePost functions.
  DeletePost: (id) => dispatch(DeletePost(id))
});
export default connect(null, mapDispatchToProps)(PostList);
