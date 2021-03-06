/*整个排序过程为n-1趟插入，即先将序列中第1个记录看成是一个有序子序列，
然后从第2个记录开始，逐个进行插入，直至整个序列有序*/
function InsertSort(list:Array<number>, option:boolean = true):void {
    if (option) {
        for (let i:number = 1; i < list.length; i++) {
            if (list[i] < list[i - 1]) {
                const key:number = list[i];
                list[i] = list[i - 1];
                let j:number = i - 2;
                for (; j >= 0 && key < list[j]; j--) {
                    list[j + 1] = list[j];
                }
                list[j + 1] = key;
            }
        }
    } else {
        for (let i: number = 1; i < list.length; i++) {
            if (list[i] > list[i - 1]) {
                const key: number = list[i];
                list[i] = list[i - 1];
                let j: number = i - 2;
                for (; j >= 0 && key > list[j]; j--) {
                    list[j + 1] = list[j];
                }
                list[j + 1] = key;
            }
        }
    }
};

//用折半查找方法确定插入位置
function BInsertSort(list:Array<number>, option:boolean = true):void {
    if (option) {
        for (let i:number = 1; i < list.length; i++) {
            const key = list[i];
            let low:number = 0;
            let high:number = i - 1;
            while (low <= high) {
                const m:number = Math.floor((low + high) / 2);
                if (key < list[m]) {
                    high = m - 1;
                } else {
                    low = m + 1;
                }
            }
            for (let j:number = i - 1; j >= high + 1; --j) {
                list[j + 1] = list[j];
            }
            list[high + 1] = key;
        }
    } else {
        for (let i: number = 1; i < list.length; i++) {
            const key = list[i];
            let low: number = 0;
            let high: number = i - 1;
            while (low <= high) {
                const m: number = Math.floor((low + high) / 2);
                if (key > list[m]) {
                    high = m - 1;
                } else {
                    low = m + 1;
                }
            }
            for (let j: number = i - 1; j >= high + 1; --j) {
                list[j + 1] = list[j];
            }
            list[high + 1] = key;
        }
    }
};

//子序列的构成不是简单的“逐段分割”，而是将相隔某个增量的记录组成一个子序列
function ShellSort(list:Array<number>, increments:Array<number>, option:boolean = true):void {
    function ShellInsert(list:Array<number>, dk:number) {
        for (let i:number = dk + 1; i <= list.length; i++) {
            if (list[i - 1] < list[i - dk - 1]) {
                const key = list[i - 1];
                let j:number;
                for (j = i - dk; j > 0 && key < list[j - 1]; j -= dk) {
                    list[j + dk - 1] = list[j - 1];
                }
                list[j + dk - 1] = key;
            }
        }
    };
    for (let i:number = 0; i < increments.length; i++) {
        ShellInsert(list, increments[i]);
    }
};

/*通过一趟排序，将待排序记录分割成独立的两部分，
其中一部分记录的关键字均比另一部分记录的关键字小，
则可分别对这两部分记录进行排序，以达到整个序列有序*/
function QuickSort(list:Array<number>, option:boolean = true):void {
    function Partition(list:Array<number>, low:number, high:number) {
        const key = list[low - 1];
        while (low < high) {
            while (low < high && list[high - 1] >= key) {
                high--;
            }
            list[low - 1] = list[high - 1];
            while (low < high && list[low - 1] <= key) {
                low++;
            }
            list[high - 1] = list[low - 1];
        }
        list[low - 1] = key;
        return low;
    };
    function QSort(list:Array<number>, low:number, high:number) {
        if (low < high) {
            let pivot:number = Partition(list, low, high);
            QSort(list, low, pivot - 1);
            QSort(list, pivot + 1, high);
        }
    };
    QSort(list, 1, list.length);
};

//子序列的构成不是简单的“逐段分割”，而是将相隔某个增量的记录组成一个子序列
function BubbleSort(list:Array<number>, option:boolean = true):void {
    if (option) {
        for (let i:number = 0; i < list.length - 1; i++) {
            for (let j:number = 0; j < list.length - i; j++) {
                if (list[j] > list[j + 1]) {
                    const key = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = key;
                }
            }
        }
    } else {
        for (let i: number = 0; i < list.length - 1; i++) {
            for (let j: number = 0; j < list.length - i; j++) {
                if (list[j] < list[j + 1]) {
                    const key = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = key;
                }
            }
        }
    }
};

function SelectSort(list:Array<number>, option:boolean = true):void {
    if (option) {
        for (let i:number = 0; i < list.length - 1; i++) {
            let k:number = i;
            for (let j:number = i + 1; j < list.length; j++) {
                if (list[k] > list[j]) {
                    k = j;
                }
            }
            if (k != i) {
                const key = list[k];
                list[k] = list[i];
                list[i] = key;
            }
        }
    } else {
        for (let i: number = 0; i < list.length - 1; i++) {
            let k: number = i;
            for (let j: number = i + 1; j < list.length; j++) {
                if (list[k] < list[j]) {
                    k = j;
                }
            }
            if (k != i) {
                const key = list[k];
                list[k] = list[i];
                list[i] = key;
            }
        }
    }

};

//可将堆序列看成完全二叉树，则堆顶元素（完全二叉树的根）必为序列中n个元素的最小值或最大值
//终端结点（即叶结点）没有任何子女，无需单独调整
function HeapSort(list:Array<number>, option:boolean = true):void {
    function HeapAdjust(list:Array<number>, s:number, m:number) {
        let rc:number = list[s - 1];
        for (let j:number = 2 * s; j <= m; j *= 2) {
            if (j < m && list[j - 1] < list[j + 1 - 1]) {
                ++j;
            }
            if (rc > list[j - 1]) {
                break;
            }
            list[s - 1] = list[j - 1];
            s = j;
        }
        list[s - 1] = rc;
    };
    for (let i:number = Math.floor(list.length / 2);  i > 0; --i) {
        HeapAdjust(list, i, list.length);
    }
    for (let i:number = list.length; i > 0; i--) {
        const key = list[0];
        list[0] = list[i - 1];
        list[i - 1] = key;
        HeapAdjust(list, 1, i - 1);
    }
};

function MergeSort(list:Array<number>, option:boolean = true):void {
    function Merge(_list:Array<number>, list:Array<number>, s:number, m:number, t:number):void {
        _list = Object.create(_list);
        let j:number, k:number;
        for (j = m + 1, k = s; s <= m && j <= t; ++k) {
            if (_list[s - 1] < list[j - 1]) {
                _list[k - 1] = list[s - 1];
                s++;
            } else {
                _list[k - 1] = list[j - 1];
                j++;
            }
        }
        if (s <= m) {
            for (let i = 0; s + i <= m; i++) {
                list[k + i - 1] = _list[s + i - 1];
            }
        }
        if (j <= t) {
            for (let i = 0; j + i <= t; i++) {
                list[k + i - 1] = _list[j + i - 1];
            }
        }
    };
    function MSort(_list:Array<number>, list:Array<number>, s:number, t:number) {
        _list = Object.create(_list);
        if (s == t) {
            _list[s - 1] = list[s - 1];
        } else {
            let m:number = Math.floor((s + t) / 2);
            MSort(_list, list, s, m);
            MSort(_list, list, m + 1, t);
            Merge(_list, list, s, m , t);
        }
    };
    MSort(list, list, 1, list.length);
};
export {
    InsertSort, 
    BInsertSort, 
    ShellSort, 
    QuickSort, 
    BubbleSort, 
    SelectSort, 
    HeapSort, 
    MergeSort 
};