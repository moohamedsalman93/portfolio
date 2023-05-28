import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "particles": {
          "number": {
              "value": 60,
              "density": {
                  "enable": false,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "polygon",
              "stroke": {
                  "width": 0,
                  "color": "#ffffff"
              },
              "polygon": {
                  "nb_sides": 3
              },
              "image": {
                  "src": "../img/no-img.png",
                  "width": 100,
                  "height": 100
              }
          },
          "opacity": {
              "value": .3,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": .2,
                  "sync": false
              }
          },
          "size": {
              "value": 5,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": .1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": .07,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 0,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 100,
                  "duration": .4
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true
      }}
    />
  );
};

export default Particle;
