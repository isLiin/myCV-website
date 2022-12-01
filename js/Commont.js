

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
