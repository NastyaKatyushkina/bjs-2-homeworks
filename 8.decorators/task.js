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
  func(...rest);
  let flag = true;
  return function (...rest) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!flag) {
        func.call(this, ...rest); 
        flag = true;
      }
    }, ms);
  };   
}

function debounceDecorator2(debounceDecoratorNew) {

  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    return func.call(this, ...args)
  }

  return wrapper
}