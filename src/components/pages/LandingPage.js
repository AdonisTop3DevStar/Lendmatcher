import React from 'react'
import { Container, Row, Col, Nav, Image, Button, Form } from 'react-bootstrap'

import '../../App.css'
import { ProposalCard, ThumbnailCard } from '../cards/Cards'
import { DivContainer, GalleryBox, Layout, Section, SectionTitle } from '../tags/Tags'
import SocialBanner from '../../assets/images/social-banner.png'
import { GenericCarousel } from '../carousels/Carousels'

export default function LandingPage() {
    return (
        <DivContainer className="LandingPage">
            <Layout>
                <DivContainer className="pt-5 pb-5 TopBanner">
                    <Container>
                        <h1>LENDMATCHER IS WHERE ENTREPRENEURS WITH<br/>IDEAS MEET PRIVATE INVESTORS  !!!</h1>
                        <p>Where great businesses and great people meet. We bring together businesses looking for investment<br/> and investors with the capital, contacts and knowledge to help them succeed.</p>
                        <DivContainer className="Select-role">
                                <DivContainer className="Select-role-body">
                                <DivContainer  className="Select-role-title">I'm looking to...</DivContainer>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Entrepreneurs</option>
                                    <option value="2">Investors</option>
                                </Form.Select>
                            </DivContainer>
                            <Button className='btn-primary mt-5 mb-5 px-5 py-2'>Get Started</Button>
                        </DivContainer>
                    </Container>   
                </DivContainer>
                <Container>                    
                    <Section className="pt-5 pb-5">
                        <SectionTitle>Find an investment opportunity that's right for you.</SectionTitle>
                        <Row>
                            <Col>
                                <ProposalCard/>
                            </Col>
                            <Col>
                                <ProposalCard/>
                            </Col>
                            <Col>
                                <ProposalCard/>
                            </Col>
                        </Row>
                        <DivContainer className="Section-bottom-text mt-5 mb-3">Browse business ideas, startups and larger companies from all over the world.</DivContainer>
                        <Nav.Link>Show me some Pitches</Nav.Link>
                    </Section>
                    <Section className="pt-5 pb-5 mb-5">
                        <SectionTitle>Featured in</SectionTitle>
                        <Image src={SocialBanner} style={{width: "100%"}}/>
                        <SectionTitle>We help investors and entrepreneurs build lasting and profitable relationships.</SectionTitle>
                        <Row className='mt-4 mb-4'>
                            <Col><ThumbnailCard/></Col>
                            <Col><ThumbnailCard/></Col>
                            <Col><ThumbnailCard/></Col>
                        </Row>
                    </Section>
                    <Section className="pt-5 pt-5">
                        <SectionTitle>What's popular right now...</SectionTitle>
                        <Row className='pb-5'>
                            <Col>
                                <GalleryBox/>
                            </Col>
                            <Col>
                                <GalleryBox/>
                            </Col>
                            <Col>
                                <GalleryBox/>
                            </Col>
                            <Col>
                                <GalleryBox/>
                            </Col>
                            <Col>
                                <GalleryBox/>
                            </Col>
                            <Col>
                                <GalleryBox/>
                            </Col>
                        </Row>
                        <Nav.Link><Nav.Link>Show me some Pitches</Nav.Link></Nav.Link>
                    </Section>
                    <Section className='pt-5 pb-5'>
                        <SectionTitle>What our customers say</SectionTitle>
                        <GenericCarousel/>
                    </Section>
                    <Section className='pt-5 pb-5'>
                        <DivContainer className="Select-role">
                            <DivContainer className="Select-role-body">
                                <DivContainer>I'm looking to...</DivContainer>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Entrepreneurs</option>
                                    <option value="2">Investors</option>
                                </Form.Select>
                            </DivContainer>
                            <Button className='btn-primary mt-5 mb-5 px-5 py-2'>Get Started</Button>
                        </DivContainer>
                    </Section>
                </Container>
            </Layout>
        </DivContainer>
    )
}