import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW </span>TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
            eius maiores excepturi obcaecati vero inventore deleniti asperiores
            iste recusandae perferendis dolores, eligendi expedita ducimus error
            neque officiis, mollitia facere. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              action="https://formsubmit.co/d262e025c8db0c8cc4ae2b916cee2a71"
              method="POST"
              onSubmit={onSubmit}
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                className={`${inputStyles} resize-none`}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 duration-500 hover:text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div className="relative mt-16 md:mt-0  basis-2/5">
            <div className="md:before:content-evolvetext before:absolute w-full before:-bottom-20 before:-right-10 before:opacity-90 before:z-[-1]">
              <img
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
