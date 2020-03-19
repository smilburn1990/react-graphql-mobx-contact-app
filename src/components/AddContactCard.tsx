import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import SvgIcon from "@material-ui/core/Icon";
import "../styles/contact.css";

function AddContact() {
  return (
    <Card className="card">
      <CardActionArea>
        <CardContent>
          <SvgIcon color="primary" style={{ fontSize: 162 }}>
            add_circle
          </SvgIcon>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AddContact;
