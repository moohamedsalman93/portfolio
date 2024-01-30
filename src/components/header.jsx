import React, { useState, useEffect } from 'react';

function HEader() {
  const [currentSection, setCurrentSection] = useState('');
  const [scrolling, setScrolling] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'skill'];

      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        setScrolling(false); // Reset scrolling state when scrolled back to the top
      } else if (!scrolling) {
        setScrolling(true); // Set scrolling state to true when scrolling starts
      }

        const visibleSection = sections.find((section) => {
          const sectionElement = document.getElementById(`${section}-section`);
          const sectionOffset = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          return scrollTop >= sectionOffset && scrollTop < sectionOffset + sectionHeight;
      });

      setCurrentSection(visibleSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior:'smooth' });
  };

  return (
    <div className={`h-20  w-full flex px-10 md:px-32 fixed z-10 top-0 items-center justify-between ${scrolling ? 'bg-[#111111E5]' : 'bg-black'}`}>
    <div className='flex'>
      <h1 className='md:text-4xl text-2xl text-blue-600 font-bold'>S</h1>
      <h1 className='md:text-4xl text-2xl text-white font-bold'>alman</h1>
    </div>
    <ul className='hidden md:flex space-x-14'>
      <li className={`font-medium text-white md:hover:text-blue-600  cursor-pointer  justify-center rounded-lg text-lg ${currentSection === 'home' ? 'bg-blue-600 h-4 ' : ''}`} onClick={() => scrollToSection('home-section')}>Home</li>
      <li className={`font-medium text-white md:hover:text-blue-600  cursor-pointer justify-center rounded-lg text-lg ${currentSection === 'about' ? 'bg-blue-600 h-4' : ''}`} onClick={() => scrollToSection('about-section')}>About</li>
      <li className={`font-medium text-white md:hover:text-blue-600  cursor-pointer justify-center rounded-lg text-lg ${currentSection === 'projects' ? 'bg-blue-600 h-4' : ''}`} onClick={() => scrollToSection('projects-section')}>Projects</li>
      <li className={`font-medium text-white md:hover:text-blue-600  cursor-pointer justify-center rounded-lg text-lg ${currentSection === 'services' ? 'bg-blue-600 h-4' : ''}`} onClick={() => scrollToSection('services-section')}>Services</li>
      <li className={`font-medium text-white md:hover:text-blue-600  cursor-pointer justify-center rounded-lg text-lg ${currentSection === 'skill' ? 'bg-blue-600 h-4' : ''}`} onClick={() => scrollToSection('contact-section')}>Contact</li>
    </ul>
  </div>
  );
}

export default HEader;
