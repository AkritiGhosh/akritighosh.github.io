export const fileType = {
  FOLDER: "folder",
  FILE: "file",
  PYTHON: "python",
  REACT: "react",
  NOTEBOOK: "jupyter-notebook",
  PDF: "pdf",
};

export const parentFolder = {
  PERSONAL: "PERSONAL",
  //   OFFICE: "OFFICE",
  CERTIFICATES: "CERTIFICATES",
  RESEARCH: "RESEARCH",
  COMPETITIVE: "COMPETITIVE",
};

export const categories = {
  SDE: "Software Development",
  FRONT: "Frontend Development",
  FULL: "Full Stack Development",
  AIML: "Machine Learning",
  DS: "Data Analysis and Data Science",
  CV: "Computer Vision",
  DSA: "Competitive Programming",
};
export const accessType = {
  PUBLIC: "Public",
  PRIVATE: "Private",
};
export const sortBy = {
  NAME: "Alphabetical",
  CREATED: "Date Created",
  MODIFIED: "Date Modified",
};
export const groupBy = {
  NONE: "None",
  TYPE: "Type",
  CATEGORY: "Category",
  TECH_STACK: "Language/Stack",
  ACCESS: "Access",
  STATUS: "Completion Status",
};
export const statusProject = {
  SOON: "Coming Soon",
  ACTIVE: "In progress",
  DONE: "Completed",
};
export const folders = [
  {
    id: "PERSONAL",
    title: "Personal Projects",
    description:
      "Notable projects I have worked on in my free time, for practice and upskilling.",
  },
  //   {
  //     id: "OFFICE",
  //     title: "Commercial Projects",
  //     description: "Professional projects I have worked on.",
  //   },
  {
    id: "CERTIFICATES",
    title: "Certifications",
    description: "Certifications acquired from varied workshops and MOOCs",
  },
  ,
  {
    id: "RESEARCH",
    title: "Research Projects",
    description: "Projects I have worked for academic purpose.",
  },
  {
    id: "COMPETITIVE",
    title: "Competitive Programming",
    description:
      "Coding competitions, assessments and challenges I have participated in, on multiple platform.",
  },
];
export const projects = [
  {
    id: "BUILDNORDERPIZZA",
    imgSrc: null,
    fileType: fileType.REACT,
    parentFolder: parentFolder?.PERSONAL,
    name: "Build And Order Pizza",
    description: "A simple pizza ordering system built using MERN Stack.",
    link: [
      {
        link: "https://github.com/AkritiGhosh/BuildNOrderPizza-Frontend",
        alt: "Frontend Repository",
      },
      {
        link: "https://github.com/AkritiGhosh/BuildNOrderPizza-Backend",
        alt: "Backend Repository",
      },
    ],
    status: statusProject.ACTIVE,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FULL],
    techStack: [
      "ReactJS",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "Redux",
      "TailwindCSS",
      "TypeScript",
    ],
  },
  {
    id: "REACT_COMPONENT",
    imgSrc: null,
    fileType: fileType.REACT,
    parentFolder: parentFolder?.PERSONAL,
    name: "Custom React Component Library",
    description: "A collection of custom React components for personal use.",
    link: [
      {
        link: "https://github.com/AkritiGhosh/ReactLibrary",
        alt: "Github Repository",
      },
    ],
    status: statusProject.ACTIVE,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FRONT],
    techStack: ["ReactJS", "TailwindCSS"],
  },
  {
    id: "CSS_COMPONENTS",
    imgSrc: null,
    fileType: fileType.REACT,
    parentFolder: parentFolder?.PERSONAL,
    name: "Custom CSS Component Library",
    description:
      "A collection of custom HTML elements with creative and animated styled components.",
    link: [
      {
        link: "https://github.com/AkritiGhosh/UI-Components",
        alt: "Github Repository",
      },
    ],
    status: statusProject.ACTIVE,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FRONT],
    techStack: ["HTML", "TailwindCSS", "JavaScript"],
  },
  {
    id: "CHAT_APP",
    imgSrc: null,
    fileType: fileType.REACT,
    parentFolder: parentFolder?.PERSONAL,
    name: "Real Time Chat Application",
    description:
      "A collection of custom HTML elements with creative and animated styled components.",
    link: [
      {
        link: "https://github.com/AkritiGhosh/Babbel",
        alt: "Github Repository",
      },
    ],
    status: statusProject.SOON,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FRONT],
    techStack: ["ReactJS", "Node.js", "Socket.io", "TailwindCSS"],
  },

  {
    id: "SPAM_CLASSIFICATION",
    imgSrc: null,
    fileType: fileType.PYTHON,
    parentFolder: parentFolder?.PERSONAL,
    name: "Email Spam Classification",
    description:
      "A machine learning model to classify the email as spam or not spam from the text content.",
    link: [
      {
        link: "https://github.com/AkritiGhosh/Email-Spam-Classification",
        alt: "Github Repository",
      },
    ],
    status: statusProject.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML],
    techStack: ["Python", "SVM", "One Hot Encoding"],
  },
  {
    id: "MALARIA",
    imgSrc: null,
    fileType: fileType.PYTHON,
    parentFolder: parentFolder?.PERSONAL,
    name: "Malaria Cell Detection",
    description:
      "A machine learning model which detects from the microscopic input image if the cell is infected with malaria or not.",
    link: [{ link: "", alt: "Github Repository" }],
    status: statusProject.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML, categories?.CV],
    techStack: ["Python", "OpenCV", "Image Processing", "Random Forest"],
  },
  {
    id: "ATTRITION",
    imgSrc: null,
    fileType: fileType.NOTEBOOK,
    parentFolder: parentFolder?.COMPETITIVE,
    name: "Employee Attrition Prediction",
    competition:
      "https://www.hackerearth.com/challenges/new/competitive/hackerearth-machine-learning-challenge-predict-employee-attrition-rate/",
    description:
      "A machine learning model to predict the rate of attrition of employees from company data.",
    link: [
      {
        link: "https://github.com/AkritiGhosh/MLRegressionChallenge_HackerEarth",
        alt: "Github Repository",
      },
    ],
    status: statusProject.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML, categories?.DSA],
    techStack: ["Python", "Linear Regression", "Regression Model"],
  },
  {
    id: "FACE_ROTATION",
    imgSrc: null,
    fileType: fileType.NOTEBOOK,
    parentFolder: parentFolder?.COMPETITIVE,
    competition: "Private Assessment",
    name: "Face Rotation Prediction",
    description:
      "A CNN model to predict the angle of face rotation from the input image and correct it.",
    link: [{ link: "", alt: "Github Repository" }],
    status: statusProject.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML, categories?.CV],
    techStack: [
      "Python",
      "OpenCV",
      "Image Classification",
      "Image Processing",
      "Tensorflow",
    ],
  },
  {
    id: "HAND_TRACKER",
    imgSrc: null,
    fileType: fileType.PYTHON,
    parentFolder: parentFolder?.PERSONAL,
    name: "Hand Tracking",
    description:
      "Tracks the position and movements of human hand in real time.",
    link: [
      {
        link: "https://github.com/AkritiGhosh/HandTracker",
        alt: "Github Repository",
      },
    ],
    status: statusProject.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.CV],
    techStack: ["Python", "OpenCV", "Image Processing", "MediaPipe"],
  },
  {
    id: "GESTURE_VOLUME",
    imgSrc: null,
    fileType: fileType.PYTHON,
    parentFolder: parentFolder?.PERSONAL,
    name: "Control desktop volume with hand gestures",
    description:
      "Control the volume of the desktop with hand gestures in real time.",
    link: [{ link: "", alt: "Github Repository" }],
    status: statusProject.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.CV],
    techStack: ["Python", "OpenCV", "Image Processing", "MediaPipe"],
  },
  ,
  {
    id: "RICE_LEAF_DISEASE",
    imgSrc: null,
    fileType: fileType.PDF,
    parentFolder: parentFolder?.RESEARCH,
    name: "Rice Leaf Disease Detection",
    description:
      "A CNN model to detect from the input image if a rice leaf is healthy or infected. If infected, it classifies the disease.",
    link: [
      {
        link: "https://drive.google.com/file/d/1Tn53cCBfuKC9wK3qoZKuYA1Ts_wkrYg6/view?usp=sharing",
        alt: "Report",
      },
    ],
    status: statusProject.DONE,
    access: accessType.PRIVATE,
    categories: [categories?.AIML, categories?.CV],
    techStack: ["Python", "Tensorflow", "Keras", "OpenCV"],
  },
  {
    id: "STANFORD_ML",
    name: "Machine Learning",
    link: "https://drive.google.com/file/d/1dA2dfN3d0MSStsOPejm_0MPW8loMIwSA/preview",
    by: "Stanford Online | Coursera",
    parentFolder: parentFolder?.CERTIFICATES,
  },
  {
    id: "NN_DL",
    name: "DeepLearning.AI Neural Networks and Deep Learning",
    link: "https://drive.google.com/file/d/1eFVz6xlaDXufYX4YFWsBVX4dpsX5Z5WA/preview",
    by: "DeepLearning.AI | Coursera",
    parentFolder: parentFolder?.CERTIFICATES,
  },
  {
    id: "DS_MATH_DUKE",
    name: "Data Science Math Skills",
    link: "https://drive.google.com/file/d/1MPCIu8QdY4ozk0GSP2rn08BXkBqH7pbF/preview",
    by: "Duke University | Coursera",
    parentFolder: parentFolder?.CERTIFICATES,
  },
  {
    id: "MATLAB",
    name: "MathWorks MATLAB Onramp",
    link: "https://drive.google.com/file/d/14kdQUDs2HS1kNVgzX1GMdx_i5Smwxz19/preview",
    by: "MathWorks",
    parentFolder: parentFolder?.CERTIFICATES,
  },
  {
    id: "MATLAB_DL",
    name: "MathWorks Deep Learning Onramp",
    link: "https://drive.google.com/file/d/1maIOcRtU3g8HSo56OzKX8MSVwAgIs5dZ/preview",
    by: "MathWorks",
    parentFolder: parentFolder?.CERTIFICATES,
    project: {
      id: "ROUND_WORM",
      imgSrc: null,
      fileType: fileType.FILE,
      name: "RoundWorm Vitality Prediction",
      description:
        "A transfer learning, image classification model which detects from the microscopic image input where the roundworms are dead or alive.",
      link: null,
      status: statusProject.DONE,
      access: accessType.PUBLIC,
      categories: [categories?.AIML, categories?.CV],
      techStack: ["MATLAB", "Transfer Learning", "Image Processing"],
    },
  },
];
