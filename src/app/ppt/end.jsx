import { useOutletContext } from 'react-router';
const Page = () => {
  const nowPage = useOutletContext();
  return (
    <div>
      end
      <div>{nowPage.BreakPoint}</div>
    </div>
  );
};
export default Page;
