import React from "react";
import { useStore } from "../helpers/use-store";
import { useObserver } from "mobx-react-lite";
import ContactForm from "../components/ContactForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../styles/contact.css";

const ContactItem = ({ match }: any) => {
  const contactStore = useStore();
  const { id } = match.params;
  const existingContact = contactStore.getListItem(id);

  return useObserver(() => (
    <Grid container>
      <Card className="card">
        <CardContent>
          {existingContact.length > 0 ? (
            existingContact.map((contact, index) => (
              <Grid key={index} item>
                <ContactForm chosenId={id} existingContact={contact} />
                <div style={{ marginTop: "16px" }}>
                  <Typography color="textSecondary" component="h3">
                    <span style={{ fontWeight: 600 }}>Created:</span>
                    {contact.created}
                  </Typography>
                  <Typography
                    style={{ marginTop: "8px" }}
                    color="textSecondary"
                    component="h3"
                  >
                    <span style={{ fontWeight: 600 }}> Updated:</span>
                    {contact.updated}
                  </Typography>
                </div>
              </Grid>
            ))
          ) : (
            <Grid item>
              <ContactForm chosenId={id} existingContact={false} />
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default ContactItem;
