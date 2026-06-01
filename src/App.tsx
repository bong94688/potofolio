import { Route, Routes } from 'react-router-dom';
import IdeApp from './pages/ide/IdeApp';
import ProjectDetail from './pages/detail/ProjectDetail';
import ReviewDetail from './pages/detail/ReviewDetail';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/review' element={<ReviewDetail />} />
        <Route path='/:name' element={<ProjectDetail />} />
      </Routes>

      <IdeApp />
    </>
  );
}
