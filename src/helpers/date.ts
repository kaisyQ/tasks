export const getDateString = (date: Date) : string => {

    const now = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();


    if (now.getDate() === day && now.getMonth() === month && now.getFullYear() === year) {
        
        const dHours = now.getHours() - hours;
        const dMinutes = now.getMinutes() - minutes;

        if (dHours) return `${dHours} hour ago`;

        if (dMinutes) return `${dMinutes} min ago`;

        return 'now';
    }
    
    return `
        ${day < 10 ? `0${day}`: day} ${month+1 < 10 ? `0${month+1}`: month+1} ${year}; 
        ${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}
    `
}