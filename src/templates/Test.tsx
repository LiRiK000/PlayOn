import Slider from '@independent/Form/Slider';
import { FC } from 'react';

const Test: FC = () => {
    return (
       <>
       <Slider  imagesSlider={[
        "/Slider1.webp",
        "/Slider2.webp",
        "/Slider3.webp",
        "/Slider4.webp",
        "/Slider5.webp",
       ]}/>
       </>
    )
}

export default Test;