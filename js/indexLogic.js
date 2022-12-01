
/**
 * Render danh sach skill vao component.
 * 
 * @param {*} skills Danh sach skill da hoc
 * @returns Object
 * @author KhanhHN9
 */
const renderExperienceSkill = (skills) => {
    const groupSkill = $('#group-skill');
    const groupSkillTech = document.createElement('div');
    const groupFramework = document.createElement('div');

    $(groupSkillTech).attr('id', 'skill-tech');
    $(groupFramework).attr('id', 'skill-framework');

    $(groupSkillTech).append(`<h3>Language</h3>`);
    $(groupFramework).append(`<h3>Framework</h3>`);

    skills.forEach(skill => {

        const item = `  <div class="d-flex software-skill">
                            <div class="skill">
                                ${skill.icon}
                                ${skill.titleName}
                            </div>
                            <div class="experience-${skill.titleName}">
                                ${skill.experience}.
                            </div>
                        </div>`;

        (skill.type === "language") ? $(groupSkillTech).append(item) : $(groupFramework).append(item);
    });

    // Add component
    groupSkill.append(groupSkillTech);
    groupSkill.append(groupFramework);

    return groupSkill;
}

/**
 * Render danh sach app da qua su dung
 * 
 * @param {*} apps Danh sach app da qua su dung
 * @returns GroupApp
 * @author KhanhHN9
 */
const renderApp = (apps) => {
    const groupApp = $('#tool-app');


    apps.forEach(app => {
        const item = `<img src="${app.icon}" alt="${app.titleName}">`;
        groupApp.append(item);
    });
    // <marquee width="100%" height="100%" direction="right">
    //         </marquee>

    return groupApp;
}


/**
 * Start
 * @author KhanhHN9
 */
$(document).ready(function () {

    // My name
    $('.userName').html('Hồ Ngọc Khánh')

    // Them thoi gian lam viec vao contact
    $('#ex-press').html(`${getYear(new Date('2021-01-07'))} real.`);

    // Render list skill da hoc
    renderExperienceSkill(experienceSkills);

    // Render list app
    renderApp(experienceToolAPP);
});