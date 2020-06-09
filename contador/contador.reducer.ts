// Reducer

import { Action } from "../ngrx-fake/ngrx";

/**
 * Todo se tiene que resolver con el estado y la accion que se esta recibiendo,
 * no se tiene que hacer nada con cosas externas
 * @param state 
 * @param action 
 */
export function contadorReducer(state = 10, action: Action) {

	// if (action.type === 'INCREMENTAR') {
	// 	return state += 1;
	// }

	switch (action.type) {
		case 'INCREMENTAR':
			return state += 1;
		case 'DECREMENTAR':
			return state -= 1;
		case 'MULTIPLICAR':
			return state * action.payload;
		case 'DIVIDIR':
			return state / action.payload;
		case 'RESET':
			return state = 0;
		default:
			return state;
	}
}