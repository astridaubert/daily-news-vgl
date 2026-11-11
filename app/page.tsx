import Image from "next/image";

// DATOS EDITABLES — CORTE 11 NOVIEMBRE 2026
const brief = {
fecha:"miércoles 11 de noviembre de 2026",
titulo:"Vector Global Logistics | Radar Logístico Global",
subtitulo:"11 de noviembre: huelga general con afectaciones portuarias en España; contingencia tecnológica en Santos, Brasil, y presión operativa en Manzanillo y Lázaro Cárdenas, México. Acciones concretas para anticipar retrasos. Veterans Day y los riesgos de LA/Long Beach permanecen en vigilancia.",
noticias:[
{region:"EUROPA · ESPAÑA",modo:"CRÍTICO · HUELGA HOY",imagen:"https://commons.wikimedia.org/wiki/Special:FilePath/Port_of_Valencia,_August_2026.jpg?width=1200",bandera:"https://flagcdn.com/w40/es.png",fotoCredito:"Drunk un Tbilisi / Wikimedia Commons · CC BY-SA 4.0",fotoUrl:"https://commons.wikimedia.org/wiki/File:Port_of_Valencia,_August_2026.jpg",titular:"Huelga general impacta puertos y transporte de mercancías en España",dato:"Este 11 de noviembre se desarrolla una huelga general de 24 horas. EFE reporta afectaciones en las terminales de Barcelona y especial incidencia en Valencia y Algeciras, según información sindical. Renfe fijó servicios mínimos del 26% para mercancías; el seguimiento y los efectos pueden variar por terminal. Fuentes: EFE https://efe.com/economia/2026-11-11/huelga-general-11-noviembre/ · Renfe https://grupo.renfe.com/es/es/sala-de-prensa/noticias/2026/11/establecidos-los-servicios-minimos-para-la-huelga-general-convocada-el-11n",impacto:"Posibles omisiones de salidas ferroviarias, restricciones de camión, cambios de cut-off y retrasos de recolecciones en zonas industriales y portuarias.",accion:"Contactar hoy a terminales, navieras y transportistas en Barcelona, Valencia y Algeciras; reconfirmar cut-offs y entregas críticas."},
{region:"BRASIL · SANTOS",modo:"ALTA · SISTEMAS EN RECUPERACIÓN",imagen:"https://commons.wikimedia.org/wiki/Special:FilePath/SantosContainers.JPG?width=1200",bandera:"https://flagcdn.com/w40/br.png",fotoCredito:"Elgaard / Wikimedia Commons · CC BY-SA 3.0",fotoUrl:"https://commons.wikimedia.org/wiki/File:SantosContainers.JPG",titular:"Santos recupera sistemas tras ciberataque; operaciones portuarias continúan",dato:"La Autoridad Portuaria de Santos informó el 10 de noviembre que continúa la recuperación de sistemas administrativos afectados por el ataque iniciado el 6 de noviembre. La navegación y los accesos terrestres siguen operativos y Porto Sem Papel funciona. No hay confirmación de paralización general. Fuente: Agência Brasil, 10 nov. https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/porto-de-santos-sistemas-seguem-afetados-apos-ataque-cibernetico",impacto:"La contingencia tecnológica exige validar procesos documentales y posibles cambios de coordinación local; no se debe afirmar un cierre del puerto ni demoras generalizadas causadas por el incidente.",accion:"Verificar liberaciones y documentación con agente local, confirmar operación del terminal y prever procedimientos alternos si se requieren."},
{region:"MÉXICO · PACÍFICO",modo:"ALTA · CONGESTIÓN PORTUARIA",imagen:"https://commons.wikimedia.org/wiki/Special:FilePath/Puerto_de_Manzanillo_.jpg?width=1200",bandera:"https://flagcdn.com/w40/mx.png",fotoCredito:"Puerto de Manzanillo / Wikimedia Commons · CC BY-SA 4.0",fotoUrl:"https://commons.wikimedia.org/wiki/File:Puerto_de_Manzanillo_.jpg",titular:"Manzanillo y Lázaro Cárdenas enfrentan esperas y presión en patios",dato:"En su actualización operativa del 10 de noviembre, Kuehne+Nagel reportó esperas promedio móviles de siete días de 2.25 días en Manzanillo y 3.0 días en Lázaro Cárdenas. En Manzanillo persistían acumulación de carga, presión en patios y efectos rezagados del clima; en Lázaro Cárdenas el desempeño variaba por terminal. Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-10-11-2026",impacto:"Mayor incertidumbre en ETA, disponibilidad de contenedor, citas terrestres y posibles cargos asociados al tiempo de permanencia; no son cifras en vivo por terminal.",accion:"Confirmar terminal, ETA, disponibilidad de citas y días libres antes de programar retiro o entrega; revisar alternativas cuando la carga sea urgente."}
],
vigilancia:[
{titulo:"México | Carreteras y cruces fronterizos",bandera:"https://flagcdn.com/w40/mx.png",texto:"Tras el levantamiento de bloqueos anteriores, seguir avisos de agrupaciones de transporte y autoridades. No presentar una nueva huelga como activa sin confirmación. Para Monterrey, validar rutas y ventanas Nuevo Laredo/Laredo."},
{titulo:"México | Puertos del Pacífico",bandera:"https://flagcdn.com/w40/mx.png",texto:"Reporte Kuehne+Nagel del 10 nov.: Manzanillo 2.25 días y Lázaro Cárdenas 3.0 días de espera promedio móvil de siete días. Confirmar por terminal; las cifras no son disponibilidad en vivo."},
{titulo:"México | Feriado próximo",bandera:"https://flagcdn.com/w40/mx.png",texto:"Lunes 16 nov.: descanso oficial por conmemoración de la Revolución Mexicana. Revisar horarios de plantas, transportistas, almacenes y aduanas."},
{titulo:"Estados Unidos | Veterans Day hoy",bandera:"https://flagcdn.com/w40/us.png",texto:"11 nov.: ventanas especiales en terminales LA/LB y NY/NJ. Confirmar cada turno, fecha límite de retiro y cita antes del movimiento. Referencia: STG Logistics."},
{titulo:"Estados Unidos | Riesgo laboral",bandera:"https://flagcdn.com/w40/us.png",texto:"ILWU Local 26 y empleadores extendieron contrato hasta el 20 nov. No hay huelga inmediata confirmada; mantener vigilancia sobre nuevas negociaciones y avisos de terminal."},
{titulo:"Estados Unidos | Puente Vincent Thomas",bandera:"https://flagcdn.com/w40/us.png",texto:"Cierre vial iniciado el 7 nov. y previsto por aproximadamente 16 meses. Puede impactar la circulación de camiones, no supone cierre portuario ni de navegación."},
{titulo:"Europa | Huelga España y Dublín",bandera:"https://flagcdn.com/w40/ie.png",texto:"España 11 nov.: huelga general con efectos portuarios y servicios mínimos ferroviarios de carga del 26%. Vigilar además accesos a Dublín del 10 al 13 nov. Confirmar cut-offs y transportistas."},
{titulo:"Europa | Róterdam, Amberes y Francia",bandera:"https://flagcdn.com/w40/nl.png",texto:"Confirmar conexiones de barcaza y feeder por servicio. No trasladar cifras de congestión antiguas a un supuesto promedio del 11 nov.; la huelga francesa referida en reportes anteriores ya pasó."},
{titulo:"Europa | Tarifas y Suez",bandera:"https://flagcdn.com/w40/nl.png",texto:"WCI 5 nov.: Shanghái–Róterdam US$3,615/FEU (-2%) y Shanghái–Génova US$4,166/FEU (estable). Drewry advierte riesgo de llegadas simultáneas por Suez y Cabo de Buena Esperanza."},
{titulo:"China | Puertos y capacidad",bandera:"https://flagcdn.com/w40/cn.png",texto:"Drewry reportó mejoría de esperas en Shanghái, con promedio de 35 horas durante la semana anterior al 5 nov. Confirmar cut-offs y blank sailings específicos; no asumir que el promedio aplica a todas las terminales."},
{titulo:"Asia | Medio Oriente y rutas marítimas",bandera:"https://flagcdn.com/w40/sg.png",texto:"Monitorear recargos y rutas por Suez y estrecho de Ormuz según servicio y naviera. No extrapolar disrupciones del Medio Oriente automáticamente a todos los embarques Asia–México."},
{titulo:"Brasil | Santos y aduanas",bandera:"https://flagcdn.com/w40/br.png",texto:"Autoridad Portuaria confirma recuperación gradual de sistemas tras ciberataque del 6 nov., sin paralización de movimientos marítimos o accesos terrestres. Confirmar documentación y liberaciones; no atribuir demoras generalizadas sin evidencia."},
{titulo:"India | Diwali y disponibilidad",bandera:"https://flagcdn.com/w40/in.png",texto:"Después de Diwali del 8 nov., verificar horarios de plantas, choferes y gates de Mundra, Nhava Sheva y Chennai. No atribuir cierres actuales al ciclón Arnab sin aviso meteorológico oficial."},
{titulo:"Calendario | Fechas clave",bandera:"",texto:"11 nov.: Veterans Day y horarios especiales EE. UU. · 12 nov.: vigilar accesos en Dublín · 16 nov.: descanso oficial México · 20 nov.: fin de la extensión laboral PMA–ILWU Local 26."}
],
metricas:[
{indicador:"Drewry WCI global",valor:"US$4,389",tendencia:"Por FEU; -1% semanal · 5 nov."},
{indicador:"Shanghái → Los Ángeles",valor:"US$7,539",tendencia:"Por FEU; sin cambio · 5 nov."},
{indicador:"Shanghái → Nueva York",valor:"US$9,303",tendencia:"Por FEU; -3% semanal · 5 nov."},
{indicador:"Shanghái → Róterdam",valor:"US$3,615",tendencia:"Por FEU; -2% semanal · 5 nov."},
{indicador:"Shanghái → Génova",valor:"US$4,166",tendencia:"Por FEU; estable · 5 nov."},
{indicador:"LA/LB · plazo laboral",valor:"20 nov.",tendencia:"Prórroga ILWU Local 26."},
{indicador:"Vincent Thomas Bridge",valor:"~16 meses",tendencia:"Cierre vial desde 7 nov.; puertos abiertos."},
{indicador:"Veterans Day",valor:"11 nov.",tendencia:"Turnos portuarios especiales hoy."}
],
recomendaciones:[
"HOY · EE. UU.: revisar horarios de Veterans Day por terminal y citas de drayage; no asumir operación normal en LA/LB y NY/NJ.",
"LA/LB: seguir negociaciones ILWU Local 26 hasta el 20 nov. y programar desvíos terrestres por cierre del Vincent Thomas Bridge.",
"México: validar hoy patios y disponibilidad de cita por terminal en Manzanillo (2.25 días) y Lázaro Cárdenas (3.0 días), con datos móviles reportados el 10 nov.; revisar Nuevo Laredo y feriado del 16 nov.",
"Europa: priorizar España por huelga general del 11 nov. en Barcelona, Valencia y Algeciras y 26% de servicios mínimos ferroviarios de carga; vigilar también Dublín.",
"China y Asia: revisar cut-offs, espacio y blank sailings de cada ruta; evaluar recargos Suez/seguridad solo en servicios aplicables.",
"India: reconfirmar horarios de plantas y disponibilidad de equipo y camiones tras Diwali; verificar avisos meteorológicos oficiales.",
"Brasil: coordinar documentación y liberaciones en Santos durante recuperación de sistemas tras ciberataque; la autoridad portuaria confirma continuidad operativa.",
"Fuentes: Drewry (5 nov.) https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update · Reuters (9 nov.) https://www.reuters.com/business/world-at-work/los-angeles-long-beach-port-employers-extend-negotiations-with-watchmen-union-2026-11-09/ · Maersk (4 nov.) https://www.maersk.com/news/articles/2026/11/04/vincent-thomas-bridge-closure-port-operations-advisory · STG https://www.stgusa.com/alerts/notice-la-lb-and-ny-nj-port-terminals-veterans-day-schedule-2/"
]
};
const retrasos=[
{puerto:"EE. UU. · LA/Long Beach",tiempo:"20 nov.",estado:"Prórroga laboral ILWU Local 26; sin huelga activa confirmada."},
{puerto:"EE. UU. · LA/LB y NY/NJ",tiempo:"11 nov.",estado:"Veterans Day: horarios especiales de terminal; verificar citas."},
{puerto:"EE. UU. · Vincent Thomas Bridge",tiempo:"Desde 7 nov.",estado:"Cierre vial por ~16 meses; terminales abiertas."},
{puerto:"México · Manzanillo",tiempo:"2.25 días",estado:"Espera móvil 7 días reportada el 10 nov. por Kuehne+Nagel; confirmar terminal."},
{puerto:"México · Lázaro Cárdenas",tiempo:"3.0 días",estado:"Espera móvil 7 días reportada el 10 nov. por Kuehne+Nagel; desempeño variable por terminal."},
{puerto:"China · Shanghái",tiempo:"35 horas",estado:"Promedio de la semana anterior según Drewry 5 nov.; no dato en vivo."},
{puerto:"Europa · España",tiempo:"11 nov.",estado:"Huelga general; Renfe mercancías con servicios mínimos del 26%. Confirmar puertos y rutas."},
{puerto:"India · Nhava Sheva",tiempo:"11 nov. · verificar",estado:"Confirmar disponibilidad y horarios tras Diwali."},
{puerto:"Brasil · Santos",tiempo:"11 nov. · verificar",estado:"Recuperación de sistemas administrativos tras ciberataque; puerto operativo."}
];
// Corte editorial 11 nov. 2026; datos de mercado fechados en su última publicación disponible.

