
import { useEffect, useState } from 'react';
import shuffleLetters from 'shuffle-letters';

const mockData = JSON.stringify({
  "success": true,
  "data": [
    {
      "id": 20013,
      "title": "UNIQLO LOGO STORE_1",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20014,
      "title": "UNIQLO LOGO STORE_2",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20015,
      "title": "UNIQLO LOGO STORE_3",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20017,
      "title": "UNIQLO LOGO STORE_4",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20018,
      "title": "UNIQLO LOGO STORE_5",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20019,
      "title": "UNIQLO LOGO STORE_6",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20020,
      "title": "UNIQLO LOGO STORE_7",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20022,
      "title": "UNIQLO LOGO STORE_8",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    },
    {
      "id": 20023,
      "title": "UNIQLO LOGO STORE_9",
      "coverUrl": "/default-project-logo.jpg",
      "desc": [
        {
          "key": "Client",
          "value": "FAST RETAILING CO., LTD.",
        },
        {
          "key": "Total creative direction・Design supervision",
          "value": "Kashiwa Sato",
        },
        {
          "key": "Lead Architect・Architectural Design・Sustainable Design",
          "value": "TAKENAKA CORPORATION",
        },
        {
          "key": "Interior Design",
          "value": "TAKENAKA CORPORATION / NOMURA",
        }
      ]
    }
  ]
});

interface descData {
  key: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  coverUrl: string;
  desc: descData[];
}

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchContent = mockData;

    setProjects(JSON.parse(fetchContent).data);

    setTimeout(() => {
      const items = document.querySelectorAll('.shuffleHead');
      Array.prototype.forEach.call(items, (element) => {
        shuffleLetters(element, {
          fps: 50,
        });
      });
    }, 10);
  }, []);
  
  return projects;
}