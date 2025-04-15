import React, { useRef, useEffect, useState } from 'react';

const FadeScrollArea = ({ children, className = '' }) => {
  const scrollRef = useRef(null);
  const [maskClass, setMaskClass] = useState('');

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const clientHeight = el.clientHeight;
      const scrollHeight = el.scrollHeight;

      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (atTop && atBottom) {
        setMaskClass('');
      } else {
        setMaskClass('fade-mask');
      }
    };

    handleScroll(); // Inicial
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className={`relative overflow-y-auto scrollbar-hide ${maskClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeScrollArea;
