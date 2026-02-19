"use client";

import { useEffect, useRef } from "react";

export function GlobalAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    let renderer: any;
    let scene: any;
    let camera: any;
    let material: any;
    let mesh: any;
    let time = 0;

    const init = async () => {
      const THREE = await import("three");
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Create renderer with optimal settings
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const geometry = new THREE.PlaneGeometry(2, 2);

      // Enhanced cinematic shader with depth, particles, and dynamic lighting
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
        uniform vec2 uResolution;
        varying vec2 vUv;

        // Hash function for noise
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        // Smooth noise
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

        // Fractal Brownian Motion
        float fbm(vec2 p) {
          float v = 0.0;
          float amp = 0.5;
          float freq = 1.0;
          for (int i = 0; i < 6; i++) {
            v += amp * noise(p * freq);
            amp *= 0.5;
            freq *= 2.0;
          }
          return v;
        }

        // Rotating gradient mesh
        vec2 rotate(vec2 v, float angle) {
          float s = sin(angle);
          float c = cos(angle);
          return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
        }

        void main() {
          vec2 uv = vUv;
          float t = uTime * 0.08; // Slow, elegant animation
          
          // Rotating UV for camera drift effect
          vec2 rotatedUv = rotate(uv - 0.5, t * 0.1) + 0.5;
          
          // Multiple layers of noise for depth
          vec2 q1 = vec2(
            fbm(rotatedUv + vec2(t * 0.2, t * 0.15)),
            fbm(rotatedUv + vec2(1.7, 9.2) + t * 0.1)
          );
          
          vec2 q2 = vec2(
            fbm(rotatedUv + 4.0 * q1 + vec2(1.7 + t * 0.12, 9.2 + t * 0.08)),
            fbm(rotatedUv + 4.0 * q1 + vec2(8.3 + t * 0.1, 2.8 + t * 0.07))
          );
          
          float f = fbm(rotatedUv + 4.0 * q2);
          
          // Deep, rich color palette - cohesive dark theme
          vec3 col1 = vec3(0.02, 0.05, 0.10); // Deepest dark
          vec3 col2 = vec3(0.04, 0.10, 0.18); // Dark blue-gray
          vec3 col3 = vec3(0.06, 0.14, 0.24); // Medium dark
          vec3 col4 = vec3(0.08, 0.18, 0.30); // Lighter accent
          
          // Smooth color mixing
          vec3 color = mix(col1, col2, f);
          color = mix(color, col3, f * f);
          color = mix(color, col4, smoothstep(0.3, 0.7, f));
          
          // Dynamic light glows - multiple sources
          vec2 glow1Pos = vec2(0.2 + sin(t * 0.3) * 0.1, 0.8 + cos(t * 0.2) * 0.1);
          vec2 glow2Pos = vec2(0.8 + cos(t * 0.25) * 0.15, 0.2 + sin(t * 0.18) * 0.1);
          vec2 glow3Pos = vec2(0.5 + sin(t * 0.15) * 0.2, 0.5 + cos(t * 0.22) * 0.2);
          
          float glowDist1 = length(uv - glow1Pos);
          float glowDist2 = length(uv - glow2Pos);
          float glowDist3 = length(uv - glow3Pos);
          
          float glow1 = exp(-glowDist1 * 3.5) * 0.08;
          float glow2 = exp(-glowDist2 * 4.0) * 0.06;
          float glow3 = exp(-glowDist3 * 2.5) * 0.05;
          
          // Subtle cyan/blue glow accents
          vec3 glowColor1 = vec3(0.1, 0.35, 0.55) * glow1;
          vec3 glowColor2 = vec3(0.08, 0.3, 0.5) * glow2;
          vec3 glowColor3 = vec3(0.12, 0.4, 0.6) * glow3;
          
          color += glowColor1 + glowColor2 + glowColor3;
          
          // Floating blurred shapes (soft particles)
          vec2 particleUv = uv * 3.0;
          float particleNoise = fbm(particleUv + t * 0.5);
          float particles = smoothstep(0.4, 0.6, particleNoise) * 0.03;
          color += vec3(0.15, 0.4, 0.6) * particles;
          
          // Subtle scaling animation
          vec2 center = vec2(0.5);
          float scale = 1.0 + sin(t * 0.3) * 0.02;
          vec2 scaledUv = (uv - center) * scale + center;
          float scaleGlow = exp(-length(scaledUv - center) * 0.5) * 0.02;
          color += vec3(0.1, 0.3, 0.5) * scaleGlow;
          
          // Vignette for depth
          vec2 vigUv = uv * 2.0 - 1.0;
          float vig = 1.0 - smoothstep(0.3, 1.2, dot(vigUv, vigUv));
          color *= vig * 0.85 + 0.3;
          
          // Subtle parallax depth effect
          float depth = f * 0.1;
          color *= (1.0 + depth);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `;

      material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        },
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const handleResize = () => {
        if (!renderer || !canvas) return;
        renderer.setSize(window.innerWidth, window.innerHeight);
        material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      const animate = (t: number) => {
        animationFrameRef.current = requestAnimationFrame(animate);
        time = t * 0.001;
        if (material) {
          material.uniforms.uTime.value = time;
        }
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };

      animate(0);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (renderer) {
          renderer.dispose();
        }
        if (material) {
          material.dispose();
        }
        if (mesh) {
          mesh.geometry.dispose();
        }
      };
    };

    const cleanup = init();

    return () => {
      cleanup.then((fn) => fn?.());
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10,
      }}
    />
  );
}
