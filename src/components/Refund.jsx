const Refund = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-14 font-ibm">
      <div className="space-y-8">
        {/* Header Section */}
        <header className="space-y-2">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900">
              Home
            </a>
            <span className="mx-2">›</span>
            <span>Refund Policy</span>
          </nav>
          <h1 className="text-3xl font-medium"> Refund Policy</h1>
        </header>

        {/* Introduction Section */}
        <section className="space-y-4">
          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
            Thanks for your interest in GrowthSchool. We ensure to provide an
            excellent experience and learning to all our users. As with any
            online purchase experience, some terms and conditions govern the
            Refund Policy. When you purchase a program on GrowthSchool, you
            agree to our <span className="font-medium">Term & Conditions</span>{" "}
            and <span className="font-medium">Refund Policy</span>
          </p>
          <br />
          <br />
          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
            Our Refund Policy is as follows:
          </p>{" "}
          <br />
          <br />
          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
            You acknowledge that the Services purchased by you are
            non-transferable and non-refundable.
          </p>{" "}
          <br />
          <br />
          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
            You acknowledge that we are under no obligation to refund any fees
            and applicable charges paid by you, in full or partially, under no
            circumstances, including for modifying and extending the duration of
            the Service, change in the commencement date of the Service, your
            failure to attend or participate in the Service, modification of the
            structure or content of the Service.
          </p>{" "}
          <br />
          <br />
          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
            If a refund is provided, you hereby agree and acknowledge that such
            amount to be refunded may either be paid in cash or credit (for
            purchase of any other Services of GrowthSchool of equivalent value)
            at the sole discretion of GrowthSchool.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Refund;
