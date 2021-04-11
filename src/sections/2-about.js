import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class About extends Component {
    render() {

      return (
        
                    <section id="about">
                        <Controller>
                            <Scene indicators={true} duration={"80%"} pushFollowers={false} triggerHook="onEnter" >
                                <Timeline>
                                    <Tween
                                        position="0"
                                        from={{opacity: 0}}
                                        to={{opacity: 1}}
                                    >
                                        <h2>Anraiki</h2>
                                    </Tween>
                                </Timeline>
                            </Scene>
                        </Controller>
                        
                        <div className="meContent">
                            <a href="https://twitter.com/anraiki">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            <img id="mePicture" src="./media/me.png" alt=""/>
                            <a href="https://github.com/anraiki">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </div>
                        <Controller>
                            <Scene indicators={true} duration={"75%"} pushFollowers={false} triggerHook="onEnter" >
                                <Timeline>
                                    <Tween
                                        position="0"
                                        from={{scaleX: 0}}
                                        to={{scaleX: .75}}

                                    >
                                        <hr/>
                                    </Tween>
                                </Timeline>
                            </Scene>
                        </Controller>
                        <p>Hi and welcome! My name is Anraiki. You can call me Anri for short or by my real name Henry (They all sound closely together).</p>
                        <p>I am a web painter. See my work unfold here.</p>
                        <Controller>
                            <Scene indicators={true} duration={"50%"} pushFollowers={false} triggerHook="onEnter" >
                                <Timeline>
                                    <Tween
                                        position="0"
                                        from={{scaleX: 0}}
                                        to={{scaleX: 1}}
                                    >
                                        <hr/>
                                    </Tween>
                                </Timeline>
                            </Scene>
                        </Controller>
                    </section>
      );
    }
  }

  export default About;