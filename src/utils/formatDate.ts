const formatDate = (date: Date): string => {

    var newDate = new Date(date);
    var days = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];    

    return days[newDate.getDay()] + ' - ' + newDate.getDate() + ' / ' + newDate.getMonth() + 1 + ' / ' + newDate.getFullYear() + ' ~ ' + newDate.getHours() + ':' + newDate.getMinutes()
}

export default formatDate