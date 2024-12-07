import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import NeonContainer from './components/box/NeonBox';
import TodoBox from './components/box/TodoBox';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NeonContainer>
      <TodoBox />
    </NeonContainer>
  </StrictMode>,
);
