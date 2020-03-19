import React from "react";
import ContactList from "./pages/ContactList";
import ContactItem from "./pages/ContactItem";
import { StoreProvider } from "./helpers/store-provider";
import { ContactStore } from "./store";
import { Query } from "react-apollo";
import { GET_CONTACTS } from "./gql/queries";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Query query={GET_CONTACTS}>
    {({ loading, error, data }: any) => {
      if (loading) return <p>Loading…</p>;
      if (error) return <p>{error.message}</p>;
      const contactList = new ContactStore(data.contacts);

      return (
        <Router>
          <StoreProvider value={contactList}>
            <Switch>
              <Route exact path="/" component={ContactList} />
              <Route path="/contact/:id" component={ContactItem} />
            </Switch>
          </StoreProvider>
        </Router>
      );
    }}
  </Query>
);

export default App;
