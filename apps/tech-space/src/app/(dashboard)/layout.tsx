import '@tech-space-ui/css/satoshi.css';
import '@tech-space-ui/css/style.css';
import { DefaultLayout } from '@tech-space/ui';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
