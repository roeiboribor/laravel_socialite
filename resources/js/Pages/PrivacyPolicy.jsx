import ApplicantLayout from "@/Layouts/ApplicantLayout";
const PrivacyPolicy = () => {
    return (
        <ApplicantLayout>
            <h1 class="mb-16 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                Privacy Policy for CV Parser
            </h1>
            <section className="flex flex-col space-y-8">
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        Introduction
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        Thank you for using our CV parser application. This
                        privacy policy outlines how we collect, use, and protect
                        the personal information provided by users of our
                        application. By using our service, you agree to the
                        terms described in this policy.
                    </p>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        Information We Collect
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        Our CV parser application collects the following
                        information from applicant resumes:
                    </p>
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside text-gray-500 lg:text-lg dark:text-gray-40">
                        <li>
                            <strong>Contact Information</strong>: Including
                            names, email addresses, phone numbers, and postal
                            addresses.
                        </li>
                        <li>
                            <strong>Professional Details</strong>: Such as work
                            experience, education, skills, certifications, and
                            job titles.
                        </li>
                        <li>
                            <strong>Other Relevant Information</strong>: Any
                            additional details provided in the resume.
                        </li>
                    </ol>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        How We Use the Information
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        We use the collected information for the following
                        purposes:
                    </p>
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside text-gray-500 lg:text-lg dark:text-gray-40">
                        <li>
                            <strong>Resume Parsing</strong>: To extract relevant
                            details from resumes and create structured data.
                        </li>
                        <li>
                            <strong>Database Storage</strong>: To store parsed
                            resume information securely in our database.
                        </li>
                        <li>
                            <strong>Matching and Analysis</strong>: To match
                            applicants with relevant job openings and improve
                            our services.
                        </li>
                    </ol>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        How We Use the Information
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        We use the collected information for the following
                        purposes:
                    </p>
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside text-gray-500 lg:text-lg dark:text-gray-40">
                        <li>
                            <strong>Resume Parsing</strong>: To extract relevant
                            details from resumes and create structured data.
                        </li>
                        <li>
                            <strong>Database Storage</strong>: To store parsed
                            resume information securely in our database.
                        </li>
                        <li>
                            <strong>Matching and Analysis</strong>: To match
                            applicants with relevant job openings and improve
                            our services.
                        </li>
                    </ol>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        Data Security
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        We take data security seriously. Here are the measures
                        we have in place:
                    </p>
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside text-gray-500 lg:text-lg dark:text-gray-40">
                        <li>
                            <strong>Encryption</strong>: All data transmitted
                            between the user’s device and our servers is
                            encrypted using industry-standard protocols.
                        </li>
                        <li>
                            <strong>Access Control</strong>: Only authorized
                            personnel have access to the database.
                        </li>
                        <li>
                            <strong>Regular Audits</strong>: We conduct regular
                            security audits to identify and address
                            vulnerabilities.
                        </li>
                    </ol>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        Sharing of Information
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        We do not share applicant information with third parties
                        unless required by law or with the applicant’s consent.
                    </p>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        Your Rights
                    </h3>
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside text-gray-500 lg:text-lg dark:text-gray-40">
                        <li>
                            <strong>Access</strong>: You can request access to
                            the information we hold about you.
                        </li>
                        <li>
                            <strong>Correction</strong>: If you believe any
                            information is inaccurate, you can request
                            corrections.
                        </li>
                        <li>
                            <strong>Deletion</strong>: You can request the
                            deletion of your data from our database.
                        </li>
                    </ol>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        Changes to this Policy
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        We may update this privacy policy from time to time. Any
                        changes will be posted on our website.
                    </p>
                </article>
                <article>
                    <h3 class="text-3xl font-bold dark:text-white mb-4">
                        Contact Us
                    </h3>
                    <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-40">
                        If you have any questions or concerns regarding this
                        privacy policy, please contact us at
                        information@auxmeet.com.
                    </p>
                </article>
            </section>
        </ApplicantLayout>
    );
};

export default PrivacyPolicy;
