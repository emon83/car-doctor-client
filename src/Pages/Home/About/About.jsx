import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
  return (
    <div className="hero min-h-screen mt-12">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="w-3/4 lg:w-[495px] lg:h-[468px] rounded-lg object-cover"
        />
        <img
          src={parts}
          className=" w-1/2 lg:w-[317px] lg:h-[312px] rounded-lg  absolute right-5 top-1/2 border-8 border-white"
        />
        </div>
        <div className='lg:w-1/2 p-4'>
          <div>
            <h5 className='text-xl font-bold text-orange-600 mb-5 lg:mt-16'>About Us</h5>
          <h1 style={{lineHeight:"54px"}} className="text-5xl font-bold">We are qualified <br />& of experience <br /> in this field</h1>
          <p className="pt-7 pb-5 text-lg text-gray-500">
           {/* eslint-disable-next-line react/no-unescaped-entities */}
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="pb-7 text-lg text-gray-500">
           {/* eslint-disable-next-line react/no-unescaped-entities */}
           the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
          </p>
          <button className="btn bg-[#FF3811] hover:bg-[#d82f0d] font-semibold lg:text-base border-none lg:mt-2">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
