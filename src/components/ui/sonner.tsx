import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';
import type { ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'dark' } = useTheme();

  return <Sonner theme={theme as ToasterProps['theme']} {...props} />;
};

export { Toaster };
