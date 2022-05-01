const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roots = null
  }
  

  root() {
    return this.roots
  }

  addData(newData, newEl) {
    if (newEl.data < newData.data) {
      if (newData.left === null) {
        newData.left = newEl;
      } else {
        this.addData(newData.left, newEl);
      }
    } else {
      if (newData.right === null) {
        newData.right = newEl;
      } else {
        this.addData(newData.right, newEl);
      }
    }
  }
  add(data) {
    let newElement = new Node(data)
    if (this.roots === null) {
      this.roots = newElement
    } else {
      this.addData(this.roots, newElement)
    }
  }
  findHas(data, noda) {
    if (noda.data === data) {
      return true
    } else if (data < noda.data) {
      if(noda.left === null) {
        return false 
      } else {
        return this.findHas(data, noda.left);
      }
    } else {
      if(noda.right === null) {
        return false 
      } else {
        return this.findHas(data, noda.right);
      }
    }
  }
  has(data) {
    return this.findHas(data, this.roots)
  }
  findData(data, noda) {
    if (noda === null) {
      return null
    } else if (data < noda.data) {
        return this.findData(data, noda.left)
    } else if (data > noda.data) {
        return this.findData(data, noda.right)
    } else {
        return noda
    }
  }
  find(data) {
    return this.findData(data, this.roots)
  }
  remove(data) {
    this.roots = this.removeElement(this.roots, data)
  }
  removeElement(noda, data) {
    if (noda === null) {
        return null
    } else if (data < noda.data) {
        noda.left = this.removeElement(noda.left, data);
        return noda
    } else if (data > noda.data) {
        noda.right = this.removeElement(noda.right, data);
        return noda
    } else {
        if (noda.right === null && noda.left === null) {
            noda = null
            return noda
        }
        if (noda.right === null) {
            noda = noda.left
            return noda
        } else if(noda.left === null) {
            noda = noda.right
            return noda
        }
        let newElement = this.findMin(noda.right)
        noda.data = newElement.data;
        noda.right = this.removeElement(noda.right, newElement.data);
        return noda
    }
  }
  findMin(data) {
    if (data.left === null) return data
    else return this.findMin(data.left)
  }
  findMax(data) {
    if (data.right === null) return data
    else return this.findMax(data.right)
  }
  min() {
    return this.findMin(this.roots).data
  }
  max() {
    return this.findMax(this.roots).data
  }
}


module.exports = {
  BinarySearchTree
};