import { configureStore } from '@reduxjs/toolkit';
import { positionReducer } from './position-slice';

// 슬라이스 또는 리듀서 임포트
// import counterReducer from '../features/counter/counterSlice'; // 예제

const store = configureStore({
  reducer: {
    position: positionReducer,
    // counter: counterReducer,
  },
});

export default store;
