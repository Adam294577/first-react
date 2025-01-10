import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
const Page = () => {
  const PageBreakPoint = [
    { name: 'start', slide: 1, BreakPoint: 1 },
    { name: 'intro', slide: 2, BreakPoint: 2 },
    { name: 'beforefrontend', slide: 3, BreakPoint: 1 },
    { name: 'work', slide: 4, BreakPoint: 1 },
    { name: 'end', slide: 5, BreakPoint: 1 },
  ];
  const [nowPage, setNowPage] = useState(PageBreakPoint[0]);
  const [pendingPage, setPendingPage] = useState(PageBreakPoint[0].name); // 用來存儲需要導航的目標頁面

  const navigate = useNavigate();
  const next = () => setNowPage(getNextPage);
  const back = () => setNowPage(getBackPage);
  const getNextPage = (prev) => {
    if (prev.name === 'end') return prev;
    const currentIndex = PageBreakPoint.findIndex((page) => page.name === prev.name);
    const maxBreakPoint = PageBreakPoint[currentIndex].BreakPoint;
    if (prev.BreakPoint < maxBreakPoint) {
      return { ...prev, BreakPoint: prev.BreakPoint + 1 };
    } else {
      return { ...PageBreakPoint[currentIndex + 1], BreakPoint: 1 };
    }
  };

  const getBackPage = (prev) => {
    if (prev.name === 'start') return prev;
    if (prev.BreakPoint === 1) {
      const currentIndex = PageBreakPoint.findIndex((page) => page.name === prev.name);
      return { ...PageBreakPoint[currentIndex - 1] };
    } else {
      return {
        ...prev,
        BreakPoint: prev.BreakPoint - 1,
      };
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === '+') {
      next();
    } else if (event.key === '-') {
      back();
    }
  };
  useEffect(() => {
    if (nowPage.name !== pendingPage) {
      setPendingPage(nowPage.name);
      navigate(`/ppt/${nowPage.name}`);
    }
  }, [nowPage, pendingPage, navigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className='PPTLayout h100vh bg-[#CCC]'>
      <header>PPT 模擬操作</header>
      <Outlet context={nowPage} />
      {/* <div>
        <p>目前投影片：{nowPage.name}</p>
        <p>目前 Slide:{nowPage.slide}</p>
        <p>目前 BreakPoint：{nowPage.BreakPoint}</p>
      </div> */}
      <footer>
        <button onClick={back}>上一頁 (-)</button>
        <button onClick={next}>下一頁 (+)</button>
      </footer>
    </div>
  );
};
export default Page;
