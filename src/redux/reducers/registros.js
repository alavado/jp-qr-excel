import { FIJAR_DATOS_NUEVO_REGISTRO } from "../actionTypes"

const initialState = {
  datosNuevoRegistro: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FIJAR_DATOS_NUEVO_REGISTRO: {
      return {
        ...state,
        datosNuevoRegistro: action.payload.split('\n')
      }
    }
    default:
      return state;
  }
}