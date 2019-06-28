import React from 'react';
import { connect } from 'react-redux';

const Friend = props => {
    return (
        <div>
            <div>{props.friend.name}</div>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {})(Friend);