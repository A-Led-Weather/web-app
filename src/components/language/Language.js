import React, { useState } from "react";

const messages = {
    french: {
        title: "Mon site web",
        language: "Langue",
        buttonText: "Français",
        switchLanguage: "Anglais"
    },
    english: {
        title: "My website",
        language: "Language",
        buttonText: "English",
        switchLanguage: "French"
    }
};

const Language = () => {
    const [language, setLanguage] = useState("french");

    const switchLanguage = () => {
        setLanguage(language === "french" ? "english" : "french");
    };

    const { title, language: languageText, buttonText, switchLanguage: switchLanguageText } = messages[language];

    return (
        <div>
            <h1>{title}</h1>
            <p>{languageText}: {buttonText}</p>
            <button onClick={switchLanguage}>{switchLanguageText}</button>
        </div>
    );
};

export default Language;