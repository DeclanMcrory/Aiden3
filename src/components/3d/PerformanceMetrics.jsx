import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export function PerformanceMetrics() {
  const groupRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t / 2) * 0.2;
  });

  return (
    <group ref={groupRef} position={[0, -4, 0]}>
      <Text
        position={[0, 0, 0]}
        fontSize={0.5}
        color="#00FFB3"
        anchorX="center"
        anchorY="middle"
        maxWidth={10}
      >
        System Performance Metrics
      </Text>
    </group>
  );
}