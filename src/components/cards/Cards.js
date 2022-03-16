import React from 'react'
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { DivContainer } from '../tags/Tags';
import CardBanner from '../../assets/images/card-banner1.jpeg'
import { FaMapMarkerAlt } from "react-icons/fa";
import Avatar from '../../assets/images/avatar.png'


export function ProposalCard () {
    return(
        <DivContainer className="ProposalCard">
            <Card style={{ width: '20rem', margin:"auto" }}>
            <Card.Img variant="top" src={CardBanner} />
            <Card.Body>
                <Card.Link>Photonix: Greener Future</Card.Link>
                <Card.Subtitle><FaMapMarkerAlt/><spna>Midwest, USA</spna></Card.Subtitle>
                <Card.Text>
                Photonix is an environmentally conscious brand focused on producing eco-friendly gardening tools for a greener future; Developing electric, battery-powered lawn & gardening equipment; Replacing gas-powered tools to reduce CO2 emissions; $20k raised.
                </Card.Text>
                <ListGroup>
                    <ListGroup.Item>• We have a working prototype.</ListGroup.Item>
                    <ListGroup.Item>• Patent-pending both products.</ListGroup.Item>
                    <ListGroup.Item>• Distribution Partnerships.</ListGroup.Item>
                    <ListGroup.Item>• development unique products</ListGroup.Item>
                </ListGroup>
                <Row className='mt-3 mb-3'>
                    <Col>
                        <Card.Title>US$500,000</Card.Title>
                        <Card.Subtitle>Target</Card.Subtitle>
                    </Col>
                    <Col>
                        <Card.Title>US$500,000</Card.Title>
                        <Card.Subtitle>Target</Card.Subtitle>
                    </Col>
                </Row>
                <Button variant="primary">Find Out More</Button>
            </Card.Body>
            </Card>
        </DivContainer>
    );
}

export function ThumbnailCard () {
    return (
        <DivContainer className="ThumbnailCard">
            <Card style={{ width: '20rem' }}>
                <DivContainer className="ThumbnailCard-header">
                    <Card.Img variant="top" src={Avatar} />
                    <br/>
                    <span>US$1 - US$100,000</span>
                </DivContainer>                
                <Card.Body>
                    <Card.Subtitle><FaMapMarkerAlt/><span className='ml-2'>Nashville, TN, USA</span></Card.Subtitle>
                    <Card.Text>
                    I have launched, grown, and successfully exited businesses in legal services, technology, hospitality, and real estate settlement services. I'm a founder,...
                    </Card.Text>
                    <Card.Title>Areas of Expertise</Card.Title>
                    <Card.Subtitle><p>Legal Services, Recruiting, Real Estate Settl...</p></Card.Subtitle>
                    <Button variant="" className='btn-Outline-gray'>Read More</Button>
                </Card.Body>
            </Card>
        </DivContainer> 
    );
}

