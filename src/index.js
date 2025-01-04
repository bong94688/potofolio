import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18에서 변경된 경로
import { Provider } from 'react-redux'; // Redux Provider 추가
import store from './store';
import App from './App';
import './styles/App.css';

// DOM의 root 요소 가져오기
const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.createRoot 및 Redux Provider 사용
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
