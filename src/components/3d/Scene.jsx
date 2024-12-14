import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { AgentsVisualization } from './AgentsVisualization';
import { TasksVisualization } from './TasksVisualization';
import { PerformanceMetrics } from './PerformanceMetrics';

export function Scene() {
  return (
    <div className="w-full h-screen bg-primary">
      <Canvas shadows dpr={[1, 2]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <Suspense fallback={null}>
          <AgentsVisualization />
          <TasksVisualization />
          <PerformanceMetrics />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}