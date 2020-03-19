import { gql } from "apollo-boost";

export const GET_CONTACTS = gql`
  {
    contacts {
      name
      id
      email
      created
      updated
    }
  }
`;

export const GET_CONTACT = gql`
  query contacts($id: ID) {
    contact(id: $id) {
      name
      email
      id
      created
      updated
    }
  }
`;
