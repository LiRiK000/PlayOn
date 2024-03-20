import Slider from '@independent/Form/Slider';
import Movies from '@simple/Movies';
import { FC } from 'react';

const Test: FC = () => {
    return (
       <>
       <Movies Movies_images={[
        "./Slider1.webp",
        "./Slider2.webp",
        "./Slider3.webp",
        "./Slider4.webp",
        "./Slider5.webp",
        "https://i.pinimg.com/736x/ce/08/96/ce0896d36351e4f80adab5d4c52540e3.jpg",
        "https://i.pinimg.com/736x/9c/46/e3/9c46e3046a11b3c77fba7e78ce1a15ac.jpg",
        "https://i.pinimg.com/736x/0a/40/69/0a40690ce03431cbd93b48f64a908e2a.jpg",
       ]}/>
       <Slider imagesSlider={[
        "./Slider1.webp",
        "./Slider2.webp",
        "./Slider3.webp",
        "./Slider4.webp",
        "./Slider5.webp",
       ]}/>
       </>
    )
}

export default Test;