import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaDisplay, FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button/Button";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Shivam kumar singh");
  const [email, setEmail] = useState("shivam31473@gmail.com");
  const [text, setText] = useState(
    "This is my second react project by youtube"
  );

  const onSubmit = (e) => {
    e.preventDefault();
    
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="  VIA SUPPORT CHA"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="  VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text=" VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="  SUBMIT BUTTON" />
          </div>
          <div>{name + "" + email + " " + text + " "}</div>
        </form>
      </div>

      <div className="styles.contact_images">
        <img src="\images\contact.svg" alt="contact_image" />
      </div>
    </section>
  );
};

export default ContactForm;
