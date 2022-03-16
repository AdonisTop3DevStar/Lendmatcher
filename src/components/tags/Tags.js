import React from 'react'
import { Image, Nav } from 'react-bootstrap';
import Footer from '../footer/Footer';
import { Header } from '../header/Header';
import GalleryImg from '../../assets/images/gallery.jpg'
import Avatar from '../../assets/images/avatar.png'

export  function DivContainer({className, children}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}


export function Layout ({children}) {
    return(
        <DivContainer className="Layout">
            <Header/>
            {children}
            <Footer/>
        </DivContainer>
    );
}

export function SectionTitle ({children}){
    return(
        <DivContainer className="SectionTitle">{children}</DivContainer>
    );
}

export function Section ({children}){
    return(
        <DivContainer className="Section">
            {children}
        </DivContainer>
    );
}

export function GalleryBox (){
    return(
        <DivContainer className="GalleryBox mt-4 mb-4">
            <Image src={GalleryImg} />
            <Nav.Link>
                <DivContainer className="Gallery-link">
                    <div>SoftWare</div>
                </DivContainer>
            </Nav.Link>
        </DivContainer>
    );
}

export function GenericCarouselItem () {
    return(
        <DivContainer className="GenericCarouselItem">
            <DivContainer className="GenericCarouselItem-header">
                <Nav.Link>
                    <Image src={Avatar}/>
                </Nav.Link>
            </DivContainer>
            <DivContainer className="GenericCarouselItem-body">"Thanks to your site we've appointed Oscar nominated, former CEO of Trixter Films (Avengers, Iron Man 3) as an Executive Director and Head of Global Marketing and Development and are now fielding interest from investors. Thank you!"
            </DivContainer>
            <DivContainer className="GenericCarouselItem-footer">Katia Loisel @ The Love Destination </DivContainer>
        </DivContainer>
    );
}