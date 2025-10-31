// CubeGrid.tsx
import React, { useState, useEffect, useRef } from 'react';
import RotatingCube from './RotatingCube';

type CubeGridProps = {
  width: number,
  height: number,
  centerComponent: JSX.Element,
  cube: string[],
  innerCube: string[],
  textColor: string,
  fitToViewport?: boolean,
  centerLayout?: 'single-cell' | 'full-width',
  showMiddleRowCubes?: boolean,
};

const CubeGrid: React.FC<CubeGridProps> = ({
  width,
  height,
  centerComponent,
  cube,
  innerCube,
  textColor,
  fitToViewport = true,
  centerLayout = 'single-cell',
  showMiddleRowCubes = true,
}) => {
  const [rotation, setRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(rotation => (rotation + 1) % cube[0].length);
      setInnerRotation(rotation => (rotation - 1 + innerCube[0].length) % innerCube[0].length);
    }, 100);
    return () => clearInterval(intervalId);
  }, [cube, innerCube]);

  useEffect(() => {
    if (!fitToViewport) {
      setScale(1);
      return;
    }

    const updateScale = () => {
      const contentEl = contentRef.current;
      if (!contentEl) return;
      const parentEl = contentEl.parentElement;
      if (!parentEl) return;

      const parentWidth = parentEl.clientWidth;
      const parentHeight = parentEl.clientHeight;
      const contentWidth = contentEl.scrollWidth;
      const contentHeight = contentEl.scrollHeight;

      if (!parentWidth || !parentHeight || !contentWidth || !contentHeight) return;

      const scaleX = parentWidth / contentWidth;
      const scaleY = parentHeight / contentHeight;
      const nextScale = Math.min(scaleX, scaleY, 1);
      const adjustedScale = nextScale < 1 ? Math.max(nextScale, 0.85) : 1;

      setScale(prev => (Math.abs(prev - adjustedScale) > 0.01 ? adjustedScale : prev));
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, [width, height, cube, innerCube, fitToViewport]);

  if (width % 2 === 0 || height % 2 === 0) {
    return <div>Width and Height must be odd numbers!</div>;
  }

  const middleRowIndex = Math.floor(height / 2);
  const middleColIndex = Math.floor(width / 2);

  const wrapperClasses = fitToViewport
    ? "flex h-full w-full flex-1 items-center justify-center overflow-hidden"
    : "flex w-full max-w-full justify-center items-start";

  const gridStyle: React.CSSProperties = {
    gridTemplateRows: `repeat(${height}, auto)`,
    gridTemplateColumns: `repeat(${width}, auto)`,
    ...(fitToViewport
      ? {
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }
      : {}),
  };

  return (
    <div className={wrapperClasses}>
      <div
        ref={contentRef}
        className="grid items-center justify-center gap-2 md:gap-4 p-4 md:p-6 max-w-full"
        style={gridStyle}
      >
        {Array.from({ length: height }).map((_, rowIndex) =>
          Array.from({ length: width }).map((_, colIndex) => {
            const isMiddleRow = rowIndex === middleRowIndex;
            const isMiddleCol = colIndex === middleColIndex;

            if (isMiddleRow) {
              if (centerLayout === 'full-width') {
                if (colIndex === 0) {
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="flex w-full justify-center"
                      style={{ gridColumn: `1 / span ${width}` }}
                    >
                      {centerComponent}
                    </div>
                  );
                }
                return null;
              }

              if (isMiddleCol) {
                return (
                  <div key={`${rowIndex}-${colIndex}`}>
                    {centerComponent}
                  </div>
                );
              }

              if (!showMiddleRowCubes) {
                return <div key={`${rowIndex}-${colIndex}`} />;
              }
            }

            return (
              <div key={`${rowIndex}-${colIndex}`} className="flex flex-col items-center justify-center">
                <RotatingCube cube={innerCube} rotation={innerRotation} textColor={textColor} />
                <RotatingCube cube={cube} rotation={rotation} textColor={textColor} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CubeGrid;
