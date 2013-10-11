define(['views/ClinicItemView'], function (ItemView) {
  return Marionette.CollectionView.extend({
    tagName: "ul",
    itemView : ItemView
  });
});