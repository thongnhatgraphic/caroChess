import React from 'react';
import PropTypes from 'prop-types';

Collumn.propTypes = {
    value: PropTypes.number,
    receiverValue: PropTypes.func,
    userATick: PropTypes.array,
    userBTick: PropTypes.array,
    flagTick: PropTypes.bool
};

function Collumn(props) {
    const { value, receiverValue, userATick, userBTick } = props;

    const sendValueTick = (param) => {
        receiverValue(param)
    }

    const checkAtiveAB = (value) => {
        if ( userATick.some(item => item === value) ) {
            return "activeA"
        } else if ( userBTick.some(item => item === value) ) {
            return "activeB"
        } else return ""
    }

    const isTicked = (value) => {
        if ( userATick.some(item => item === value) ) {
            return true
        } else if ( userBTick.some(item => item === value) ) {
            return true
        } else return false
    }

    return (
        <td>
            <button
                onClick={() => { sendValueTick(value) }}
                className={ checkAtiveAB(value) }
                disabled={isTicked(value)}
            >
            </button>
        </td>
    );
}

export default Collumn;