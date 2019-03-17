import * as fromFilter from './filter.actions';

const initState: fromFilter.validFilters = 'all';

export function filterReducer ( state = initState, action: fromFilter.Actions): fromFilter.validFilters{

    switch ( action.type ) {

        case fromFilter.SET_FILTER:
            return action.filter;

        default:
            return state;
    }
}