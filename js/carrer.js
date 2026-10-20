function getCareerSuggestion() {

    const interest = document.getElementById("interest").value;
    const skill = document.getElementById("skill").value;
    const goal = document.getElementById("goal").value;

    const result = document.getElementById("careerResult");

    if (interest === "" || skill === "" || goal === "") {

        result.innerHTML = `
            <div class="error-message">
                ⚠️ Please select all the options.
            </div>
        `;

        return;
    }

    let career;
    let description;

    if (interest === "coding" || skill === "programming") {

        career = "Software Developer 💻";

        description =
            "You may enjoy building websites, applications and software systems.";

    }

    else if (interest === "data" || goal === "data") {

        career = "Data Analyst 📊";

        description =
            "You may enjoy working with data, statistics and finding useful insights.";

    }

    else if (interest === "design" || skill === "creative") {

        career = "UI/UX Designer 🎨";

        description =
            "You may enjoy creating attractive and user-friendly digital experiences.";

    }

    else if (interest === "business" || goal === "management") {

        career = "Business / Management Professional 📈";

        description =
            "You may enjoy planning, communication, leadership and business activities.";

    }

    else {

        career = "Software Developer 💻";

        description =
            "Software development can be a good career option based on your selected interests.";

    }

    result.innerHTML = `
        <div class="result-card">

            <span>🤖 CAREERMATE AI RECOMMENDATION</span>

            <h2>${career}</h2>

            <p>${description}</p>

            <div class="recommendation">
                ✅ Recommended based on your interests and skills.
            </div>

        </div>
    `;
}