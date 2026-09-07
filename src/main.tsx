import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Main } from 'src/components/pages/main';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container #root not found');
}

createRoot(container).render(
    <StrictMode>
        <Main />
    </StrictMode>,
);
