'use client';

import { CreateArticleCC } from '@/features/article/CreateArticleCC';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <CreateArticleCC />
    </React.Fragment>
  );
};

export default Home;
