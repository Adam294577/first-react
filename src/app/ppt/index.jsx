import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';
import { BackHomeSvg } from '@/components/backHomeSvg';
import { FullScreenSvg } from '@/components/FullScreenSvg';
import { Title } from '@/components/myTitle';
const Page = () => {
  const PageBreakPoint = [
    { title: '', name: 'start', slide: 1, BreakPoint: 1 },
    { title: '自我介紹', name: 'intro', slide: 2, BreakPoint: 1 },
    { title: '工作專案', name: 'work', slide: 3, BreakPoint: 2 },
    { title: '', name: 'end', slide: 4, BreakPoint: 1 },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const nowPath = location.pathname.split('/').pop();
  const [nowPage, setNowPage] = useState(
    {
      ...PageBreakPoint.find((page) => page.name === nowPath),
      BreakPoint: 1,
    } || PageBreakPoint[0]
  );
  const [pendingPage, setPendingPage] = useState(
    PageBreakPoint.find((page) => page.name === nowPath)?.name ||
      PageBreakPoint[0].name
  );

  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };
  const next = () => setNowPage(getNextPage);
  const back = () => setNowPage(getBackPage);
  const getNextPage = (prev) => {
    if (prev.name === 'end') return prev;
    const currentIndex = PageBreakPoint.findIndex(
      (page) => page.name === prev.name
    );
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
      const currentIndex = PageBreakPoint.findIndex(
        (page) => page.name === prev.name
      );
      return { ...PageBreakPoint[currentIndex - 1] };
    } else {
      return {
        ...prev,
        BreakPoint: prev.BreakPoint - 1,
      };
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'F11') {
      e.preventDefault();
      const element = document.documentElement;
      if (element) {
        element.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
    if (['ArrowRight', '+'].includes(e.key)) {
      e.preventDefault();
      next();
    } else if (['ArrowLeft', '-'].includes(e.key)) {
      e.preventDefault();
      back();
    }
  };
  useEffect(() => {
    const nowPath = location.pathname.split('/').pop();
    const isValidPath = PageBreakPoint.some((point) => point.name === nowPath);
    if (!isValidPath) {
      setPendingPage(nowPage.name);
      navigate('/ppt/start');
    }
    if (nowPage.name !== pendingPage) {
      setPendingPage(nowPage.name);
      navigate(`/ppt/${nowPage.name}`);
    }
  }, [nowPage, pendingPage, navigate, location]);

  useEffect(() => {
    addEventListener('keydown', handleKeyDown);
    addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      removeEventListener('keydown', handleKeyDown);
      removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  return (
    <div
      className={`PPTLayout h100vh bg-[#FFF] select-none overflow-hidden ${
        isFullscreen ? 'cursor-none' : ''
      }`}
    >
      <header className='h-10vh flex-center'>
        <Title cont={nowPage.title} addClass='fw600 text-5xl' />
      </header>
      <div className={`overflow-hidden  ${isFullscreen ? 'h90vh' : 'h80vh'}`}>
        <Outlet context={nowPage} />
      </div>
      {!isFullscreen && (
        <footer className='h10vh  flex justify-between items-center px-8 bg-gradient-to-t bg-gradient from-[#FFF] to-[#00000010]'>
          <BackHomeSvg className='cursor-pointer w10 h10 flex-center' />
          <FullScreenSvg className='cursor-pointer w10 h10 flex-center' />
        </footer>
      )}
    </div>
  );
};
export default Page;
