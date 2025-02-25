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
    imgSrc: "https://github.com/AkritiGhosh/MalariaDetectionML/raw/master/Healthy%20vs%20Infected.png",
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
    imgSrc: "data:image/png;base64,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%0A",
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
    imgSrc: "https://github.com/AkritiGhosh/DeeperSystemAssignment/raw/master/5.jpg",
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
    imgSrc: "https://github.com/AkritiGhosh/HandTracker/raw/main/images/hand-tracker.PNG",
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
    imgSrc: "https://github.com/AkritiGhosh/Gesture-Volume-Controller/raw/main/output.gif",
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
    fileType: fileType?.PDF,
  },
  {
    id: "NN_DL",
    name: "Neural Networks and Deep Learning",
    link: "https://drive.google.com/file/d/1eFVz6xlaDXufYX4YFWsBVX4dpsX5Z5WA/preview",
    by: "DeepLearning.AI | Coursera",
    parentFolder: parentFolder?.CERTIFICATES,
    fileType: fileType?.PDF,
  },
  {
    id: "DS_MATH_DUKE",
    name: "Data Science Math Skills",
    link: "https://drive.google.com/file/d/1MPCIu8QdY4ozk0GSP2rn08BXkBqH7pbF/preview",
    by: "Duke University | Coursera",
    parentFolder: parentFolder?.CERTIFICATES,
    fileType: fileType?.PDF,
  },
  {
    id: "MATLAB",
    name: "MathWorks MATLAB Onramp",
    link: "https://drive.google.com/file/d/14kdQUDs2HS1kNVgzX1GMdx_i5Smwxz19/preview",
    by: "MathWorks",
    parentFolder: parentFolder?.CERTIFICATES,
    fileType: fileType?.PDF,
  },
  {
    id: "MATLAB_DL",
    name: "MathWorks Deep Learning Onramp",
    link: "https://drive.google.com/file/d/1maIOcRtU3g8HSo56OzKX8MSVwAgIs5dZ/preview",
    by: "MathWorks",
    parentFolder: parentFolder?.CERTIFICATES,
    fileType: fileType?.PDF,
    project: {
      id: "ROUND_WORM",
      imgSrc: "https://matlabacademy-content.mathworks.com/4.32.1/R2021a/content/Applications/Projects/Project%20-%20Roundworm%20Vitality/images/alive_b05.jpg",
      fileType: fileType.FILE,
      name: "RoundWorm Vitality Prediction",
      description:
        "A transfer learning, image classification model which detects from the microscopic image input where the roundworms are dead or alive.",
      link: null,
      status: statusProject.DONE,
      access: accessType.PRIVATE,
      categories: [categories?.AIML, categories?.CV],
      techStack: ["MATLAB", "Transfer Learning", "Image Processing"],
    },
  },
];
