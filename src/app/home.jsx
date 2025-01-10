import { NavLink } from 'react-router';
import { Title } from '@/components/myTitle';
const Page = () => {
  return (
    <div className='p5'>
      <Title cont='我是首頁' />
      <nav className='2xl:px80 md:px60 grid xl:grid-cols-4 grid-cols-2 gap-5 mt10'>
        <NavLink className='w50 h50 flex-center bg-[#CCC] rounded-xl text-xl mxa' to='/learn' end>
          學習目標
        </NavLink>
        <NavLink className='w50 h50 flex-center bg-[#CCC] rounded-xl text-xl mxa' to='/count' end>
          計數器
        </NavLink>
        <NavLink
          className='w50 h50 flex-center bg-[#CCC] rounded-xl text-xl mxa'
          to='/userlist'
          end
        >
          名單管理
        </NavLink>
        <NavLink
          className='w50 h50 flex-center bg-[#CCC] rounded-xl text-xl mxa'
          to='/userlist'
          end
        >
          自我介紹簡報
        </NavLink>
      </nav>
    </div>
  );
};

export default Page;
