import { useOutletContext } from 'react-router';

const Page = () => {
  const nowPage = useOutletContext();
  return (
    <div className="hfull">
      <h2 className="text-8xl fw600 flex-center hfull ">自我介紹</h2>
    </div>
  );
};
export default Page;
