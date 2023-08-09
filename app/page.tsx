'use client';

import { useRouter } from 'next/navigation';

import { HomeTemplate } from '@/components';
import { getAnimals } from '@/helpers/local-storage-helper';

const Home = () => {
  const { push } = useRouter();

  return <HomeTemplate animals={getAnimals()} startCreating={() => push('add')} />;
};

export default Home;
