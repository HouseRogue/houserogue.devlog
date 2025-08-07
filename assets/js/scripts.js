const coverImage = document.getElementById("cover-image");
const firstPost = document.querySelector(".post-button[data-cover]");
const defaultSrc = firstPost ? firstPost.dataset.cover : coverImage.src;

coverImage.src = defaultSrc;
let lastHoveredSrc = defaultSrc;

document.querySelectorAll(".post-button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const newSrc = button.dataset.cover;
    if (newSrc) {
      coverImage.src = newSrc;
      lastHoveredSrc = newSrc;
    }
  });
});
