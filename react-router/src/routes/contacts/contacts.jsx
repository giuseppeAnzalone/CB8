import NavBar from "../../components/navBar";

import "./index.scss"

const Contacts = () => {
  return (
    <div>
      <NavBar />
      <section className="Contacts">
      <h1>Contacts</h1>
      <ul>
        <li>Giuseppe Anzalone</li>
        <li>Mobile: 3409875324</li>
        <li>Email: g.anzalone88@gmail.com</li>
      </ul>
      </section>
    </div>
  );
};

export default Contacts;
