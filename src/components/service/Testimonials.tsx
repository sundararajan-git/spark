"use client";

const Testimonials = () => (
  <section className="py-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-10 text-gray-800">
      What Our Clients Say
    </h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <p>
          {`"Spark's AMC service is a lifesaver — our machine uptime improved
          dramatically!"`}
        </p>
        <p className="mt-4 font-semibold">– Ramesh, Plant Manager</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <p>
          {`"Very knowledgeable team and fast service. Highly recommend for
          installations."`}
        </p>
        <p className="mt-4 font-semibold">– Priya, Operations Head</p>
      </div>
    </div>
  </section>
);

export default Testimonials;
