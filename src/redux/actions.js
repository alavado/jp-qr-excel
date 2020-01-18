import { FIJAR_DATOS_NUEVO_REGISTRO } from "./actionTypes";

export const fijarDatosNuevoRegistro = datos => ({
  type: FIJAR_DATOS_NUEVO_REGISTRO,
  payload: datos
})