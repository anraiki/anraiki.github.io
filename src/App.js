import React, { Component } from 'react';
import './App.css';
import Intro        from './sections/1-intro';
import About        from './sections/2-about';
import Vigor        from './sections/3-vigor';
import Skill        from './sections/4-skill';
import Water        from './sections/5-tenacity';
import Portfolio    from './sections/6-portfolio';
import Contact      from './sections/7-contact';
let _               = require("lodash");
const ratio         = require('aspect-ratio')
class App extends Component {
    constructor(props){
		super(props);
        window.addEventListener("resize", _.debounce(() => {
			if(window.innerWidth > 1920) {
                // window.location.reload();
				const scale_height = window.innerWidth * 0.565;
				this.setState({scale_height: scale_height});
			} else {
				this.setState({scale_height: "100vh"});
            }
            // window.location.reload();
        },500));
        const aspect        = ratio(window.innerWidth, window.innerHeight);
        const res_ratio    = aspect.split(":");
        console.log();
        const scale_height = res_ratio[0] < res_ratio[1] ? window.innerWidth * 0.565 : "100vh"; 
		this.state = {
			scale_height: scale_height
        };
    }  
    render() {
		return (
            <div className="App">
                <Intro scale_height={this.state.scale_height} />
                <About scale_height={this.state.scale_height} />
                <Vigor scale_height={this.state.scale_height} />
                <Skill scale_height={this.state.scale_height} />
                <Water scale_height={this.state.scale_height} />
                <Portfolio scale_height={this.state.scale_height} />
                <Contact scale_height={this.state.scale_height} />
            </div>
		);
  }
}

export default App;
