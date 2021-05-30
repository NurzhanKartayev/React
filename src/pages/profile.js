import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';
import { Button } from 'reactstrap'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        user: result
                    });
                },
            )
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <div className='text-center'>
                    <h2>Profile</h2>
                </div>
                <div className="text-center">
                    <h1>Welcome <span>{this.props.username}</span></h1>
                    <h5>Name: { user.name }</h5>
                    <h5>Username: { user.username }</h5>
                    <h5>Email: { user.email }</h5>
                    <Button className = "btn-lg btn-dark col-4" onClick={this.signOut}>Sign out</Button>
                </div>
            </div>
        );
    }

    static propTypes = {
        signOut: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired
    };

    signOut = () => {
        this.props.signOut();
    };
}


const mapStateToProps = (state) => (
    {
        username: state.username
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        signOut: () => dispatch({ type: SIGN_OUT })
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
