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
  var regEx = /([^\u0000-\u007F]|\w)+/g;
  var array = [];
     return array.concat(sentence.match(regEx)).length;

  // var currentCount = 0;
  // for (var i = 0; i < sentence.length; i++){
  //   if (sentence[i] === " " && sentence[i + 1] != " " && i != 0 && currentCount != 0)
  //   currentCount = currentCount + 1;
  // }
  // currentCount = currentCount + 1;
  // return currentCount;
  // if (sentence.length === 0){
  //   return 0;
  // }
  // return sentence.split(' ').length;
};

module.exports = WordCounter;
