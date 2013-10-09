var ExampleView = Backbone.View.extend({
  
  // Two way binding only seems useful when you can change data in more than one place OR if you have
  // composite/computed values.
  bindings: {
    '#minimum': 'minimum',
    '#maximum': 'maximum',
    '#product': 'product'
  },

  initialize : function () {
    // First milestone is that view changes to the model, get bridged over to the model's change event.
    this.listenTo(this.model, 'change', this.onChange);
  },

  // Aren't these explicity validations what we're trying to avoid?
  // Also want to avoid sending validation events from the model if i can.
  onChange : function (test) {
    // Hide all error messages.
    this.$('*[class^="error-"]').hide();

    // Limitation. No way of getting the bound element. Use stickit handler instead.
    if(this.model.get('minimum') > this.model.get('maximum')) {
      this.$('.error-minimum').text('The minimum must be less than maximum.').show();
    }

    if(this.model.get('product').toLowerCase() === 'apples') {
      this.$('.error-product').text('This name is already taken.').show();
    }
  },

  render : function () {
    this.stickit();

    return this.$el;
  }
});

var ExampleModel = Backbone.Model.extend({});

var app = new ExampleView({
  model : new ExampleModel({ 
    minimum: 1,
    maximum: 10,
    product: ''
  })
});

app.setElement($('#example-form')).render();