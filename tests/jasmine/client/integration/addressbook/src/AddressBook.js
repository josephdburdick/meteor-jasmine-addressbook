/* globals AddresBook: true */

AddressBook = function AddressBook(){
  this.contacts = [];
}
AddressBook.prototype.addContact = function(contact){
  this.contacts.push(contact);
}
AddressBook.prototype.getContact = function(index){
  return this.contacts[index];
}
AddressBook.prototype.removeContact = function(index){
  this.contacts.splice(index, 1);
}