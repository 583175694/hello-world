function sum(...params) {
  function add(...args) {
    params = params.concat(args);
    console.log(params);
    return add;
  }
  add.toString = function () {
    return params.reduce((meno, next) => {
      return meno + next;
    });
  };
  return add;
}

console.log(+sum(1, 2)(3)(4));

// egame.qq.com/buiness-weex/getxxxx
// egame.qq.com/buiness-weex/getyyyy

function generateRequest(domain) {
  return function (url) {
    return function (method) {
      return domain + '/' + url + '/' + method;
    };
  };
}

const generatePage = generateRequest('egame.qq.com');
const generateMethod = generatePage('buiness-weex');

const getxxx = generateMethod('getxxx');

console.log(getxxx);
