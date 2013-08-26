/**
 * Results Collection
 * Transient collection used to house results fed back from contact queries.
 * This collection should be populated manually using 'reset()'.
 */
define(['models/ResultModel'], function (ResultModel) {
  var ResultCollection = Backbone.Collection.extend({
    model: ResultModel
  });

  return ResultCollection;
});