import React from "react";

import "./Skillset.scss";

const Skillset = (content) => {
  const languageList = content.content[0].Languages;
  const programmingList = content.content[1].Programming;

  return (
    <div className="skillset-div">
      <div className="programming-list-div">
        {programmingList.map((skill, index) => (
          <div className="programming-level-div" key={index}>
            <p className="programming-level">{skill.level}</p>
            {skill.skills.map((item, index) => (
              <i key={index} className="programming-skill">
                {item}
              </i>
            ))}
          </div>
        ))}
      </div>

      <div className="language-list-div">
        <p className="language-title"> Languages </p>
        {languageList.map((language, index) => (
          <div className="language-div" key={index}>
            <p className="language-name">{language.language}</p>
            <p className="language-separator">-</p>
            <p className="language-proficiency">{language.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
