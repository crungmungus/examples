(function () {
  var Uploader = function (opts) {
    this.defaults = {
      type: 'POST',
      processData: false,
      contentType: false 
    }

    this.opts = $.extend(opts, this.defaults);
  }

  Uploader.prototype = {
    upload : function (data) {
      var params = $.extend({
        'data' : data,
      }, this.opts);

      return $.ajax(params);
    }
  }

  window.Uploader = Uploader;
}());

var UploadView = Backbone.View.extend({
  events : {
    'change :file' : 'onFileChanged'
  },

  initialize : function () {
    this.uploader = new Uploader({
      url : '/upload'
    });
  },

  onFileChanged : function (e) {
    var upload, fd;

    fd = new FormData();
    fd.append('myFile', e.target.files[0]);

    upload = this.uploader.upload(fd)
    upload.done(function () {
      console.log('file uploaded.');
    });
  }
});

var upload = new UploadView();
    upload.setElement($('#uploads'));