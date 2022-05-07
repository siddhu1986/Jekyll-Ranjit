/*
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }//if-else
  });//win func.
});//ready func
*/



window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  $("#mnu").hide();
  if (window.pageYOffset > sticky) {
    //header.classList.add("sticky");
    header.classList.add("stuck");
    $(".logo_white").hide();
    $(".logo_blue").show();
  } else {
    //header.classList.remove("sticky");
    header.classList.remove("stuck");
    $(".logo_white").show();
    $(".logo_blue").hide();
  }
}

var __mnuHovered = -1;
var __mnuHoveredSI = null;
$(document).ready(function()
{
  $("#myHeader a").each(function()
  {
    if($("#myHeader.stuck").length>0) return;
    $(this).on("mouseover",function()
    {
      //alert();
      var alias = $(this).attr("data-name");
      if(!alias)
      {
        $("#mnu").hide();
        return;
      }
      $("#mnu").show();
      $("#mnu").find(".mnu-inner").hide();
      $("#mnu").find(".mnu-"+alias).show();
      return;
      $("#mnu").on("mouseover",function()
      {
        __mnuHovered = true;
        if(__mnuHoveredSI)
        {
          clearTimeout(__mnuHoveredSI);
          __mnuHoveredSI = null

        }
        __mnuHoveredSI = setTimeout(function()
        {
          __mnuHovered = false;
        },2000);
      });
      $("body").on("mousemove",function()
      {
        console.log("mm");
        if(__mnuHovered!=-1 && __mnuHovered==false)
        {
          $("#mnu").hide();
          $("body").off("mousemove");
          __mnuHovered = -1;
        }
      });
      /*$(".topbanner").off("mouseout").on("mouseout",function()
      {
        //$("#mnu").hide();
      });*/
    });
  });
});