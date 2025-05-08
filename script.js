const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "index.html" || currentPage === "") {
  window.addEventListener("load", () => {
    showWelcomeToast();
  });
}

function showWelcomeToast() {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "Ласкаво просимо на сайт про Чернігів!";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => {
      toast.remove();
    }, 1000);
  }, 4000);
}

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".period img, .main-img, .gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
