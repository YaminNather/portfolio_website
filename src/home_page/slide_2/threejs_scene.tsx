import * as THREE from 'three';
import { FC, MutableRefObject, RefObject, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import useMouseDistanceFromCenter from "../../use_mouse_distance_from_center/use_mouse_distance_from_center";
import Model from "./model";

const ThreeJScene: FC = (props) => {
  const mouseDistanceFromCenter: number[] = useMouseDistanceFromCenter();
  const pivotRef: RefObject<THREE.Object3D | null> = useRef<THREE.Object3D>(null);

  const state = useThree();

  useEffect(
    () => {
      if(pivotRef.current === null)
        return;

      pivotRef.current.add(state.camera);
      state.camera.position.set(0.0, -2.0, 12.5);
    },
    [pivotRef.current]
  );
  
  useEffect(
    () => {
      if(pivotRef.current === null)
        return;
      
      pivotRef.current.rotation.set(
        (mouseDistanceFromCenter[1] * 5) * Math.PI / 180, 
        (mouseDistanceFromCenter[0] * 5) * Math.PI / 180, 
        0.0
      );
    },
    [mouseDistanceFromCenter]
  );

  return (
    <>
      {/* <gridHelper /> */}

      <group ref={pivotRef} />

      {/* <mesh position={[0.0, 0.0, 0.0]}>
        <boxGeometry attach="geometry" />
        
        <meshLambertMaterial attach="material" color='hotpink' />
      </mesh> */}

      <Model />

      {/* <ambientLight /> */}
    </>
  );
};

export default ThreeJScene;