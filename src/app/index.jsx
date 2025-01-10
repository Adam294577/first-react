import { Routes, Route } from 'react-router';
import Home from './home';
import User from './user';
import UserList from './userlist';
import Learn from './learn';
import Count from './count';
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/count' element={<Count />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='user'>
          <Route path=':userName' element={<User />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
