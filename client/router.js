Router.configure({
  layoutTemplate: 'layout'
});

Router.route('documentList', {
  path: '/',
  data: function () {
    return {
      documents: Documents.find()
    }
  }
});

Router.route('documentAdd', {
  path: '/document/add'
});

Router.route('documentEdit', {
  path: '/document/:_id/edit',
  data: function () {
    return {
      'document': Documents.findOne(this.params._id)
    }
  }
});

Router.route('documentPreview', {
  path: '/document/:_id/preview',
  data: function () {
    return {
      'document': Documents.findOne(this.params._id)
    }
  }
});