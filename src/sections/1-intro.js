import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class Intro extends Component {
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
        let duration = this.props.scale_height === "100vh" ? "200%" : this.props.scale_height;

        let Images = [
            {img: "1-bg-front.png", yFrom: 0, yTo: 0},
            {img: "1-bg-f-back.png", yFrom: -1, yTo: 15},
            {img: "2-bg-front2.png", yFrom: 0, yTo: 21},
            {img: "3-bg-light.png", yFrom: 0, yTo: 25},
            {img: "4-water-tree.png", yFrom: -3, yTo: 15},
            {img: "6-mountains.png", yFrom: 0, yTo: 25},
            {img: "5-water.png", yFrom: 0, yTo: 25},
            {img: "7-sky.png", yFrom: 0, yTo: 35},
        ];

        return (
            <Controller>
                <Scene duration={duration} indicator={false} pushFollowers={false} triggerHook="onLeave" >
                    <Timeline wrapper={<section id="intro" className="illustration" style={containerStyle} />}>
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
                                        className={"image introImage-"+i}
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

  export default Intro;