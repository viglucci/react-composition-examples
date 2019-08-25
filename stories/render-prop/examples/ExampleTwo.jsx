import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';

import './ExampleTwo.css';

const TooltipContainer = ({ children, left, top }) => {
  return (
    <div
      className="Tooltip"
      style={{
        left,
        top,
      }}
    >
      <div className="Tooltip-container">{children}</div>
    </div>
  );
};

const Tooltip = ({ children, renderContent }) => {
  const [hoverd, setHovered] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(0);

  const clonedChildren = React.Children.map(children, child => {
    const ref = useRef();
    return React.cloneElement(child, {
      ref,
      className: classnames(child.props.className, 'Tooltip-trigger'),
      onMouseEnter: e => {
        setHovered(true);
        const { x, y, width, height } = ref.current.getBoundingClientRect();
        const rightPosition = x + width;
        const topPosition = y + height / 2;
        setLeftPosition(rightPosition);
        setTopPosition(topPosition);
      },
      onMouseLeave: () => {
        setHovered(false);
      },
    });
  });

  return (
    <React.Fragment>
      {clonedChildren}
      {hoverd ? (
        <TooltipContainer left={leftPosition} top={topPosition}>
          {renderContent()}
        </TooltipContainer>
      ) : null}
    </React.Fragment>
  );
};

export default () => {
  const renderTooltipContent = () => {
    return <span>Tooltip Content</span>;
  };

  return (
    <Tooltip renderContent={renderTooltipContent}>
      <div className="RedBlock">Hover Me 1</div>
      <div className="RedBlock">Hover Me 2</div>
    </Tooltip>
  );
};
