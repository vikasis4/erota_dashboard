const calcPendList = (array: { shipmentCreated: boolean }[]): number => {
    var num = 0;

    for (let index = 0; index < array.length; index++) {
        if (!array[index].shipmentCreated) {
            num++
        }
    }

    return num
}

export default calcPendList;