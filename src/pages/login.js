import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'


class Login extends React.Component {
    static propTypes = {
        isAuthorized: PropTypes.bool,
        logIn: PropTypes.func.isRequired,
        error: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onChangeUsername = (event) => {
        const { target: { value } } = event;

        this.setState({ username: value });
    }

    onChangePassword = (event) => {
        const { target: { value } } = event;

        this.setState({ password: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        this.props.logIn(username, password);
    }

    render() {
        const { isAuthorized } = this.props;

        if (isAuthorized) {
            return <Redirect to='/profile' />;
        }

        const { username, password } = this.state;
        const { error } = this.props;

        return (
            <div id='login'>
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <h2 className="text-center">Welcome</h2>
                        <Label>Login</Label>
                        <Input required type='text' name='username' value={username} onChange={this.onChangeUsername} />
                        <Label>Password</Label>
                        <Input required type='password' name='password' value={password} onChange={this.onChangePassword} />
                        <Button className = "mt-4 btn-lg btn-dark col-12" >Sign In</Button>
                        <div className='error-message' hidden={!error}>
                            {error}
                        </div>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}

const mapStateToProps = (state) => (
    {
        isAuthorized: Boolean(state.username),
        error: state.errorMessage
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        logIn: (username, password) => dispatch({ type: 'LOG_IN', payload: { username, password } }),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
