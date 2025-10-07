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

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Scene / Camera / Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            45,
            1,     // placeholder, aggiornata subito
            0.01,
            100
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setClearColor(0x000000, 1);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // Geometry
        const geo = new THREE.IcosahedronGeometry(0.8, 0);
        const edges = new THREE.EdgesGeometry(geo);
        const positions = Array.from(edges.attributes.position.array);

        const lineGeo = new LineGeometry();
        lineGeo.setPositions(positions);

        const lineMat = new LineMaterial({
            color: 0xC4453C,
            linewidth: 0.02 * window.devicePixelRatio * 100, 
            transparent: true,
            opacity: 1
        });

        const wire = new Line2(lineGeo, lineMat);
        wire.computeLineDistances();
        scene.add(wire);

        const glow = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.85, 0),
            new THREE.MeshBasicMaterial({
                color: 0xC4453C,
                transparent: true,
                opacity: 0.06,
                side: THREE.BackSide
            })
        );
        scene.add(glow);

        // Fit camera esatto all'oggetto
        const fitCamera = (padding = 1.0) => {
            const sphere = new THREE.Sphere();
            new THREE.Box3().setFromObject(glow).getBoundingSphere(sphere);

            // Aggiorna aspect
            const w = Math.floor(container.clientWidth);
            const h = Math.floor(container.clientHeight);
            camera.aspect = w / h;

            // Calcola distanza che soddisfa sia asse verticale che orizzontale
            const fov = THREE.MathUtils.degToRad(camera.fov);
            const halfFovV = fov / 2;
            const halfFovH = Math.atan(Math.tan(halfFovV) * camera.aspect);

            // Raggi proiettati richiesti
            const distV = sphere.radius / Math.sin(halfFovV);
            const distH = sphere.radius / Math.sin(halfFovH);
            const distance = Math.max(distV, distH) * padding;

            camera.position.set(sphere.center.x, sphere.center.y, sphere.center.z + distance);
            camera.lookAt(sphere.center);
            // Near/Far compatti per precisione
            camera.near = Math.max(0.01, distance - sphere.radius * 2);
            camera.far = distance + sphere.radius * 2;
            camera.updateProjectionMatrix();

            renderer.setSize(w, h, false);
            lineMat.resolution.set(w, h);
        };

        const handleResize = () => {
            if (!container) return;
            fitCamera(1.0);
        };

        // ResizeObserver per avere dimensione reale immediatamente
        const ro = new ResizeObserver(() => handleResize());
        ro.observe(container);

        // Prima misura (requestAnimationFrame assicura layout completo)
        requestAnimationFrame(() => handleResize());

        // Animazione
        const animate = () => {
            wire.rotation.x += 0.003;
            wire.rotation.y += 0.005;
            glow.rotation.x += 0.003;
            glow.rotation.y += 0.005;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        window.addEventListener("resize", handleResize);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            lineGeo.dispose();
            lineMat.dispose();
            geo.dispose();
            edges.dispose();
            glow.geometry.dispose();
            glow.material.dispose();
            scene.clear();
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
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
