/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and polycarbonate add-ons.' },
  { name: 'Dimensions', description: '15" x 3.75" x .75"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const Noticias = [
  {
    id: 1,
    titulo: 'Juramentacion de tenientes gobernadores',
    fecha: '15-08-22',
    image: 'https://scontent.ftru5-1.fna.fbcdn.net/v/t39.30808-6/280291497_1209933096421526_8183434210322740739_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFuwL_c8hwkZ2KfK9ufpMFo3n8tKVsyH0Hefy0pWzIfQa6aq4wfXq2zlSSlbuJ-t714rm6Yuio87OcF0SYMotxd&_nc_ohc=SFYPVV3Y40kAX8ihBjg&_nc_zt=23&_nc_ht=scontent.ftru5-1.fna&oh=00_AT-HLvNLUW_pOa2G-NxAO0PHfNe8X-9atKsGIhG9TKb_4w&oe=62FF5C1D',
    Descripcion: "7 compueblanos del distrito de Colca prestan juramento de ley y asumen el cargo de Teniente Gobernador, ante la población Colquina, a partir del 18 de agosto."
  },
  {
    id: 2,
    titulo: 'Entrega de kits de abrigos',
    fecha: '16-08-22',
    image: 'https://fmawnrfwepqksamtepfh.supabase.co/storage/v1/object/sign/archivos/249545099_1085208985560605_5747764856411307769_n.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcmNoaXZvcy8yNDk1NDUwOTlfMTA4NTIwODk4NTU2MDYwNV81NzQ3NzY0ODU2NDExMzA3NzY5X24uanBnIiwiaWF0IjoxNjYwODQyMDIzLCJleHAiOjE5NzYyMDIwMjN9.ggdglMVpEkTeYCre-oTvKG3TACjRqFdo6Ni777E7IFw',
    Descripcion: "Familias vulnerables del distrito de Colca y anexos reciben kits de abrigo y alimentos para contrarrestar el friaje y las heladas. "
  },
  {
    id: 3,
    titulo: 'Tercer concurso de emprendimientos rurales inclusivos',
    fecha: '17-08-22',
    image: 'https://scontent.ftru5-1.fna.fbcdn.net/v/t39.30808-6/242579743_1062238144524356_27068233410608542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGkCOCcyJK4IezAd362G5b5FgDsUmP3i6oWAOxSY_eLqujlZDA3gg5FGlx6oUmg769w5KauZtcg9TTKbg-F6MfU&_nc_ohc=nImQX2y6PSEAX-ssZ1K&tn=r6xsdO5BngcCWoNQ&_nc_zt=23&_nc_ht=scontent.ftru5-1.fna&oh=00_AT_ruGSTwEaCVfEsHEqdXQnX3BV_0WEUNpolyP75Tjq8bA&oe=62FF0617',
    Descripcion: "Segundo Concurso de Emprendimientos Rurales Inclusivos organizado por Fondo de Cooperación para el Desarrollo Social (Foncodes). “Recopilación de Conocimientos sobre Actividades"
  },
  {
    id: 4,
    titulo: 'Donacion de computadoras',
    fecha: '17-08-22',
    image: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/computadoras.jpeg',
    Descripcion: "La institución educativa Mariscal Cáceres recibe 5 computadoras donadas por el alcalde del distrito de Colca."
  },

]

