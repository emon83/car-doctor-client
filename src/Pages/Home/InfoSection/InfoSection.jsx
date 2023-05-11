import "./InfoSection.css";
import schedule from '../../../assets/icons/schedule.png'
import phone from '../../../assets/icons/phone.png'
import location from '../../../assets/icons/location.png'

const InfoSection = () => {
  return (
    <div className="info__container text-white lg:flex items-center gap-x-16 mx-auto mt-16 lg:mt-32">
      <div className="flex items-center justify-center gap-5 pt-6 lg:pt-0 lg:ml-[140px]">
        <div>
          <img className="w-9" src={schedule} alt="" />
          </div>
        <div>
          <p>We are open monday-friday</p>
          <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      <div className="flex items-center pt-4 lg:pt-0 justify-center gap-5">
        <div>
          <img className="w-9" src={phone} alt="" />
          </div>
        <div>
          <p>Have a question?</p>
          <h4 className="text-2xl font-bold">+2546 251 2658</h4>
        </div>
      </div>
      <div className="flex items-center pt-4 lg:pt-0 justify-center gap-5">
        <div>
          <img className="w-9" src={location} alt="" />
          </div>
        <div>
          <p>Need a repair? our address</p>
          <h4 className="text-2xl font-bold">Liza Street, New York</h4>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
