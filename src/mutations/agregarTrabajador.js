import { gql } from 'apollo-boost'

export default gql`
  mutation ($nombre: String!, $cargo: String, $organizacion: String, $telefono: String, $email: String) {
    agregarTrabajador(nombre: $nombre, cargo: $cargo, organizacion: $organizacion, telefono: $telefono, email: $email) {
      id
      cargo
      organizacion
      telefono
      email
    }
  }
`