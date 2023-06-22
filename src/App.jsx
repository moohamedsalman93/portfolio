import Particle from './components/part';
import HEader from './components/header';
import Myphoto from './assets/Myphoto.jpg'
import pn1 from './assets/pn1.jpg'
import p1 from './assets/p1.png'
import portfolio from './assets/portfolio.png'
import linkedin from './assets/linkedin.svg'
import insta from './assets/insta.png'
import appicon from './assets/app.png'
import figmaicon from './assets/design.png'
import webicon from './assets/web.png'
import zigzag from './assets/zigzag.svg'
import fluttericon from './assets/flutter.svg'
import reacticon from './assets/react.svg'
import tailicon from './assets/tailwindcss-icon.svg'
import pythonicon from './assets/python.svg'
import javaicon from './assets/java.svg'
import wordicon from './assets/wordpress-icon.svg'
import fireicon from './assets/firebase.svg'
import './App.css';
import './index.css';
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Square = ({ txt, img }) => {


  return (
    <div className=' items-center flex flex-col justify-between hover:animate-bounce'>
      <img
        className='w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem]'
        src={img}
      />
      <h1 className=' text-lg font-medium text-white w-32 text-center'>{txt}</h1>
    </div>

  );
};

const PrContainer = ({ img, title, status, link }) => {
  const handleContainerClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='bg-white flex  flex-col rounded-lg md:hover:rounded-md md:h-[20rem] md:mt-0 mt-4 md:hover:h-full w-full cursor-pointer' onClick={handleContainerClick}>
      <img src={img} alt="" className='h-[14rem] rounded-lg object-cover w-full' />
      <div className='h-28 bg-white p-5 rounded-b-md'>
        <h1 className='text-xl font-semibold flex justify-center'>{title}</h1>
        <h1 className='text-blue-700 hover:text-blue-500 flex justify-center'>{status}</h1>
      </div>
    </div>
  );
};

const Social = ({ img, link }) => {

  const handleContainerClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (<img src={img} alt="" className=' w-10 h-10 bg-white rounded-full' onClick={handleContainerClick} />)
}



function TiTle({ txt }) {
  return (
    <div className=' w-full flex flex-col justify-center items-center' >
      <h1 className=' text-[35px] text-white'>{txt}</h1>
      <div className='flex space-x-2 mt-2'>
        <div className='section_1' />
        <div className='section_2' />
      </div>
    </div>
  )
}

function Services({ img, title, desc }) {
  return (
    <div className=' border-[#cccccc54] border-[0.5px] px-[0.5rem] md:px-[1.5rem] pt-4 md:pt-8 space-y-3 md:space-y-8'>
      <img src={img} alt="" className=' w-10 h-10' />
      <h1 className='text-2xl font-semibold bg-gradient-animation bg-clip-text text-transparent hover:bg-gradient-animation'>{title}</h1>
      <h1 className=' text-[#ccc] text-[15px]'>
        {desc}
      </h1>
    </div>
  )
}



