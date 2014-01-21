var UserModel = Backbone.Model.extend({
  defaults : {
    firstname : 'james',
    lastname : 'gardner',
    email : 'james@gardner.com'
  },

  validation : {
    firstname : {
      required: true
    }
  }
});

var View = Backbone.View.extend({
  tagName : 'form',

  events : {
    'submit' : 'onFormSubmit',
    'blur input' : 'onInputBlur'
  },  

  // Parse bindings auto-magically.
  bindings : {
    '[name=firstname]' : {
      observe : 'firstname',      
      setOptions: {
        validate: true
      }
    }
  },     

  initialize : function () {
    Backbone.Validation.bind(this);

    this.listenTo(this.model, 'validated:valid', this.onValid);
    this.listenTo(this.model, 'validated:invalid', this.onInvalid);
  },

  onFormSubmit : function () {
    var errors;

    if(this.model.isValid(true)) {
      this.model.save();
    }

    e.preventDefault();
  },

  onValid : function () {
    console.log('enable save button');
  },

  onInvalid : function () {
    console.log('disable save button');
  },

  render : function () {
    this.$el.html($('#user-form-template').html());

    var fields = this.$('input');
    _.each(fields, function (field) {
      
    }, this);

    return this.$el;
  }
});

v = new View({
  model : new UserModel()
})

$('body').append(v.render());