import "aframe";
import "aframe-particle-system-component";
import "aframe-environment-component"
import "babel-polyfill";

import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
                 constructor(props) {
                   super(props);
                 }

                 render() {
                    var MAP_SIZE = 10,
                    PLATFORM_SIZE = 5,
                    NUM_PLATFORMS = 50; 
                   return <Scene>
                      <a-entity environment="preset: forest; skyType: atmosphere">
                      
                      </a-entity>
                     </Scene>
                 }
               }