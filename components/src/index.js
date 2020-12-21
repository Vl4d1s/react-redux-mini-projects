import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Vladis"
          timeAgo="Today at 4:45PM"
          content="bla bla bla"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Nofar"
        timeAgo="Today at 6:00PM"
        content="bla bla"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Muh"
        timeAgo="Yesterday at 1AM"
        content="bla bla bla bla"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
