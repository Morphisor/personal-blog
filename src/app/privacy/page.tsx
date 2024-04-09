
export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy of the site`
}

export default function PrivacyPage() {
  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="inline-block mt-6 font-semibold text-light text-2xl md:text-3xl lg:text-5xl leading-normal relative w-5/6">
          Privacy Policy for Morphisor's blog
        </h1>
        <p className="font-semibold mt-2">Last updated: 09/04/2024</p>

        <p>Welcome to my blog, accessible from <a href="https://morphisor.vercel.app/">https://morphisor.vercel.app/</a>. This page informs you of our policies regarding the display of advertisements, including those served by Google AdSense, and the implications for your privacy.</p>

        <h3 className="mt-4 font-medium dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl">
          Google AdSense and the DoubleClick Cookie
        </h3>
        <p>
          Google, as a third-party vendor, uses cookies to serve ads on this blog. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our site's visitors based upon their visit to this blog and other sites on the Internet.

          Users may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting Google's Ads Settings. Alternatively, you can opt out of a third-party vendor's use of cookies for interest-based advertising by visiting aboutads.info.
        </p>

        <h3 className="mt-4 font-medium dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl">
          Cookies
        </h3>
        <p>
          A cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity.

          Our website uses these "cookies" to collection information and to improve our service. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.

        </p>

        <h3 className="mt-4 font-medium dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl">
          No Personal Data Collection
        </h3>
        <p>
          My blog does not collect any personal data from its visitors, emphasizing our commitment to privacy and data protection. Our use of Google AdSense is solely for the purpose of serving relevant advertisements to our readers, without any direct collection or handling of personal data on our part.

        </p>

        <h3 className="mt-4 font-medium dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl">
          Changes to This Privacy Policy
        </h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We advise you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

        </p>

        <h3 className="font-medium dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl">
          Contact Us
        </h3>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
      </div>
    </article>
  )
}