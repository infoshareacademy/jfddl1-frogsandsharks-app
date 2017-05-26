import React from 'react'
import {Form, FormGroup, FormControl, Col, ControlLabel, Button, Checkbox} from 'react-bootstrap'

class LoginNew extends React.Component {
    constructor (props) {
        super(props);



    }

    render() {
        return (
            <div>
            <h1>Logowanie</h1>

                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={8}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="primary" bsSize="small" className="ButtonGo">
                                Zaloguj
                            </Button>
                            <Button bsStyle="primary" bsSize="small" className="ButtonGo">
                                Zarejestruj się
                            </Button>
                            <Button bsStyle="primary" bsSize="small" className="ButtonGo">
                                Wyloguj
                            </Button>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Logowanie przez Facebook
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

}

export default LoginNew