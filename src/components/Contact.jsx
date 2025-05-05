const Contact = () => {
    return (
      <article className="max-w-4xl mx-auto px-4 py-14 font-ibm text-center flex flex-col items-center justify-center h-screen relative">
        {/* Header Section */}
        <header className="absolute top-5 left-4 w-full text-left">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900">
              Home
            </a>
            <span className="mx-2">&gt;</span>
            <span>Contact Us</span>
          </nav>
        </header>
  
        {/* Main Section */}
        <div className="space-y-6 mt-10">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-gray-800 max-w-2xl">
            For any support, please mail to <strong>hello@theflickapp.com</strong> or
            contact us on <strong>+91 6360754645</strong>. Our support team will get
            back to you within 24 hours.
          </p>
        </div>
      </article>
    );
  };
  
  export default Contact;