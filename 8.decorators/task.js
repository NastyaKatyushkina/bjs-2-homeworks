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
  let flag = true;
  function wrapper(...rest) {
    if (flag) {
      func.apply(this, ...rest);
      flag = false;
    }
  };
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (!flag) {
      func.call(this, ...rest); 
      flag = true;
    }
  }, ms);
  return wrapper;  
}

function debounceDecorator2(func, ms) {
  let nextCall = true;
  let interval;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    if (nextCall) {
      func.apply(this, ...args);
      nextCall = false;
    }
    clearTimeout(interval);
    interval = setTimeout(() => {
      func.apply(this, ...args);
      nextCall = true;
    }, ms)
  }
  return wrapper;
}