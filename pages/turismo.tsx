/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  CogIcon,
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  MenuAlt2Icon,
  PhotographIcon,
  PlusSmIcon as PlusSmIconOutline,
  StarIcon,
  UserGroupIcon,
  ViewGridIcon as ViewGridIconOutline,
  XIcon,
} from '@heroicons/react/outline'
import {
  PencilIcon,
  PlusSmIcon as PlusSmIconSolid,
  SearchIcon,
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from '@heroicons/react/solid'
const products = [
  {
    id: 1,
    nombre: 'El cerro Gorila',
    descripcion: '“Chuy Wala” o conocido como el “Cerro Gorila” es un atractivo turístico ubicado en el Canipaco que será puesto en valor por la Gerencia de Promoción Económica y Turismo de la Municipalidad Provincial de Huancayo (MPH), a través de las Unidad de Turismo. Autoridades distritales y provinciales acordaron generar una nueva propuesta turística comunitaria que genere dinamismo económico.',
    imagen: 'https://diariocorreo.pe/resizer/hJODR7BbkfLqluDHXDn2PhnTrBU=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M4JRGD6O75HJ7ORI5H6C6ID5MU.jpg',
  },
  {
    id: 1,
    nombre: 'Rio Chacapampa',
    descripcion: 'El distrito de Chacapampa es uno de los 28 que conforman la provincia de Huancayo, ubicada en el Departamento de Junín, bajo la administración del Gobierno Regional de Junín, en el Perú.',
    imagen: 'https://alcideschamorrohome.files.wordpress.com/2017/11/pilcomayo-se-impuso-en-primer-campeonato-de-canotaje-e2809cchacapampa-2017e2809d.jpg?w=640',
  },
  {
    id: 1,
    nombre: 'Cucho',
    descripcion: 'Es la primera iglesa a nivel del canipaco',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FOTO_IGLESIA_CUCHO_INSPECCI%C3%93N_010.jpg/1200px-FOTO_IGLESIA_CUCHO_INSPECCI%C3%93N_010.jpg',
  },
  {
    id: 1,
    nombre: 'El cañon',
    descripcion: 'El Cañón del Colca se encuentra en el valle del Canipaco, en el distrito de Colca y es famoso por ser uno de los más profundos del Canipaco. Es un destino famoso para el senderismo. El paisaje del cañón abarca un valle verde y aldeas remotas tradicionales con agricultura en terrazas que precedió a los Incas. El río Colca es popular para el descenso en balsas.',
    imagen: 'https://mapio.net/images-p/46849007.jpg',
  },
  // More products...
]




export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [nombre, setNombre] = useState("")

  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py- sm:px-6 lg:px-4">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lugares turisticos de Colca</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <img
                src="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Wali.jpeg "
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-center object-cover group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="p-6 flex items-end cursor-pointer" onClick={() => setNombre("wali")}>
                <div>
                  <h3 className="font-semibold text-white">
                    <a >
                      <span className="absolute inset-0" />
                      El Wali
                    </a>
                  </h3>
                  <a aria-hidden="true" className="mt-1 text-sm text-white" >
                    Mas Detalles
                  </a>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <img
                src="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/carhua.jpg"
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />
              <div
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="p-6 flex items-end sm:absolute sm:inset-0 cursor-pointer" onClick={() => setNombre("mirador")}>
                <div>
                  <h3 className="font-semibold text-white">
                    <a >
                      <span className="absolute inset-0" />
                      El Mirador
                    </a>
                  </h3>
                  <button type='button' aria-hidden="true" className="mt-1 text-sm  text-white cursor-pointer" >
                    Mas Detalles
                  </button>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <img
                src="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Inchu.jpg"
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="p-6 flex items-end sm:absolute sm:inset-0 cursor-pointer" onClick={() => setNombre("inchu")}>
                <div>
                  <h3 className="font-semibold text-white">
                    <a >
                      <span className="absolute inset-0" />
                      Inchu
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white" >
                    Mas Detalles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {nombre == "wali" ?
        <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button
            onClick={() => setNombre("") }
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
          // onClick={() => setOpen(false)}
          >
            <span className="sr-only" >Close</span>
            <XIcon className="h-6 w-6" aria-hidden="true"/>
          </button>

          <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
            <div className="sm:col-span-4 lg:col-span-4">
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img src="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Wali.jpeg" alt="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Wali.jpeg" className="object-center object-cover" />
              </div>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">El Wali</h2>

              <section aria-labelledby="information-heading" className="mt-3">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <p className="text-2xl text-gray-900"></p>

                {/* Reviews */}


                <div className="mt-6">
                  <h4 className="sr-only">Description</h4>

                  <p className="text-sm text-gray-700">Es un atractivo turistico, es un atractivo turisticos que se encuentra en las riveras del rio, el Wali son dos pierdas rocosas que parecen juntarse con el pasar del tiempo, este los pies de los cerros se puede encontrar un lugar perfecto para darse un chapuso, ya que el agua es profunda y no se encuentran muchas piedras</p>
                </div>
              </section>

              <section aria-labelledby="options-heading" className="mt-6">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>


              </section>
            </div>
          </div>
        </div> : nombre == "mirador" ?
          <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              onClick={() => setNombre("") }
            >
              <span className="sr-only">Close</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
              <div className="sm:col-span-4 lg:col-span-4">
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img src="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/carhua.jpg" alt="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/carhua.jpg" className="object-center object-cover" />
                </div>
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">El mirador</h2>

                <section aria-labelledby="information-heading" className="mt-3">
                  <h3 id="information-heading" className="sr-only">
                    Product information
                  </h3>

                  <p className="text-2xl text-gray-900"></p>

                  {/* Reviews */}


                  <div className="mt-6">
                    <h4 className="sr-only">Description</h4>

                    <p className="text-sm text-gray-700">El mirador es otro de los atractivos turisticos que el distrito de Colca puede ofrecte, ya que cuenta con un gran cerro de donde puedes visualizar el distrito de Colca y hasta otros distritos del canipaco</p>
                  </div>
                </section>

                <section aria-labelledby="options-heading" className="mt-6">
                  <h3 id="options-heading" className="sr-only">
                    Product options
                  </h3>


                </section>
              </div>
            </div>
          </div> : nombre == "inchu" &&

          <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              onClick={() => setNombre("") }
            >
              <span className="sr-only">Close</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="w-full grid grid-cols-2 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
              <div className="sm:col-span-4 lg:col-span-4">
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img src="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Inchu.jpg" alt="https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Inchu.jpg" className="object-center object-cover" />
                </div>
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Inchu</h2>

                <section aria-labelledby="information-heading" className="mt-3">
                  <h3 id="information-heading" className="sr-only">
                    Product information
                  </h3>

                  <p className="text-2xl text-gray-900"></p>

                  {/* Reviews */}


                  <div className="mt-6">
                    <h4 className="sr-only">Description</h4>

                    <p className="text-sm text-gray-700">Inchu es considerado como uno de los principales atractivos turisticos, ya que se puede aprecias diversas especies de plantas silvestres y aromaticas, asi como tambien frutos como manzanas, duraznos, mandarinas, paltas, tunas y limones. Ademas a las faldas de inchu en el rio se puede encontrar una gran cantidad de peces</p>
                  </div>
                </section>

                <section aria-labelledby="options-heading" className="mt-6">
                  <h3 id="options-heading" className="sr-only">
                    Product options
                  </h3>
                </section>
              </div>
            </div>
          </div>



      }

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4  lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Mas Lugares que puedes conocer</h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                      src={product.imagen}
                      alt={product.imagen}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.nombre}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.descripcion}</p>
                  </div>
                  <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
