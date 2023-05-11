import img from '../../assets/images/404/404.gif'
import Navbar from '../Shared/Navbar/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <img className='h-[78vh] mx-auto' src={img} alt="" />
        </div>
    );
};

export default ErrorPage;