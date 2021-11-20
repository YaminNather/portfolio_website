import classNames from 'classnames';
import React, { useEffect } from 'react';
import './ambient_cube_styles.scss';

export interface AmbientCubeProps {
  className?: string;
  style?: string;
  alive: boolean;
}

const AmbientCube: React.FC<AmbientCubeProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div 
        className={classNames(`ambient_cube${(props.alive) ? '' : '_hidden'}`, props.className)}
      />
    );
  }

  return render();
};

export default AmbientCube;