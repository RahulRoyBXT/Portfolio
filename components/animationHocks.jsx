import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Define your styles as a JavaScript object
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  box: {
    backgroundColor: '#0ae448',
    position: 'relative',
    borderRadius: '5px',
    paddingTop: '100%',
    content: '""',
    display: 'block',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    marginTop: '35px',
    padding: '0 16px 16px 16px',
    textAlign: 'left',
    maxWidth: '1000px',
    display: 'inline-block',
  },
  code: {
    backgroundColor: '#292a2b',
    padding: '12px',
    borderRadius: '10px',
  },
  strong: {
    fontWeight: '400',
    fontSize: '20px',
  },
  question: {
    fontSize: '21px',
    fontWeight: '400',
    display: 'block',
  },
  controls: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'start',
  },
  control: {
    display: 'flex',
    alignItems: 'flex-start',
    color: 'white',
    marginBottom: '10px',
  },
  controlLabel: {
    marginTop: '10px',
  },
  controlVertical: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    textAlign: 'left',
    justifyContent: 'flex-start',
    padding: '6px 8px',
    borderRadius: '9px',
    backgroundColor: '#111',
    marginRight: '18px',
    color: '#bbb',
  },
  frVideo: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '0',
    float: 'left',
    paddingBottom: '56.25%',
    margin: '12px 0 35px 0',
  },
  frVideoIframe: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    border: '2px solid #444',
  },
};

function AnimationHooks() {
  const tlRef = useRef(null); // Create a ref for the GSAP timeline

  function animateBoxes(from, axis, ease) {
    tlRef.current.to('.box', {
      duration: 1,
      scale: 0.1,
      y: 60,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut',
      stagger: {
        amount: 1.5,
        grid: [5, 5], // Define the grid dimensions
        axis: axis,
        ease: ease,
        from: from,
      },
    });
  }

  function buildGrid(vars) {
    vars = vars || {};
    const container = document.createElement('div');
    const rows = vars.grid[0] || 5;
    const cols = vars.grid[1] || 5;
    const width = vars.width || 100;
    const gutter = vars.gutter || 1;
    const className = vars.className || '';
    const w = (width - cols * gutter) / cols;
    const parent =
      typeof vars.parent === 'string'
        ? document.querySelector(vars.parent)
        : vars.parent
        ? vars.parent
        : document.body;
    const css = `display: inline-block; margin: 0 ${gutter / width * 100}% ${gutter / width * 100}% 0; width: ${w / width * 100}%;`;
    const l = rows * cols;
    let i, box;

    for (i = 0; i < l; i++) {
      box = document.createElement('div');
      box.style.cssText = css;
      box.className = className;
      box.index = i;
      box.setAttribute('data-index', i);
      if (vars.onCellClick) {
        box.addEventListener('click', vars.onCellClick);
      }
      container.appendChild(box);
    }
    container.style.cssText = `width:${width}px; line-height: 0; padding:${gutter}px 0 0 ${gutter}px; display:inline-block;`;
    parent.appendChild(container);
    return container;
  }

  function onCellClick(e) {
    // Handle cell click
  }

  useEffect(() => {
    // Initialize GSAP timeline
    tlRef.current = gsap.timeline();

    buildGrid({
      grid: [5, 5], // Define the grid dimensions
      className: 'box',
      width: 1000,
      gutter: 15,
      parent: '#container',
      onCellClick: onCellClick
    });

    animateBoxes('center');

    return () => {
      tlRef.current.kill(); // Cleanup the timeline on unmount
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div style={styles.container}>
      <div id="container"></div>
    </div>
  );
}

export default AnimationHooks;
