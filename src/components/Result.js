import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
    return (
        <div className="result">
            You scored {props.quizResult}! Happy birthday babe!
            <br /> <br />

            <img src="/images/original_art-class-for-one-in-a-working-artist-s-studio.jpg" alt="Art class"/>

            <div>
                Name of student : Cassie Moore <br />
                Class: 19JA003 Acrylic Painting Essentials for Beginners | One Day Workshop <br />
                Start: 9:30 AM Sunday 6 January 2019 <br />
                End: 3:30 PM Sunday 6 January 2019 <br />
            </div>

        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;