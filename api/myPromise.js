const STATUS = { // 存放所需要的状态
  pending: 'PENDING',
  fulfilled: 'FULFILLED',
  rejected: 'REJECTED'
}

// 核心的逻辑 解析 x 的类型 来决定promise2 走成功还是失败
function resolvePromise(promise2, x, resolve, reject) {
  // 判断x 的值决定promise2的关系 
  if (x == promise2) {
    return reject(new TypeError('类型错误...'))
  }

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called = false; // 表示每调用过成功和失败 防止其他人的promise内部多次调用 resolve 或 reject方法,因为我们不能控制其他写的promise是否是遵循promiseA+规范
    try {
      let then = x.then; // 取x上的then方法
      if (typeof then == 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if (called) return;
          called = true;
          reject(r)
        })
      } else {
        resolve(x); // 普通对象 {}
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // 是普通值 
    resolve(x);
  }
}

class Promise {
  constructor(executor) {
    this.status = STATUS.pending;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      // 并且resolve会有等待效果
      if (value instanceof Promise) {
        // 递归解析resolve中的promise
        return value.then(resolve, reject);
      }
      if (this.status == STATUS.pending) {
        this.status = STATUS.fulfilled;
        this.value = value;
        // 发布模式
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }
    const reject = (reason) => {
      if (this.status == STATUS.pending) {
        this.status = STATUS.rejected;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : x => x;
    onRejected = typeof onRejected == 'function' ? onRejected : err => { throw err }
    let promise2 = new Promise((resolve, reject) => {
      if (this.status == STATUS.fulfilled) {
        setTimeout(() => {

          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);

      }
      if (this.status == STATUS.rejected) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);


      }
      if (this.status == STATUS.pending) {
        // 订阅
        this.onResolvedCallbacks.push(() => { // 切片
          setTimeout(() => {
            try {
              // todo ... 
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)

        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)

        })
      }
    })
    return promise2;
  }
  catch(errFn) {
    return this.then(null, errFn)
  }
  static resolve(val) {
    return new Promise((resolve, reject) => {
      resolve(val);
    })
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    })
  }
}


// module.exports = Promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
}).then((res) => {
  console.log(res)
})