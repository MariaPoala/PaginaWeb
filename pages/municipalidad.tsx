import Head from 'next/head'
export default function Example() {
  return (
    <>  <Head>
      <title>Municipalidad</title>
    </Head>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="w-full object-cover lg:absolute lg:h-full"
              src="https://scontent.ftru5-1.fna.fbcdn.net/v/t1.6435-9/196767916_1001727380575433_681230083392440138_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGekJFUX4SnOrh_TGGBPe3GRqGpwo-36QxGoanCj7fpDPHhVAa6yes43bTqAvs6UVvF8ex9QjLWVpKGvFF5JDAF&_nc_ohc=FAp_uKd8eV4AX8RIC9Q&_nc_ht=scontent.ftru5-1.fna&oh=00_AT9ExIyHESWbyn8W20EPxz6u0EColD3LcL7pP4HLx-M1xQ&oe=631DF772"
              alt=""
            />
          </div>
        </div>
        <div className="relative  px-2 sm:pt-4   sm:px-6 lg:px-4 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase font-mono italic">Distrito de</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                COLCA
              </h3>
              <div className="mt-5 prose prose-indigo text-gray-500">

                <p>
                  El distrito de Colca es uno de los veintiocho que conforman la Provincia de Huancayo, ubicada en el Departamento
                  de Junín, bajo la administración del Gobierno Regional de Junín, en el Perú. Limita por el norte con la Provincia
                  de Chupaca y el distrito de Chupuro: por el este con el Distrito de Cullhuas: por el sur con el Departamento de
                  Huancavelica; y, por el oeste con los distritos de Chicche, Chacapampa y Carhuacallanca.
                </p>
                <h3>
                  Historia
                </h3>
                <p>
                  Fue creado por Ley sin número del 2 de enero de 1857, en el gobierno de Ramón Castilla.
                </p>
                <h3>
                  Geografía
                </h3>
                <p>
                  El distrito abarca una superficie de 113,06 km² y se encuentra a una altura de 3 516 m.s.n.m. y tiene una población
                  aproximada superior a los 2 000 habitantes. Su capital es el poblado de Colca
                </p>
                <h3>
                  Autoridades
                </h3>
                <p>
                  Alcalde
                </p>
                <ul role="list">
                  <li>Javier Mauro Ignacio Párraga, Movimiento político regional Perú Libre (PL).</li>
                </ul>
                <p>
                  Regidores
                </p>
                <ul role="list">
                  <li>Gino Francisco Manrique Olivera (PL)</li>
                  <li>Edward Gerardo Medrano Vilcapoma (PL)</li>
                  <li>Rudecinda Nestares Solís (PL)</li>
                  <li>Rosaura Acuña Cóndor (PL)</li>
                  <li>Aurelio Vilcapoma Carhuancho (Juntos por Junín).
                  </li>
                </ul>
                <h3>
                  Policiales
                </h3>
                <p>
                  Comisaría
                </p>
                <ul role="list">
                  <li>Comisario: Sgto. PNP</li>
                </ul>
                <h3>
                  Religiosas
                </h3>
                <p>
                  Arquidiócesis de Huancayo
                </p>
                <ul role="list">
                  <li>Arzobispo: Mons. Pedro Barreto Jimeno, SJ.</li>
                </ul>
                <p>
                  Parroquia
                </p>
                <ul role="list">
                  <li>Párroco</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
