const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.roo = null;
  }

  root() {
    return this.roo;
  }

  add(date) {

    this.roo = addWithin(this.roo, date);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(data) {

    return searchWithin(this.roo, data);

    function searchWithin(node, value) {

      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return (value < node.data) ? searchWithin(node.left, value) : searchWithin(node.right, value);
    }
  }

  find(date) {

    return findWithin(this.roo, date);

    function findWithin(node, value) {

      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return (value < node.data) ? findWithin(node.left, value) : findWithin(node.right, value);
    }
  }

  remove(data) {
    this.roo = removeWithin(this.roo, data);

    function removeWithin(node, value) {

      if (!node) {
        return null;
      }


      if (value < node.data) {
        node.left = removeWithin(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeWithin(node.right, value);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }


        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeWithin(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {

    return minAmount(this.roo);

    function minAmount(node) {

      if (!node) { // если у дерева нет узлов
        return null;
      }

      let minFrom = node.left;
      while (minFrom.left) {
        minFrom = minFrom.left;
      }
      return minFrom.data;
    }
  }



  max() {
    return maxAmount(this.roo);

    function maxAmount(node) {

      if (!node) { // если у дерева нет узлов
        return null;
      }

      let maxFrom = node.right;
      while (maxFrom.right) {
        maxFrom = maxFrom.right;
      }
      return maxFrom.data;
    }
  }

}

module.exports = {
  BinarySearchTree
};