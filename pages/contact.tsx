import type { NextPage } from "next";
import { useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface FormData {
  fname: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: NextPage = () => {
  let [formData, setFormData] = useState<FormData>({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (formData: FormData) => {
    let newLocation = `mailto:luzzittot@outlook.com&cc=${formData.email}&subject=${formData.subject}&body=${formData.subject}-${formData.fname}`;
    let win: Window = window;
    win.location = newLocation;
  };
  return (
    <>
      <Container title="Contact">
        <Navbar />
        <div className="p-6 md:w-1/3 mx-auto mb-6">
          <h1 className="text-4xl font-semibold mb-6">Contact Me</h1>
          <form method="post" className="">
            <label className="block mb-2">
              <span className="text-gray-700">Full Name</span>
              <input
                type="text"
                name="fname"
                id="fname"
                className="form-input mt-1 w-full"
                onChange={(e) =>
                  setFormData({ ...formData, fname: e.target.value })
                }
                value={formData.fname}
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input m-1 w-full"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Subject</span>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-input mt-1 w-full"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                value={formData.subject}
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                id="message"
                className="form-textarea mt-1 w-full"
                rows={10}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              >
                {formData.message}
              </textarea>
            </label>
            <a
              href="#"
              className="btn bg-gray-900 text-gray-200 hover:bg-gray-700 hover:text-white mt-4 w-full"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(formData);
              }}
            >
              Submit
            </a>
          </form>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Contact;
