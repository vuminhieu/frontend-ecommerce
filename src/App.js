import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import {defaultLayout} from './components/layouts';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          {
          publicRoutes.map((route, index) => {
          let Layout = defaultLayout
          if (route.layout) {
            Layout = route.layout;
          }
          else if (route.layout === null) {
            Layout = Fragment
          }
          const PageComponent = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout><PageComponent /></Layout>}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
