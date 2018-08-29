import React, { Component } from 'react';
import snowman from '../images/step_0.png';


class SnowImage extends Component {

    render () {
        return (
<div>
<img src = {snowman} alt="Snowman" className='SnowPic'/>
</div>
        )
    }}

    export default SnowImage