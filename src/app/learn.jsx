import { Title } from '@/components/myTitle';
import { BackHomeSvg } from '@/components/backHomeSvg';
const Page = () => {
  const aim = [
    { ok: true, content: '了解vite react初始環境' },
    { ok: true, content: '試著寫html內容' },
    { ok: true, content: '引入CSS UI框架' },
    { ok: true, content: '試著寫css變更樣式' },
    { ok: true, content: '試著寫基礎js內容(計數器)' },
    { ok: true, content: '試著切換頁面(仿 vue router)' },
    {
      ok: false,
      content: '模擬 restful api 來處理後端資料(使用 tanstack 完成)',
    },
    { ok: true, content: '完成一個 3 ~ 5分面試履歷自介' },
  ];
  return (
    <div className="h100vh">
      <Title cont="學習目標" />
      <ul className="mylist">
        {aim.map((item, index) => (
          <li
            style={{ fontSize: '18px', fontWeight: 600 }}
            className={` pl-2 py-2 ${
              index % 2 === 1 ? 'c-blue-500' : 'c-gray-500'
            }`}
            key={index}
          >
            <span className="mx-2">{item.ok ? '✔' : '❌'}</span>
            {index}.{item.content}
          </li>
        ))}
      </ul>
      <BackHomeSvg className="cursor-pointer w10 h10 flex-center fixed bottom-10 left-10" />
    </div>
  );
};
export default Page;
