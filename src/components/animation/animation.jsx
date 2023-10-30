import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three';
import PropTypes from 'prop-types';
import './index.scss';

import animation from '../../assets/animations/anim_gif.gif';


/**
 * Primary UI component for user interaction
 */
const Animation = ({...props }) => {


    // useEffect(() => {

    //     // Canvas
    //     const canvas = document.querySelector('canvas.webgl');
        
    //     // Scene
    //     const scene = new THREE.Scene()

    //     // Object
    //     const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    //     const material = new THREE.MeshBasicMaterial({ color: 'rgb(230, 169, 52)' })
    //     const mesh = new THREE.Mesh(geometry, material)
    //     scene.add(mesh)

    //     const plane = new THREE.Mesh(
    //         new THREE.PlaneGeometry(5, 5),
    //         new THREE.MeshBasicMaterial({ color: 0xffffff })
    //     )
    //     plane.rotation.x = - Math.PI * 0.5
    //     plane.position.y = - 0.5
    //     plane.receiveShadow = true;
    //     scene.add(plane);

    //     // Lights
    //     const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    //     console.log(directionalLight.position);
    //     scene.add( directionalLight );

    //     // Sizes
    //     const sizes = {
    //         width: 400,
    //         height: 400
    //     }

    //     // Camera
    //     const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    //     camera.position.z = 3
    //     scene.add(camera)

    //     // console.log(scene);

    //     // Renderer
    //     const renderer = new THREE.WebGLRenderer({
    //         canvas: canvas
    //     })
    //     renderer.setSize(sizes.width, sizes.height)

    //     // Time
    //     let time = Date.now();

    //     // Clock
    //     const clock = new THREE.Clock();


    //     // Animation
    //     const tick = () => { // requestAnimationframe call a function on the next frame

    //         // Clock 
    //         // const elapsedTime = clock.getElapsedTime()

    //         // // Time - Usefull to have the same frame rate on different screens
    //         // const currentTime = Date.now()
    //         // // const deltaTime = currentTime - time
    //         // const deltaTime = currentTime - time
    //         // time = currentTime
    //         // // Update objects
    //         // // mesh.rotation.y += 0.001 * deltaTime

    //         // // mesh.positiion.y = elapsedTime * Math.PI * 2
    //         // // mesh.position.y = Math.sin(elapsedTime)
    //         // // mesh.position.x = Math.cos(elapsedTime)

    //         // camera.position.y = Math.sin(elapsedTime)
    //         // camera.position.x = Math.cos(elapsedTime)
    //         // camera.lookAt(mesh.position);

    //         // Render
    //         renderer.render(scene, camera)

    //         window.requestAnimationFrame(tick);
    //     }

    //     tick();
    // }, [])

  return (
    <div id="animation">
    </div>
    // <canvas className="webgl"></canvas>
  );
};

Animation.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Animation.defaultProps = {
//   backgroundColor: null,

// };

export default Animation;
