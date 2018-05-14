const assert = require('assert');
const sorting = require('../lib/sorting');
describe('test sorting', () => {
    const count = 10;
    describe('test InsertSort', () => {
        it('using InsertSort to sort a disordered sequence into a order sequence', () => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const key = Math.floor(Math.random() * 10);
                list.push(key);
            }
            sorting.InsertSort(list);
            for (let i = 0; i < list.length - 1; i++) {
                assert.ok(list[i] <= list[i + 1]);
            }
        });
    });
    describe('test BInsertSort', () => {
        it('using BInsertSort to sort a disordered sequence into a order sequence', () => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const key = Math.floor(Math.random() * 10);
                list.push(key);
            }
            sorting.BInsertSort(list);
            for (let i = 0; i < list.length - 1; i++) {
                assert.ok(list[i] <= list[i + 1]);
            }
        });
    });
    describe('test ShellSort', () => {
        it('using ShellSort to sort a disordered sequence into a order sequence', () => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const key = Math.floor(Math.random() * 10);
                list.push(key);
            }
            sorting.ShellSort(list, [1, 3, 5, 7, 9]);
            for (let i = 0; i < list.length - 1; i++) {
                assert.ok(list[i] <= list[i + 1]);
            }
        });
    });
    describe('test BubbleSort', () => {
        it('using BubbleSort to sort a disordered sequence into a order sequence', () => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const key = Math.floor(Math.random() * 10);
                list.push(key);
            }
            sorting.BubbleSort(list);
            for (let i = 0; i < list.length - 1; i++) {
                assert.ok(list[i] <= list[i + 1]);
            }
        });
    });
    describe('test SelectSort', () => {
        it('using SelectSort to sort a disordered sequence into a order sequence', () => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const key = Math.floor(Math.random() * 10);
                list.push(key);
            }
            sorting.SelectSort(list);
            for (let i = 0; i < list.length - 1; i++) {
                assert.ok(list[i] <= list[i + 1]);
            }
        });
    });
    describe('test QuickSort', () => {
        it('using QuickSort to sort a disordered sequence into a order sequence', () => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const key = Math.floor(Math.random() * 10);
                list.push(key);
            }
            sorting.QuickSort(list);
            for (let i = 0; i < list.length - 1; i++) {
                assert.ok(list[i] <= list[i + 1]);
            }
        });
    });
    describe('test HeapSort', () => {
        it('using HeapSort to sort a disordered sequence into a order sequence', () => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const key = Math.floor(Math.random() * 10);
                list.push(key);
            }
            sorting.HeapSort(list);
            for (let i = 0; i < list.length - 1; i++) {
                assert.ok(list[i] <= list[i + 1]);
            }
        });
    });
    // describe('test MergeSort', () => {
    //     it('using MergeSort to sort a disordered sequence into a order sequence', () => {
    //         const list = [];
    //         for (let i = 0; i < count; i++) {
    //             const key = Math.floor(Math.random() * 10);
    //             list.push(key);
    //         }
    //         sorting.MergeSort(list);
    //         console.log(list);
    //         for (let i = 0; i < list.length - 1; i++) {
    //             assert.ok(list[i] <= list[i + 1]);
    //         }
    //     });
    // });
});