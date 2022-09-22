$(document).ready(function () {
  setTimeout(function () {
    $(".loader").fadeToggle();
  }, 2500);

  $(".nav-link").click(function (e) {
    e.preventDefault();
    $(".navbar-collapse").removeClass("show");
    let id = $(this).attr("href");
    console.log(id);
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(id).offset().top,
      },
      400
    );
  });

  // scroll navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // scrool button
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  // Download CV
  const download = document.getElementById("fileRequest");

  download.addEventListener("click", request);

  function request() {
    window.location = "assets/CV.pdf";
  }
  // typing text animation script
  typed = new Typed(".typing", {
    strings: ["Developer.", "Designer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  typed = new Typed(".typing-2", {
    strings: ["Developer.", "Freelancer.", "Designer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
