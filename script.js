window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  $("#mnu").hide();
  if (window.pageYOffset > sticky) 
  {
    header.classList.add("stuck");
    $(".logo_white").hide();
    $(".logo_blue").show();
  }
  else
  {
    header.classList.remove("stuck");
    $(".logo_white").show();
    $(".logo_blue").hide();
  }
}

$(document).ready(function()
{
  $("#myHeader a").each(function()
  {
    if($("#myHeader.stuck").length>0) return;
    $(this).on("mouseover",function()
    {
      var alias = $(this).attr("data-name");
      if(!alias)
      {
        $("#mnu").hide();
        return;
      }
      $("#mnu").show();
      $("#mnu").find(".mnu-inner").hide();
      $("#mnu").find(".mnu-"+alias).show();
      
    });
  });
});