import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      className="custom-cursor hidden md:block"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CustomCursor;
