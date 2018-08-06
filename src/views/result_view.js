const PubSub = require('../../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  });
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
    resultElement.textContent = `You typed an earth-shatteringly impressive ${result} words.`;
};

module.exports = ResultView;
