import HomeSection3 from './components/HomeSection3';
import HomeSection1 from './components/HomeSection1';
import HomeSection2 from './components/HomeSection2';
import HomeSection4 from './components/HomeSection4';
import HomeSection5 from './components/HomeSection5';
import HomeSection6 from './components/HomeSection6';
import HomeSection7 from './components/HomeSection7';
import HomeSection8 from './components/HomeSection8';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <HomeSection1 />
      <section className="w-full mx-auto md:px-4 sm:px-4 mt-32  bg-blue-50 relative">
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <div className="max-w-screen-xl mx-auto flex justify-around w-full mt-40 items-center ">
          <div className="justify-center text-center flex flex-wrap mb-40">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">
                Beautiful Example Pages
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Notus React is a completly new product built using our past
                experience in web templates. Take the examples we made for you
                and start playing with them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block relative z-1 w-full bg-gray-600 ">
        <HomeSection6 />
        <HomeSection7 />
      </section>

      <section className="w-full min-h-[600px]    bg-blue-50">
        <HomeSection8 />
        <Footer></Footer>
      </section>
    </div>
  );
}
