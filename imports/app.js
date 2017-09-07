import "aframe";
import "aframe-particle-system-component";
import "babel-polyfill";

import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = { color: "red" };
                 }

                 changeColor() {
                   const colors = ["red", "orange", "yellow", "green", "blue"];
                   this.setState({
                     color:
                       colors[
                         Math.floor(
                           Math.random() * colors.length
                         )
                       ]
                   });
                 }

                 render() {
                   return <Scene>
                       <a-assets>
                         <img crossOrigin="anonymous" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
                         <img crossOrigin="anonymous" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
                         <a-asset-item id="octo-obj" src="/octo/model.obj" />
                         <a-asset-item id="octo-mtl" src="/octo/materials.mtl" />
                       </a-assets>

                       <Entity crossOrigin="anonymous" primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100" />
                       <Entity crossOrigin="anonymous" primitive="a-light" type="ambient" color="#445451" />
                       <Entity crossOrigin="anonymous" primitive="a-light" type="point" intensity="2" position="2 4 4" />
                       <Entity crossOrigin="anonymous" primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048" />
                       <Entity crossOrigin="anonymous" particle-system={{ preset: "snow", particleCount: 2000 }} />
                       <Entity scale="0.1 0.1 0.1" position={{ x: 0, y: 2, z: -1 }} obj-model="obj: #octo-obj; mtl: #octo-mtl" >
                            <a-animation attribute="rotation"
                                dur="10000"
                                to="0 360 0"
                                repeat="indefinite"></a-animation>
                       </Entity>

                       <Entity id="box" geometry={{ primitive: "box" }} material={{ color: this.state.color, opacity: 0.6 }} animation__rotate={{ property: "rotation", dur: 2000, loop: true, to: "360 360 360" }} animation__scale={{ property: "scale", dir: "alternate", dur: 100, loop: true, to: "1.1 1.1 1.1" }} position={{ x: 0, y: 1, z: -3 }} events={{ click: this.changeColor.bind(this) }}>
                         <Entity animation__scale={{ property: "scale", dir: "alternate", dur: 100, loop: true, to: "2 2 2" }} geometry={{ primitive: "box", depth: 0.2, height: 0.2, width: 0.2 }} material={{ color: "#24CAFF" }} />
                       </Entity>

                       <Entity primitive="a-camera">
                         <Entity primitive="a-cursor" animation__click={{ property: "scale", startEvents: "click", from: "0.1 0.1 0.1", to: "1 1 1", dur: 150 }} />
                       </Entity>
                     </Scene>;
                 }
               }