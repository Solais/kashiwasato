'use client'

import { Project, useProjects } from '@/app/hooks/useProjects';
import styles from './index.module.scss';
import Shuffle from '../Common/Shuffle';


export default function Projects({
  searchText,
  hideProjects,
}: {
  searchText: string;
  hideProjects: boolean;
}) {

  const projects: Project[] = useProjects(searchText);

  return (
    <div 
      className={styles.projectContainer}
    >
      {
        hideProjects ? null :
        <div className={styles.projectGroup}>
          {projects.map(project => {
            return (
              <a 
                key={project.id}
                className={styles.project}
              >
                <img src={project.coverUrl}/>
                <Shuffle id={`shuffle-${project.id}`} className={styles.projectName} text={project.title}/>
                <div className={styles.text}>
                  <div className={styles.projectDesc}>
                    {project.desc.map(d => (<p key={d.key}>{d.key} : {d.value}</p>))}
                    <p className={styles.more}>READ MORE +</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      }
    </div>
  );

}