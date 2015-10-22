// alert("Hello World!")
// $("body").css("background-color", "red")

// A user clicks on the anchore tag that has the class of trigger
// When the click event is heard, we want to decide if we should slide up or down the navigation
// Once we know which way we are sliding we need to perform the slide up OR slide down
$(".trigger").on("click", function(){
  // console.log("test")
  $("nav").slideToggle()
})
