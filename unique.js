let unique = (list, attr) => {
  let temp = {};
  result = list.reduce((curv, next) => {
    if (temp[next[attr]]) {
    } else {
      temp[next[attr]] = true;
      curv.push(next);
    }
    return curv;
  }, []);
  return result;
};

Array.prototype.unique = function(attr) {
  if (arguments.length === 0) {
    return this;
  } else {
    let temp = {};
    result = this.reduce((curv, next) => {
      if (temp[next[attr]]) {
      } else {
        temp[next[attr]] = true;
        curv.push(next);
      }
      return curv;
    }, []);
    return result;
  }
};
