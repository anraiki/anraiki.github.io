import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class Vigor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale_height: this.props.scale_height || "1080px"
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({scale_height: nextProps.scale_height});
    }
    render() {
        let scale_height = this.props.scale_height || "1080px";
        let containerStyle = {minHeight: scale_height};
        let duration = this.props.scale_height === "100vh" ? "200%" : "200%";
        let Images = [
            {img: "vigor-front.svg", yFrom: 0, yTo: 0},
            {img: "vigor-back.svg", yFrom: -25, yTo: 10}
        ];
      return (
            <Controller>
                <Scene indicators={true} duration={duration} indicator={true} pushFollowers={false} triggerHook="onEnter" >
                    <Timeline wrapper={<section id="vigor" className="illustration" style={containerStyle} />}>
                        {Images.map((data, i) => {
                            let fromAnimation = duration === "100%" ? {yPercent: data.yFrom} : {yPercent: data.yFrom};
                            let toAnimation   = duration === "100%" ? {yPercent: data.yTo}   : {yPercent: data.yTo};
                            return (
                                <Tween key={i}
                                    position="0"
                                    from={fromAnimation}
                                    to={toAnimation}
                                >
                                    <div key={i}
                                        className={"image"}
                                        style={{
                                            minHeight:          scale_height, 
                                            backgroundImage:    `url('./media/${data.img}')`,
                                            zIndex: (Images.length - i)
                                        }}
                                    /> 
                                </Tween>
                            )
                        })}
                    </Timeline>
                </Scene>
            </Controller>
        );
    }
}
        
export default Vigor;