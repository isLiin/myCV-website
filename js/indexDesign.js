/**
 * @author KhanhHN9
 * @Date 2022/11/15
 */

/**
 * Render infor of me
 * 
 * @returns About me description 
 */
const aboutMe = () => {
    const descriptions = [
        `I want you to see a strong guy who can be applied to the real world of work and bring value
        to the smart people that I can bring together.`,
        `I want to learn more and gain more experience in helping people to grow and develop in the
        form of wormwood and grass that helps everyone as a company.`
    ]
    const groupDesc = document.createElement('ul');
    descriptions.forEach(desc => {
        const itemDesc = document.createElement('li');
        $(itemDesc).html(desc);
        groupDesc.append(itemDesc);
    });
    return groupDesc;
}

/**
 * Render danh sach skill vao component.
 * 
 * @param {*} skills Danh sach skill da hoc
 * @returns Object
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
 */
const educationGroup = (schools) => {
    const educationGroup = document.createElement('div');
    $(educationGroup).attr('id', 'education-me');

    const titleEducation = document.createElement('h2');
    $(titleEducation).attr('class', 'title')
    $(titleEducation).html('Education')
    educationGroup.append(titleEducation);

    schools.forEach(school => {
        educationGroup.append(educationRender(school));
    })

    return educationGroup;
}

/**
 * Component experience working
 * 
 * @returns experienceWorking
 */
 const experienceWorking = () => {
    const experienceWorkingGroup = document.createElement('div');
    $(experienceWorking).attr('id', 'experience-working');

    // Title
    const title = document.createElement('h2');
    $(title).attr('class', 'title');
    $(title).html('experience');
    experienceWorkingGroup.append(title);

    // render experience
    jobsWorking.forEach(job => {
        experienceWorkingGroup.append(workingJobsRender(job));
    });

    return experienceWorkingGroup;
};


/**
 * render list certificate
 * @returns certificateGroup
 */
 const certificateGroup = (certificates) => {
    const certificateGroup = document.createElement('div');
    $(certificateGroup).attr('id', 'certificateGroup');

    // Title
    const title = document.createElement('h2');
    $(title).attr('class', 'title');
    $(title).html('certificate');
    
    // Group images
    const listImgCertificate = document.createElement('div');
    $(listImgCertificate).attr('class', 'd-flex certificate-group');
    
    // render certificate images
    certificates.forEach(certificate => {
        const itemCertificate = document.createElement('img');
        $(itemCertificate).attr('title', certificate.title);
        $(itemCertificate).attr('src', certificate.url);
        listImgCertificate.append(itemCertificate);
    });
    
    certificateGroup.append(title);
    certificateGroup.append(listImgCertificate);

    return certificateGroup;
};

/**
 * child function education
 * 
 * @param {*} school 
 * @returns label school
 */
const educationRender = (school) => {
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
 * child function experience
 * 
 * @param {*} job 
 * @returns label Job
 */
const workingJobsRender = (job) => {
    const experienceWorking = document.createElement('ul');
    const titleExperience = document.createElement('li');
    const timelineExperience = document.createElement('li');
    const discriptionExperience = document.createElement('li');

    $(titleExperience).attr('class', 'title-job')
    $(timelineExperience).attr('class', 'discription-job')

    $(titleExperience).html(job.title);
    $(timelineExperience).html(`${job.subject} : ${job.yearStart} - ${job.yearEnd}`);
    $(discriptionExperience).html(`<em>Discription</em> : ${job.discription}`);

    experienceWorking.append(titleExperience);
    experienceWorking.append(timelineExperience);
    experienceWorking.append(discriptionExperience);
    return experienceWorking;
}

/**
 * child function experience
 * 
 * @returns component Software
 */
const software = () => {
    return `<div id="software-me">
                <h2 class="title">soft ware</h2>
                <div class=" d-flex flex-between container-software">
                    <div class="software-img"><img src="./images/working.png" alt=""></div>
                    <div id="group-skill" class="d-flex group-skill"></div>
                </div>
            </div>`;
}


/**
 * Start
 * @returns GUI
 */
$(document).ready(function () {

    // render about me
    $('.contactor').append(aboutMe);

    // Render education
    $('#root').append(educationGroup(educationsStudy));
    // Render experience working
    $('#root').append(experienceWorking);
    // Render list skill da hoc
    $('#root').append(software());
    renderExperienceSkill(experienceSkills);
    // Render app
    $('#root').append(renderApp(experienceToolAPP));
    // Render certificate
    $('#root').append(certificateGroup(certificates));

    // Them thoi gian lam viec vao contact
    $('.ex-press').html(`${getYear(new Date('2021-09-01'))}.`);
});