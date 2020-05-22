import React from 'react';
import { Slider } from 'carbon-components-react';

const SliderJS3 = (props) => {
    return (
        <div>
        <br/>

        <p>familiar  -----------------  serious</p>
                           
        <Slider
            hideTextInput
            ariaLabelInput="Label for slider value"
            id="slider"
            max={5}
            min={1}
            step={1}
            stepMuliplier={4}
            value={props.value}
            />
        </div>
    );
};
export default SliderJS3;