import React from 'react';
import ShowAnswer from './ShowAnswer.jsx';

const ShowQuestion = (props) => {

  const answersArr = props.answers.map(a => {
    return (
      <ShowAnswer
        answer={a}
      />
    );
  });

  return (
    <div className="question panel panel-default">

      <div className="question-desc panel-heading">
        <h3 className="panel-title">{props.question}</h3>
      </div>

      <div className="panel-body answer">
        {answersArr}
      </div>

    </div>
  )
}

export default ShowQuestion;

