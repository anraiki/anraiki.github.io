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
                    <div>
                        <a target="_blank"  rel="noopener noreferrer"href="https://itunes.apple.com/us/app/daily-hope/id659272511?mt=8">
                            <img src="./media/portfolio-pastor.png" alt="Pastor Rick App" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>Pastor Rick</h3>
                        <p>A podcast app made from one codebase and deployed to both Android and iOS store.</p>
                        <a target="_blank"  rel="noopener noreferrer"href="https://itunes.apple.com/us/app/daily-hope/id659272511?mt=8">
                            <button>View App Page</button>
                        </a>
                    </div>
                </div>
                <div>
                    <div >
                        <a target="_blank"  rel="noopener noreferrer"href="https://omniamd.com">
                            <img src="./media/portfolio-omnia.png" alt="Pastor Rick App" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>OmniaMD</h3>
                        <p>A telemedicine app used to help patient connect to doctor bypassing that waiting room.</p>
                        <a target="_blank"  rel="noopener noreferrer"href="https://omniamd.com">
                            <button>View Project</button>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <a target="_blank"  rel="noopener noreferrer"href="https://as.wordpress.org/plugins/kommiku/">
                            <img src="./media/portfolio-kortney.png" alt="Kortney's Photography" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>Kortney's Photography</h3>
                        <p style={{paddingBottom: 0}}>Lights. Camera. Person!</p>
                        <p>A website helping potential clients reach out to a talented individual.</p>
                        <a target="_blank"  rel="noopener noreferrer"href="http://kortneypham.com/">
                            <button>Check out Kortney!</button>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <a target="_blank"  rel="noopener noreferrer"href="https://as.wordpress.org/plugins/kommiku/">
                            <img src="./media/portfolio-kommiku.png" alt="Kommiku, a old deprecated non-working Wordpress Plugin" />
                        </a>
                    </div>
                    <div>
                        <h3 style={{color: "#9bce53"}}>Kommiku</h3>
                        <p>A nice user experience for a web comic alleviated by this Wordpress plugin. But now it's old and deprecated.</p>
                        <a target="_blank"  rel="noopener noreferrer"href="https://as.wordpress.org/plugins/kommiku/">
                            <button>View Plugin</button>
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