import React, { lazy, Suspense } from "react";
const PackageCard = lazy(() => import("../common/Cards/Package/PackageCard"));

function Pricing({ pricing }) {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <div className="pt-8 pb-6">
          <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-rose-400 text-center">Pricing and Packages</h2>
          <section className="package-detail flex justify-evenly ">
            {pricing.map((pricing, index) => (
                <PackageCard key={index} {...pricing} />
            ))}
          </section>
        </div>
      </Suspense>
    );
  }

  export default Pricing;
