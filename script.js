const navbarLinks = document.querySelectorAll(".navbar a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
});
const getCurrentYear = () => new Date().getFullYear();
document.getElementById("currentYear").textContent = getCurrentYear();

function setNavbarAttributes() {
  if (window.innerWidth < 992) {
    var navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item) {
      item.setAttribute("data-bs-toggle", "collapse");
      item.setAttribute("data-bs-target", "#navbarSupportedContent");
    });
  } else {
    var navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item) {
      item.removeAttribute("data-bs-toggle");
      item.removeAttribute("data-bs-target");
    });
  }
}

window.onload = setNavbarAttributes;
window.addEventListener("resize", setNavbarAttributes);

const home = async () => {
  try {
    document.getElementById("loading").innerHTML = `
        <img id="loading-image" src="Image/loading.gif" alt="Loading..." />`;
    const response = await fetch("page1.html");
    if (response.ok) {
      const text = await response.text();
      document.getElementById("loading").innerHTML = ``;
      document.getElementById("exchange").innerHTML = text;
    } else {
      console.log(`Failed to load page1.html : ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.log(`An error occurred while fetching page1.html : ${error}`);
  }
};

const about = async () => {
  try {
    document.getElementById("loading").innerHTML = `
        <img id="loading-image" src="Image/loading.gif" alt="Loading..." />`;
    const res = await fetch("page2.html");
    if (res.ok) {
      const text = await res.text();
      document.getElementById("loading").innerHTML = ``;
      document.getElementById("exchange").innerHTML = text;
    } else {
      console.log(`Failed to load page2.html : ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.error(`An error occurred while fetching page2.html : ${error}`);
  }
};

const service = async () => {
  try {
    document.getElementById("loading").innerHTML = `
        <img id="loading-image" src="Image/loading.gif" alt="Loading..." />`;
    const response = await fetch("page3.html");
    if (response.ok) {
      const text = await response.text();
      document.getElementById("loading").innerHTML = ``;
      document.getElementById("exchange").innerHTML = text;
    } else {
      console.error(`Failed to fetch page3.html: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("An error occurred while fetching page3.html:", error);
  }

  const boderservices = document.querySelectorAll(".boderservices");
  boderservices.forEach((box) => {
    box.addEventListener("click", function () {
      boderservices.forEach((box) => box.classList.remove("active2"));
      this.classList.add("active2");
    });
  });

  let servicetab1 = document.getElementById("servicetab1");
  let servicetab2 = document.getElementById("servicetab2");
  let servicetab3 = document.getElementById("servicetab3");
  var changedataservicetab = document.getElementById("changedataservicetab");

  servicetab1.addEventListener("click", () => {
    changedataservicetab.innerHTML = `
          <div>
          <h4 class="text-white mb-5 fw-bolder">Service Tab One</h4>
          <p class="text-white mb-5 fw-bolder">Etiam egestas metus vitae est interdum, in eleifend nunc volutpat. Aliquam molestie ipsum quis suscipit lacinia. Mauris turpis libero, iaculis non dictum ac, ornare a massa. Duis id lorem purus. Fusce viverra ullamcorper metus. Curabitur puvinar suscipit sapien ac blandit. Aliquam vel pulvinar purus, sit amet luctus urna.</p>
          <p class="text-white mb-5 fw-bolder">Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh, nec dictum libero justo vitae dolor. Donec tristique eros at nisi elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue. Nulla convallis est volutpat ex ultrices facilisis.</p>
      </div>`;
  });

  servicetab2.addEventListener("click", () => {
    changedataservicetab.innerHTML = `
          <div>
          <h4 class="text-white mb-5 fw-bolder">Service Tab Two</h4>
          <p class="text-white mb-5 fw-bolder" >Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh, nec dictum libero justo vitae dolor. Donec tristique eros at nisi elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue. Nulla convallis est volutpat ex ultrices facilisis.</p>
          <p class="text-white mb-5 fw-bolder">Etiam egestas metus vitae est interdum, in eleifend nunc volutpat. Aliquam molestie ipsum quis suscipit lacinia. Mauris turpis libero, iaculis non dictum ac, ornare a massa. Duis id lorem purus. Fusce viverra ullamcorper metus. Curabitur puvinar suscipit sapien ac blandit. Aliquam vel pulvinar purus, sit amet luctus urna.</p>
      </div>`;
  });

  servicetab3.addEventListener("click", () => {
    changedataservicetab.innerHTML = `
          <div>
          <h4 class="text-white mb-5 fw-bolder">Service Tab Three</h4>
          <p class="text-white mb-5 fw-bolder">Mauris turpis libero, iaculis non dictum ac, ornare a massa. Duis id lorem purus. Fusce viverra ullamcorper metus. Curabitur puvinar suscipit sapien ac blandit. Aliquam vel pulvinar purus, sit amet luctus urna. Nulla convallis est volutpat ex ultrices facilisis.</p>
          <p class="text-white mb-5 fw-bolder">Etiam egestas metus vitae est interdum, in eleifend nunc volutpat. Aliquam molestie ipsum quis suscipit lacinia. Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh, nec dictum libero justo vitae dolor. Donec tristique eros at nisi elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue.</p>
      </div>`;
  });
};

const testimonial = async () => {
  try {
    document.getElementById("loading").innerHTML = `
        <img id="loading-image" src="Image/loading.gif" alt="Loading..." />`;
    const response = await fetch("page4.html");
    if (response.ok) {
      const text = await response.text();
      document.getElementById("loading").innerHTML = ``;
      document.getElementById("exchange").innerHTML = text;
    } else {
      console.log(`Failed to load page4.html : ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.log(`An error occurred while fetching page4.html : ${error}`);
  }
};

const contact = async () => {
  try {
    document.getElementById("loading").innerHTML = `
        <img id="loading-image" src="Image/loading.gif" alt="Loading..." />`;
    const response = await fetch("page5.html");
    if (response.ok) {
      const text = await response.text();
      document.getElementById("loading").innerHTML = ``;
      document.getElementById("exchange").innerHTML = text;
    } else {
      console.log(`Failed to load page5.html : ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.log(`An error occurred while fetching page5.html : ${error}`);
  }
};

let homepage = document.getElementById("homepage");
homepage.onclick = home;

let aboutpage = document.getElementById("aboutpage");
aboutpage.onclick = about;

let servicepage = document.getElementById("servicepage");
servicepage.onclick = service;

let testimonialpage = document.getElementById("testimonialpage");
testimonialpage.onclick = testimonial;

let contactpage = document.getElementById("contactpage");
contactpage.onclick = contact;
