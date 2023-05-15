export const cutText = (text, limit) => {
    text = text.trim();
    if( text.length <= limit) return text;
    text = text.slice(0, limit);
    return text.trim();
}

export const checkName = (nameOne, nameTwo, nameThree) => {
    return ((nameOne ?? nameTwo) ?? nameThree) ?? "No name";
}

export const getSubArraysFromArray = (array, sizeSubArray) => {
    let subarray = [];
    for (let i = 0; i <Math.ceil(array.length/sizeSubArray); i++){
        subarray[i] = array.slice((i*sizeSubArray), (i*sizeSubArray) + sizeSubArray);
    }
    return subarray;
}

export const getNameMonthByNumber = (numberMonth) => {
    switch (numberMonth) {
        case 0: {
            return "JANUARY";
        }
        case 1: {
            return "FEBRUARY";
        }
        case 2: {
            return "MARCH";
        }
        case 3: {
            return "APRIL";
        }
        case 4: {
            return "MAY";
        }
        case 5: {
            return "JUNE";
        }
        case 6: {
            return "JULY";
        }
        case 7: {
            return "AUGUST";
        }
        case 8: {
            return "SEPTEMBER";
        }
        case 9: {
            return "OCTOBER";
        }
        case 10: {
            return "NOVEMBER";
        }
        case 11: {
            return "DECEMBER";
        }
        default: {
            return null;
        }
    }
}

export const getCastItems = (arr, itemName) => {
    let items;
    if (arr != null) {
        items = arr.map(item => {
            return <span>{item[itemName]}</span>;
        });
    }
    return items;
}