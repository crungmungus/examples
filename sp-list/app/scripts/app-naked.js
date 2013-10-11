/**
  Goals.
  1) The domain logic does not depend on the UI layer or the backend.
  2) There is only one place where all the components are created and wired up.
  3) The application comprises lots of small components, each of which does only one thing (Views, Supervisors, Use Cases etc.)
  4) An object either makes decisions or executes somebody else’s decisions
  5) All interactions and use cases are explicit. Behaviour does not emerge, but instead is explicitly defined in the code.
  6) Components depend on protocols rather than on concrete implementations.

  'I have a rule of thumb that helps me to decide what goes where - whatever I am happy to leave untested goes into the view.'
*/

// Models.
var Treatment  = Backbone.Model.extend({});
var ClinicType = Backbone.Model.extend({});
var Procedure  = Backbone.Model.extend({});

// Collections.
var Treatments = Backbone.Collection.extend({
  model : Treatment
});

var ClinicTypes = Backbone.Collection.extend({
  model : ClinicType
});

var Procedures = Backbone.Collection.extend({
  model : Procedure
});

// Views.
// Declarative/simple bindings are handled by views.
var ItemView = Marionette.ItemView.extend({
  tagName : 'li',
  events  : {
    'click' : function () {
      this.trigger('selected')
    }
  },

  template : function (model) {
    return model.name;
  }
});

var ListView = Marionette.CollectionView.extend({
  tagName: "ul",
  itemView : ItemView
});

var FormView = Backbone.View.extend({  
  el : document.getElementById('form'),
  
  events : {
    'click #save' : function () {
      this.trigger('save', this.model);
      return false;
    }
  },

  inject : function (model) {
    this.model = model;
    this.stickit(this.model, {
      '#name' : 'name'
    });
  }
});

// Supervising Presenters. 
var ClinicPresenter = Marionette.Controller.extend({
  initialize: function(opts){    
    this.service = opts.service;

    this.view = opts.view;
    this.form = opts.form;

    // 6. Components depend on protocols rather than on concrete implementations.        
    this.listenTo(this.view, 'itemview:selected', function (obj) {
      this.form.inject(obj.model);
    });

    // Example of a complex interaction.
    this.listenTo(this.form, 'save', function (model) {
      this.service.save(model, this);
    });

    // No layout/parent container right now.
    $('#list').append(this.view.render().$el);
  }
});

// Use Case/Domain Services.
// 5. All interactions and use cases are explicit. Behaviour does not emerge, but instead is explicitly defined in the code.
var ClinicModifyService = function () {
  this.save = function (model, listener) {
    model.save(model, {
      success : listener.saveSuccess,
      error   : listener.saveFailure
    });
  }
}

// Startup.
// 2. There is only one place where all the components are created and [wired up].
var app = new ClinicPresenter({
  view : new ListView({
    collection : new ClinicTypes(clinicTypes)
  }),
  form : new FormView(),
  service : new ClinicModifyService()
});