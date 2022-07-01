/**
 * @Redux简易版
*/

export function createStore (reducer) {
    let currentState; 
    let currentListeners = []; // 监听器，可监听多个事件
    
    const getState = () => currentState;

    const subscribe = (listener) => {
        currentListeners.push(listener);
    };

    const dispatch = (action) => {
        currentState = reducer(currentState, action); // 覆盖原来的state
        currentListeners.forEach(listener => listener());
    };
    dispatch({ type: '@@redux/~GSDG4%FDG#*&' });
    return { 
        getState, 
        subscribe, 
        dispatch 
    };
}