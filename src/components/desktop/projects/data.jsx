const fileType = {
  FOLDER: "folder",
  FILE: "file",
  PYTHON: "python",
  REACT: "react",
  TS: "react-ts",
  NOTEBOOK: "jupyter-notebook",
};
const categories = {
  SDE: "Software Development",
  FRONT: "Frontend Development",
  FULL: "Full Stack Development",
  AIML: "Machine Learning",
  DS: "Data Analysis and Data Science",
  CV: "Computer Vision",
  DSA: "Competitive Programming",
  OFFICE: "Work Projects",
};
const accessType = {
  PUBLIC: "Public",
  PRIVATE: "Private",
};
const sortBy = {
  NAME: "Alphabetical",
  CREATED: "Date Created",
  MODIFIED: "Date Modified",
};
const groupBy = {
  NONE: "None",
  TYPE: "Category",
  TECH_STACK: "Language/Stack",
  ACCESS: "Access",
  STATUS: "Completion Status",
};
const status = {
  SOON: "Coming Soon",
  ACTIVE: "In progress",
  DONE: "Completed",
};
const projects = [
  {
    id: "BUILDNORDERPIZZA",
    fileType: fileType.REACT,
    name: "Build And Order Pizza",
    description: "A simple pizza ordering system built using MERN Stack.",
    githubLink: [
      { link: "", alt: "Frontend Repository" },
      { link: "", alt: "Backend Repository" },
    ],
    status: status.ACTIVE,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FULL],
    techStack: [
      "ReactJS",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "Redux",
      "TailwindCSS",
    ],
  },
  {
    id: "REACT_COMPONENT",
    fileType: fileType.REACT,
    name: "Custom React Component Library",
    description: "A collection of custom React components for personal use.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.ACTIVE,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FRONT],
    techStack: ["ReactJS", "TailwindCSS"],
  },
  {
    id: "CSS_COMPONENTS",
    fileType: fileType.REACT,
    name: "Custom CSS Component Library",
    description:
      "A collection of custom HTML elements with creative and animated styled components.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.ACTIVE,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FRONT],
    techStack: ["HTML", "TailwindCSS", "JavaScript"],
  },
  {
    id: "CHAT_APP",
    fileType: fileType.REACT,
    name: "Real Time Chat Application",
    description:
      "A collection of custom HTML elements with creative and animated styled components.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.SOON,
    access: accessType.PUBLIC,
    categories: [categories?.SDE, categories?.FRONT],
    techStack: ["ReactJS", "Node.js", "Socket.io", "TailwindCSS"],
  },
  {
    id: "RICE_LEAF_DISEASE",
    fileType: fileType.NOTEBOOK,
    name: "Rice Leaf Disease Detection",
    description:
      "A CNN model to detect from the input image if a rice leaf is healthy or infected. If infected, it classifies the disease.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.DONE,
    access: accessType.PRIVATE,
    categories: [categories?.AIML, categories?.CV],
    techStack: ["Python", "Tensorflow", "Keras", "OpenCV"],
  },
  {
    id: "ROUND_WORM",
    fileType: fileType.NOTEBOOK,
    name: "RoundWorm Vitality Prediction",
    description:
      "A transfer learning, image classification model which detects from the microscopic image input where the roundworms are dead or alive.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML, categories?.CV],
    techStack: ["MATLAB", "Transfer Learning", "Image Processing"],
  },
  {
    id: "SPAM_CLASSIFICATION",
    fileType: fileType.PYTHON,
    name: "Email Spam Classification",
    description:
      "A machine learning model to classify the email as spam or not spam from the text content.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML],
    techStack: ["Python", "SVM", "One Hot Encoding"],
  },
  {
    id: "MALARIA",
    fileType: fileType.NOTEBOOK,
    name: "Malaria Cell Detection",
    description:
      "A machine learning model which detects from the microscopic input image if the cell is infected with malaria or not.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML, categories?.CV],
    techStack: ["Python", "OpenCV", "Image Processing", "Random Forest"],
  },
  {
    id: "ATTRITION",
    fileType: fileType.NOTEBOOK,
    name: "Employee Attrition Prediction",
    description:
      "A machine learning model to predict the rate of attrition of employees from company data.",
    githubLink: [{ link: "", alt: "Github Repository" }],
    status: status.DONE,
    access: accessType.PUBLIC,
    categories: [categories?.AIML],
    techStack: ["Python", "Linear Regression", "Regression Model"],
  },
];
