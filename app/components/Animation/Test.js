import React from 'react';
import TweenOne from 'rc-tween-one';

function Demo() {
  return (
    <TweenOne
      animation={{
        x: 80,
        scale: 0.5,
        rotate: 120,
        yoyo: true, // demo 演示需要
        repeat: -1, // demo 演示需要
        duration: 1000,
      }}
      paused={false}
      style={{
        transform: 'translateX(-80px)',
        width: '50px',
        height: '50px',
        borderRadius: '5px',
        background: '#1890ff',
      }}
      className="code-box-shape"
    />
  );
}
export default Demo;
