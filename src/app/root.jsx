import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <header>Global Header</header>
      <main>
        5207
        <Outlet /> {/* 子路由的內容將渲染在這裡 */}
      </main>
      <footer>Global Footer</footer>
    </div>
  );
}
