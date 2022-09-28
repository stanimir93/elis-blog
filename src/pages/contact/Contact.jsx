import React from "react";
import Card from "../../components/card/Card";
import uuid from "react-uuid";

export default function Contact(props) {
  return (
    <div className="width-content">
      <section>
        <h1>Contact</h1>
      </section>
      <section>
        <p className="pt-5 fs-4">
          Email: <strong>Elis.Sperkova@gmail.com</strong>
        </p>
      </section>
    </div>
  );
}
