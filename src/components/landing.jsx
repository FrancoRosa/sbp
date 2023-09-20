import Brand from "./brand";
import Image from "next/image";
import wedo from "../../public/wedo.svg";
import brands from "../../public/brands.png";

export default function LandingPage() {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900 h-screen flex flex-col justify-center items-center">
        <Brand size="text-4xl" animated />
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Distribución y mantenimiento de equipos biomedicos
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Somos proveedores de una amplia gama de equipos medicos y
            proporcionamos mantenimiento en el sur del Peru
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#beneficios"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Leer mas
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section
        id="beneficios"
        className="bg-white dark:bg-gray-900  h-screen flex justify-center items-center"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl text-center font-extrabold text-gray-900 dark:text-white">
              Beneficios
            </h2>
            <p className="text-center text-gray-500 sm:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              tenetur perspiciatis, soluta fugiat odit nobis assumenda rem
              dignissimos reiciendis libero, quo distinctio et deserunt
              laboriosam maxime nulla totam velit adipisci!
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Calidad certificada
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis deleniti magnam id corrupti. Nulla aut incidunt
                laborum ab et hic nobis accusamus voluptates facere illo, sunt,
                ipsum optio at temporibus.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Equipo especializado
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Streamline your logistics operations by distributing pallets and
                materials exactly where they&apos;re needed.
              </p>
            </div>
            <div>
              <div className="text-primary-600 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path d="M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Compromiso ambiental
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enhance your agricultural practices by cultivating, irrigating,
                fertilizing, and harvesting efficiently, utilizing resources
                precisely where they are needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="clientes"
        className="bg-white dark:bg-gray-900  h-screen flex justify-center items-center"
      >
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-full dark:hidden"
            src={brands}
            alt="dashboard image"
          />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Clientes
            </h2>
            <p className=" font-light text-gray-500 md:text-lg dark:text-gray-400">
              Nuestra cartera de clientes incluyen las institucuiones mas
              prestigiosas del sur del pais, una larga relacion con ellos
              respalda nuestro compromiso con la calidad del servicio brindado.
            </p>
            <ul className=" mb-6 ml-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              <li>Cabema Lab</li>
              <li>O2</li>
              <li>Meditec ST</li>
              <li>CPS Peruano Suiza</li>
            </ul>
            <a
              href="#servicios"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Servicios
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section
        id="servicios"
        className="bg-white dark:bg-gray-900  h-screen flex justify-center items-center"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl text-center font-extrabold text-gray-900 dark:text-white">
              Servicios
            </h2>
            <p className="text-center text-gray-500 sm:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              tenetur perspiciatis, soluta fugiat odit nobis assumenda rem
              dignissimos reiciendis libero, quo distinctio et deserunt
              laboriosam maxime nulla totam velit adipisci!
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Mantenimiento
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis deleniti magnam id corrupti. Nulla aut incidunt
                laborum ab et hic nobis accusamus voluptates facere illo, sunt,
                ipsum optio at temporibus.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Venta</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Streamline your logistics operations by distributing pallets and
                materials exactly where they&apos;re needed.
              </p>
            </div>
            <div>
              <div className="text-primary-600 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path d="M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Asesoramiento
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enhance your agricultural practices by cultivating, irrigating,
                fertilizing, and harvesting efficiently, utilizing resources
                precisely where they are needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="wedo"
        className="bg-white dark:bg-gray-900 h-screen flex justify-center items-center"
      >
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              What We Do
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Our network of stations across the United States transmits their
              signals to our cloud infrastructure. From there, we deliver these
              signals to our users via the internet, providing a convenient
              solution that saves time and eliminates the need for on-site base
              station equipment.
            </p>
            <a
              href="#compatibility"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Compatibility
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <Image
            className="w-full dark:hidden"
            src={wedo}
            alt="dashboard image"
          />
        </div>
      </section>
    </main>
  );
}
