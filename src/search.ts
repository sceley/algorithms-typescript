//顺序查找
function SeqSearch(list:Array<number>, key:number) {
    for (let i = list.length - 1; i >= 0 ; i--) {
        if (list[i] == key) {
            return i;
        }
    }
    return -1;
};

//折半查找
function BinarySearch(list:Array<number>, key:number):number {
    let low:number = 0;
    let high:number = list.length - 1;
    while (low <= high) {
        const m: number = Math.floor((low + high) / 2);
        if (list[m] == key) {
            return m;
        } else if (key < list[m]) {
            high = m - 1;
        } else {
            low = m + 1;
        }
    }
    return -1;
};

//哈希查找
function HashSearch(list:Array<number>, key:number) {

};

export { 
    SeqSearch, 
    BinarySearch, 
    HashSearch 
};