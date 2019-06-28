import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import { Friend, AddFriendForm } from '../components';

class FriendsListView extends React.Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />;
                })}
                <AddFriendForm />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, { fetchFriends })(FriendsListView);