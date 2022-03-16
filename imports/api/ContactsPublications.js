import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from './ContactsCollection';

Meteor.publish('allContacts', function publishAllContacts() {
  return ContactsCollection.find(); // Live Query - Data Cursor - invalidated if data updates
});

Meteor.publish('contacts', function publishContacts() {
  return ContactsCollection.find({ archived: { $ne: true }}); // Live Query - Data Cursor - invalidated if data updates
});