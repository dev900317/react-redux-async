import React from 'react';
import PostList from './PostList';
import { styled } from '@stitches/react';

const S = {};

S.Container = styled('div', {
  backgroundColor: 'lightBlue',
  maxWidth: '900px',
  margin: '50px auto',
});

const App = () => {
  return (
    <S.Container>
      <PostList />
    </S.Container>
  );
};

export default App;
