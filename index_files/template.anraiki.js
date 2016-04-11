(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw('<div class="se-pre-con animated"></div>\n	'), HTML.DIV({
    "class": "loaded animated"
  }, "\n		", HTML.DIV({
    "class": "anriTree"
  }, "\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("isDesktop"));
  }, function() {
    return [ "\n			", Spacebars.include(view.lookupTemplate("desktop")), "\n		" ];
  }, function() {
    return [ "\n			", Spacebars.include(view.lookupTemplate("mobile")), "\n		" ];
  }), "			\n		"), "\n		\n		", HTML.Raw('<section id="aboutAnri">\n			<div>\n				<h2 data-bottom-bottom="opacity: 0;" data-center-center="opacity: 1;">Anraiki</h2>\n				<div class="meContent">\n					<a href="https://twitter.com/anraiki">\n						<span class="fa-stack fa-lg">\n							<i class="fa fa-circle fa-stack-2x"></i>\n							<i class="fa fa-twitter fa-stack-1x fa-inverse"></i>\n						</span>\n					</a>\n					<img id="mePicture" src="me.png">\n					<a href="https://github.com/anraiki">\n						<span class="fa-stack fa-lg">\n							<i class="fa fa-circle fa-stack-2x"></i>\n							<i class="fa fa-github fa-stack-1x fa-inverse"></i>\n						</span>\n					</a>\n				</div>\n				<hr data-bottom-bottom="transform: scale(0,1);" data-center-center="transform: scale(1,1);">\n				<p>Welcome. My name is Anri, short for Anraiki and onomatopoeia of Henry (my real name). Anraiki is another onomatopoeia of Unlikely in Romanization of Japanese. I am a web painter, and I love painting websites. See my work unfold here.</p>\n				<hr data-bottom-bottom="transform: scale(0,1);" data-center-center="transform: scale(1,1);">\n			</div>\n		</section>'), "\n		", HTML.Raw('<div class="anriTree vigorTree after">\n			<div class="bg8-front"></div> <!-- Ceiling -->\n			<div class="bg8-back"></div>\n		</div>'), "\n		", HTML.SECTION({
    id: "lifeDesc",
    "class": "desc",
    "data-bottom-top": "transform: translate3d(0px,0px,0px);",
    "data-center-top": "transform: translate3d(0px,-125px,0px);",
    "data-center-bottom": "transform: translate3d(0px,-550px,0px);"
  }, "\n			", HTML.DIV("\n			  ", HTML.Raw('<h2 data-bottom-bottom="opacity: 0;" data-center-center="opacity: 1;">My Skills</h2>'), "\n				", HTML.SVG({
    "data-bottom-top": "stroke-dashoffset: 509.58px; stroke-dasharray: 509.58px;",
    "data-center-top": "stroke-dashoffset: 0px;",
    id: "skillUnderline",
    version: "1.2",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "564px",
    height: "51.212px",
    viewBox: "0 0 564 51.212",
    "xml:space": "preserve"
  }, "\n				", HTML.PATH({
    id: "squig",
    fill: "none",
    stroke: "#FDFDFE",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M29.332,17.007\n					c84.222-0.007,168.445,29.997,252.667,30s168.444-29.993,252.666-30"
  }), "\n				"), "\n			  ", HTML.DIV("\n				  ", HTML.DIV({
    "class": "svgDraw"
  }, "\n						", HTML.SVG({
    "data-bottom-top": "stroke-dashoffset: 880.176px; stroke-dasharray: 881.176px;",
    "data-center-top": "stroke-dashoffset: 0px;",
    version: "1.2",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "344.667px",
    height: "327.333px",
    viewBox: "0 0 344.667 327.333",
    overflow: "scroll",
    "xml:space": "preserve"
  }, "\n					", HTML.G("\n						", HTML.PATH({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M220,198v112.606c0,1.875-1.52,3.394-3.394,3.394\n							H18.394C16.52,314,15,312.48,15,310.606V27.394C15,25.52,16.52,24,18.394,24h198.212c1.875,0,3.394,1.52,3.394,3.394V95"
  }), "\n						", HTML.RECT({
    "class": "path",
    x: "38",
    y: "43",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "159",
    height: "50"
  }), "\n						", HTML.POLYLINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "197,220 197,295 38,295 38,220 95,220"
  }), "\n						", HTML.RECT({
    "class": "path",
    x: "38",
    y: "111",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "42",
    height: "45"
  }), "\n						", HTML.RECT({
    "class": "path",
    x: "96",
    y: "111",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "43",
    height: "45"
  }), "\n						", HTML.POLYLINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "159,156 155,156 155,111 197,111 197,118 "
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "37",
    y1: "170",
    x2: "145",
    y2: "170"
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "37",
    y1: "182",
    x2: "132",
    y2: "182"
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "37",
    y1: "194",
    x2: "121",
    y2: "194"
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "37",
    y1: "206",
    x2: "110",
    y2: "206"
  }), "\n						", HTML.PATH({
    "class": "path",
    fill: "#FFFFFF",
    stroke: "#ffffff",
    "stroke-width": "3",
    "stroke-miterlimit": "20",
    d: "M191.16,211.786"
  }), "\n						", HTML.POLYGON({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "3",
    "stroke-miterlimit": "20",
    points: "146.877,271.181 79.824,286.889 \n							95.383,219.388 249.159,65.612 301.101,117.554 146.877,271.181 	"
  }), "\n						", HTML.POLYLINE({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "95.084,219.09 132.401,208.042 \n							130.112,234.914 156.88,232.521 147.026,271.032 	"
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "261.995",
    y1: "77.851",
    x2: "132.401",
    y2: "208.042"
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "287.668",
    y1: "103.524",
    x2: "156.88",
    y2: "232.521"
  }), "\n						", HTML.PATH({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "3",
    "stroke-miterlimit": "20",
    d: "M301.997,116.659l21.195-21.195\n							c1.319-1.319,1.319-3.457,0-4.776l-47.166-47.166c-1.319-1.319-3.457-1.319-4.776,0l-21.195,21.195"
  }), "\n						", HTML.PATH({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M89.209,246.172c0,0-9.745,40.379,28.385,31.869"
  }), "\n						", HTML.PATH({
    "class": "path",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M220,198.342"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "44",
    y1: "86",
    x2: "59",
    y2: "86"
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "65",
    y1: "86",
    x2: "80",
    y2: "86"
  }), "\n						", HTML.LINE({
    "class": "path",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "87",
    y1: "86",
    x2: "102",
    y2: "86"
  }), "\n					"), "\n					"), "\n				"), "\n				", HTML.Raw('<div class="skillDesc">\n					<h3 style="color: #9bce53;">Creatively</h3>\n					  <p>	\n						<br>I love to storyboard. Make Comics. Draw. Paint. Plan. Design. Build. It\'s who I am, and I have been doing it since I can remember.\n					  </p>\n				</div>'), "\n				", HTML.Raw('<div class="clear"></div>'), "\n			  "), "\n			  ", HTML.DIV("\n				", Blaze.If(function() {
    return Spacebars.call(view.lookup("isDesktop"));
  }, function() {
    return [ "\n					", Spacebars.include(view.lookupTemplate("webdevelop")), "\n				" ];
  }), "	\n				", HTML.DIV({
    "class": "svgDraw"
  }, "\n						", HTML.SVG({
    "data-bottom-top": "stroke-dashoffset: 880.176px; stroke-dasharray: 881.176px;",
    "data-center-top": "stroke-dashoffset: 0px;",
    version: "1.2",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "344.667px",
    height: "327.333px",
    viewBox: "0 0 344.667 327.333",
    overflow: "scroll",
    "xml:space": "preserve"
  }, "\n						", HTML.G("\n							", HTML.POLYLINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "105.804,189.162 57.495,189.162 \n								57.495,89.227 292.237,89.227 292.237,189.162 237.124,189.162 	"
  }), "\n							", HTML.POLYLINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "135.062,208.403 126.727,208.403 \n								126.727,155.907 216.031,155.907 216.031,208.403 207.186,208.403 	"
  }), "\n							", HTML.POLYLINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "135.062,263.412 126.727,263.412 \n								126.727,219.186 135.062,219.186 	"
  }), "\n							", HTML.POLYLINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "207.696,219.186 216.031,219.186 \n								216.031,263.412 207.696,263.412 	"
  }), "\n							", HTML.G("\n								", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M207,297.565c0,6.315-5.119,11.435-11.435,11.435\n									h-49.131c-6.315,0-11.435-5.119-11.435-11.435V180.435c0-6.315,5.119-11.435,11.435-11.435h49.131\n									c6.315,0,11.435,5.119,11.435,11.435V297.565z"
  }), "\n								", HTML.RECT({
    x: "140",
    y: "189",
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "62",
    height: "93"
  }), "\n								", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M182,177.809c0,0.658-0.533,1.191-1.191,1.191\n									h-17.618c-0.658,0-1.191-0.533-1.191-1.191v-0.618c0-0.658,0.533-1.191,1.191-1.191h17.618c0.658,0,1.191,0.533,1.191,1.191\n									V177.809z"
  }), "\n							"), "\n							", HTML.G("\n								", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M135,286h-16.608\n									c-6.764,0-12.392-5.958-12.392-12.722V121.546c0-6.764,5.628-11.546,12.392-11.546h106.825c6.764,0,11.784,4.782,11.784,11.546\n									v151.732c0,6.764-5.19,12.722-11.954,12.722H207"
  }), "\n								", HTML.POLYLINE({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "135,272 121,272 121,125 224,125 \n									224,272 207,272 		"
  }), "\n							"), "\n							", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M106,230H45.588C38.824,230,33,224.249,33,217.485\n								V56.907C33,50.143,38.824,45,45.588,45h258.557C310.908,45,316,50.143,316,56.907v160.577c0,6.764-5.458,12.247-12.222,12.247\n								l-66.314,0.474"
  }), "\n							", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M237.464,203.876"
  }), "\n							", HTML.POLYLINE({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "106,204 45,204 45,57 304,57 304,203.536 \n								237.149,203.938 	"
  }), "\n							", HTML.POLYLINE({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "237,255 267,255 267,263 237,263 	"
  }), "\n							", HTML.POLYLINE({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    points: "106,255 83,255 83,263 106,263 	"
  }), "\n							\n								", HTML.RECT({
    x: "169.423",
    y: "134.134",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "46.608",
    height: "12.247"
  }), "\n							\n								", HTML.RECT({
    x: "144.418",
    y: "194.01",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "33.68",
    height: "12.247"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "211",
    y1: "141",
    x2: "202",
    y2: "141"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "197",
    y1: "141",
    x2: "188",
    y2: "141"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "184",
    y1: "141",
    x2: "175",
    y2: "141"
  }), "\n							\n								", HTML.RECT({
    x: "245.629",
    y: "68.814",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "46.608",
    height: "12.247"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "287",
    y1: "76",
    x2: "278",
    y2: "76"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "273",
    y1: "76",
    x2: "264",
    y2: "76"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "260",
    y1: "76",
    x2: "251",
    y2: "76"
  }), "\n							", HTML.RECT({
    x: "186",
    y: "194.01",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "12",
    height: "12.247"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "196",
    y1: "203",
    x2: "188",
    y2: "203"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "196",
    y1: "200",
    x2: "188",
    y2: "200"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "196",
    y1: "197",
    x2: "188",
    y2: "197"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "144.418",
    y1: "194.01",
    x2: "178.098",
    y2: "206.258"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "144.418",
    y1: "206.258",
    x2: "178.098",
    y2: "194.01"
  }), "\n							\n								", HTML.RECT({
    x: "126.727",
    y: "134.134",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "33.68",
    height: "12.247"
  }), "\n							\n								", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "126.727",
    y1: "134.134",
    x2: "160.407",
    y2: "146.381"
  }), "\n							\n								", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "126.727",
    y1: "146.381",
    x2: "160.407",
    y2: "134.134"
  }), "\n							\n								", HTML.RECT({
    x: "57.325",
    y: "68.814",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "33.68",
    height: "12.247"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "57.325",
    y1: "68.814",
    x2: "91.005",
    y2: "81.062"
  }), "\n							", HTML.LINE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    x1: "57.325",
    y1: "81.062",
    x2: "91.005",
    y2: "68.814"
  }), "\n							", HTML.RECT({
    x: "145",
    y: "212",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "53",
    height: "27"
  }), "\n							", HTML.RECT({
    x: "145",
    y: "244",
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    width: "53",
    height: "28"
  }), "\n						"), "\n						"), "\n				"), "\n				", Blaze.If(function() {
    return Spacebars.call(view.lookup("isPhone"));
  }, function() {
    return [ "\n					", Spacebars.include(view.lookupTemplate("webdevelop")), "\n				" ];
  }), "		\n				 ", HTML.Raw('<div class="clear"></div>'), "\n			  "), "\n			  ", HTML.DIV("\n				", HTML.DIV({
    "class": "svgDraw"
  }, "\n						", HTML.SVG({
    "data-bottom-top": "stroke-dashoffset: 880.176px; stroke-dasharray: 881.176px;",
    "data-center-top": "stroke-dashoffset: 0px;",
    version: "1.2",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "344.667px",
    height: "327.333px",
    viewBox: "0 0 344.667 327.333",
    overflow: "scroll",
    "xml:space": "preserve"
  }, "\n					", HTML.G("\n					"), "\n					", HTML.G("\n						", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M87.512,195.384\n							c-4.207-11.611-7.442-26.021-7.442-39.084c0-60.305,48.887-109.191,109.191-109.191c30.844,0,58.701,12.789,78.558,33.354"
  }), "\n						", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M290.234,114.676\n							c5.12,12.646,8.217,27.142,8.217,41.624c0,60.305-48.887,109.191-109.191,109.191c-19.881,0-40.237-6.862-56.1-15.76"
  }), "\n						", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M290.234,114.676"
  }), "\n						", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M327.523,64.514c0,0-5.583,32.881-93.346,95.99\n							l-0.476,34.417l14.347-1.354c0,0-3.433,28.268-37.72,26.22c0,0,1.392-8.928,8.02-14.125c6.628-5.196-7.974-36.534-7.974-36.534\n							l-8.512-1.626l-1.683-2.423l-11.948-17.203l-1.683-2.423l1.455-8.553c0,0-24.261-24.635-31.444-20.239\n							c-7.183,4.396-16.024,2.563-16.024,2.563C150.59,86.381,178.3,92.996,178.3,92.996l-6.231,12.894l32.238,11.606\n							c89.782-60.201,122.459-54.072,122.459-54.072L327.523,64.514z"
  }), "\n						", HTML.CIRCLE({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    cx: "260.363",
    cy: "110.302",
    r: "12.908"
  }), "\n						", HTML.PATH({
    fill: "none",
    stroke: "#9BCE53",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M187.084,177.305l-14.199-19.524\n							c0,0-72.068-11.479-99.396,64.785c-20.917,58.371-58.573,50.586-58.573,50.586S111.205,321.519,187.084,177.305z"
  }), "\n						", HTML.PATH({
    fill: "none",
    stroke: "#FFFFFF",
    "stroke-width": "2",
    "stroke-miterlimit": "20",
    d: "M132.454,249.567"
  }), "\n					"), "\n					"), "\n				"), "\n				", HTML.Raw('<div class="skillDesc">\n					<h3 style="color: #9bce53;">Execution</h3>\n					<p><br>It\'s important that the solution I find are intuitive and thoughtful. Everything on this page was built by me including the fancy effects provided.</p>\n				 </div>'), "\n				 ", HTML.Raw('<div class="clear"></div>'), "\n			  "), "\n			"), "\n		"), "\n		", HTML.Raw('<section id="tenacityCave" data-bottom-top="transform: translate3d(0px,0px,0px);" data-center-top="transform: translate3d(0px,-250px,0px);" data-top-top="transform: translate3d(0px,-375px,0px);">\n			<div class="anriTree after">\n				<div class="bg9-front" data-bottom-top="transform: translate3d(0px,0px,0px);" data-center-top="transform: translate3d(0px,-100px,0px);" data-top-bottom="transform: translate3d(0px,-200px,0px);"></div>\n				<div class="bg9-back"></div>\n			</div>\n		</section>'), "\n		", HTML.SECTION({
    "data-bottom-top": "transform: translate3d(0px,0px,0px);",
    "data-center-top": "transform: translate3d(0px,-150px,0px);",
    "data-top-top": "transform: translate3d(0px,-250px,0px);",
    id: "tenacityDesc",
    "class": "desc"
  }, "\n			", HTML.DIV("\n			  ", HTML.Raw('<h2 style="color: #52e5b7;" data-bottom-top="opacity: 0;" data-center-bottom="opacity: 1;">Trophies</h2>'), "\n			  ", HTML.Raw('<span><i class="fa fa-graduation-cap"></i> Bachelor of Studio Art, CSULB</span>'), "\n			  ", HTML.Raw('<span><i class="fa fa-paint-brush"></i>Award Winning  2D Design</span>'), "\n			  ", HTML.Raw('<span><i class="fa fa-globe"></i> Year 2002 Domain and Website Owner</span>'), "\n				", HTML.SVG({
    version: "1.2",
    "class": "laurels",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "678px",
    height: "454px",
    viewBox: "622.5 328.5 678 454",
    overflow: "scroll",
    "xml:space": "preserve"
  }, "\n", HTML.G("\n	", HTML.G("\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M802.137,644.691c0,0-19.02,52.37,29.442,76.6\n			c0,0-10.943-42.469-22.146-61.489c0,0,20.583,29.441,27.618,61.489C837.05,721.291,858.415,667.098,802.137,644.691z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M763.658,623.358c0,0-20.99,45.534,20.647,70.903\n			c0,0-6.622-38.906-15.24-56.804c0,0,16.246,27.948,20.147,57.215C789.212,694.672,812.442,647.679,763.658,623.358z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M740.595,578.121c0,0-34.097,36.76-2.401,73.81\n			c0,0,5.792-39.039,3.16-58.728c0,0,6.76,31.612,1.376,60.643C742.73,653.846,779.41,616.394,740.595,578.121z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M728.219,535.571c0,0-35.614,21.634-16.4,59.191\n			c0,0,12.446-30.228,14.092-46.798c0,0-0.527,27.208-10.681,49.43C715.23,597.394,753.133,575.816,728.219,535.571z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M732.044,492.24c0,0-35.953,8.773-29.75,45.721\n			c0,0,18.64-22.259,24.474-35.847c0,0-7.739,22.896-22.292,38.99C704.476,541.105,742.352,532.993,732.044,492.24z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M749.303,454.471c0,0-32.917-1.675-37.039,31.438\n			c0,0,21.579-14.246,30.02-24.356c0,0-12.438,17.567-28.958,27.594C713.326,489.147,747.716,491.875,749.303,454.471z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M766.094,430.423c0,0-27.249-9.606-39.48,15.9\n			c0,0,21.924-6.001,31.701-11.985c0,0-15.113,10.958-31.665,14.847C726.651,449.184,754.86,460.005,766.094,430.423z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M788.762,404.238c0,0-27.249-9.606-39.48,15.9\n			c0,0,21.924-6.001,31.701-11.985c0,0-15.113,10.958-31.665,14.847C749.318,422.999,777.528,433.82,788.762,404.238z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M806.78,372.731c0,0-27.877-7.597-38.217,18.732\n			c0,0,21.429-7.581,30.745-14.261c0,0-14.275,12.029-30.5,17.113C768.807,394.315,797.73,403.053,806.78,372.731z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M766.766,359.858c0,0,12.374,24.745-10.979,39.259\n			c0,0,3.354-21.478,8.057-31.435c0,0-8.925,15.585-10.836,31.728C753.009,399.41,739.35,373.893,766.766,359.858z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M743.344,377.882c0,0,15.01,29.078-13.693,46.321\n			c0,0,4.242-25.325,10.066-37.085c0,0-11.032,18.417-13.472,37.447C726.245,424.565,709.665,394.586,743.344,377.882z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M709.919,398.477c0,0,25.823,29.366-2.462,57.67\n			c0,0-2.415-30.591,0.932-45.911c0,0-7.458,24.547-4.776,47.317C703.613,457.554,675.709,427.598,709.919,398.477z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M679.868,434.596c0,0,32.244,21.854,13.349,55.836\n			c0,0-10.578-28.714-11.594-44.201c0,0-0.342,25.324,8.363,46.482C689.986,492.714,655.625,470.801,679.868,434.596z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M657.638,472.122c0,0,44.434,17.942,29.042,64.498\n			c0,0-19.479-32.165-24.246-50.78c0,0,5.344,30.981,20.811,54.436C683.245,540.276,636.207,522.833,657.638,472.122z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M648.239,527.967c0,0,45.963,8.675,40.907,55.539\n			c0,0-25.153-26.766-33.521-43.469c0,0,11.463,28.281,31.006,47.564C686.632,587.601,638.295,579.883,648.239,527.967z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M648.128,582.021c0,0,46.727-2.108,52.565,44.665\n			c0,0-30.626-20.277-42.604-34.614c0,0,17.649,24.895,41.096,39.176C699.184,631.249,650.366,634.834,648.128,582.021z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M662.574,634.619c0,0,48.707-9.903,62.532,38.239\n			c0,0-35.487-16.247-50.422-29.326c0,0,22.625,23.23,49.59,34.363C724.274,677.896,673.616,689.693,662.574,634.619z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M692.234,692.638c0,0,40.9-24.684,68.953,14.438\n			c0,0-37.371-3.256-55.113-10.277c0,0,27.98,13.729,55.985,15.107C762.059,711.905,720.003,738.934,692.234,692.638z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M725.686,745.085c0,0,32.552-41.927,76.839-14.318\n			c0,0-39.855,12.355-60.921,12.714c0,0,34.263,2.105,63.714-8.222C805.317,735.259,772.491,780.027,725.686,745.085z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M766.094,395.418c0,0-101.259,79.596-66.92,201.944\n			c0,0,29.398,132.788,167.357,146.467v-10.161c0,0-84.958-7.521-131.335-77.299c0,0-29.695-41.379-33.612-72.123\n			C701.585,584.244,666.479,485.896,766.094,395.418z"
  }), "\n	"), "\n	", HTML.G("\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1120.863,645.081c0,0,19.02,52.37-29.442,76.6\n			c0,0,10.943-42.469,22.146-61.489c0,0-20.583,29.441-27.618,61.489C1085.95,721.682,1064.585,667.489,1120.863,645.081z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1159.342,623.749c0,0,20.99,45.534-20.647,70.903\n			c0,0,6.622-38.906,15.24-56.804c0,0-16.246,27.948-20.147,57.215C1133.788,695.063,1110.558,648.07,1159.342,623.749z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1182.405,578.512c0,0,34.097,36.76,2.401,73.81\n			c0,0-5.792-39.039-3.16-58.728c0,0-6.76,31.612-1.376,60.643C1180.27,654.237,1143.59,616.785,1182.405,578.512z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1194.781,535.962c0,0,35.614,21.634,16.4,59.191\n			c0,0-12.446-30.228-14.092-46.798c0,0,0.527,27.208,10.681,49.43C1207.77,597.785,1169.867,576.207,1194.781,535.962z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1190.956,492.631c0,0,35.953,8.773,29.75,45.721\n			c0,0-18.64-22.259-24.474-35.847c0,0,7.739,22.896,22.291,38.99C1218.524,541.495,1180.648,533.384,1190.956,492.631z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1173.697,454.862c0,0,32.917-1.675,37.039,31.438\n			c0,0-21.579-14.246-30.02-24.356c0,0,12.438,17.567,28.958,27.594C1209.674,489.537,1175.284,492.266,1173.697,454.862z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1156.906,430.813c0,0,27.249-9.606,39.48,15.9\n			c0,0-21.924-6.001-31.701-11.985c0,0,15.113,10.958,31.665,14.847C1196.349,449.575,1168.14,460.396,1156.906,430.813z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1134.238,404.629c0,0,27.249-9.606,39.48,15.9\n			c0,0-21.924-6.001-31.701-11.985c0,0,15.113,10.958,31.665,14.847C1173.682,423.39,1145.472,434.211,1134.238,404.629z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1116.22,373.122c0,0,27.877-7.597,38.217,18.732\n			c0,0-21.429-7.581-30.745-14.261c0,0,14.275,12.029,30.5,17.113C1154.193,394.706,1125.27,403.444,1116.22,373.122z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1156.234,360.248c0,0-12.374,24.745,10.978,39.259\n			c0,0-3.354-21.478-8.057-31.435c0,0,8.925,15.585,10.836,31.728C1169.991,399.801,1183.65,374.284,1156.234,360.248z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1179.656,378.273c0,0-15.01,29.078,13.693,46.321\n			c0,0-4.242-25.325-10.066-37.085c0,0,11.032,18.417,13.472,37.447C1196.755,424.956,1213.335,394.977,1179.656,378.273z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1213.081,398.868c0,0-25.823,29.366,2.462,57.67\n			c0,0,2.415-30.591-0.932-45.911c0,0,7.458,24.547,4.776,47.317C1219.387,457.945,1247.291,427.989,1213.081,398.868z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1243.132,434.987c0,0-32.245,21.854-13.349,55.836\n			c0,0,10.578-28.714,11.594-44.201c0,0,0.342,25.324-8.363,46.482C1233.014,493.105,1267.375,471.192,1243.132,434.987z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1265.362,472.513c0,0-44.434,17.942-29.042,64.498\n			c0,0,19.479-32.165,24.246-50.78c0,0-5.344,30.981-20.811,54.435C1239.755,540.667,1286.793,523.224,1265.362,472.513z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1274.761,528.358c0,0-45.963,8.675-40.907,55.539\n			c0,0,25.153-26.766,33.521-43.469c0,0-11.463,28.282-31.006,47.564C1236.368,587.991,1284.705,580.274,1274.761,528.358z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1274.872,582.412c0,0-46.727-2.108-52.564,44.665\n			c0,0,30.626-20.277,42.604-34.614c0,0-17.649,24.895-41.096,39.176C1223.816,631.64,1272.634,635.225,1274.872,582.412z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1260.426,635.01c0,0-48.707-9.903-62.532,38.239\n			c0,0,35.487-16.247,50.422-29.326c0,0-22.625,23.23-49.59,34.363C1198.726,678.286,1249.385,690.084,1260.426,635.01z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1230.766,693.029c0,0-40.899-24.684-68.953,14.438\n			c0,0,37.371-3.256,55.113-10.277c0,0-27.98,13.729-55.985,15.107C1160.941,712.296,1202.997,739.325,1230.766,693.029z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1197.314,745.476c0,0-32.552-41.927-76.839-14.318\n			c0,0,39.855,12.355,60.921,12.714c0,0-34.263,2.105-63.714-8.222C1117.683,735.65,1150.509,780.418,1197.314,745.476z"
  }), "\n		", HTML.PATH({
    fill: "none",
    stroke: "#ffffff",
    "stroke-miterlimit": "20",
    d: "M1156.906,395.809c0,0,101.259,79.596,66.92,201.944\n			c0,0-29.398,132.788-167.357,146.467v-10.161c0,0,84.958-7.521,131.335-77.3c0,0,29.695-41.379,33.612-72.123\n			C1221.415,584.635,1256.521,486.287,1156.906,395.809z"
  }), "\n	"), "\n"), "\n"), "\n			"), "\n		"), "\n\n		", HTML.SECTION({
    id: "passionDesc",
    "class": "desc"
  }, "\n			", HTML.DIV("\n			  ", HTML.Raw('<h2 style="margin-bottom: 0; color: #f05a60;" data-bottom-bottom="opacity: 0;" data-center-center="opacity: 1;">Talk to me</h2>'), "\n			  ", HTML.Raw('<p style="padding: 15px 0 25px; font-size: 1.2em;">Interested in my services?</p>'), "\n			  ", HTML.Raw('<hr style="max-width: 335px; border-color: #f05a60;" data-bottom-bottom="transform: scale(0,1);" data-center-center="transform: scale(1,1);">'), "\n			  ", HTML.SVG({
    "class": "left-wing",
    version: "1.2",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "170.5px",
    height: "173.5px",
    viewBox: "0 0 170.5 173.5",
    overflow: "scroll",
    "xml:space": "preserve"
  }, "\n				", HTML.PATH({
    fill: "none",
    stroke: "#f05a60",
    "stroke-width": "2",
    "stroke-miterlimit": "10",
    d: "M55.358,13.808\n					c-6.995,0.066-12.666,2.895-17.179,7.535c-5.325,5.473-8.876,13.597-9.961,22.476c-2.169,17.76,5.244,38.007,26.012,46.459\n					l-2.228,5.486C31.683,87.495,22.448,68.909,21.97,51.088c-5.501,3.443-8.748,8.571-10.248,14.714\n					c-1.815,7.43-0.864,16.331,2.505,24.665c6.738,16.67,22.614,30.689,43.864,27.754l0.812,5.871c-15.461,2.136-28.575-3.668-37.993-13\n					c-2.583,5.138-2.378,10.223-0.208,15.308c2.684,6.291,8.713,12.437,16.754,16.981c14.919,8.431,36.375,11.265,54.876,1.614\n					c-1.721-6.651-0.84-14.282,3.594-21.962c7.196-12.462,19.258-15.789,28.002-12.258c4.372,1.766,7.947,5.245,9.466,9.872\n					c1.52,4.626,0.899,10.235-2.337,15.941c-3.739,6.594-10.819,8.833-16.239,7.04c-2.71-0.897-5.139-2.99-5.981-5.981\n					c-0.841-2.991-0.045-6.453,2.238-9.922l4.941,3.258c-1.66,2.521-1.743,4.144-1.486,5.059c0.258,0.915,0.9,1.551,2.139,1.961\n					c2.478,0.82,6.807-0.048,9.239-4.337c2.594-4.575,2.795-8.296,1.851-11.169c-0.943-2.873-3.12-5.055-6.049-6.238\n					c-5.86-2.366-14.62-0.72-20.655,9.734c-4.444,7.696-4.554,14.378-2.129,20.1l0.892,1.386c-0.062,0.041-0.126,0.079-0.188,0.119\n					c0.081,0.157,0.163,0.319,0.247,0.475c0.616,1.13,1.336,2.22,2.159,3.257c0.032,0.041,0.067,0.079,0.099,0.119\n					c0.125,0.155,0.257,0.312,0.387,0.465c3.646,4.327,8.985,7.724,14.991,9.595c7.687,2.394,16.348,2.264,23.714-1.188\n					c7.366-3.453,13.604-10.13,16.695-21.665c1.053-3.931,1.61-7.533,1.743-10.872c0.003-0.132,0.007-0.264,0.01-0.396\n					c0.028-1.616-0.028-3.246-0.178-4.881c-0.012-0.129-0.027-0.258-0.04-0.387c-0.01-0.086-0.019-0.172-0.029-0.258\n					c-1.044-8.172-5.014-14.626-10.882-20.417c-9.39-9.265-23.985-16.362-38.894-23.487s-30.136-14.29-40.834-24.606\n					C58.776,43.674,52.995,30.8,56.041,13.808C55.813,13.804,55.584,13.806,55.358,13.808L55.358,13.808z"
  }), "\n				"), "\n				", HTML.SVG({
    "class": "right-wing",
    version: "1.2",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "170.5px",
    height: "173.5px",
    viewBox: "0 0 170.5 173.5",
    overflow: "scroll",
    "xml:space": "preserve"
  }, "\n				", HTML.PATH({
    fill: "none",
    stroke: "#f05a60",
    "stroke-width": "2",
    "stroke-miterlimit": "10",
    d: "M115.137,13.808c-0.226-0.002-0.455-0.003-0.683,0\n					c3.046,16.992-2.734,29.867-12.773,39.548c-10.698,10.315-25.926,17.48-40.834,24.606s-29.504,14.222-38.894,23.487\n					c-5.869,5.791-9.838,12.245-10.882,20.417c-0.01,0.085-0.019,0.172-0.029,0.258c-0.013,0.129-0.028,0.258-0.04,0.387\n					c-0.15,1.635-0.206,3.265-0.178,4.881c0.002,0.132,0.006,0.264,0.01,0.396c0.133,3.339,0.69,6.941,1.743,10.872\n					c3.091,11.534,9.329,18.212,16.695,21.665c7.366,3.452,16.027,3.583,23.714,1.188c6.006-1.871,11.345-5.268,14.991-9.595\n					c0.13-0.153,0.261-0.31,0.387-0.465c0.032-0.04,0.067-0.078,0.099-0.119c0.823-1.037,1.543-2.128,2.159-3.257\n					c0.085-0.156,0.166-0.318,0.247-0.475c-0.062-0.04-0.126-0.078-0.188-0.119l0.892-1.386c2.425-5.722,2.314-12.404-2.129-20.1\n					c-6.035-10.454-14.795-12.1-20.655-9.734c-2.93,1.183-5.106,3.365-6.049,6.238c-0.943,2.873-0.743,6.594,1.851,11.169\n					c2.432,4.289,6.76,5.157,9.239,4.337c1.239-0.41,1.881-1.046,2.139-1.961c0.257-0.915,0.174-2.539-1.486-5.059l4.941-3.258\n					c2.283,3.469,3.079,6.931,2.238,9.922c-0.841,2.991-3.271,5.084-5.981,5.981c-5.42,1.792-12.5-0.447-16.239-7.04\n					c-3.235-5.706-3.856-11.315-2.337-15.941c1.519-4.627,5.094-8.107,9.466-9.872c8.744-3.53,20.806-0.204,28.002,12.258\n					c4.434,7.68,5.314,15.311,3.594,21.962c18.501,9.651,39.957,6.817,54.876-1.614c8.041-4.544,14.069-10.691,16.754-16.981\n					c2.169-5.085,2.375-10.17-0.208-15.308c-9.418,9.333-22.532,15.136-37.993,13l0.812-5.871c21.25,2.935,37.126-11.085,43.864-27.754\n					c3.369-8.334,4.32-17.236,2.505-24.665c-1.5-6.143-4.747-11.271-10.248-14.714c-0.477,17.821-9.713,36.408-30.032,44.676\n					l-2.228-5.486c20.768-8.451,28.181-28.699,26.012-46.459c-1.085-8.879-4.636-17.003-9.961-22.476\n					C127.803,16.704,122.132,13.874,115.137,13.808L115.137,13.808z"
  }), "\n				"), "\n			  ", HTML.Raw('<p style="padding: 0;">\n				  <br>Send me an email\n				  <br><strong class="myEmail">anraiki@gmail.com</strong>\n			  </p>'), "\n			"), "\n		"), "\n	"), "\n  ", HTML.SCRIPT({
    type: "text/javascript"
  }, "  \n	if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){\n		document.getElementById(\"skrollr-body\").className += \"mobile\";\n		var canvas = document.getElementById('theCanvas');\n		var context = canvas.getContext('2d');\n		var imageObj = new Image();\n\n		context.canvas.width  = document.documentElement.offsetWidth;\n		context.canvas.height = window.innerHeight;\n		\n		imageObj.onload = function() {\n			context.drawImage(imageObj, -430, 0, 1280, 720);\n		};\n		imageObj.src = 'top.png';\n	} else {\n		skrollr.init({\n			forceHeight: false\n		});\n	}\n  ") ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("desktop");
