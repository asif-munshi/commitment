export default function ContactPage() {
  return (
    <div className="flex flex-auto flex-col items-center justify-between py-12">
      <div>
        <h2 className="scroll-m-20 pb-2 pt-8 text-3xl font-semibold tracking-tight transition-colors">
          Contact
        </h2>
      </div>
      <div className="mb-4 flex justify-center gap-8">
        <div className="">
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-[#f25936ff]">
            Office + Factory
          </h3>
          <p className="font-[family-name:var(--font-geist-mono)] leading-7">
            212/1 Karim Villa,
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] leading-7">
            Fakirapool, Motijheel,
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] leading-7">
            Dhaka-1000.
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] leading-7">
            Mobile: 01710991919,
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] leading-7">
            Email: commitmentaccessories@gmail.com.
          </p>
        </div>
      </div>
      <div className="flex w-[85%] justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.279613979126!2d90.4177456674525!3d23.730477139945794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1727072301682!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
