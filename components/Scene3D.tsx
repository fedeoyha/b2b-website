'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

interface NodeProps {
    nodes: THREE.Vector3[];
}

interface Signal {
    start: THREE.Vector3;
    end: THREE.Vector3;
    progress: number;
    id: number;
    speed: number;
}

function NeuralConnections({ nodes }: NodeProps) {
    const { geometry } = useMemo(() => {
        const connections = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = nodes[i].distanceTo(nodes[j]);
                if (dist < 5) {
                    connections.push(nodes[i].x, nodes[i].y, nodes[i].z);
                    connections.push(nodes[j].x, nodes[j].y, nodes[j].z);
                }
            }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(connections, 3));
        return { geometry: geo };
    }, [nodes]);

    return (
        <lineSegments geometry={geometry}>
            <lineBasicMaterial color="#4f46e5" transparent opacity={0.12} />
        </lineSegments>
    );
}

function SignalPulses({ nodes }: NodeProps) {
    const [signals, setSignals] = useState<Signal[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.5) {
                const startIdx = Math.floor(Math.random() * nodes.length);
                const startNode = nodes[startIdx];

                let endNode = null;
                for (let i = 0; i < nodes.length; i++) {
                    if (i === startIdx) continue;
                    const d = startNode.distanceTo(nodes[i]);
                    if (d < 5 && d > 0.1) {
                        endNode = nodes[i];
                        break;
                    }
                }

                if (endNode) {
                    setSignals(prev => [...prev, {
                        start: startNode,
                        end: endNode,
                        progress: 0,
                        id: Math.random(),
                        speed: 0.015
                    }]);
                }
            }
        }, 200);
        return () => clearInterval(interval);
    }, [nodes]);

    useFrame(() => {
        setSignals(prev => prev.map(s => ({
            ...s,
            progress: s.progress + s.speed
        })).filter(s => s.progress < 1));
    });

    return (
        <group>
            {signals.map(s => {
                const pos = new THREE.Vector3().lerpVectors(s.start, s.end, s.progress);
                const opacity = Math.sin(s.progress * Math.PI);
                return (
                    <mesh key={s.id} position={pos}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshBasicMaterial color="#10b981" transparent opacity={opacity} toneMapped={false} />
                    </mesh>
                );
            })}
        </group>
    );
}

function ActiveNodes({ nodes }: NodeProps) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const tempObj = new THREE.Object3D();

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        nodes.forEach((node, i) => {
            tempObj.position.copy(node);
            const scale = 1 + Math.sin(time * 0.5 + i * 0.5) * 0.08;
            tempObj.scale.set(scale, scale, scale);
            tempObj.updateMatrix();
            meshRef.current!.setMatrixAt(i, tempObj.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, nodes.length]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
                color="#6366f1"
                emissive="#4f46e5"
                emissiveIntensity={0.3}
                roughness={0.3}
                metalness={0.7}
            />
        </instancedMesh>
    );
}

function BrainNetwork() {
    const nodes = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 60; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 8;
            const z = (Math.random() - 0.5) * 6;
            temp.push(new THREE.Vector3(x, y, z));
        }
        return temp;
    }, []);

    return (
        <group rotation={[0, 0, 0]}>
            <ActiveNodes nodes={nodes} />
            <NeuralConnections nodes={nodes} />
            <SignalPulses nodes={nodes} />
        </group>
    );
}

export default function Scene3D() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
                <color attach="background" args={['#050505']} />

                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
                <pointLight position={[-10, -10, -10]} intensity={0.3} color="#10b981" />

                <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.3}>
                    <BrainNetwork />
                </Float>

                <EffectComposer>
                    <Bloom luminanceThreshold={0.9} intensity={0.8} radius={0.5} />
                    <Vignette eskil={false} offset={0.15} darkness={1.2} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
