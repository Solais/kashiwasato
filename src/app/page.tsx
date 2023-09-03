'use client'

import Header from './components/Header';
import Projects from './components/Projects';
import { useState } from 'react';

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [sideMenuOn, setSideMenuOn] = useState<boolean>(false);

  return (
    <main className="">
      <Header onSearchChange={setSearchText} onSideMenuChanged={setSideMenuOn}/>
      <Projects searchText={searchText} hideProjects={sideMenuOn}/>
    </main>
  )
}
