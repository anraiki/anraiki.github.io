import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class Skill extends Component {
    render() {
      return (
        <section className="skills">            
        <Controller>
                <Scene indicators={false} duration={"50%"} pushFollowers={false} triggerHook="onEnter" >
                    <Timeline>
                        <Tween
                            position="0"
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                        >
                            <h2>My Skills</h2>  
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
            <Controller>
                <Scene indicators={false} duration={"50%"} pushFollowers={false} triggerHook="onEnter" >
                    <Timeline>
                        <Tween
                            position="0"
                            from={{strokeDashoffset: "509.58px"}}
                            to={{strokeDashoffset: "0"}}
                        >
                            <svg style={{strokeDasharray: "509.58px"}} id="skillUnderline" version="1.2" baseProfile="tiny" x="0px" y="0px" width="564px" height="51.212px" viewBox="0 0 564 51.212">
                                <path id="squig" fill="none" stroke="#FDFDFE" strokeWidth="2" strokeMiterlimit="20" d="M29.332,17.007
                                c84.222-0.007,168.445,29.997,252.667,30s168.444-29.993,252.666-30"></path>
                            </svg>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
            <div>
                <div id="skill-creative">
                    <Controller>
                        <Scene indicators={false} duration={"60%"} pushFollowers={false} triggerHook="onEnter" >
                            <Timeline>
                                <Tween
                                    position="0"
                                    from={{strokeDashoffset: "881.176px"}}
                                    to={{strokeDashoffset: "0"}}
                                >
                                    <svg style={{strokeDasharray: "881.176px"}} version="1.2" baseProfile="tiny" x="0px" y="0px" width="344.667px" height="327.333px" viewBox="0 0 344.667 327.333">
                                        <g>
                                            <path className="path" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="20" d="M220,198v112.606c0,1.875-1.52,3.394-3.394,3.394
                                                H18.394C16.52,314,15,312.48,15,310.606V27.394C15,25.52,16.52,24,18.394,24h198.212c1.875,0,3.394,1.52,3.394,3.394V95"></path>
                                            <rect className="path" x="38" y="43" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" width="159" height="50"></rect>
                                            <polyline className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" points="197,220 197,295 38,295 38,220 95,220"></polyline>
                                            <rect className="path" x="38" y="111" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" width="42" height="45"></rect>
                                            <rect className="path" x="96" y="111" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" width="43" height="45"></rect>
                                            <polyline className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" points="159,156 155,156 155,111 197,111 197,118 "></polyline>
                                            <line className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" x1="37" y1="170" x2="145" y2="170"></line>
                                            <line className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" x1="37" y1="182" x2="132" y2="182"></line>
                                            <line className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" x1="37" y1="194" x2="121" y2="194"></line>
                                            <line className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" x1="37" y1="206" x2="110" y2="206"></line>
                                            <path className="path" fill="#FFFFFF" stroke="#ffffff" strokeWidth="3" strokeMiterlimit="20" d="M191.16,211.786"></path>
                                            <polygon className="path" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="20" points="146.877,271.181 79.824,286.889 
                                                95.383,219.388 249.159,65.612 301.101,117.554 146.877,271.181 	"></polygon>
                                            <polyline className="path" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="20" points="95.084,219.09 132.401,208.042 
                                                130.112,234.914 156.88,232.521 147.026,271.032 	"></polyline>
                                            <line className="path" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="20" x1="261.995" y1="77.851" x2="132.401" y2="208.042"></line>
                                            <line className="path" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="20" x1="287.668" y1="103.524" x2="156.88" y2="232.521"></line>
                                            <path className="path" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="20" d="M301.997,116.659l21.195-21.195
                                                c1.319-1.319,1.319-3.457,0-4.776l-47.166-47.166c-1.319-1.319-3.457-1.319-4.776,0l-21.195,21.195"></path>
                                            <path className="path" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="20" d="M89.209,246.172c0,0-9.745,40.379,28.385,31.869"></path>
                                            <path className="path" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="20" d="M220,198.342"></path>
                                        </g>
                                        <g>
                                            <line className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" x1="44" y1="86" x2="59" y2="86"></line>
                                            <line className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" x1="65" y1="86" x2="80" y2="86"></line>
                                            <line className="path" fill="none" stroke="#9BCE53" strokeWidth="2" strokeMiterlimit="20" x1="87" y1="86" x2="102" y2="86"></line>
                                        </g>
                                    </svg>
                                </Tween>
                            </Timeline>
                        </Scene>
                    </Controller>
                </div>
                <div>
                    <h3 style={{color: "#9bce53"}}>Creatively</h3>
                    <p>I love to storyboard. Make Comics. Draw. Paint. Plan. Design. Build. It's who I am, and I have been doing it since I can remember.</p>
                </div>
            </div>
            <div>
                <div><img src="./media/skill-develop.svg" alt="Web Developing Icon of Mobile, Tablet, and Desktop devices"/></div>
                <div>
                    <h3 style={{color: "#9bce53"}}>Web Developing</h3>
                    <p>With my creativity, web developing became another asset of tools that I use to paint on a canvas, a desktop, a tablet, or a mobile phone.</p>
                </div>
            </div>
            <div>
                <div><img src="./media/skill-execution.svg" alt="Creative Icon"/></div>
                <div>
                    <h3 style={{color: "#9bce53"}}>Execution</h3>
                    <p>It's important that the solution I find are intuitive and thoughtful. Everything on this page was built by me including the fancy effects provided.</p>
                </div>
            </div>
		</section>
      );
    }
  }

  export default Skill;