const Evento = [
  {
    id: 1,
    fecha: '22-03-2022',
    image: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/tabajaPeru.jpg',
    Descripcion: "Se dará inicio al PROGRAMA NACIONAL TRABAJA PERU en el Distrito de Colca, en el cual más de 80 vecinos del Distrito trabajaran de manera temporal en actividades de intervención para mejorar las instituciones educativas de nuestro distrito."
  },
  {
    id: 2,
    fecha: '22-08-2022',
    image: 'https://scontent.ftru5-1.fna.fbcdn.net/v/t1.6435-9/203209417_1003627357052102_531811336761532759_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHORTVC5RTfSakQqYtiLutlAB8vnBk1ec8AHy-cGTV5z_bX3ICC6mOeRaRq-B4qUFQ51Ld5E9OkXnOFSuC_FsoK&_nc_ohc=dpimwtoukAIAX947wFY&_nc_ht=scontent.ftru5-1.fna&oh=00_AT8yupnq3V8UH5b_T5AC972ohr_yaS7_cgVOgd-ziBafRA&oe=631D5E5B',
    Descripcion: "Mejoramiento de canales de riego, con la finalidad de determinar la eficiencia de conducción y la demanda hídrica del canal de riego en el distrito de Colca"
  },
  {
    id: 3,
    fecha: '24-08-2022',
    image: 'https://scontent.ftru5-1.fna.fbcdn.net/v/t1.6435-9/96159615_719086555506185_2571946684519022592_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFevXujQ81OQ0IMET_vvnFRRCbJSMWDPxBEJslIxYM_EFtxzBp-BGvu11W9HoMERVvObtpbkbGa-ENG03TGciLE&_nc_ohc=mID35JHroaQAX951xSy&_nc_ht=scontent.ftru5-1.fna&oh=00_AT9qUw5BbUJxMDdFSyJ4kCQr93wcG8ZbdTh8opLwzpVw7A&oe=631D8235',
    Descripcion: "Se realizará inscripciones en el Programa Pensión 65. Si tienes 65 años o más, no recibes pensión de jubilación y tu hogar ha sido empadronado por el Sistema de Focalización de Hogares (Sisfoh) en condición de pobreza extrema, puedes afiliarte al Programa Pensión 65 para recibir un beneficio económico cada 2 meses, el cual te permite atender tus necesidades."
  },
  {
    id: 4,
    fecha: '29-08-2022',
    image: 'https://almacenamientoarchivo.blob.core.windows.net/archivoscolca/calle.jpg',
    Descripcion: "Se empezara con el mantenimiento de calles de nuestro distrito de Colca, en la cual se requiere personal para ejecutar el trabajo. Se estara inscribiendo hasta el domingo 28 de agosto."
  },

]
// More products...


const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
export default function Example() {
  return (
    <>
      <Head>
        <title>Pagina Web Colca</title>
      </Head>
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            src="https://fmawnrfwepqksamtepfh.supabase.co/storage/v1/object/sign/archivos/FB_IMG_1601157919979.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcmNoaXZvcy9GQl9JTUdfMTYwMTE1NzkxOTk3OS5qcGciLCJpYXQiOjE2NjA4NjE1OTgsImV4cCI6MTk3NjIyMTU5OH0.zlJMkQ9qvPbZuloZa-zFpFhNS7MZgye9RmE5uCfgqo4"
            alt=""
            className="w-full h-96 object-center object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>







        <div className="relative max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Municipalidad Distrital De Colca</h2>
            <p className="mt-4 text-gray-500">
              Somos una institución de servicio a la comunidad, cuyo fin es mejorar la calidad de vida
              del pueblo Colquino, a través de la promoción laboral y empresarial con asistencia en
              la salud y la educación. Tenemos vocación de servicio social para el bienestar y
              desarrollo del distrito en base a una gestión transparente en conductas y acciones
              administrativas-operativas para nuestra generación y las futuras.
            </p>
          </div>

          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className='text-xl italic'> Descubre Nuestras Nuevas Plataformas Digitales</h1>
              <label>Descargar Aplicativo Movil</label>
              <a className=' ml-4 text-indigo-400 italic hover:text-indigo-700' href='http://ai2.appinventor.mit.edu/b/9pk5'>Descarga Directo</a>
              <a className='ml-4 text-indigo-400 italic hover:text-indigo-700' href='https://drive.google.com/drive/folders/1rXonbU0w3-5aNTXlEmFjjB1KetJmHKUS?usp=sharing'>Descarga por Drive</a>
              <img className=' mt-2' src='https://fmawnrfwepqksamtepfh.supabase.co/storage/v1/object/sign/archivos/Semana 1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcmNoaXZvcy9TZW1hbmEgMS5qcGciLCJpYXQiOjE2NjA3OTQ0MzMsImV4cCI6MTk3NjE1NDQzM30.15HclQO9n-lYdF824oeDK2SdqYYm-TXjP42RX-ukS58'></img>
              
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">Noticias</h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                {Noticias.map((item: any) => (
                  <div key={item.id} className="group relative bg-slate-100 rounded-md">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={item.image}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 ml-2">
                          <a href={item.image}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {item.titulo}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm ml-2 text-gray-500">{item.fecha}</p>
                        <p className="text-sm ml-2 text-gray-700 ">{item.Descripcion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">Proximos eventos</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
              {Evento.map((item: any) => (
                <div key={item.id} className="group relative bg-slate-100 rounded-md">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={item.image}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <p className="mt-1 text-sm ml-2 text-gray-500">{item.fecha}</p>
                      <p className="text-sm ml-2 text-gray-700 ">{item.Descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
