import './App.less';
// import './style/styles.sass'
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
function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Router>
          {router}
        </Router>
      </MainLayout>
    </Provider>
  );
}
store.subscribe(App)
export default App;
