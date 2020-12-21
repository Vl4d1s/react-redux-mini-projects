import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Vladis" timeAgo="Today at 4:45PM" content="bla bla" />
      <CommentDetail author="Nofar" timeAgo="Today at 6:00PM" content="bla bla bla" />
      <CommentDetail author="Muh" timeAgo="Yesterday at 1AM" content="bla" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
