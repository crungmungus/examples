var UploadView = Backbone.View.extend({
  events : {
    'change :file' : 'onFileChanged'
  },

  initialize : function () {

  },

  onFileChanged : function (e) {
    var upload = this.upload(e.target.files[0])
  },

  upload : function (file) {
    console.log(file);
    return $.ajax({
      type : 'post',
      url  : '/upload?name=' + file.name,
      data : file,
      processData: false,
      contentType: file.type
    });
  }
});


var upload = new UploadView();
    upload.setElement($('#uploads'));
