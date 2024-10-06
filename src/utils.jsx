export const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

export const handleCall = () => {
  const number = "+91 9911148122";
  window.location.href = `tel:${number}`;
};

export const handleOpenMail = () => {
  const email = "nilesh.document1@gmail.com";
  window.location.href = `mailto:${email}`;
};

export const handleOpenMaps = () => {
  const location = "Shanti Nagar, Gurgaon, Haryana, India";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;
  window.open(mapsUrl, "_blank");
};

export const handleNavigate = (link) => {
  if (link) {
    window.open(link, "_blank", "rel=noopener noreferrer");
  }
};
