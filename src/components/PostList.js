import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { styled } from '@stitches/react';
import UserHeader from './UserHeader';

const ContainerS = styled('ul', {
  listStyle: 'none',
});

const HeaderS = styled('h2', {
  fontFamily: 'Poppins',
  fontSize: '24px',
});

const PostBodyS = styled('p', {
  fontFamily: 'Inter',
  fontSize: '16px',
});

const PostItemS = styled('div', {
  marginBottom: '20px',
  boxShadow: '0 1px 4px 0 rgba(0,0,0,.1)',
  padding: '20px 40px',
});

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <PostItemS key={post.id}>
          <HeaderS>{post.title}</HeaderS>
          <PostBodyS>{post.body}</PostBodyS>
          <UserHeader userId={post.userId} />
        </PostItemS>
      );
    });
  }

  render() {
    return <ContainerS>{this.renderList()}</ContainerS>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