const App = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Query, setQuery] = useState('');

  const [valiname, setvaliname] = useState('');
  const [valiemail, setvaliemail] = useState('');
  const [valiquery, setvaliquery] = useState('');
  const form = useRef();

  const validate = () => {
    setvaliname('');
    setvaliemail('');

    if (Name === '') {
      setvaliname('Please Enter Your Name');
    }
    if (Email === '') {
      setvaliemail('Please Enter your Email');
    }
    if (!Email.includes('@')) {
      setvaliemail('Please Enter Valid Email');
    }
    if (Query === '') {
      setvaliquery('Please Enter Your Query');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validate();
    if (valiemail === '') {
      emailjs
        .sendForm('service_v7pm12h', 'template_7op69ys', form.current, 'bSGujapU98Kjiv0RQ')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };


  return (
    <div className=" h-full w-full bg-black overflow-y-hidden overflow-x-hidden">
      <HEader />
      <div className=' h-full bg-black'>
        <Particle />
        <div id='home-section' className=' items-center flex bg-black  mx-auto  flex-col'>
          <div className=' space-y-4 justify-center items-center flex flex-col h-[14rem] md:h-[30rem]'>
            <h1 className=' text-white md:text-2xl text-lg'>Hi There, I'm</h1>
            <div className=' flex'>
              <h1 className='text-3xl md:text-7xl text-blue-600 font-bold'>Mohamed </h1>
              <h1 className='text-3xl md:text-7xl text-white font-bold'> Salman</h1>
            </div>
            <h1 className=' text-2xl text-white font-bold'>Frontend | Flutter Developer</h1>
          </div>
        </div>
      </div>

      <div id='about-section' className='h-[65rem] md:h-[50rem] mx-auto relative  bg-[#111111] w-[24rem] md:w-[81rem] mt-4 rounded-t-md p-4 md:p-28'>
        {/* about */}
        <div className='md:flex md:space-x-14 group'>
          <img src={Myphoto} alt="" className='absolute top-10  md:w-[23.1rem] md:h-[30rem] opacity-40' />
          <img src={Myphoto} alt="" className=' relative w-[25rem] h-[30rem] group-hover:w-[24rem] group-hover:h-[24.5rem] md:w-[23.1rem] md:h-[30rem]' />
          <div className=' w-full mt-3 md:mt-0'>
            <h1 className=' font-semibold text-[25px] md:text-[35px] text-white'>Frontend & Flutter Developer. Based in Tamil Nadu Cuddalore. I'm Code & Design things for App and Web.</h1>
            <img src={zigzag} alt="" className=' my-5' />
            <div className=' space-y-3'>
              <h1 className='text-lg md:text-xl text-white font-semibold'>I am a talented, hardworking Flutter developer from Tamil Nadu.</h1>
              <h1 className='text-lg md:text-xl text-[#ddd] font-light'>
                I have completed a BSc in Computer Science and am currently pursuing a Master of Computer Application degree. I have a strong knowledge of Flutter, React, and Python. Additionally, I have successfully developed two personal projects using Flutter and one personal project using ReactJS.
              </h1>
            </div>
          </div>
        </div>
        {/* all project */}
      </div>
      
      {/* all project */}
      <div id='projects-section' className='h-[70rem] md:h-[38rem] mx-auto relative bg-[#111111] w-[24rem] md:w-[81rem] p-4 md:px-28'>
        <TiTle txt={"All projects"} />
        <div className='w-full h-full md:h-[20rem] mt-5'>
          {/* row1 */}
          <div className='h-full md:h-[21.5rem] md:flex md:space-x-4'>
            {/* p1 */}
            <PrContainer img={pn1} title={'CS-xplorer'} status={'present'} link={'https://play.google.com/store/apps/details?id=com.lastbenchers.csexplorer&pli=1'} />
            {/* p2 */}
            <PrContainer img={portfolio} title={'Portfolio Website'} status={'present'} />
            {/* p3 */}
            <PrContainer img={p1} title={'Money Management'} status={'Upcoming'} />
          </div>
        </div>
      </div>
      {/* services */}
      <div id='services-section' className=' h-[80rem] md:h-[50rem] w-full pt-20 relative'>
        <TiTle txt={"Services"} />
        <div className='  h-[60rem] md:h-[23rem] md:w-[78rem] mx-auto p-4 md:px-28 mt-10 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8 bg-black'>
          <Services img={appicon} title={'Flutter'} desc={'Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase'} />
          <Services img={figmaicon} title={'Figma'} desc={'Figma is a collaborative browser-based interface design tool, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allows viewing and interacting with Figma prototypes in real-time on mobile and tablet devices'} />
          <Services img={webicon} title={'Web Development'} desc={'Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications'} />
        </div>
      </div>
      {/* skill */}
      <div id='skill-section' className='h-[52rem] md:h-[50rem] w-full relative'>
        <TiTle txt={"Skills"} />
        <div className=' h-[40rem]  md:h-[23rem] w-full md:w-[78rem] mx-auto md:px-28 mt-10 grid grid-cols-2 md:grid-cols-4  md:grid-rows-2 gap-8 bg-black'>
          <Square txt={"Flutter"} img={fluttericon} />
          <Square txt={"React"} img={reacticon} />
          <Square txt={"tailwind CSS"} img={tailicon} />
          <Square txt={"Firebase"} img={fireicon} />
          <Square txt={"Python"} img={pythonicon} />
          <Square txt={"Java"} img={javaicon} />
          <Square txt={"WordPress"} img={wordicon} />
        </div>
      </div>
      {/* contact */}
      <form id='contact-section' ref={form} onSubmit={sendEmail} className='h-[49.5rem] md:h-[38rem] w-full relative'>
        <TiTle txt={"Drop A Line"} />
        <div className=' h-[40rem] md:h-[28rem] w-[24rem] md:w-[78rem] mx-auto md:px-28 p-4 md:pt-16 mt-10 rounded-lg bg-[#111111]'>/
          {/* field */}
          <div className=' h-[25rem] md:h-[10rem] justify-center items-center w-full  grid grid-cols-1 md:grid-cols-3 md:grid-rows-1'>
            {/* phone and email */}
            <div className=' h-full md:space-y-7'>
              <div>
                <div className='flex space-x-2 items-center'>
                  <div className='h-2 w-2 bg-[#007bff]' />
                  <h1 className=' font-semibold text-white text-lg'>Phone</h1>
                </div>
                <h1 className='text-white text-lg'>+91 9843594178</h1>
              </div>
              <div>
                <div className='flex space-x-2 items-center'>
                  <div className='h-2 w-2 bg-[#007bff]' />
                  <h1 className=' font-semibold text-white text-md'>Email</h1>
                </div>
                <h1 className='text-white text-lg'>moohamedsalman93@gmail.com</h1>
              </div>
            </div>
            {/* inputbox */}
            <div className=' mx-auto h-full space-y-4  justify-center md:space-y-8 '>
              {/* name */}
              <div>
                <input type="text" placeholder='Name' name='user_name' value={Name} onChange={(e) => setName(e.target.value)} className={` text-[#007bff] h-10 w-[20rem] ${valiname !== '' ? 'border-red-500' : 'border-[#ccc]'}  bg-transparent rounded-lg caret-red-50 px-5 border-[0.5px]`} />
                {
                  valiname && (
                    <h1 className=' text-sm pl-4 text-red-600'>{valiname}</h1>
                  )
                }
              </div>
              {/* email */}
              <div>
                <input type="email" placeholder='Email' name='user_email' value={Email} onChange={(e) => setEmail(e.target.value)} className={` text-[#007bff] h-10 w-[20rem] ${valiemail !== '' ? 'border-red-500' : 'border-[#ccc]'}  bg-transparent rounded-lg caret-red-50 px-5 border-[0.5px]`} />
                {
                  valiemail && (
                    <h1 className=' text-sm pl-4 text-red-600'>{valiemail}</h1>
                  )
                }
              </div>
            </div>
            {/* query */}
            <textarea name="message" id="query" cols="30" rows="5" placeholder='Tell me About Your Query'
              className='p-2 h-32 bg-transparent rounded-lg border-[#ccc] border-[0.5px] text-blue-600 caret-white'></textarea>
          </div>
          {/* button */}
          <div className='flex w-full h-20 justify-center space-x-5'>
            <Social img={insta} link={'https://www.instagram.com/hodo_phile93/'} />
            <Social img={linkedin} link={'https://www.linkedin.com/in/mohamed-salman-733b24220/'} />
          </div>
          <div className=' flex justify-center items-center w-full mb-8'>
            <button type='submit' className=' h-10 w-28  bg-[#007bff] hover:animate-pulse  text-white rounded-lg text-sm p-2'>Send Message</button>
          </div>
          {/* copy */}
          <div className='flex space-x-2 w-full justify-center'>
            <h1 className=' text-[#ccc]'>©</h1>
            <h1 className=' text-white'>mdsalmanofficial.com</h1>
            <h1 className=' text-[#ccc]'>All RIght Reserved</h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
