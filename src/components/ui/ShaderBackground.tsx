"use client";

import { useEffect, useRef } from "react";

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;

    const init = async () => {
      const THREE = await import("three");
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geometry = new THREE.PlaneGeometry(2, 2);

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        precision highp float;
        uniform float uTime;
        varying vec2 vUv;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
          float v = 0.0; float amp = 0.5; float freq = 1.0;
          for (int i = 0; i < 5; i++) {
            v += amp * noise(p * freq);
            amp *= 0.5; freq *= 2.0;
          }
          return v;
        }

        void main() {
          vec2 uv = vUv;
          float t = uTime * 0.12;
          vec2 q = vec2(fbm(uv + t * 0.3), fbm(uv + vec2(1.7, 9.2)));
          vec2 r = vec2(fbm(uv + 4.0 * q + vec2(1.7 + t * 0.15, 9.2 + t * 0.08)),
                       fbm(uv + 4.0 * q + vec2(8.3 + t * 0.12, 2.8 + t * 0.1)));
          float f = fbm(uv + 4.0 * r);

          vec3 col1 = vec3(0.02, 0.06, 0.12);
          vec3 col2 = vec3(0.04, 0.12, 0.22);
          vec3 col3 = vec3(0.07, 0.18, 0.30);
          vec3 col4 = vec3(0.10, 0.22, 0.35);

          vec3 color = mix(col1, col2, f);
          color = mix(color, col3, f * f * f);
          color = mix(color, col4, (1.0 - f) * f * f);

          float glowDist = length(uv - vec2(0.15, 0.85));
          float glow = exp(-glowDist * 4.0) * 0.06;
          color += vec3(0.1, 0.4, 0.6) * glow;

          vec2 vigUv = vUv * 2.0 - 1.0;
          float vig = 1.0 - dot(vigUv * 0.5, vigUv * 0.5);
          color *= vig * 0.8 + 0.5;

          gl_FragColor = vec4(color, 1.0);
        }
      `;

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
        },
      });

      scene.add(new THREE.Mesh(geometry, material));

      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      const animate = (t: number) => {
        animId = requestAnimationFrame(animate);
        material.uniforms.uTime.value = t * 0.001;
        renderer.render(scene, camera);
      };
      animate(0);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    };

    const cleanup = init();
    return () => {
      cleanup.then((fn) => fn?.());
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