// ======================================================
// NO EDITAR DEBAJO DE ESTA LÍNEA
// ======================================================

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F5F7] text-[#111111]">
      {/* ENCABEZADO */}
      <section className="bg-[#003C6F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <div>
              <div className="inline-flex">
                <Image
                  src="/Vector Logo White (1).png"
                  alt="Vector Global Logistics"
                  width={260}
                  height={80}
                  priority
                  className="h-auto w-[220px] md:w-[260px]"
                />
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-xs tracking-[0.15em] text-white/60">
                RADAR LOGÍSTICO GLOBAL
              </p>
              <p className="mt-1 font-semibold">{brief.fecha}</p>
            </div>
          </div>

          <div className="max-w-4xl py-12 md:py-14">
            <p className="mb-4 text-sm font-bold tracking-[0.18em] text-[#FF3E32]">
              ACTUALIZACIÓN LOGÍSTICA GLOBAL DE HOY
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Lo que está moviendo la logística global hoy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              {brief.subtitulo}
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPALES NOTICIAS */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            PRINCIPALES NOTICIAS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#003C6F]">
            Lo más relevante de hoy
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {brief.noticias.map((item, index) => (
            <article
              key={item.titular}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={item.imagen}
                  alt={item.titular + " · imagen ilustrativa"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {"fotoCredito" in item && item.fotoCredito ? <a href={item.fotoUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-1 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[9px] text-white">{item.fotoCredito}</a> : null}
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.16em] text-[#FF3E32]">
                      {"bandera" in item && item.bandera ? (
                        <img
                          src={item.bandera}
                          alt=""
                          className="h-3 w-5 rounded-[2px] object-cover shadow-sm"
                        />
                      ) : null}
                      <span>{item.region}</span>
                    </p>

                    <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-[#003C6F]">
                      {item.modo}
                    </p>
                  </div>

                  <span className="text-4xl font-bold text-[#DAEBF5]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight">
                  {item.titular}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">{item.dato}</p>

                <div className="mt-5 border-t border-gray-200 pt-4">
                  <p className="text-xs font-bold tracking-[0.14em] text-[#003C6F]">
                    POR QUÉ IMPORTA
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {item.impacto}
                  </p>
                </div>

                <div className="mt-4 rounded-xl bg-[#F3F5F7] p-4">
                  <p className="text-xs font-bold tracking-[0.14em] text-[#FF3E32]">
                    ACCIÓN RECOMENDADA
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {item.accion}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LO QUE ESTAMOS MONITOREANDO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            LO QUE ESTAMOS MONITOREANDO
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#003C6F]">
            Qué más estamos vigilando
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {brief.vigilancia.map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="flex items-center gap-2 font-bold text-[#003C6F]">
                  {item.titulo.startsWith("Calendario |") ? (
                    <span role="img" aria-label="Calendario global" className="text-lg">🌍</span>
                  ) : "bandera" in item && item.bandera ? (
                    <img
                      src={item.bandera}
                      alt=""
                      className="h-3.5 w-5 rounded-[2px] object-cover shadow-sm"
                    />
                  ) : null}
                  <span>{item.titulo}</span>
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLA DE RETRASOS PORTUARIOS */}
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 10 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

      {/* MÉTRICAS CLAVE */}
      <section className="bg-[#F3F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            MÉTRICAS CLAVE
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#003C6F]">
            Los números, explicados
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brief.metricas.map((item) => (
              <div key={item.indicador} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold tracking-[0.12em] text-[#FF3E32]">{item.indicador}</p>
                <p className="mt-3 text-2xl font-bold text-[#003C6F]">{item.valor}</p>
                <p className="mt-2 text-sm text-gray-600">{item.tendencia}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCIONES RECOMENDADAS */}
      <section className="bg-[#003C6F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            ACCIONES RECOMENDADAS
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Qué deberían considerar hoy los equipos de cadena de suministro
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {brief.recomendaciones.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-white/15 p-5"
              >
                <span className="font-bold text-[#FF3E32]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-6 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO PUEDE APOYAR VECTOR */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
              CÓMO PUEDE APOYAR VECTOR
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#003C6F]">
              Cuando las condiciones cambian, tu estrategia logística también
              debe poder adaptarse.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-600">
              Vector Global Logistics ayuda a las empresas a evaluar
              alternativas de transporte aéreo, marítimo y terrestre,
              identificar embarques críticos y desarrollar soluciones
              orientadas a proteger la continuidad de la cadena de suministro.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Nuestro equipo analiza cada operación para encontrar alternativas
              que respondan a las necesidades específicas de tiempo, capacidad,
              ruta y tipo de carga.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-semibold text-[#003C6F] md:grid-cols-3">
              <div className="rounded-lg bg-[#F3F5F7] p-4">Transporte aéreo</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Transporte marítimo</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Transporte terrestre</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Cruce fronterizo</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Carga expedita</div>
              <div className="rounded-lg bg-[#F3F5F7] p-4">Carga crítica</div>
            </div>

            <a
              href="https://vectorgl.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#FF3E32] px-7 py-4 font-bold text-white transition hover:opacity-90"
            >
              Contacta a nuestro equipo →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <strong>Vector Global Logistics</strong>
            <p className="mt-1 text-white/60">vectorgl.com</p>
          </div>

          <span className="max-w-xl text-white/60 md:text-right">
            Corte informativo del 6 de noviembre de 2026, 10:56 h Monterrey. Fuentes: Drewry (5 nov.), Expeditors y FreightWaves (5 nov.), HAROPA Le Havre (4 nov.), Caltrans/Maersk, Emol (6 nov.), PortalPortuario (4 nov.) y CANACAR (30 oct.). Las mediciones portuarias previas no son datos en vivo. Confirmar con terminal, naviera y agente aduanal.</span>
        </div>
      </footer>
    </main>
  );
}
