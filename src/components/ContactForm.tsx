import React, { useState } from "react";
import { Button, TextField, FormGroup } from "@material-ui/core";
import { useStore } from "../helpers/use-store";
import { useObserver } from "mobx-react-lite";
import { Mutation } from "react-apollo";
import { getDateTime } from "../helpers/get-date-time";
import { Link } from "react-router-dom";
import { ADD_CONTACT, UPDATE_CONTACT } from "../gql/mutations";

const ContactForm = ({ existingContact, chosenId }: any) => {
  const contactStore = useStore();
  const [name = existingContact.name, setName]: any = useState();
  const [email = existingContact.email, setEmail]: any = useState();
  const contact = {
    id: existingContact.id || chosenId,
    name,
    email,
    created: existingContact.created || getDateTime(),
    updated: getDateTime()
  };

  return useObserver(() => (
    <Mutation mutation={existingContact ? UPDATE_CONTACT : ADD_CONTACT}>
      {(mutateContact: any) => (
        <form>
          <FormGroup>
            <TextField
              type="text"
              name="name"
              id="name"
              label="Name"
              margin="normal"
              value={name || ""}
              onChange={event => setName(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Email"
              type="email"
              name="email"
              id="email"
              margin="normal"
              value={email || ""}
              onChange={event => setEmail(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button
                style={{ width: "100%" }}
                disabled={!name || !email}
                onClick={() => {
                  existingContact
                    ? contactStore.updateContact(contact)
                    : contactStore.addContact(contact),
                    mutateContact({
                      variables: { contact }
                    });
                }}
                variant="contained"
                color="primary"
              >
                {existingContact ? "Edit contact" : "Add Contact"}
              </Button>
            </Link>
          </FormGroup>
        </form>
      )}
    </Mutation>
  ));
};

export default ContactForm;
