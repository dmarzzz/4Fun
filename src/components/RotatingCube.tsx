import React from 'react';

interface RotatingCubeProps {
  cube: string[];
  rotation: number;
  textColor: string;
}

const RotatingCube: React.FC<RotatingCubeProps> = ({ cube, rotation, textColor }) => {
  return (
    <pre className="cube-text" style={{ color: textColor }}>
      <span>
        {cube.map(row => row.slice(rotation) + row.slice(0, rotation)).join("\n")}
      </span>
    </pre>
  );
}

export default RotatingCube;
