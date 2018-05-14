class BTNode {
    data: string;
    lchild: BTNode;
    rchild: BTNode;
};
//空字符表示空树
class BinaryTree {
    tree: BTNode;

    create(list: Array<string>): void {
        function createBinaryTree(tree: BTNode, direction: string, list: Array<string>) {
            if (direction == 'lchild') {
                if (list[i] != ' ') {
                    tree.lchild = new BTNode();
                    tree.lchild.data = list[i++];
                    createBinaryTree(tree.lchild, 'lchild', list);
                    createBinaryTree(tree.lchild, 'rchild', list);
                } else {
                    tree.lchild = null;
                    i++;
                }
            } else {
                if (list[i] != ' ') {
                    tree.rchild = new BTNode();
                    tree.rchild.data = list[i++];
                    createBinaryTree(tree.rchild, 'lchild', list);
                    createBinaryTree(tree.rchild, 'rchild', list);
                } else {
                    tree.rchild = null;
                    i++;
                }
            }
        };
        if (!(list instanceof Array))//不是数组，exit退出
            return;
        let i: number = 0;//root
        if (list[i] != ' ') {
            this.tree = new BTNode();
            this.tree.data = list[i++];
            createBinaryTree(this.tree, 'lchild', list);
            createBinaryTree(this.tree, 'rchild', list);
        } else {
            this.tree = null;
        }
    }

    depth(): number {
        function BinaryTreeDepth(tree: BTNode) {
            if (!tree)
                return 0;
            let h1: number, h2: number;
            h1 = BinaryTreeDepth(tree.lchild);
            h2 = BinaryTreeDepth(tree.rchild);
            return h1 > h2 ? h1 + 1 : h2 + 1;
        };
        return BinaryTreeDepth(this.tree);
    }

    countLeaf(): number {
        function BinaryTreeCountLeaf(tree: BTNode) {
            if (tree) {
                BinaryTreeCountLeaf(tree.lchild);
                BinaryTreeCountLeaf(tree.rchild);
                if (!tree.lchild && !tree.rchild)
                    count++;
            }
        };
        let count: number = 0;
        BinaryTreeCountLeaf(this.tree);
        return count;
    }

    preOrderTraverse(visit: (e: string) => void): void {
        function BinaryTreeTraverse(tree: BTNode) {
            if (tree) {
                visit(tree.data);
                BinaryTreeTraverse(tree.lchild);
                BinaryTreeTraverse(tree.rchild);
            }
        };
        if (typeof visit == 'function') {
            BinaryTreeTraverse(this.tree);
        }
    }

    inOrderTraverse(visit: (e: string) => void): void {
        function BinaryTreeTraverse(tree: BTNode) {
            if (tree) {
                BinaryTreeTraverse(tree.lchild);
                visit(tree.data);
                BinaryTreeTraverse(tree.rchild);
            }
        };
        if (typeof visit == 'function') {
            BinaryTreeTraverse(this.tree);
        }
    }

    postOrderTraverse(visit: (e: string) => void): void {
        function BinaryTreeTraverse(tree: BTNode) {
            if (tree) {
                BinaryTreeTraverse(tree.lchild);
                BinaryTreeTraverse(tree.rchild);
                visit(tree.data);
            }
        };
        if (typeof visit == 'function') {
            BinaryTreeTraverse(this.tree);
        }
    }

    levelTraverse(visit: (e: string) => void): void {
        let queue: Array<BTNode> = [];
        if (this.tree)
            queue.push(this.tree);
        while (queue.length) {
            const p = queue.shift();
            visit(p.data);
            if (p.lchild)
                queue.push(p.lchild);
            if (p.rchild)
                queue.push(p.rchild);
        }
    }
};
export { BinaryTree };