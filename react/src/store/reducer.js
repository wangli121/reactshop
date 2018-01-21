import state from './state';

const reducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'SHOW_HEAD':
            return Object.assign({}, state, { bHead: true });
            break;
        case 'HIDE_HEAD':
            return Object.assign({}, state, { bHead: false });
            break;
        case 'SHOW_FOOT':
            return Object.assign({}, state, { bFoot: true });
            break;
        case 'HIDE_FOOT':
            return Object.assign({}, state, { bFoot: false });
            break;
        case 'SHOW_LOADING':
            return Object.assign({}, state, { bLoading: true });
            break;
        case 'HIDE_LOADING':
            return Object.assign({}, state, { bLoading: false });
            break;
        case 'UPDATASTATE':
            return Object.assign({}, state, { arrnum: payload });
        case 'NUMADD':
            return Object.assign({}, state, { arrnum:payload});
        default:
            return state;
    }
}
export default reducer;