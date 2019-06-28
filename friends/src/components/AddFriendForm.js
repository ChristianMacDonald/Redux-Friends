import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

const AddFriendForm = props => {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            let elements = event.target.elements;
            props.addFriend({
                name: elements['name'].value,
                age: parseInt(elements['age'].value),
                email: elements['email'].value
            });
        }}>
            <input type="text" name="name" />
            <input type="number" name="age" />
            <input type="email" name="email" />
            <input type="submit" />
        </form>
    );
}

export default connect(() => ({}), { addFriend })(AddFriendForm);