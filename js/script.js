alert("SCRIPT JS LOADED");
document.addEventListener("DOMContentLoaded", () => {

  /* HERO SCROLL */
  function scrollToMain() {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth"
    });
  }
  window.scrollToMain = scrollToMain;

  /* SCROLL REVEAL */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });

  /* TEAM DATA */
  const teamData = {
    anshuman: {
      name: "Anshuman Umbarje",
      role: "Co-Founder | Mechatronics Engineer",
      img: "images/team/anshuman.jpg",
      desc: "Expert in CAD, automotive systems, robotics, and prototyping."
    },
    kaustubh: {
      name: "Kaustubh Ghude",
      role: "Co-Founder | Chemistry Expert",
      img: "images/team/kaustubh.jpg",
      desc: "Specialist in material science, patent research, and sustainable formulations."
    },
    pramod: {
      name: "Pramod Kadam",
      role: "Co-Founder | Operations",
      img: "images/team/pramod.jpg",
      desc: "15+ years experience at Baker Hughes in operations and manufacturing quality."
    }
  };

  /* MODAL FUNCTIONS */
  window.openModal = function (person) {
     alert("OPEN MODAL CALLED");
    const data = teamData[person];
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = data.img;
    document.getElementById("modal-name").innerText = data.name;
    document.getElementById("modal-role").innerText = data.role;
    document.getElementById("modal-desc").innerText = data.desc;
  };

  window.closeModal = function () {
    document.getElementById("modal").style.display = "none";
  };

});
