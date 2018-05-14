const assert = require('assert');
const BinaryTree = require('../lib/tree').BinaryTree;
describe('Tree', () => {
    describe('BinaryTree', () => {
        it("new BinaryTree", () => {
            const bitree = new BinaryTree();
            const str = '-+a  *b  _c  d  /e  f  ';
            bitree.create(str.split(""));
            console.log(bitree.countLeaf());
            function visit (e) {
                console.log(e);
            };
            // bitree.preOrderTraverse(visit);
            // bitree.inOrderTraverse(visit);
            // bitree.postOrderTraverse(visit);
            bitree.levelTraverse(visit);
        });
    });
});