export interface SkillIcon {
  icon: string;
  label: string;
  color?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  variant: "P" | "C" | "G";
  icons: SkillIcon[];
  textSkills?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "RPA Environment",
    variant: "P",
    icons: [
      { icon: "devicon-android-plain", label: "UIPath" },
      { icon: "devicon-visualbasic-plain", label: "VB.NET" },
      { icon: "devicon-visualbasic-plain", label: "VB.NET" },
      { icon: "devicon-python-plain colored", label: "Python" },
      { icon: "devicon-azuresqldatabase-plain colored", label: "MS SQL Database" },
      { icon: "devicon-postgresql-plain colored", label: "PG SQL" },
      { icon: "devicon-powershell-plain colored", label: "PowerShell" },
      { icon: "devicon-azure-plain", label: "Azure Portal" },
      { icon: "devicon-html5-plain colored", label: "HTML5" },
      { icon: "devicon-slack-plain colored", label: "Slack" },
      { icon: "devicon-elasticsearch-plain-wordmark colored", label: "ELK Stack" },
      { icon: "devicon-json-plain colored", label: "JSON" },


    ],
  },
  {
    id: "aiml",
    label: "ai / ml",
    variant: "C",
    icons: [
      { icon: "devicon-python-plain colored", label: "Python" },
      { icon: "devicon-pytorch-original colored", label: "PyTorch" },
      { icon: "devicon-tensorflow-original colored", label: "TensorFlow" },
      { icon: "devicon-jupyter-plain colored", label: "Jupyter" },
      { icon: "devicon-numpy-plain colored", label: "NumPy" },
      { icon: "devicon-pandas-plain colored", label: "Pandas" },
      { icon: "devicon-keras-plain colored", label: "Keras" },
      { icon: "devicon-opencv-plain colored", label: "OpenCV" },
      { icon: "devicon-matplotlib-plain", label: "MatplotLib" },
      { icon: "devicon-fastapi-plain", label: "Fast API" },
    ],
  },
  {
    id: "styling",
    label: "Cloud Services",
    variant: "G",
    icons: [
      { icon: "devicon-amazonwebservices-plain-wordmark colored", label: "AWS" },
      { icon: "devicon-googlecloud-plain-wordmark colored", label: "GCP" },
      { icon: "devicon-microsoftazure-plain-wordmark colored", label: "Azure" },
      { icon: "devicon-gitlab-plain colored", label: "GitLab" },
      { icon: "devicon-github-original", label: "GitHub" }

    ],
  },
  {
    id: "tooling",
    label: "tooling & build",
    variant: "G",
    icons: [
      { icon: "devicon-microsoftsqlserver-plain-wordmark", label: "SSMS" },
      { icon: "devicon-vscode-plain colored", label: "VS Code" },
      { icon: "devicon-anaconda-original", label: "Anaconda" },
      { icon: "devicon-docker-plain colored", label: "Docker" },
      { icon: "devicon-git-plain colored", label: "Git" },
      { icon: "devicon-postgresql-plain", label: "POSTGRE SQL" },
      { icon: "devicon-jira-plain colored", label: "Jira" },
      { icon: "devicon-jenkins-line colored", label: "Jenkins" },
      { icon: "devicon-gulp-plain colored", label: "Gulp" },
      { icon: "devicon-grunt-plain colored", label: "Grunt" },

    ],
  },
  {
    id: "testing",
    label: "testing",
    variant: "G",
    icons: [

      { icon: "devicon-github-original", label: "GitHub", color: "#888" },

    ],
  },
  {
    id: "libraries",
    label: "libraries & backend",
    variant: "G",
    icons: [

      { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
      { icon: "devicon-postman-plain colored", label: "Postman" },

    ],
  },
];
