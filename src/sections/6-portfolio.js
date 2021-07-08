import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
	  let scale_height = this.props.scale_height || "1080px";
      let containerStyle = {minHeight: scale_height};
      return (
        <section id="portfolio" style={containerStyle}>
            <h2 style={{color: "rgb(82, 229, 183)", opacity: 1}}>Portfolio</h2>
            <div style={{margin: "90px 0"}}>
                <div>
                    <div >
                        <a target="_blank"  rel="noopener noreferrer"href="https://apps.apple.com/us/app/max-cloud-app/id1490740894">
                            <img src="./media/portfolio-maxApp.png" alt="Max Cloud App Store page" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>Max Cloud App</h3>
                        <p>A remote controller app used to diagnose and allow an array of users to access a smart gate. Using websocket technology and passwordless authentication.</p>
                        <a target="_blank"  rel="noopener noreferrer"href="https://apps.apple.com/us/app/max-cloud-app/id1490740894">
                            <button>View App Page</button>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <a target="_blank"  rel="noopener noreferrer"href="https://itunes.apple.com/us/app/daily-hope/id659272511?mt=8">
                            <img src="./media/portfolio-pastor.png" alt="Pastor Rick App" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>Pastor Rick</h3>
                        <p>A podcast and blog reading app made from Facebook's React framework,wrapped with Cordova, and grabbing content from a WordPress blog.</p>
                        <a target="_blank"  rel="noopener noreferrer"href="https://itunes.apple.com/us/app/daily-hope/id659272511?mt=8">
                            <button>View App Page</button>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <a target="_blank"  rel="noopener noreferrer"href="https://cigarstandard.com/">
                            <img src="./media/portfolio-cigar.png" alt="Cigar Standard" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>Cigar Standard</h3>
                        <p>Utilizing WordPress and Woocommerce to sell Cigars; whose site had issues serving content now expedited with my lightspeed solution</p>
                        <a target="_blank"  rel="noopener noreferrer"href="https://cigarstandard.com/">
                            <button>Take a look</button>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <a target="_blank"  rel="noopener noreferrer"href="https://imzzelite.com/">
                            <img src="./media/portfolio-imzzelite.png" alt="Imzzelite" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>Imzzelite</h3>
                        <p>A Harley Davidson Parts dealer under DDOS attack! Using CloudFlare and a lightspeed server solution. Downtime put to minimum. Profits were saved!</p>
                        <a target="_blank"  rel="noopener noreferrer"href="https://imzzelite.com/">
                            <button>Take a look</button>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <a target="_blank"  rel="noopener noreferrer" href="https://itunes.apple.com/us/app/daily-hope/id659272511?mt=8">
                            <img src="./media/portfolio-dotspiral.png" alt="dotSpiral" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>dotSpiral</h3>
                        <p>Literally nothing but a story that tells the beginning of my web career in 2002. Actually much earlier than that (I say 1998).</p>
                        <a target="_blank"  rel="noopener noreferrer" href="https://whois.icann.org/en/lookup?name=dotspiral.com">
                            <button>Whois: dotSpiral?</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }

  export default Portfolio;