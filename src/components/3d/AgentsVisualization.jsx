import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Text } from '@react-three/drei';

export function AgentsVisualization() {
  const groupRef = useRef();
  
  const [springs] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t / 4) * 0.3;
  });

  return (
    <animated.group ref={groupRef} {...springs}>
      {/* Agent representations will be added here dynamically */}
      <mesh position={[-4, 0, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#00FFB3" />
      </mesh>
      
      <Text
        position={[-4, 2, 0]}
        fontSize={0.5}
        color="#00FFB3"
        anchorX="center"
        anchorY="middle"
      >
        Active Agents
      </Text>
    </animated.group>
  );
}