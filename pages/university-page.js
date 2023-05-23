import { useRouter } from 'next/router';
import Layout from '../components/global/layout';
import InnerPageLayout from '../components/inner-page-layout';

export default function UniversityPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout title={slug}>
      <InnerPageLayout title={slug} />
    </Layout>
  );
}
