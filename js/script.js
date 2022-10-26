const headelChange = (isChecked) => {
  if (isChecked) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
};
