define([
  'text!templates/search.html', 
  'collections/ResultCollection', 
  'views/ResultPartialView',
  'views/NoResultPartialView'
], 
function(template, ResultCollection, ResultPartialView, NoResultPartialView) {
  var Search = Backbone.View.extend({
    template : _.template(template),

    events : {
      'keyup #contact' : 'onKeyUp',
      'click #results li.contact' : 'onContactSelect',
      'click #results a' : 'onContactCreate'
    },

    initialize : function () {
      _.bindAll(this, 'onKeyUp', 'onResult', 'addAll', 'onContactSelect');

      this.url  = 'http://hidden-oasis-1864.herokuapp.com/contacts';      
      this.vent = this.options.vent;

      this.collection = new ResultCollection();
      this.collection.bind('reset', this.addAll);
    },

    addAll : function () {
      var results = this.$el.find('#results');
          results.empty();

      this.collection.each(function (contact) {
        results.append(new ResultPartialView({
          model : contact
        }).el);
      });
    },

    onKeyUp : function (e) {
      var input = e.target, results = this.$el.find('#results');

      // TODO: Replace this with collection fetch + query param.
      if(input.value.length >= 3) {       
        $.ajax({
          url : this.url + '?q=' + input.value
        }).done(this.onResult);
      } else {
        results.empty();
      }
    },

    onResult : function (data) {
      var results = this.$el.find('#results');

      if(data && data.length !== 0) {
        this.collection.reset(data);
      } else {
        results.empty();
        results.append(new NoResultPartialView().render());
      }
    },

    onContactCreate : function (e) {
      var input = this.$el.find('#contact');
      this.$el.find('#results').empty();
      this.vent.trigger("createContact", contact.value);
    },

    onContactSelect : function (e) {
      this.$el.find('#contact').val(e.target.innerText);
      this.$el.find('#contact_id').val(e.target.getAttribute('data-id'));
      this.$el.find('#results').empty();
    },

    render : function () {
      this.$el.html(template);
      return this;
    }
  });

  return Search;
});