import React from "react";
import Grid from "@material-ui/core/Grid";
import ContactCard from "../components/ContactCard";
import AddContactCard from "../components/AddContactCard";
import { useStore } from "../helpers/use-store";
import { getRandomId } from "../helpers/get-random-id";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";

const ContactList = () => {
  const contactStore = useStore();

  return useObserver(() => (
    <Grid container>
      {contactStore.getList.map((contact, index) => (
        <Grid key={index} xs={3} item>
          <ContactCard
            contact={contact}
            leftButton="Edit"
            rightButton="Delete"
          />
        </Grid>
      ))}
      <Grid xs={3} item>
        <Link to={`/contact/${getRandomId()}`}>
          <AddContactCard />
        </Link>
      </Grid>
    </Grid>
  ));
};

export default ContactList;
