import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from './feature/api/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Provider>
);