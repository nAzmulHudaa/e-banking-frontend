import './Feature.css';
import { ArrowPathIcon, CreditCardIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Instant Account Access",
    description: "Access your accounts instantly from anywhere.",
    icon: ArrowPathIcon,
  },
  {
    name: "Intuitive Budgeting Tools",
    description: "Manage your finances and set budgets with ease.",
    icon: CreditCardIcon
  },
  {
    name: "Seamless Money Transfers",
    description: "Transfer money quickly and securely.",
    icon: GlobeAltIcon,
  },
  {
    name: "24/7 Customer Support",
    description: "Get help with your banking needs anytime, anywhere.",
    icon: UserGroupIcon,
  }
];



export default function Feature() {
  return (
    <section id="solutions">
      <div className="feature py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
            <p className="mt-2 mb-4 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
              The future of banking is here: <br /> Discover our cutting-edge features
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            At our E-banking website, we're committed to providing you with the latest and greatest in banking technology. Take a look at our innovative features and see how we can help you achieve your financial goals.
          </p> */}
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
