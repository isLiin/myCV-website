
/**
 * Tinh so nam kinh nghiem lam viec
 */
const getYear = (date) => {
    const milliseconds = 1000;
    const seconds = 60;
    const minutes = 60;
    const hours = 24;
    const days = 1;

    // Tong so giay trong 1 ngay
    const sumMillisecondsADays = days * hours * minutes * seconds * milliseconds;

    // Tinh khoang cach ngay bat dau den bay gio 
    const calYear = (Math.ceil((new Date - date) / sumMillisecondsADays) / 365).toFixed(1);

    return `${calYear} years experience`;
};

/**
 * Commont skill
 */
const experienceSkill = {
    'html'          : getYear(new Date('2019-08-01')),
    'css'           : getYear(new Date('2019-08-07')),
    'jquery'        : getYear(new Date('2020-05-07')),
    'sql'           : getYear(new Date('2020-01-07')),
    'java'          : getYear(new Date('2020-01-07')),
    'javascript'    : getYear(new Date('2021-01-07')),
    'java'          : getYear(new Date('2021-01-07')),
    'java'          : getYear(new Date('2021-01-07'))
}


$(document).ready(function () {

    // My name
    $('.userName').html('Hồ Ngọc Khánh')

    // Them thoi gian lam viec vao contact
    $('#ex-press').html(getYear(new Date('2021-01-07')));

    // Append so nam kinh nghiem vao skill
    $('.experience-html').html(`${experienceSkill.html}`)
    $('.experience-css').html(`${experienceSkill.css}`)
    $('.experience-java').html(`${experienceSkill.java}`)
    $('.experience-jquery').html(`${experienceSkill.jquery}`)
    $('.experience-javascript').html(`${experienceSkill.javascript}`)

});