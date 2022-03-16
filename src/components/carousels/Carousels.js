import React from "react"
import { DivContainer, GenericCarouselItem } from "../tags/Tags";
import { Carousel } from "react-bootstrap";

export function GenericCarousel () {
    return(
        <DivContainer className="GenericCarousel pt-5 mt-5 mb-5 pb-5">
            <Carousel>
                <Carousel.Item>                    
                    <GenericCarouselItem/>
                </Carousel.Item>
            </Carousel>
        </DivContainer>
    );
}