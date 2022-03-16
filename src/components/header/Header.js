import React from 'react'
import { DivContainer } from '../tags/Tags'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, InputGroup } from 'react-bootstrap'
import { FaRegHandshake } from "react-icons/fa"
import { BsSearch } from "react-icons/bs";

export  function Header() {
    return (
       <DivContainer className="Header">
           <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><FaRegHandshake/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1"><BsSearch/></InputGroup.Text>
                                <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Form>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Invest" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Explore</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Search</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">NewsFeed</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Fundraise" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">My Pitches</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">My Investors</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Investor Search</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Add a Pitch</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Newsfeed</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">Messages</Nav.Link>
                            <NavDropdown title="Help" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">How It Works</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Fundraise FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Invest FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Testimonials</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Learn</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Our Rates</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Refunds</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="AD" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Alerts</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Account Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Subscriptions & Billing</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Earn Commission</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Country</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </DivContainer>
    )
}
