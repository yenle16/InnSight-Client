
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes,protectedRoutes } from './routes/MainRouter';
import initStore from './redux/store';
import "./Common.scss";
import { ProtectedRoute } from './routes/ProtectedRoute';
import MainLayout from './shared/components/layout/MainLayout';
import { Fragment } from 'react';
const store = initStore()
function App() {
  const user = true;
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Routes>
            {
              publicRoutes.map((route, index) => {
                const Page = route.component;
                const Layout = route.layout;
                return <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              })
            }
             {protectedRoutes.map((route, index) => {
                let Layout = MainLayout;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }

                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <route.layout>
                        <ProtectedRoute user={user}>
                          <route.component />
                        </ProtectedRoute>
                      </route.layout>
                    }
                  />
                );
              })}
            
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
