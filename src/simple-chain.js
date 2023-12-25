const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    if (this.chain.length === 0) {
      this.chain.push(`( ${value} )`);
    } else {
      
        this.chain.push(`( ${value} )`);
    }
    return this;
  },
  
  removeLink(position) {
      if (Number.isInteger(position) === false || position < 1 || position > 
  this.chain.length) {
        this.chain = [];
        throw new Error('You can\'t remove incorrect link!');
      }
      if (position === 1) {
        this.chain.splice(position - 1, 1);

      } else {
        this.chain.splice(position - 1, 1);
      }
      return this;
  },
  
  reverseChain() {
    this.chain = this.chain.reverse();
    // this.chain[0] = this.chain[0].slice(2, this.chain[0].length);
    // this.chain[this.chain.length - 1] = '~~' + this.chain[this.chain.length - 1];
    return this;
  },
  finishChain() {
    const string = this.chain.join('~~');
    this.chain = [];
    return string;
  }
};

module.exports = {
  chainMaker
};
