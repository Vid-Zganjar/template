import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    name: 'Crna majica',
    role: 'Crna majica',
    price: '8€',
    imageUrl:"https://full.cistaodjeca.hr/muska-jednostavna-majica-crno-hr-103064-1704365043.webp",
    rating: 4.2,
    gender: 'Moški'
  },
  {
    name: 'Roza majica',
    role: 'Roza majica',
    price: '9€',
    imageUrl:"https://www.primoniz.hr/wp-content/uploads/2019/03/900003811.jpg",
    rating: 3,
    gender: 'Ženski'
  },
  {
    name: 'POLO MAJICA',
    role: 'Polo majica',
    price: '13€',
    imageUrl:"https://www.kapriol-point.hr/slika/velikaslika/6519_2f202e16ad7e7c84e5a8a78ee1f4b187ed5513da.jpg",
    rating: 4.5,
    gender: 'Moški'
  },
  {
    name: 'Brezrokavnik',
    role: 'Brezrokavnik',
    price: '7€',
    imageUrl:"https://www.grasca.si/Media/SlikeIT/2777755303.jpg",
    rating: 4.1,
    gender: 'Ženski'
  },
  {
    name: 'Pulover',
    role: 'Pulover',
    price: '23€',
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz90VA8d6SVZAts5W7FE98-xSzbqVT71FWCQ&s",
    rating: 4.2,
    gender: 'Moški'
  },
  {
    name: 'Jakna',
    role: 'Jakna',
    price: '9€',
    imageUrl:"https://novival.hr/wp-content/uploads/2019/04/softshell-jakna-531_07_C.jpg",
    rating: 2.2,
    gender: 'Ženski'
  },
];

const dodatki = [
  {
    name: 'Torba',
    role: 'Torba',
    price: '18€',
    imageUrl:"https://full.cistaodjeca.hr/muska-jednostavna-majica-crno-hr-103064-1704365043.webp",
    rating: 3.2,
    gender: 'Ženski'
  },
  {
    name: 'Sveče',
    role: 'Lesene sveče',
    price: '2€',
    imageUrl:"https://full.cistaodjeca.hr/muska-jednostavna-majica-crno-hr-103064-1704365043.webp",
    rating: 4.0,
    gender: 'Ženski'
  },
  {
    name: 'Rokavice',
    role: 'Rokavice',
    price: '12€',
    imageUrl:"https://full.cistaodjeca.hr/muska-jednostavna-majica-crno-hr-103064-1704365043.webp",
    rating: 3.2,
    gender: 'Ženski'
  },
  {
    name: 'Šalčka',
    role: 'Šalčka',
    price: '5€',
    imageUrl:"https://full.cistaodjeca.hr/muska-jednostavna-majica-crno-hr-103064-1704365043.webp",
    rating: 4.2,
    gender: 'Ženski'
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} className={`w-4 h-4 ${i <= rating ? 'text-yellow-300' : 'text-gray-200'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Deploy to the cloud with confidence
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-light text-6xl pb-8">Majice</div>
        {/* Pricing section */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {items.map((item) => (
            <div key={item.name} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
        <img className="h-96 w-96 p-8 rounded-t-lg" src={item.imageUrl} alt="product image" />
        </a>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{item.role}</h5>
                <p className="text-sm text-gray-500 ">{item.gender}</p>
                <div className="flex items-center mt-2.5 mb-2">
                  {renderStars(item.rating)}
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-0.5 rounded  ">{item.rating}</span>
                </div>
                <div className="p-2 md:flex items-center justify-between">
                  <span className="text-4xl md:text-3xl font-bold text-gray-900 ">{item.price}</span>
                  <button type="button" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                    </svg>
                    Dodaj v košarico
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="font-light text-6xl pt-10 pb-8">Dodatki</div>
        {/* Pricing section */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {dodatki.map((dodatki) => (
            <div key={dodatki.name} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
        <img className="h-96 w-96 p-8 rounded-t-lg" src={dodatki.imageUrl} alt="product image" />
        </a>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{dodatki.role}</h5>
                <p className="text-sm text-gray-500 ">{dodatki.gender}</p>
                <div className="flex items-center mt-2.5 mb-2">
                  {renderStars(dodatki.rating)}
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-0.5 rounded ">{dodatki.rating}</span>
                </div>
                <div className="p-2 md:flex items-center justify-between">
                  <span className="text-4xl md:text-3xl font-bold text-gray-900">{dodatki.price}</span>
                  <button type="button" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 :bg-blue-600 ">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                    </svg>
                    Dodaj v košarico
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* FAQs */}
        <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
