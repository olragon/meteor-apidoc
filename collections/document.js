Documents = new Meteor.Collection('documents');

Documents.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  description: {
    type: String,
    label: 'Description',
    autoform: {
      rows: 3
    }
  },
  host: {
    type: String,
    label: 'Host',
  },
  resources: {
    type: [Object],
    label: 'Resource',
    optional: true
  },
  "resources.$.name": {
    type: String,
    label: 'Name',
    optional: true
  },
  "resources.$.uri": {
    type: String,
    label: "URI",
    optional: true
  },
  "resources.$.actions": {
    type: [Object],
    label: "Action",
    optional: true,
    autoform: {
      initialCount: 0
    }
  },
  "resources.$.actions.$.name": {
    type: String,
    label: "Name",
    optional: true
  },
  "resources.$.actions.$.method": {
    type: String,
    label: "Method",
    allowedValues: ['GET', 'POST', 'PUT', 'DELETE'],
    autoform: {
      defaultValue: 'GET'
    }
  },
  "resources.$.actions.$.request": {
    type: [Object],
    label: "Request",
    optional: true,
    autoform: {
      initialCount: 0
    }
  },
  "resources.$.actions.$.request.$.params": {
    type: [Object],
    label: "Params",
    optional: true
  },
  "resources.$.actions.$.request.$.params.$.name": {
    type: String,
    label: "Name",
  },
  "resources.$.actions.$.request.$.params.$.required": {
    type: Boolean,
    label: "required?",
  },
  "resources.$.actions.$.request.$.params.$.type": {
    type: String,
    label: "Type",
    allowedValues: ['string', 'number', 'date']
  },
  "resources.$.actions.$.request.$.params.$.description": {
    type: String,
    label: "Descripton",
    autoform: {
      rows: 1
    }
  },
  "resources.$.actions.$.request.$.header": {
    type: String,
    label: "Header",
    autoform: {
      rows: 2
    },
    optional: true
  },
  "resources.$.actions.$.request.$.body": {
    type: String,
    label: "Body",
    autoform: {
      rows: 2
    },
    optional: true
  },
  "resources.$.actions.$.response": {
    type: [Object],
    label: "Response",
    autoform: {
      rows: 1,
      initialCount: 0
    },
  },
  "resources.$.actions.$.response.$.header": {
    type: String,
    label: "Header",
    autoform: {
      rows: 1
    }
  },
  "resources.$.actions.$.response.$.body": {
    type: String,
    label: "Body",
    autoform: {
      rows: 2
    }
  },
}));