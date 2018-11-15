

jQuery.noConflict();
(function($) {
  $(function() {

    var demo = document.getElementById('demo');
    var code = document.getElementById('code');
    var codeLabel = document.getElementById('codeLabel');
    var codePanel = document.getElementById('codePanel');

    
    demo.style.display = "none";
    codeLabel.style.display = "none";
    codePanel.style.display = "none";

    $('button').click(function(e) {
      var elements = document.getElementById('input_form').elements;
      demo.style.display = "";
      codeLabel.style.display = "";
      codePanel.style.display = "";

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

      codeLabel.innerText = 'Code: ';

      if (this.mediaType === 'video') {
        this.url = this.url.split("v=").pop();
        this.url = this.url.split("&")[0];
        demo.innerHTML ='Preview: <div style="overflow:hidden;padding-bottom:56.25%;position:relative;height:0;width=' +this.width +'%"> \n  <iframe \n style="left:0;top:0;height:100%;width:100%;position:absolute;" \n  width="420" \n height="315" \n src="https://www.youtube.com/embed/' + this.url +'" \n frameborder="0" \n allowfullscreen> \n </iframe> \n </div> ';

        code.innerText =
          '<div style="overflow:hidden;\npadding-bottom:56.25%;\nposition:relative;\nfloat:' + this.alignment + ';\nheight:0;\nwidth=' + this.width + '%"> \n \n<iframe \n style="left:0;\ntop:0;\nheight:100%;\nwidth:100%;\nposition:absolute;" \n  width="420" \n height="315" \n src="https://www.youtube.com/embed/' + this.url + '" \n frameborder="0" \n allowfullscreen>\n </iframe> \n </div> ';
      
        } else if (this.mediaType === 'image') {
          demo.innerHTML = 'Preview: <img src="' + this.url + '" alt="image" style="float:' + this.alignment + ';width=' + this.width + '%" />';
          code.innerText = '<img src="' + this.url + '" alt="image" style="float:' + this.alignment + ';width=' + this.width + '%" />';
      } else if (this.mediaType === 'lazy') {

        this.url = this.url.split("v=").pop();
        this.url = this.url.split("&")[0];

        demo.innerHTML = 'Preview: <style>.youtube{background-color: #000; margin-bottom: 30px; position: relative; padding-top: 56.25%; overflow: hidden; cursor: pointer;}.youtube img{width: 100%; top: -16.84%; left: 0; opacity: 0.7;}.youtube .play-button{width: 90px; height: 60px; background-color: #333; box-shadow: 0 0 30px rgba(0, 0, 0, 0.6); z-index: 1; opacity: 0.8; border-radius: 6px;}.youtube .play-button:before{content: ""; border-style: solid; border-width: 15px 0 15px 26.0px; border-color: transparent transparent transparent #fff;}.youtube img, .youtube .play-button{cursor: pointer;}.youtube img, .youtube iframe, .youtube .play-button, .youtube .play-button:before{position: absolute;}.youtube .play-button, .youtube .play-button:before{top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0);}.youtube iframe{height: 100%; width: 100%; top: 0; left: 0;}</style> \n \n <div class="youtube" data-video_id="'+this.url+'">\n <div class="play-button"></div>\n </div>';

        code.innerText = '<style>.youtube{background-color: #000; margin-bottom: 30px; position: relative; padding-top: 56.25%; overflow: hidden; cursor: pointer;}.youtube img{width: 100%; top: -16.84%; left: 0; opacity: 0.7;}.youtube .play-button{width: 90px; height: 60px; background-color: #333; box-shadow: 0 0 30px rgba(0, 0, 0, 0.6); z-index: 1; opacity: 0.8; border-radius: 6px;}.youtube .play-button:before{content: ""; border-style: solid; border-width: 15px 0 15px 26.0px; border-color: transparent transparent transparent #fff;}.youtube img, .youtube .play-button{cursor: pointer;}.youtube img, .youtube iframe, .youtube .play-button, .youtube .play-button:before{position: absolute;}.youtube .play-button, .youtube .play-button:before{top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0);}.youtube iframe{height: 100%; width: 100%; top: 0; left: 0;}</style> \n\n <div class="youtube" data-video_id="'+this.url+'">\n <div class="play-button"></div>\n </div>\n';
        code.innerText +=' \n<script>var youtube=document.querySelectorAll(".youtube"); console.log(youtube.length); for (var i=0; i < youtube.length; i++){var source="https://img.youtube.com/vi/" + youtube[i].dataset.video_id + "/sddefault.jpg"; var image=new Image(); image.src=source; image.addEventListener("load", function (){youtube[i].appendChild(image);}(i)); youtube[i].addEventListener("click", function (){var iframe=document.createElement("iframe"); iframe.setAttribute("frameborder", "0"); iframe.setAttribute("allowfullscreen", ""); iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.video_id + "?rel=0&showinfo=0&autoplay=1"); this.innerHTML=""; this.appendChild(iframe);});}</script>';
      
        var youtube=document.querySelector(".youtube");
        console.log(youtube.length);
        var source="https://img.youtube.com/vi/" + this.url + "/sddefault.jpg";
        
        var image=new Image(); image.src=source;
        image.addEventListener("load", function () {
          youtube.appendChild(image);
        }(0));

        youtube.addEventListener("click", function (){ 

          var iframe=document.createElement("iframe");
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");
          iframe.setAttribute("src", "https://www.youtube.com/embed/" + youtube.dataset.video_id + "?rel=0&showinfo=0&autoplay=1");
          this.innerHTML=""; this.appendChild(iframe);
        });
          
      }
    });
  });
})(jQuery);
