/**
 * 封装stateview.show和stateview.datashow
 */

function _show(instance: any, state: string, data?: any) {
    if (!data) {
        instance.show(state)
    } else {
        instance.datashow(state, data)
    }
}

export const setViewState = (state: string, data?: any) => {
    if (!data) {
        _show(window.stateview, state)
    } else {
        _show(window.stateview, state, data)
    }
};

export const getStateview = (group: string) => {
    if (group === undefined)
        throw new Error("there is no group arg in getStateview method")

    let _stateview = window.stateview[group]

    return Object.assign(_stateview, {
        setViewState: (state: string, data?: any) => {
            if (!data) {
                _show(_stateview, state)
            } else {
                _show(_stateview, state, data)
            }
        }
    })
};
