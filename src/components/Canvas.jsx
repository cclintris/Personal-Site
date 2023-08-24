import React from "react"
import ParallaxMousemove from "react-parallax-mousemove"

import "../style/canvas.css"
import canvas_1 from "../assets/canvas/1.png"
import canvas_2 from "../assets/canvas/2.png"
import canvas_3 from "../assets/canvas/3.png"
import canvas_4 from "../assets/canvas/4.png"
import canvas_5 from "../assets/canvas/5.png"
import canvas_6 from "../assets/canvas/6.png"
import canvas_7 from "../assets/canvas/7.png"

const style = {
    infoLayerStyle: {
      position: 'relative',
      marginTop: '-60px',
    },
  }

function Canvas() {

    return (
        <section id="canvas">
            <h5>Not Yet Done</h5>
            <h2>Know More About Me</h2>

            <div className="container canvas__container">
                <ParallaxMousemove>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                    xFactor: 0.3,
                    yFactor: -0.3,
                    springSettings: {
                        stiffness: 50,
                        damping: 100
                    }
                    }}>
                        <div className="grid-container">
                            <div class="top">
                                 <img className="background-img top-img" src={canvas_2} alt="Where I'm from"></img> 
                            </div>
                            <div class="tpright" > 
                                <img className="background-img top-right-img" src={canvas_1} alt="Where I study"></img> 
                            </div>
                            <div class="left" > 
                                <img className="background-img left-img" src={canvas_3} alt="The time I like"></img> 
                            </div>
                            <div class="main"> 
                                <img className="background-img main-img" src={canvas_4} alt="The place I visit"></img> 
                            </div>
                            <div class="right">
                                <img className="background-img right-img" src={canvas_5} alt="The place I visit"></img> 
                            </div>
                            <div class="btleft"> 
                                <img className="background-img btleft-img" src={canvas_6} alt="People I like"></img>                            
                            </div>  
                            <div class="bottom">
                                <img className="background-img bt-img" src={canvas_7} alt="People I like"></img>   
                            </div>
                        </div>
                    </ParallaxMousemove.Layer>

                </ParallaxMousemove>
            </div>
        </section>
    )
}

export default Canvas;
