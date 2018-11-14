jQuery.noConflict();
(function($) {
  $(function() {
    $('button').click(function(e) {
      var elements = document.getElementById('input_form').elements;
      var url;
      var mediaType;
      var alignment;
      var width;

      for (var temp in elements) {
        if (elements[temp].value !== undefined) {
          if (elements[temp].id === 'url') {
            this.url = elements[temp].value;
          } else if (elements[temp].id === 'mediaType') {
            this.mediaType = elements[temp].value;
          } else if (elements[temp].id === 'alignment') {
            this.alignment = elements[temp].value;
          } else if (elements[temp].id === 'width') {
            this.width = elements[temp].value;
          }
        }
      }
      document.getElementById('codeLabel').innerText = 'Code: ';

      if (this.mediaType === 'video') {
        document.getElementById('demo').innerHTML ='Preview: <div style="overflow:hidden;padding-bottom:56.25%;position:relative;height:0;width=' +this.width +'%"> \n  <iframe \n style="left:0;top:0;height:100%;width:100%;position:absolute;" \n  width="420" \n height="315" \n src="' +this.url +'" \n frameborder="0" \n allowfullscreen> \n </iframe> \n </div> ';

        document.getElementById('code').innerText =
          '<div style="overflow:hidden;padding-bottom:56.25%;position:relative;float:' +this.alignment + ';height:0;width=' + this.width + '%"> \n \n<iframe \n style="left:0;top:0;height:100%;width:100%;position:absolute;" \n  width="420" \n height="315" \n src="' + this.url + '" \n frameborder="0" \n allowfullscreen>\n </iframe> \n </div> ';
      } else if (this.mediaType === 'image') {
        document.getElementById('demo').innerHTML = 'Preview: <img src="' + this.url + '" alt="image" style="float:' + this.alignment + ';width=' + this.width + '%" />';
        document.getElementById('code').innerText = '<img src="' + this.url + '" alt="image" style="float:' + this.alignment + ';width=' + this.width + '%" />';
      }
    });
  });
})(jQuery);