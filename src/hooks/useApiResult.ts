import * as UTILS from '../utils';

interface ResultType {
    data: any;
    isPending: boolean;
    isError: boolean;
    tl?: number;
    pl?: number;
}

const useApiResult = (type: string, isPending: boolean, isError: boolean, data: any) => {

    var result: ResultType | any;

    if (!isPending && data.status == 'true') {
        result = { isPending, isError, data: data.data }
    } else if (!isPending && data.status == 'false') {
        result = { isPending: false, isError: true, data: [] }
    } else {
        result = { isPending: true, isError: false, data: [] }
    }

    if (type == 'general') {
        return result;
    }
    else if (type == 'HomeT') {
        return { ...result, tl: result.data.length }
    }
    else if (type == 'HomeTP') {
        return { ...result, tl: result.data.length, pl: UTILS.calcPendList(result.data) }
    }

}

export default useApiResult