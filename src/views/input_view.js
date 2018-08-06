const PubSub = require('../../helpers/pub_sub.js');

const InputView = function () {

}


InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (evt) => {
    event.preventDefault();
    const submittedText = evt.target.text.value;
    PubSub.publish('InputView:text-inputted', submittedText);
  });
};

module.exports = InputView;
