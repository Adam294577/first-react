import { useOutletContext } from 'react-router';
const Page = () => {
  const nowPage = useOutletContext();
  return (
    <div>
      intro
      <div>{nowPage.BreakPoint}</div>
    </div>
  );
};
export default Page;
