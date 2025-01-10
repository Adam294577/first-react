import { useOutletContext } from 'react-router';
const Page = () => {
  const nowPage = useOutletContext();
  return (
    <div>
      start
      <div>{nowPage.BreakPoint}</div>
      <a rel='noopener noreferrer' href='https://github.com/adam294577' target='_blank'>
        我的github
      </a>
    </div>
  );
};
export default Page;
