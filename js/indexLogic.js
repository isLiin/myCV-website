
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
    const groupApp = document.createElement('div');
    $(groupApp).attr('id', 'tool-app');

    apps.forEach(app => {
        const itemImage = document.createElement('img');
        $(itemImage).attr('src', app.icon);
        $(itemImage).attr('alt', app.titleName);
        groupApp.append(itemImage);
    });
    return groupApp;
}

/**
 * render education
 * 
 * @returns education
 * @author KhanhHN9
 */
const educationGroup = (schools) => {
    const educationGroup = document.createElement('div');
    $(educationGroup).attr('id', 'education-me');

    const titleEducation = document.createElement('h2');
    $(titleEducation).attr('class', 'title')
    $(titleEducation).html('Education')
    educationGroup.append(titleEducation);
    
    schools.forEach(school => {
        educationGroup.append(education(school));
    })

    return educationGroup;
}

/**
 * child function education
 * 
 * @param {*} school 
 */
const education = (school) =>{
    const schoolEducation = document.createElement('ul');
    const titleSchool = document.createElement('li');
    const discriptionSchool = document.createElement('li');

    $(titleSchool).attr('class', 'title-edu')
    $(discriptionSchool).attr('class', 'discription-edu')

    $(titleSchool).html(school.title);
    $(discriptionSchool).html(`${school.yearStart} - ${school.yearEnd} : ${school.subject}`);

    schoolEducation.append(titleSchool);
    schoolEducation.append(discriptionSchool);
    return schoolEducation;
}

/**
 * Start
 * @author KhanhHN9
 */
$(document).ready(function () {

    // My name
    $('.userName').html('Hồ Ngọc Khánh')

    // Them thoi gian lam viec vao contact
    $('#ex-press').html(`${getYear(new Date('2021-01-07'))}.`);

    // Render list skill da hoc
    renderExperienceSkill(experienceSkills);

    // Render app
    $('#root').append(renderApp(experienceToolAPP));
    // Render education
    $('#root').append(educationGroup(educationsStudy));
});