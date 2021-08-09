import { useRef, useEffect } from 'react'

import { Wrapper, Slide } from './CarouselElements'

import CarouselButtons from '../carouselButtons/CarouselButtons'

const Carousel = ({
    images,
    setWidth,
    xPosition,
    handleClickPrev,
    handleClicknext,
    setIndex,
    setXPosition
}) => {


    const slideRef = useRef()

    useEffect(() => {
        const getSlideWidth = () => {
            if (slideRef.current) {
                const width = slideRef.current.clientWidth;
                setWidth(width);
                setXPosition(0)
                setIndex(0)
            }
        }
        window.addEventListener('resize', getSlideWidth)
        getSlideWidth()
        return () => window.removeEventListener('resize', getSlideWidth)
    }, []);

    return (
        <Wrapper>
            <Slide xPosition={xPosition} ref={slideRef}>
                {images.map((img, i) => (
                    <img src={img} alt='dsdsds' key={i} />
                ))}
            </Slide>
            <CarouselButtons
                handleClickPrev={handleClickPrev}
                handleClicknext={handleClicknext}
            />
        </Wrapper>
    )
}

export default Carousel
