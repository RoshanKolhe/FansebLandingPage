import React from 'react';
import { useSpring, animated } from 'react-spring';

const PopoutImages = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const animation = useSpring({
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    config: { duration: 200 },
  });
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <animated.img
        src='https://ouch-cdn2.icons8.com/w1_iq548AipAMAEcCVq8zsTqFbNY7oEnx3cLpHtj6so/rs:fit:256:297/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2MxYzcxMDk4LTE5/ZWEtNDNjMS1hMzRk/LWFlYzk4ODE1ZWQw/Zi5wbmc.png'
        style={{ width: '50px', height: '50px', margin: '10px', ...animation }}
        alt="image1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <animated.img
        src='https://ouch-cdn2.icons8.com/w1_iq548AipAMAEcCVq8zsTqFbNY7oEnx3cLpHtj6so/rs:fit:256:297/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2MxYzcxMDk4LTE5/ZWEtNDNjMS1hMzRk/LWFlYzk4ODE1ZWQw/Zi5wbmc.png'
        style={{ width: '50px', height: '50px', margin: '10px', ...animation }}
        alt="image2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <animated.img
 src='https://ouch-cdn2.icons8.com/w1_iq548AipAMAEcCVq8zsTqFbNY7oEnx3cLpHtj6so/rs:fit:256:297/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2MxYzcxMDk4LTE5/ZWEtNDNjMS1hMzRk/LWFlYzk4ODE1ZWQw/Zi5wbmc.png'
        style={{ width: '50px', height: '50px', margin: '10px', ...animation }}
        alt="image3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <animated.img
 src='https://ouch-cdn2.icons8.com/w1_iq548AipAMAEcCVq8zsTqFbNY7oEnx3cLpHtj6so/rs:fit:256:297/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2MxYzcxMDk4LTE5/ZWEtNDNjMS1hMzRk/LWFlYzk4ODE1ZWQw/Zi5wbmc.png'
        style={{ width: '50px', height: '50px', margin: '10px', ...animation }}
        alt="image4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default PopoutImages;