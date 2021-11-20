import { useEffect, useState } from "react";

export default function useMouseDistanceFromCenter(): number[] {
  const [mouseDistanceFromCenter, setMouseDistanceFromCenter] = useState<number[]>([0.0, 0.0]);

  useEffect(
    () => {
      const onMouseMove = (e: MouseEvent): void => {
        setMouseDistanceFromCenter([e.x - window.innerWidth / 2.0, e.y - window.innerHeight / 2.0]);
      };
      window.addEventListener('mousemove', onMouseMove);
      
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
  );

  return [mouseDistanceFromCenter[0] / (window.innerWidth/2), mouseDistanceFromCenter[1] / (window.innerHeight/2)];
}