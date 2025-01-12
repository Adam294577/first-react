import { Routes, Route } from 'react-router';
import Home from './home';
import User from './user';
import UserList from './userlist';
import Learn from './learn';
import Count from './count';
import NotFound from './NotFound';
// PPT
import PPTLayout from './ppt';
import Start from './ppt/start';
import Intro from './ppt/intro';
import Work from './ppt/work';
import End from './ppt/end';

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/count' element={<Count />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/user:userName' element={<User />} />
        <Route path='/ppt' element={<PPTLayout />}>
          <Route index path='start' element={<Start />} />
          <Route path='intro' element={<Intro />} />
          <Route path='work' element={<Work />} />
          <Route path='end' element={<End />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
