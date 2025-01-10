import React, { useState } from 'react';
import splashbg from '../../Assets/splash-bg.jpg';
import Footer from '../../Components/Footer/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import axios from 'axios'; // Axios for API requests
import { useNavigate } from 'react-router-dom'; // React Router v7 navigation

export default function Signin() {
    const buttonStyle = {
        color: "#4FD1C5",
        textDecoration: "none",
    };

    // States for form inputs and feedback messages
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    // Navigation hook
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setMessage('');
        setError('');

        // Validate form inputs
        if (!email || !password) {
            setError('Please fill out both fields.');
            return;
        }

        // Set loading state
        setLoading(true);

        // API URL
        const url = `https://zenpex.in/react-dashboard/wp-json/custom/v1/login?email=${email}&password=${password}`;

        try {
            const response = await axios.get(url);

            if (response.data.status === 'success') {
                setMessage(response.data.message);
                setError('');
                // Redirect to dashboard
                navigate('/dashboard');
            } else {
                setError(response.data.message || 'Invalid email or password.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <Header />

            <div className="section-big-2">
                <div className="box-50">
                    <Container className="h-100">
                        <Row className="justify-content-center align-items-center h-100">
                            <Col lg={6}>
                                <div className="login-box">
                                    <h2>Welcome Back</h2>
                                    <p>Enter your email and password to sign in</p>

                                    {/* Display feedback messages */}
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    {message && <div className="alert alert-success">{message}</div>}

                                    <Form className="mt-4" onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Button className="btn-form-submit mt-3 mb-3" type="submit" disabled={loading}>
                                            {loading ? 'Logging in...' : 'Submit'}
                                        </Button>
                                    </Form>

                                    <p className="text-center">
                                        Don't have an account?{' '}
                                        <a href="/signup" style={buttonStyle}>
                                            Sign up
                                        </a>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="box-50">
                    <img src={splashbg} className="img-fluid" alt="splash-bg" />
                </div>
            </div>

            <Footer />
        </div>
    );
}
