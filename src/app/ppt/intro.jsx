import { useOutletContext } from 'react-router';
import ttnt from '@/assets/ttnt.png';
import img2 from '@/assets/合華.png';
const Page = () => {
  const nowPage = useOutletContext();
  const contentList = [
    { subTitle: '姓名', cont: '吳尚軒 ( 阿貴 / Adam )' },
    { subTitle: '學歷', cont: '成功大學-航太系 (2016~2020)' },
    {
      subTitle: '工作經驗',
      cont: '台灣客服 (2021-8 ~ 2024-3) 、 合華科技 (2024-3 ~ 2025-1)',
    },
    { subTitle: '前端開發經驗', cont: 'vue 2年 、 react 5天' },
  ];
  return (
    <div className="grid grid-cols-2 hfull p10">
      <div className="content flex flex-col gap-y20">
        {contentList.map((item, index) => (
          <p key={index} className="text-2xl fw500">
            {item.subTitle}: {item.cont}
          </p>
        ))}
      </div>
      <div className="photo h80vh ">
        <img src={ttnt} alt="ttnt" className="" />
        <img src={img2} alt="合華" className="h50%  object-contain" />
      </div>
    </div>
  );
};
export default Page;
