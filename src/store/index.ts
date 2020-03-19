import { action, computed, observable } from "mobx";

export interface ContactItem {
  name: string;
  email: string;
  id: string;
  updated: string;
  created: string;
}

export class ContactStore {
  @observable list: ContactItem[] = [];

  constructor(contacts: [ContactItem]) {
    contacts.forEach(this.addContact);
  }

  @action
  addContact = (newContact: ContactItem) => {
    this.list.push(newContact);
  };

  @action
  updateContact = (editedContact: ContactItem) => {
    this.list.splice(
      this.list.findIndex(function(contact) {
        return contact.id === editedContact.id;
      })
    );
    this.list.push(editedContact);
  };

  @action
  deleteContact = (removedContact: ContactItem) => {
    this.list.splice(this.list.indexOf(removedContact), 1);
  };

  @action
  getListItem = (contactId: string) => {
    return this.list.filter(contact => contact.id === contactId);
  };

  @computed
  get getList() {
    return this.list;
  }
}
