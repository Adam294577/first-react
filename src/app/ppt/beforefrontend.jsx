import { useOutletContext } from 'react-router';
const Page = () => {
  const nowPage = useOutletContext();
  return (
    <div>
      beforefrontend
      <div>{nowPage.BreakPoint}</div>
    </div>
  );
};
export default Page;
