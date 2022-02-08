import logo from './logo.svg';
// import './App.css';
import './App.less';
import Main from './page/Main';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './redux-saga/sagas';

import reducer from './redux-saga/reducers'
import { BrowserRouter as Router } from 'react-router-dom';
import router from './router/router';
import MainLayout from './components/MainLayout';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSagas)

// const action = type => store.dispatch({ type })

function App() {
  // const ss = router
  // console.log('file: App.js ~ line 25 ~ ss', ss)
  // debugger
  return (
    <Provider store={store}>
      <MainLayout>
        <Router>
          {router}
        </Router>
      </MainLayout>
      {/* <Main /> */}
    </Provider>
  );
}
store.subscribe(App)
export default App;
