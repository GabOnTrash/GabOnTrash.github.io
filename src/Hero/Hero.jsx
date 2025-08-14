import './hero.css'

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";

import "./hero.css"; 

export default function StartSection() 
{
    const containerRef = useRef(null);

    useEffect(() => 
    {
        const container = containerRef.current;

        // Scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(0, 0, 3);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setClearColor(0x000000, 1);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Wireframe
        const geometry = new THREE.IcosahedronGeometry(0.8, 0);
        const edges = new THREE.EdgesGeometry(geometry);
        const pos = Array.from(edges.attributes.position.array);

        const lineGeo = new LineGeometry();
        lineGeo.setPositions(pos);

        const lineMat = new LineMaterial(
        {
            color: 0x800ecd,
            linewidth: 4,
            transparent: true,
            opacity: 1,
        });
        lineMat.resolution.set(container.clientWidth, container.clientHeight);

        const wire = new Line2(lineGeo, lineMat);
        wire.computeLineDistances();
        scene.add(wire);

        const glow = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.85, 0),
            new THREE.MeshBasicMaterial(
            {
                color: 0x800ecd,
                transparent: true,
                opacity: 0.06,
                side: THREE.BackSide,
            })
        );
        scene.add(glow);

        const animate = () => 
        {
            requestAnimationFrame(animate);
            wire.rotation.x += 0.003;
            wire.rotation.y += 0.005;
            glow.rotation.x += 0.003;
            glow.rotation.y += 0.005;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => 
        {
            const w = container.clientWidth;
            const h = container.clientHeight;
            
            camera.aspect = w / h;
            camera.updateProjectionMatrix();

            const baseWidth = 800;
            const zoomFactor = Math.max(0.5, w / baseWidth);
            camera.position.z = 3 / zoomFactor;

            renderer.setSize(w, h);
            lineMat.resolution.set(w, h);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => 
        {
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            scene.clear();
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div id="hero">
            
            <div id="sector">
                <div id="description">
                    <p>
                        Web Personal PortFolio by Gabriele Armenise, 
                        made using pure HTML, CSS and React with also third party npm
                        packages like Three.js and FontAwesome. 
                    </p>
                </div>

                <div id="canvas-container" ref={containerRef}></div>
            </div>

            <div id="overlay">
                <span id="link">
                    <a href="#about">
                        Explore my PortFolio
                    </a>
                </span>
            </div>

        </div>
    );
}
