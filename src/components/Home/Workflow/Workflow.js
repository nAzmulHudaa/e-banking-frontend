import mobImg from '../../../images/mobile-app-mockup-1.png';
import { ShieldCheckIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Secure Transactions",
    description: "Our platform uses state-of-the-art encryption to keep your transactions safe.",
    icon: ShieldCheckIcon,
  },
  {
    name: "24/7 Availability",
    description: "Access your accounts and manage your finances whenever and wherever you need to.",
    icon: ClockIcon 
  },
  {
    name: "Global Access",
    description: "Our platform lets you manage your finances from anywhere in the world.",
    icon: GlobeAltIcon
  }
];


export default function Workflow() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base text-left font-semibold leading-7 text-indigo-600">Why Choose Us?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">Choose Us for Secure <br /> and Convenient Banking</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                Our e-banking platform offers a range of benefits that make managing your finances easier than ever. Here are just a few reasons why you should choose us:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="text-left relative pl-9">
                    <dt className="inline text-left font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className=" text-left">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* <img
            src={mobImg}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          /> */}
          <img
            src={mobImg}
            className='m-auto pl-3'
          />
        </div>
      </div>
    </div>
  )
}