Template["desktop"] = new Template("Template.desktop", (function() {
  var view = this;
  return HTML.Raw('<div data-top-top="transform: translate3d(0px,0px,0px);" data-top-bottom="transform: translate3d(0px,-50px,0px);" class="bg1"></div>\n	<div data-top-top="transform: translate3d(0px,-30px,0px);" data-top-bottom="transform: translate3d(0px,50px,0px);" class="bg1-2"></div> <!-- Grass 2 -->\n	<div data-top-top="transform: translate3d(0px,0px,0px);" data-top-bottom="transform: translate3d(0px,130px,0px);" class="bg2"></div> <!-- Supporting Mountains -->\n	<div data-top-top="transform: translate3d(0px,-30px,0px);" data-top-bottom="transform: translate3d(0px,60px,0px);" class="bg3"></div> <!-- Light -->\n	<div data-top-top="transform: translate3d(0px,-30px,0px);" data-top-bottom="transform: translate3d(0px,110px,0px);" class="bg4"></div> <!-- Tree -->\n	<div data-top-top="transform: translate3d(0px,0px,0px);" data-top-bottom="transform: translate3d(0px,150px,0px);" class="bg5"></div> <!-- Water -->\n	<div data-top-top="transform: translate3d(0px,0px,0px);" data-top-bottom="transform: translate3d(0px,170px,0px);" class="bg6"></div> <!-- Mountains -->\n	<div data-top-top="transform: translate3d(0px,-40px,0px);" data-top-bottom="transform: translate3d(0px,250px,0px);" class="bg7"></div> <!-- Sky -->\n	<div class="bg-color"></div><!-- Sky Backup -->');
}));

Template.__checkName("mobile");
Template["mobile"] = new Template("Template.mobile", (function() {
  var view = this;
  return HTML.Raw('<div id="canvasTop"></div>');
}));

Template.__checkName("navigation");
Template["navigation"] = new Template("Template.navigation", (function() {
  var view = this;
  return HTML.Raw('<nav data-bottom-bottom="position: relative;" data-top-top="position: relative; top: 0px;">\n    <a href="#aboutAnri">About</a>\n    <a href="#">Portfolio</a>\n    <a href="#">Contact</a>\n  </nav>');
}));

Template.__checkName("webdevelop");
Template["webdevelop"] = new Template("Template.webdevelop", (function() {
  var view = this;
  return HTML.Raw('<div class="skillDesc">\n		<h3 style="color: #9bce53;">Web Developing</h3>\n		<p><br>With my creativity, web developing became another asset of tools that I use to paint on a canvas, a desktop, a tablet, or a mobile phone.</p>\n	 </div>');
}));

Meteor.startup(function() { $('body').attr({"id":"skrollr-body"}); });

}).call(this);
