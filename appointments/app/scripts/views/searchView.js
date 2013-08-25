define(['text!templates/search.html', 'collections/ResultCollection', 'views/ResultPartialView'], function(template, ResultCollection, ResultPartialView) {
  var Search = Backbone.View.extend({
    template : _.template(template),

    initialize : function () {
      _.bindAll(this, 'onKeyUp', 'onResult', 'addAll', 'onContactSelect');

      this.url = 'http://hidden-oasis-1864.herokuapp.com/contacts';
      
      this.collection = new ResultCollection();
      this.collection.bind('reset', this.addAll);
    },

    events : {
      'keyup #contact' : 'onKeyUp',
      'click #results li' : 'onContactSelect'
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
      var input = e.target;

      // TODO: Replace this with collection fetch + query param.
      if(input.value.length >= 3) {       
        $.ajax({
          url : this.url + '?q=' + input.value
        }).done(this.onResult);
      }
    },

    onResult : function (data) {
      this.collection.reset(data);
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