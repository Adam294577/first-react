import { BackHomeSvg } from '@/components/backHomeSvg';
import { Title } from '@/components/myTitle';
const Page = () => {
  return (
    <div>
      <Title cont="user名單" />
      <BackHomeSvg className="cursor-pointer w10 h10 flex-center fixed bottom-10 left-10" />
    </div>
  );
};
export default Page;
