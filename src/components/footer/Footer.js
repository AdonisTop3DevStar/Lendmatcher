import React from 'react'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'

import '../../App.css'
import { DivContainer} from '../tags/Tags'
import Logo from '../../assets/images/logo.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from "react-icons/fa"

export default function Footer() {
    return (
        <DivContainer className="Footer">
            <Container>
                <Row className='Footer-top pt-5 pb-5'>
                    <Col>
                        <Col><Image width='250' src={Logo}/></Col>
                    </Col>
                    <Col className='social-media'>
                        <Nav.Link><FaFacebookF/></Nav.Link>
                        <Nav.Link><FaLinkedinIn/></Nav.Link>
                        <Nav.Link><FaTwitter/></Nav.Link>
                        <Nav.Link><FaPinterest/></Nav.Link>
                    </Col>
                </Row>
                <hr/>
                <Row className='Footer-main pt-5 pb-5'>
                    <Col>
                        <DivContainer className="Footer-main-title">Latest Tweets</DivContainer>
                        <Nav className="flex-column">
                        <Nav.Link href="/home">• In our latest #behindtheraise interview we speak to</Nav.Link>
                        <Nav.Link eventKey="link-1">@QiaojiaLi from</Nav.Link>
                        <Nav.Link eventKey="link-2">@RosecutWealth who recently completed a seed st…</Nav.Link>
                        <Nav.Link >https://t.co/Q45wx8ZKRE</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <DivContainer className="Footer-main-title">More Information About:</DivContainer>
                        <Nav  className="flex-column">
                        <Nav.Link href="/home"> Lendmatcher Investment in Seattle</Nav.Link>
                        <Nav.Link eventKey="link-1"> Lendmatcher Investment in Dallas</Nav.Link>
                        <Nav.Link eventKey="link-2"> Li Lendmatcher Investors in Chicagonk</Nav.Link>
                        <Nav.Link eventKey="link-2"> Lendmatcher Investors in San Francisco & Bay Area</Nav.Link>
                        <Nav.Link eventKey="link-2"> Lendmatcher Investors in Los Lendmatcheres</Nav.Link>
                        <Nav.Link eventKey="link-2"> Lendmatcher Investors in California</Nav.Link>
                        <Nav.Link eventKey="link-2"> Funding Startups</Nav.Link>
                        <Nav.Link eventKey="link-2"> Business Partnerships</Nav.Link>
                        <Nav.Link eventKey="link-2"> Small Business Debt Relief</Nav.Link>
                        <Nav.Link eventKey="link-2"> Should I Start My Own Business?</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <DivContainer className="Footer-main-title">Navigation</DivContainer>
                        <Nav  className="flex-column">
                        <Nav.Link href="/home">How It Works</Nav.Link>
                        <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
                        <Nav.Link eventKey="link-2">About Us</Nav.Link>
                        <Nav.Link eventKey="link-2">Testimonials</Nav.Link>
                        <Nav.Link eventKey="link-2">In the Press</Nav.Link>
                        <Nav.Link eventKey="link-2">Company Info</Nav.Link>
                        <Nav.Link eventKey="link-2">Affiliates</Nav.Link>
                        <Nav.Link eventKey="link-2">Blog</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <DivContainer className="Footer-main-title">Entrepreneur Pages</DivContainer>
                        <Nav  className="flex-column">
                        <Nav.Link href="/home">Add a Pitch</Nav.Link>
                        <Nav.Link eventKey="link-1">Our Rates</Nav.Link>
                        <Nav.Link eventKey="link-2">Entrepreneur</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <DivContainer className="Footer-main-title">Investor Pages</DivContainer>
                        <Nav  className="flex-column">
                        <Nav.Link href="/home">Register</Nav.Link>
                        <Nav.Link eventKey="link-1">Business Proposal</Nav.Link>
                        <Nav.Link eventKey="link-2">Investors FAQ</Nav.Link>
                        <Nav.Link eventKey="link-1">SeedTribe - Impact Investment</Nav.Link>
                        <Nav.Link eventKey="link-2">BrickTribe - Property Investments</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <Row className='Footer-bottom pb-5'>
                    <Col>
                        <Nav.Link>Terms and Conditions</Nav.Link>
                        <Nav.Link>Privacy Policy</Nav.Link>
                        <Nav.Link>Site Map</Nav.Link>
                        <Nav.Link>Refunds</Nav.Link>
                    </Col>
                    <Col>
                        <DivContainer className='copyright'>© 2022 Lendmatcher Investment Network Ltd - Connecting<br/> Global & Local Entrepreneurs with Lendmatcher Investors</DivContainer>
                    </Col>
                </Row>
            </Container>
        </DivContainer>
    )
}