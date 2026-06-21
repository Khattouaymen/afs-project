(function () {
  var menuToggle = document.getElementById("menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("hidden");
      isOpen = !isOpen;
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var email = form.getAttribute("data-email") || "";
      var formData = new FormData(form);
      var subject = (formData.get("subject") || "").toString().trim() || "Prise de contact depuis le site Ask for Success";
      var body = [
        "Nom : " + (formData.get("name") || ""),
        "Email : " + (formData.get("email") || ""),
        "",
        (formData.get("message") || "").toString().trim(),
      ].join("\n");

      var query = new URLSearchParams({ subject: subject, body: body }).toString();
      window.location.href = "mailto:" + email + "?" + query;

      if (status) {
        status.textContent = "Votre messagerie devrait s ouvrir. Si rien ne se passe, utilisez l email direct ci-dessus.";
      }
    });
  }

  var revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("in-view");
    });
  }
})();
