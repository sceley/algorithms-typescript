//顺序查找
function SeqSearch(list:Array<number>, key:number) {
    
};

//
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
};

function HashSearch(list:Array<number>, key:number) {

};

export default { 
    SeqSearch, 
    BinarySearch, 
    HashSearch 
};