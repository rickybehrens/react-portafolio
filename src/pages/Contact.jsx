export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="Name" />
        </label>
        <label>
          Email:
          <input type="text" name="Email" />
        </label>
        <label>
          Message:
          <textarea name="Message" rows="10"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
