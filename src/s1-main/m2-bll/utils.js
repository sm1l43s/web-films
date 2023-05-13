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