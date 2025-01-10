import { useOutletContext } from 'react-router';
const Page = () => {
  const nowPage = useOutletContext();
  return (
    <div>
      work
      <div>{nowPage.BreakPoint}</div>
    </div>
  );
};
export default Page;
