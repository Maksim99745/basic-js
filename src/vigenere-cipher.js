const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  // encrypt() {

  // }
  // decrypt() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }
    constructor(direction) {
      this.direction = direction !== undefined ? direction : true;
    }
  
    checkError(message, key) {
      if (message === undefined  || key === undefined) {
        throw new Error("Incorrect arguments!");
      }
    }
  
    getCharCode(letter) {
      if (letter === " ") {
        return " ";
      }
      return letter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
    }
  
    getLetterFromCharCode(charCode) {
      if (charCode === " ") {
        return " ";
      }
      return String.fromCharCode(charCode + "A".charCodeAt(0));
    }
  
    isSymbol(char) {
      return char.toLowerCase() === char.toUpperCase()  || char === " ";
    }
  
    encrypt(message, key) {
      this.checkError(message, key);
  
      const messageArray = message.toUpperCase().split("");
      const keyArray = key.toUpperCase().split("");
  
      let keyIndex = 0;
  
      const encryptedMessage = messageArray.map((letter) => {
        if (this.isSymbol(letter)) {
          return letter;
        }
  
        const messageCharCode = this.getCharCode(letter);
        const keyCharCode = this.getCharCode(
          keyArray[keyIndex % keyArray.length]
        );
  
        let encryptedCharCode = (messageCharCode + keyCharCode) % 26;
  
        keyIndex++;
        return this.getLetterFromCharCode(encryptedCharCode);
      });
  
      return this.direction
        ? encryptedMessage.join("")
        : encryptedMessage.reverse().join("");
    }
  
    decrypt(message, key) {
      this.checkError(message, key);
  
      const messageArray = message.toUpperCase().split("");
      const keyArray = key.toUpperCase().split("");
  
      let keyIndex = 0;
  
      const decryptedMessage = messageArray.map((letter) => {
        if (this.isSymbol(letter)) {
          return letter;
        }
  
        const messageCharCode = this.getCharCode(letter);
        const keyCharCode = this.getCharCode(
          keyArray[keyIndex % keyArray.length]
        );
  
  
        let decryptedCharCode = (messageCharCode + 26 - keyCharCode) % 26;
  
        keyIndex++;
        return this.getLetterFromCharCode(decryptedCharCode);
      });
  
      return this.direction
        ? decryptedMessage.join("")
        : decryptedMessage.reverse().join("");
    }
  }

module.exports = {
  VigenereCipheringMachine
};
