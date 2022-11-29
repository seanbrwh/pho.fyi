export default function Contact() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="bg-primary w-1/2 h-full flex flex-col justify-start items-center py-10 rounded-md">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className="flex flex-col w-full">
            <label className="text-tertiary py-1 my-2" htmlFor="name">
              First Name
            </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-tertiary py-1 my-2" htmlFor="name">
              Last Name
            </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-tertiary py-1 my-2" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" />
            <label className="text-tertiary py-1 my-2" htmlFor="email">
              Subject
            </label>
            <input type="subject" name="subject" id="subject" />
            <label className="text-tertiary py-1 my-2" htmlFor="message">
              Message
            </label>
            <textarea className="h-20" name="message" id="message" />
          </div>
          <div>
            <input
              type="submit"
              value="Send Message"
              className="bg-fourth mt-10 p-3 text-primary font-serif rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
