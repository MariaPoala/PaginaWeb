/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Head from 'next/head'
const features = [
  {
    nombre: 'Apoyo a la comunidad de Laria',
    description: 'Debido al friaje, la municipalidad de Colca llevo frazadas al centro poblado de Laria.',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/apoyo.jpg'
  },
  {
    name: 'Donación de implemento escolar',
    description: 'Como la educación es la base del futuro, el alcalde Jose Luis Cerrón Nastares conjuntamente con su plana de regidores, realizan la donacion de implementos de estudios al jardín de niños Gotitas de Rocio ',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/estudiantes.jpg',
  },
  {
    name: 'Apoyo al distrito de Colca',
    description: 'El alcalde del distrito de Colca, conjuntamente con las autoridades locales y en convenio con el ministerio de salud, hizo llegar el apoyo alimentario a los compueblanos del distrito de Colca.',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/apoyoPension.jpg',
  },
  {
    name: 'Reforestación',
    description: 'Se realiza la reforestación con más 3 mil pinos en el paraje de Parco juntamente con las comunidades vecinas de Chiche y Santa Cruz.',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Parco.jpg',
  },
  {
    name: 'Apoyo a familias de extrema pobreza',
    description: 'En cordinación con jovenes voluntarios del distrito de Colca se pudo ayudar con canastas basicas a mas de 10 familias de nuestros anexos que viven en condiciones deprecarías.',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/ayudaSocial.jpg',
  },
  {
    name: 'Implementos de riego',
    description: 'Juntamente con el programa FONCODES se pudo realizar la entrega de implementos de riego a los beneficiarios de dicha entidad.',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Riego.jpeg',
  },
  {
    name: 'Delimitación de coliendas',
    description: 'En coordinación con autoridades locales y población en general del distrito de colca, se realizó la delimitación de la colienda entre el distrito de Colca y el distrito de Laria.',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Sanja.jpg',
  },
  {
    name: 'Cobro de intensivos',
    description: 'Se apoyo a los usuarios de programa pensión 65 en sus cobros de sus intensivos, en el cual se les brindo movilidad y se designo un asistente para que pueda ayudarlos en el proceso bancario.',
    imageSrc: 'https://scontent.ftru5-1.fna.fbcdn.net/v/t1.6435-9/91814547_694843531263821_3168825445059657728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwYLqXJ9B3VkLU9Vo3moUpbc4sy_GPjNJtzizL8Y-M0uFOpdc2Clt4WaE4gT91ZgNNOCKhwX9Vr9CHny4w_4JG&_nc_ohc=fOqF8545LScAX8fdB-a&_nc_ht=scontent.ftru5-1.fna&oh=00_AT_bXD22GDJstzqUcgwPaCMbKFl4ApGwlbc3JYZyc6piFw&oe=6320805A',
  },
  {
    name: 'Seguridad ciudadana',
    description: 'Gracias al apoyo de ciudadanos comprometidos con el distrito se designo responsables de seguridad ciudadana debido a atentados de secuestros.',
    imageSrc: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/Junta.jpg',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <Head>
      <title>Obras</title>
    </Head>
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 sm:py- lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl">
            Obras
          </h2>
          <p className="mt-4 text-gray-500">
            La Gerencia de Desarrollo Urbano es la Unidad Orgánica de línea encargada de conducir las actividades relacionadas al desarrollo urbano del distrito, en las acciones referidas a los diversos proyectos de construcción en el ámbito de las obras públicas y obras privadas y acciones relacionadas con el control urbano, catastro y renovación urbana.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  <img src={feature.imageSrc}  className="object-center object-cover" />
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
