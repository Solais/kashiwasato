'use client'

import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import shuffleLetters from 'shuffle-letters';

export default function Header() {
  const [lang, setLang] = useState<string>('ENGLISH');
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const hoverdRecord: Record<string, boolean> = {};
  const langList = [
    'ENGLISH',
    'JAPANESE',
    'CHINESE',
  ];

  const handleMouseEnter = (id: string) => {
    const isHovered = !!hoverdRecord[id];
    if (!isHovered) {
      hoverdRecord[id] = true;
      const targetDom = document.querySelector(`#${id}`);
      shuffleLetters(targetDom, {
        fps: 100,
        onComplete: () => {
          hoverdRecord[id] = false;
        }
      });
    }
  }

  useEffect(() => {
    const items = document.querySelectorAll('.shuffle');
    Array.prototype.forEach.call(items, (element) => {
      shuffleLetters(element, {
        fps: 50,
      });
    });
  }, []);

  return (
    <div className={styles.headerBlock}>
      <div className={styles.leftBlock}>
        <a>
          <span 
            className={`${styles.name} shuffle`}
            id={`shuffle-company`}
            onMouseEnter={() => handleMouseEnter(`shuffle-company`)}
          >KASHIWA SATO</span>
          <span
            className={`${styles.title} shuffle`}
            id={`shuffle-corporation`}
            onMouseEnter={() => handleMouseEnter(`shuffle-corporation`)}
          >SAMURAI INC. TOKYO</span>
        </a>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.menu}>
          <ul>
            <li className={styles.current}>
              <a>
                <span
                  id="shuffle-project" 
                  className="shuffle"
                  onMouseEnter={() => handleMouseEnter('shuffle-project')}
                >PROJECT</span>
              </a>
            </li>
            <li>
              <a>
                <span
                  id="shuffle-profile" 
                  className="shuffle"
                  onMouseEnter={() => handleMouseEnter('shuffle-profile')}
                >PROFILE</span>
              </a>
            </li>
            <li>
              <a>
                <span
                  id="shuffle-contact" 
                  className="shuffle"
                  onMouseEnter={() => handleMouseEnter('shuffle-contact')}
                >CONTACT</span>
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
                      <span
                        id={`shuffle-${langStr}`}
                        className="shuffle"
                        onMouseEnter={() => handleMouseEnter(`shuffle-${langStr}`)}
                      >{langStr}</span>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className={styles.search}>
          <input placeholder="PLEASE INPUT KEYWORD" />
          <span className={styles.searchBtn}></span>
        </div>
        <a className={styles.menuBtn}>
          {
            sideMenu ?
              <div onClick={() => {
                setSideMenu(false)
              }} className={styles.closeMenu}></div> :
              <div onClick={() => {
                setSideMenu(true)
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
                        setSideMenu(false);
                      }}
                    >
                      {langStr}
                    </li>
                  );
                })
              }
            </ul>
            <div className={styles.searchBlock}>
              <input placeholder='PLEASE INPUT KEYWORD'/>
              <span className={styles.searchBtn}>SEARCH</span>
            </div>
            <p className={styles.footText}>COPYRIGHT © SAMURAI INC. ALL RIGHTS RESERVED.</p>
          </div> : null
      }
    </div>
  );
}