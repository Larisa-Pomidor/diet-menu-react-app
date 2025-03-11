export const getDayFromDate = (date) => {
    const date = new Date(date);
    return date.getDay();
}