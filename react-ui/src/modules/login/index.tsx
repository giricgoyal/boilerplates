import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {
    const [showOtp, setShowOtp] = React.useState(false)

    const handleGenerateOtpClick = () => {
        setShowOtp(true)
    }

    const handleVerifyOtpClick = () => {
        setShowOtp(false)
    }

    return (
        <Container fluid="sm">
            <Row>
                <Col sm={4} className="m-auto">
                    <div className="text-center pb-3">Login</div>
                    <Form className="pb-3">
                        <Form.Group controlId="login-phonenumber">
                            <Form.Control type="text" placeholder="Phonenumber" />
                        </Form.Group>

                        {showOtp && (
                            <Form.Group controlId="login-otp" className="mt-3">
                                <Form.Control type="text" placeholder="OTP" />
                            </Form.Group>
                        )}
                    </Form>
                    <div className="d-grid gap-2">
                        {showOtp ? (
                            <Button variant="primary" onClick={handleVerifyOtpClick}>
                                Verify OTP
                            </Button>
                        ) : (
                            <Button variant="primary" onClick={handleGenerateOtpClick}>
                                Generate OTP
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
