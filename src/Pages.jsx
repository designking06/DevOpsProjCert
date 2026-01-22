import Home from './pages/Home';
import ToDo from './pages/ToDo';

const Pages = [
  {path: '/', name: 'Home', element: <Home />},
  {path: '/todo', name: 'To Do List', element: <ToDo />}
  // Add more pages here later
];
export default Pages;