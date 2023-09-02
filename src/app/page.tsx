'use client'

import Header from './components/Header';
import Projects from './components/Projects';
import { useState } from 'react';

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <main className="">
      <Header onSearchChange={setSearchText}/>
      <Projects searchText={searchText}/>
    </main>
  )
}
