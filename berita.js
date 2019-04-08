if(location.href==='http://beritanarkoba.com/berita_cetak'){window.open('http://beritanarkoba.com/berita_cetak/create','_self');}
if(location.href==='http://beritanarkoba.com/berita_cetak/create'){
/*document.getElementsByName("link")[0].style.display="none";
document.getElementsByName("kontributor")[0].style.display="none";
document.getElementsByName("editor")[0].style.display="none";
document.getElementsByName("isi")[0].style.display="none";

$("#isi").parents('.md-editor').remove();*/
document.getElementsByName("edisi")[0].style.display="none";
document.getElementsByName("komentar")[0].style.display="none";
document.getElementsByTagName("section")[0].style.marginTop="-100px";
document.getElementsByTagName("section")[0].style.marginLeft="-50px";

$("#tanggal").val('2017-12-09');
document.getElementsByName("klasifikasi")[0].value="1";
document.getElementsByName("sumber_berita")[0].value="3";
//$("input[name='judul']").focus();

$("input").on('keyup', function(e) {
  var arr = $(this).val().split(' ');
  var result = '';
  for (var x = 0; x < arr.length; x++)
    result += arr[x].substring(0, 1).toUpperCase() + arr[x].substring(1) + ' ';
  $(this).val(result.substring(0, result.length - 1));
});

/*
document.getElementsByName("link")[0].style.visibility="hidden";
document.getElementsByName("kontributor")[0].style.visibility="hidden";
document.getElementsByName("editor")[0].style.visibility="hidden";
document.getElementsByName("komentar")[0].style.visibility="hidden";
alert('http://beritanarkoba.com/berita_online/create');
*/

var css = '.form-group {margin-bottom:0;}
.md-editor,.md-input{display:none;height:0px;}
.inner-wrapper{padding:0px;}
/*#sidebar-left{display:none;}*/
input[type="text"]{width: 170px;}
.btn-default, .btn-info{display:none;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

}

if(location.href==='http://beritanarkoba.com/berita_online'){window.open('http://beritanarkoba.com/berita_online/create','_self');}
if(location.href==='http://beritanarkoba.com/berita_online/create'){
document.getElementsByName("link")[0].style.display="none";
document.getElementsByName("kontributor")[0].style.display="none";
document.getElementsByName("editor")[0].style.display="none";
document.getElementsByName("komentar")[0].style.display="none";
document.getElementsByName("isi")[0].style.display="none";
document.getElementsByTagName("section")[0].style.marginTop="-100px";
document.getElementsByTagName("section")[0].style.marginLeft="-50px";

$("#isi").parents('.md-editor').remove();
$("#tanggal").val('2017-12-20');
//$("input[name='judul']").focus();

$("input").on('keyup', function(e) {
  var arr = $(this).val().split(' ');
  var result = '';
  for (var x = 0; x < arr.length; x++)
    result += arr[x].substring(0, 1).toUpperCase() + arr[x].substring(1) + ' ';
  $(this).val(result.substring(0, result.length - 1));
});

/*
document.getElementsByName("link")[0].style.visibility="hidden";
document.getElementsByName("kontributor")[0].style.visibility="hidden";
document.getElementsByName("editor")[0].style.visibility="hidden";
document.getElementsByName("komentar")[0].style.visibility="hidden";
alert('http://beritanarkoba.com/berita_online/create');
*/

var css = '.form-group {margin-bottom:0;}
.md-editor,.md-input{display:none;height:0px;}
.inner-wrapper{padding:0px;}
/*#sidebar-left{display:none;}*/
input[type="text"]{width: 170px;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

}
