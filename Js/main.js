function openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile__menu").style.width = "0";
  }
  
  $(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });

