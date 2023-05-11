import logo from '../../../assets/logo.svg'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-100">
      <div>
        <img className='w-24 fill-white' src={logo} alt="" />
        <p className='mt-3 text-base'>
          Edwin Diaz is a software and web
          <br />
          technologies engineer, a life coach
          <br />
          trainer who is also a serial .
        </p>
        <div className='flex gap-2 mt-3'>
          <FaGoogle className='w-5 h-5'/>
          <FaTwitter className='w-5 h-5'/>
          <FaInstagram className='w-5 h-5'/>
          <FaLinkedin className='w-5 h-5'/>
        </div>
      </div>
      <div>
        <span className="text-lg font-bold mb-4">About</span>
        <a className="link link-hover text-base">Home</a>
        <a className="link link-hover text-base">Service</a>
        <a className="link link-hover text-base">Contact</a>
        <a className="link link-hover text-base">Advertisement</a>
      </div>
      <div>
        <span className="text-lg font-bold mb-4">Company</span>
        <a className="link link-hover text-base">Why Car Docto</a>
        <a className="link link-hover text-base">About</a>
        <a className="link link-hover text-base">Jobs</a>
        <a className="link link-hover text-base">Press kit</a>
      </div>
      <div>
        <span className="text-lg font-bold mb-4">Support</span>
        <a className="link link-hover text-base">Support Center</a>
        <a className="link link-hover text-base">Feedback</a>
        <a className="link link-hover text-base">Accessability</a>
      </div>
    </footer>
  );
};

export default Footer;
