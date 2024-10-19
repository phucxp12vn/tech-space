import type { AppProps } from 'next/app';

import { DefaultLayout } from '@tech-space/ui';
import '@tech-space-ui/css/satoshi.css';
import '@tech-space-ui/css/style.css';
import { menuGroups } from '../const/menu';

export default function App({ Component, pageProps, router }: AppProps) {
  // Automatically apply layout for any routes under '/dashboard'
  const isDashboardRoute = router.pathname.startsWith('/dashboard');

  // Apply MyLayout only to dashboard routes
  if (isDashboardRoute) {
    return (
      <DefaultLayout menuGroups={menuGroups}>
        <Component {...pageProps} />
      </DefaultLayout>
    );
  }

  return <Component {...pageProps} />;
}
