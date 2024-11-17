import dynamic from 'next/dynamic';

const HerbalTinctures = dynamic(() => import('../components/HerbalTinctures'), {
  ssr: false
});

export default function Home() {
  return <HerbalTinctures />;
}
