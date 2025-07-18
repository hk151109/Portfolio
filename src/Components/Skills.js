import React from "react";

const skillsData = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "Java", "C", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Data Science & ML",
    skills: ["NumPy", "Pandas", "Scikit-learn", "StatsModels", "TensorFlow", "Keras", "PyTorch", "OpenCV"],
  },
  {
    title: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
  },
  {
    title: "AI & NLP",
    skills: ["Hugging Face", "LangChain", "NLTK", "BERT", "RoBERTa"],
  },
  {
    title: "Web Development",
    skills: ["MERN Stack", "Flask", "FastAPI", "REST API", "Streamlit"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL"],
  },
  {
    title: "Cloud & Big Data",
    skills: ["Microsoft Azure", "AWS", "GCP", "Apache Spark"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Jupyter", "Docker", "Figma", "Canva", "PlantUML", "Draw.io", "Notion"],
  },
];

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-center font-bold text-5xl mb-12">SKILLS</h2>

      <div className="space-y-8">
        {skillsData.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
