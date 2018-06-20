const regex = /^((\"[\w!#\$%\'\-\/=`{|}~]+\")|([\w!#\$%\'\-\/=`{|}~]+(\.{1,1}[\w!#\$%\'\-\/=`{|}~]+)*(\+\w+)*))@((\[?(\d{1,3}\.){3,3}\d{1,3}]?)|((\w+(-?\w+)*\.)+[a-zA-Z]{2,}))$/;

const validEmails = [
  'email@example.com',
  'firstname.lastname@example.com',
  'email@subdomain.example.com',
  'firstname+lastname@example.com',
  'email@123.123.123.123',
  'email@[123.123.123.123]',
  '"email"@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
];

validEmails.forEach(email => {
	console.log(regex.test(email))
});

const inValidEmails = [
  'plainaddress',
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@example.com>',
  'email.example.com',
  'email@example@example.com',
  '.email@example.com',
  'email.@example.com',
  'email..email@example.com',
  'あいうえお@example.com',
  'email@example.com (Joe Smith)',
  'email@example',
  'email@-example.com',
  'email@111.222.333.44444',
  'email@example..com',
  'Abc..123@example.com',
  '”(),:;<>[\]@example.com',
  'just”not”right@example.com',
  'this\ is"really"not\allowed@example.com'
];

inValidEmails.forEach(email => {
	console.log(regex.test(email))
});

