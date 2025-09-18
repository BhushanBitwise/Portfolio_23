import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Follow mouse with a slight delay
    const move = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });

      // The trailing ink effect remains the same white-yellow gradient
      const bubble = document.createElement("div");
      bubble.className = "fixed w-6 h-6 rounded-full pointer-events-none opacity-40";
      bubble.style.left = e.clientX - 12 + "px";
      bubble.style.top = e.clientY - 12 + "px";
      bubble.style.zIndex = 9998;
      bubble.style.background = "linear-gradient(45deg, #ffffff, #fff200)";
      document.body.appendChild(bubble);

      gsap.to(bubble, {
        scale: 3.5,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out",
        onComplete: () => bubble.remove(),
      });
    };

    // A more dynamic, shattered click effect with multiple colors
    const clickEffect = (e) => {
      const colors = ["#ff0077", "#00ffc8", "#ffea00", "#540d6e"]; // Pink, Teal, Yellow, Purple

      for (let i = 0; i < 8; i++) { // Create 8 small lines
        const line = document.createElement("div");
        line.className = "fixed pointer-events-none";
        line.style.left = e.clientX + "px";
        line.style.top = e.clientY + "px";
        line.style.zIndex = 9999;
        line.style.width = "4px";
        line.style.height = "25px";
        line.style.background = colors[Math.floor(Math.random() * colors.length)];
        line.style.transformOrigin = "bottom center";
        
        document.body.appendChild(line);

        // Animate each line with a random rotation and position
        gsap.to(line, {
          x: (Math.random() - 0.5) * 200, // Move left or right
          y: (Math.random() - 0.5) * 200, // Move up or down
          rotation: Math.random() * 360, // Spin randomly
          opacity: 0,
          scale: 0.5,
          duration: 1.5,
          ease: "power3.out",
          onComplete: () => line.remove(),
        });
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", clickEffect);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", clickEffect);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ffffffff", // Teal color for the main cursor
      }}
    />
  );
}