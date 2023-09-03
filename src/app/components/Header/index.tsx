'use client'

import styles from './index.module.scss';
import { useState } from 'react';
import Shuffle from '../Common/Shuffle';

export default function Header({
  onSearchChange,
  onSideMenuChanged,
} : {
  onSearchChange: Function;
  onSideMenuChanged: Function;
}) {
  const [lang, setLang] = useState<string>('ENGLISH');
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const langList = [
    'ENGLISH',
    'JAPANESE',
    'CHINESE',
  ];

  const triggerSideMenu = (on: boolean) => {
    setSideMenu(on);
    onSideMenuChanged(on);
  }

  const handleSearchInput = (event: any) => {
    onSearchChange(event.target.value);
  }

  return (
    <div className={styles.headerBlock}>
      <div className={styles.leftBlock}>
        <a>
          <Shuffle id='shuffle-company' className={styles.name} text="KASHIWA SATO"/>
          <Shuffle id='shuffle-corporation' className={styles.title} text="SAMURAI INC. TOKYO"/>
        </a>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.menu}>
          <ul>
            <li className={styles.current}>
              <a>
                <Shuffle id='shuffle-project' className="" text="PROJECT"/>
              </a>
            </li>
            <li>
              <a>
                <Shuffle id='shuffle-profile' className="" text="PROFILE"/>
              </a>
            </li>
            <li>
              <a>
                <Shuffle id='shuffle-contact' className="" text="CONTACT"/>
              </a>
            </li>
          </ul>
          <ul className={styles.langSwitch}>
            {langList.map(langStr => {
                return (
                  <li
                    key={langStr}
                    className={`${styles[langStr]} ${langStr === lang ? styles.current : ''}`}
                    onClick={() => {
                      setLang(langStr);
                    }}
                  >
                    <a>
                      <Shuffle id={`shuffle-${langStr}`} className="" text={langStr}/>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className={styles.search}>
          <input placeholder="PLEASE INPUT KEYWORD" onChange={handleSearchInput}/>
          <span className={styles.searchBtn}></span>
        </div>
        <a className={styles.menuBtn}>
          {
            sideMenu ?
              <div onClick={() => {
                triggerSideMenu(false)
              }} className={styles.closeMenu}></div> :
              <div onClick={() => {
                triggerSideMenu(true)
              }} className={styles.openMenu}></div>
          }
        </a>
      </div>
      {
        sideMenu ?
          <div className={styles.sideMenu}>
            <ul>
              <li className={styles.current}>PROJECT</li>
              <li>PROFILE</li>
              <li>CONTACT</li>
            </ul>
            <ul className={styles.langPanel}>
              {langList.map(langStr => {
                  return (
                    <li
                      key={`${langStr}-side`}
                      className={`${langStr === lang ? styles.current : ''}`}
                      onClick={() => {
                        setLang(langStr);
                        triggerSideMenu(false);
                      }}
                    >
                      {langStr}
                    </li>
                  );
                })
              }
            </ul>
            <div className={styles.searchBlock}>
              <input placeholder='PLEASE INPUT KEYWORD' onChange={handleSearchInput}/>
              <span onClick={() => triggerSideMenu(false)} className={styles.searchBtn}>SEARCH</span>
            </div>
            <p className={styles.footText}>COPYRIGHT © SAMURAI INC. ALL RIGHTS RESERVED.</p>
          </div> : null
      }
    </div>
  );
}