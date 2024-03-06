const cutList = (data: any[], page: number) => {
    var starting_point = (page - 1) * 20;
    var ending_point = (page) * 20;
    var newData = data.slice(starting_point, ending_point);
    return newData;
}

export default cutList;