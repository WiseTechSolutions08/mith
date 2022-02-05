import { Radio } from 'antd';
import React from 'react';
import { MathComponent } from 'mathjax-react'

const RadioButton = () => {
    const [value, setValue] = React.useState(0);
  
    let textValue = '\\int_0^1 x^2\\ dx';

    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
    <div className='radio'>
      <div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}><MathComponent tex={textValue} /></Radio>
        <Radio value={2}>1/10</Radio>
        <Radio value={3}>7/15</Radio>
        <Radio value={4}>8/15</Radio>
      </Radio.Group>
      </div>
    </div>
      
    );
  };
  
  export default RadioButton;