import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className="pointer-events-none fixed z-[9998] h-9 w-9 rounded-full border-2 border-blue-500/70"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Center Dot */}
      <div
        className="pointer-events-none fixed z-[9999] h-1 w-1 rounded-full bg-pink-500"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
