export const getDayFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
}

export const getWeekDayFromIndex = (index) => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekDays[index];
}