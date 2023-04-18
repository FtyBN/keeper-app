function Footer() {

  const dataOfYear = new Date().getFullYear();

  return (
    <footer>
      <p>copyright of © {dataOfYear}</p>
    </footer>
  );
}
export default Footer;
