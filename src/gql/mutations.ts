import gql from "graphql-tag";

export const ADD_CONTACT = gql`
  mutation addContact($contact: InputContact) {
    addContact(contact: $contact) {
      name
      email
      id
      created
      updated
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation deleteContact($id: ID) {
    deleteContact(id: $id) {
      id
    }
  }
`;

export const UPDATE_CONTACT = gql`
  mutation updateContact($contact: InputContact) {
    updateContact(contact: $contact) {
      name
      email
      id
      created
      updated
    }
  }
`;

export default {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
};
