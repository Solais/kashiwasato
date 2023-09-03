
import { useEffect, useState } from 'react';

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
    },
    {
      "id": 20024,
      "title": "UNIQLO LOGO STORE_10",
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
      "id": 20025,
      "title": "UNIQLO LOGO STORE_11",
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
      "id": 20026,
      "title": "UNIQLO LOGO STORE_12",
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
      "id": 20027,
      "title": "UNIQLO LOGO STORE_13",
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

let loaded = false;

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

export function useProjects(searchText: string) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const originData = JSON.parse(mockData).data;

    // filter by seach text in title
    if (searchText) {
      const filteredData = originData.filter((d: Project) => d.title.indexOf(searchText) >= 0);
      setProjects(filteredData);
    } else {
      setProjects(originData);
    }

  }, [searchText]);
  
  return projects;
}