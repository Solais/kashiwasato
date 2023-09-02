'use client'

import styles from './index.module.scss';
import { Project, useProjects } from './useProjects';
import { useState, useEffect } from 'react';
import shuffleLetters from 'shuffle-letters';


export default function Projects() {
  const hoverdRecord: Record<string, boolean> = {};
  const [projectWidth, setProjectWidth] = useState<number | string>();
  const [projectMargin, setProjectMargin] = useState<number>();
  const [containerMargin, setContainerMargin] = useState<number>();

  useEffect(() => {
    reSetWidth();
    window.onresize = reSetWidth;
  }, []);

  const reSetWidth = () => {
    const width = window.innerWidth;
    if (width > 1350) {
      setContainerMargin(80);
      setProjectMargin(65);
      setProjectWidth(Math.floor(((width - 80) - 65 * 4) / 4));
    } else if (width > 1080) {
      setContainerMargin(80);
      setProjectMargin(65);
      setProjectWidth(Math.floor(((width - 80) - 65 * 3) / 3));
    } else if (width > 767) {
      setContainerMargin(20);
      setProjectMargin(20);
      setProjectWidth(Math.floor(((width - 20) - 20 * 2) / 2));
    } else {
      setContainerMargin(0);
      setProjectMargin(0);
      setProjectWidth('100%');
    }
  }

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

  const handleMouseLeave = () => {
    // setIsHovered(false);
  }

  const projects: Project[] = useProjects();

  return (
    <div 
      className={styles.projectContainer}
      style={{
        marginLeft: containerMargin,
      }}
    >
      <div className={styles.projectGroup}>
        {projects.map(project => {
          return (
            <a 
              key={project.id}
              className={styles.project}
              style={{
                width: projectWidth,
                marginRight: projectMargin,
              }}
              onMouseEnter={() => handleMouseEnter(`shuffle-${project.id}`)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={project.coverUrl}/>
              <div className={styles.text}>
                <span
                  id={`shuffle-${project.id}`}
                  className={`${styles.projectName} shuffleHead`}
                >{project.title}</span>
                <div className={styles.projectDesc}>
                  {project.desc.map(d => (<p key={d.key}>{d.key} : {d.value}</p>))}
                  <p className={styles.more}>READ MORE +</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );

}