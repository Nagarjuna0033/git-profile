import './App.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Home from './pages/Home';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster position="top-center" />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
