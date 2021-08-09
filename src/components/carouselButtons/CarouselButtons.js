import React from 'react';

import { Button } from './CarouselButtonsElements'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const CarouselButtons = ({ handleClickPrev, handleClicknext }) => {
    return (
        <>
            <Button
                side="prev" onClick={handleClickPrev}>
                <MdKeyboardArrowLeft className="icon" />
            </Button>
            <Button side="next" onClick={handleClicknext}>
                <MdKeyboardArrowRight className="icon" />
            </Button>
        </>
    )
}

export default CarouselButtons
