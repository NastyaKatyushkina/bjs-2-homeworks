function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    let hash = args.toString();
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }
    let result = func.call(this, ...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;

  function wrapper(...args) {
    if (flag === false) {
      func.call(this, ...args);
      flag = true;
      timeout = setTimeout(() => {
        flag = false;
      }, ms);

    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { flag = false }, ms);
    }
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {
    if (flag === false) {
      func.call(this, ...args);
      flag = true;
      timeout = setTimeout(() => {
        flag = false;
      }, ms);

    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { flag = false }, ms);
    }
    wrapper.count += 1
  }

  return wrapper;
}