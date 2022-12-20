import dynamic from 'next/dynamic';

const DynaComp = dynamic(() => import('../components/CircleComp'), {
  ssr: false,
});

export default function Home() {
  return <DynaComp />;
}
