import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseenter', onMouseEnter);
      handleLinkHoverEvents();
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      removeLinkHoverEvents();
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHovered(true));
        el.addEventListener('mouseout', () => setLinkHovered(false));
      });
    };

    const removeLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach((el) => {
        el.removeEventListener('mouseover', () => setLinkHovered(true));
        el.removeEventListener('mouseout', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorClasses = `fixed pointer-events-none z-50 transition-transform duration-150 ease-out ${
    hidden ? 'opacity-0' : 'opacity-100'
  } ${linkHovered ? 'scale-[2.5]' : clicked ? 'scale-75' : 'scale-100'}`;

  const cursorOuterClasses = `${cursorClasses} w-8 h-8 rounded-full border border-secondary border-opacity-80 bg-white bg-opacity-10 backdrop-blur-sm`;
  const cursorInnerClasses = `${cursorClasses} w-2 h-2 bg-primary rounded-full`;

  return (
    <>
      <div 
        className={cursorOuterClasses}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      ></div>
      <div 
        className={cursorInnerClasses}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
