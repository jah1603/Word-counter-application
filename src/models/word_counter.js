const PubSub = require('../../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
    const submittedText = evt.detail;
    const result = this.countWords(submittedText);
    PubSub.publish('WordCounter:result', result);
    console.log('submittedText', submittedText);
  })
};

WordCounter.prototype.countWords = function (sentence) {
  if (sentence.length === 0){
    return 0;
  }
  return sentence.split(' ').length;
};

module.exports = WordCounter;
