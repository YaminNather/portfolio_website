import { useGLTF, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { FC, Suspense } from 'react';
import { MeshBasicMaterial, TextureLoader } from 'three';

export interface ModelProps {
  ref?: any;
}

const Model: FC<ModelProps> = (props) => {
  return (    
    <Suspense fallback={null}>
      <Mesh />
    </Suspense>   
  );
}

const Mesh: FC<ModelProps> = (props) => {
  const gltf = useGLTF('/Tech Stacks.glb') as any;
  const texture = useTexture('/map.png');
  
  return (    
    <mesh
      ref={props.ref}
      geometry={gltf.nodes.Text006.geometry}
    >
      <meshBasicMaterial map={texture} color='white' />
    </mesh>
  );
};

useGLTF.preload('/Tech Stacks.glb');
useTexture.preload('/map.png');

export default Model;