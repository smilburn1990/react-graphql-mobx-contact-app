import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Mutation } from "react-apollo";
import { getInitials } from "../helpers/get-initials";
import { useStore } from "../helpers/use-store";
import { Link } from "react-router-dom";
import { DELETE_CONTACT } from "../gql/mutations";
import "../styles/contact.css";

function ContactCard(props: any) {
  const contactStore = useStore();

  return (
    <Mutation mutation={DELETE_CONTACT}>
      {(mutateContact: any) => (
        <Card className="card">
          <Avatar style={{ margin: "16px auto 0" }}>
            {getInitials(props.contact.name)}
          </Avatar>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.contact.name}
            </Typography>
            <Typography color="textSecondary" component="h3">
              {props.contact.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ width: "50%" }}
              size="small"
              variant="outlined"
              color="primary"
            >
              <EditIcon />
              <Link
                to={`/contact/${props.contact.id}`}
                style={{ textDecoration: "none" }}
              >
                {props.leftButton}
              </Link>
            </Button>
            <Button
              style={{ width: "50%" }}
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                contactStore.deleteContact(props.contact),
                  mutateContact({ variables: { id: props.contact.id } });
              }}
            >
              <DeleteIcon />
              {props.rightButton}
            </Button>
          </CardActions>
        </Card>
      )}
    </Mutation>
  );
}

export default ContactCard;
