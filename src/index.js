import {createStore} from 'redux';

const setEventListener = (selector, action) => {
    document.getElementById(selector).addEventListener('click', () => {
        store.dispatch(action());
    })
}

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            return state - state;
        default:
            return state;
    }
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});

const store = createStore(reducer);

document.getElementById('counter').textContent = store.getState();

store.subscribe(() => {
    document.getElementById('counter').textContent = store.getState();
})

setEventListener('inc', inc);
setEventListener('dec', dec);
setEventListener('res', res);



