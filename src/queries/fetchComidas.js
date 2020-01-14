import { gql } from 'apollo-boost'

export default gql`
  query {
    comidas {
      id
      nombre
    }
  }
`