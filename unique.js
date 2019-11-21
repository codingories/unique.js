let unique = (list, attr) => {
  let temp = {};
  return list.reduce((curv, next) => {
    if (temp[next[attr]]) {
    } else {
      temp[next[attr]] = true;
      curv.push(next);
    }
    return curv;
  }, []);
};
