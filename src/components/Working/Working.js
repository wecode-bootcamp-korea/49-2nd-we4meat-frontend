import Lottie from 'lottie-react';
import working from '../../lottie/working.json';
import './Working.scss';

const Working = () => {
  return (
    <div className="working">
      <Lottie animationData={working} />
    </div>
  );
};

export default Working;
