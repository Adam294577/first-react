import { useOutletContext } from 'react-router';
const Page = () => {
  const nowPage = useOutletContext();
  const closeFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };
  return (
    <div onClick={closeFullScreen} className='hfull'>
      <h2 className='text-8xl fw600 flex-center hfull '>END</h2>
    </div>
  );
};
export default Page;
