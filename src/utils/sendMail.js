import emailjs from "@emailjs/browser";

const sendMail = (form) => {
  emailjs
    .sendForm(
      "service_v5uma1f",
      "template_yoqe9rw",
      form.current,
      "d3H8Pbv0GQ6AwNuBQ"
    )
    .then(
      (result) => {
        // show the user a success message
        alert("Your request submitted successfully");
      },
      (error) => {
        // show the user an error
        alert("Please check your connectivity");
      }
    );
};
export default sendMail;
