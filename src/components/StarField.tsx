import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

const Stars = ({ count = 2400 }) => {
    const groupRef = useRef<THREE.Group>(null!);

    // Tạo bụi sao rải đều quanh mặt trời
    const stars = [...Array(count)].map(() => {
        const r = 20 + Math.random() * 40; // Bán kính từ 20 đến 60
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        return new THREE.Vector3(x, y, z);
    });

    // Quay nhóm bụi sao quanh trục Y
    useFrame(({ clock }) => {
        groupRef.current.rotation.y = clock.getElapsedTime() * -0.1;
    });

    return (
        <group
            ref={groupRef}
            position={[0, 20, 0]}
            rotation={[Math.PI / 3, 0, 0]}
        >
            {stars.map((pos, idx) => (
                <mesh key={idx} position={pos}>
                    <sphereGeometry args={[0.03, 6, 6]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            ))}
        </group>
    );
};

const StarField = () => {
    return (
        <Canvas camera={{ position: [0, 0, 30] }}>
            <Stars />
        </Canvas>
    );
};

export default StarField;
