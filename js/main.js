

jQuery.noConflict();
(function($) {
  $(function() {
    document.getElementById('demo').style.display = "none";
    document.getElementById('codeLabel').style.display = "none";
    document.getElementById('codePanel').style.display = "none";

    $('button').click(function(e) {
      var elements = document.getElementById('input_form').elements;
      document.getElementById('demo').style.display = "";
      document.getElementById('codeLabel').style.display = "";
      document.getElementById('codePanel').style.display = "";
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
        this.url = this.url.split("v=").pop();
        this.url = this.url.split("&")[0];
        document.getElementById('demo').innerHTML ='Preview: <div style="overflow:hidden;padding-bottom:56.25%;position:relative;height:0;width=' +this.width +'%"> \n  <iframe \n style="left:0;top:0;height:100%;width:100%;position:absolute;" \n  width="420" \n height="315" \n src="https://www.youtube.com/embed/' + this.url +'" \n frameborder="0" \n allowfullscreen> \n </iframe> \n </div> ';

        document.getElementById('code').innerText =
          '<div style="overflow:hidden;\npadding-bottom:56.25%;\nposition:relative;\nfloat:' + this.alignment + ';\nheight:0;\nwidth=' + this.width + '%"> \n \n<iframe \n style="left:0;\ntop:0;\nheight:100%;\nwidth:100%;\nposition:absolute;" \n  width="420" \n height="315" \n src="https://www.youtube.com/embed/' + this.url + '" \n frameborder="0" \n allowfullscreen>\n </iframe> \n </div> ';
      
        } else if (this.mediaType === 'image') {
        document.getElementById('demo').innerHTML = 'Preview: <img src="' + this.url + '" alt="image" style="float:' + this.alignment + ';width=' + this.width + '%" />';
        document.getElementById('code').innerText = '<img src="' + this.url + '" alt="image" style="float:' + this.alignment + ';width=' + this.width + '%" />';
      }
    });
  });
})(jQuery);
