import "aframe";
import "aframe-particle-system-component";
import "aframe-environment-component"
import "babel-polyfill";

import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

const scenes = ["forest", "egypt", "osiris", "default", "contact", "egypt", "checkerboard", "forest", "goaland", "yavapai", "goldmine", "threetowers", "poison", "arches", "tron", "japan", "dream", "starry", "osiris"]

export default class App extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     selected: 1
                   }
                   this.handleClick = this.handleClick.bind(this)
                   this.handleCollide = this.handleCollide.bind(this)
                 }

                 handleClick() {
                   console.log("FUCKOFF");
                    if (this.state.selected < scenes.length -1) {
                      this.state.selected = this.state.selected + 1
                    } else {
                      this.state.selected = 0
                    }
                    this.setState(this.state)
                 }

                 handleCollide() {
                   console.log("MATE");
                 }

                 render() {
                   

                   return <Scene>
                     <a-entity environment={"preset: " + scenes[this.state.selected] + "; skyType: atmosphere; ground: spikes;"}></a-entity>
                      <Entity events={{
                       click: this.handleClick,
                        collided: [this.handleCollide]
                      }} geometry={{ primitive: 'box', width: 5 }} position="0 0 -5" />
                      <Entity primitive="a-camera">
                        <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
                      </Entity>
                     </Scene>
                 }
               }