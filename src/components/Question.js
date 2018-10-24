import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
    return (
        <div>
            <img className="questionImage" src={props.image} alt="Question"/>
            <h2 className="question">{props.content}</h2>
        </div>
);
}

Question.propTypes = {
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Question;