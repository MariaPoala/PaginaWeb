/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Oficina de Ayuda</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  asistente de ayuda
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1 (51) 924122453</p>
                    <p className="mt-1">Atencion las 24 horas del día</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>asistente2022.colca@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Secretaria</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  Secretaria municipal
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1 (51) 916411151</p>
                    <p className="mt-1">Lunes a Sabado de 8:00 am a 6:00pm</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>municipalidad.colca2022@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500">Otros contactos</span>
        </div>
      </div>
      <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Suprefectura</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
               Suprefectura distrital
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (51) 971222551</p>
                  <p className="mt-1">Lunes a Sabado de 8:00 am a 6:00pm</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>jose.peres@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Juez de Paz</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
               Juez de paz del distrito de Colca
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (51) 922456131</p>
                  <p className="mt-1">Lunes a Sabado de 8:00 am a 6:00pm</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>pedro.seas@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
