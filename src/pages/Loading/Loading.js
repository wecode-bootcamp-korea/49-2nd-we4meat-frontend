import Lottie from 'lottie-react';
import loading from '../../lottie/loading.json';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <Lottie animationData={loading} />
    </div>
  );
}

export default Loading;
