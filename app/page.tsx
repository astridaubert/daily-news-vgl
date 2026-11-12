import Image from "next/image";

// DATOS EDITABLES — CORTE 12 NOVIEMBRE 2026
const brief = {
fecha:"jueves 12 de noviembre de 2026",
titulo:"Vector Global Logistics | Radar Logístico Global",
subtitulo:"12 de noviembre: nuevos recargos terrestres de Maersk en el Rin y países nórdicos; España revisa la recuperación de las terminales tras la huelga del 11; Santos informa avances en la recuperación de sistemas. Chile, México, Estados Unidos e India permanecen en vigilancia. Datos fechados y recomendaciones por ruta.",
noticias:[
{region:"EUROPA · RIN Y PAÍSES NÓRDICOS",modo:"ALTA · RECARGOS VIGENTES",imagen:"/rhine-low-water.webp",bandera:"https://flagcdn.com/w40/de.png",titular:"Cargos terrestres por bajo nivel del Rin y combustible en el norte de Europa",dato:"Maersk reintrodujo un cargo de contingencia de EUR 625 por contenedor en Andernach y EUR 175 en Bonn, efectivo desde el 3 nov., además de los cargos por bajo nivel del Rin cuando correspondan. Para embarques Store Door en Dinamarca, Suecia, Noruega, Finlandia, Estonia, Letonia y Lituania, la naviera informó recargos energéticos desde el 11 nov.: Estonia 23%, Dinamarca 14%, Letonia 13%, Suecia 10%, Finlandia 6%, Noruega y Lituania 4%. Fuentes: https://www.maersk.com/news/articles/2026/11/09/andernach-inland-terminal-contingency-surcharge · https://www.maersk.com/news/articles/2026/11/09/bonn-inland-terminal-contingency-surcharge-reinstated · https://www.maersk.com/news/articles/2026/11/09/emergency-inland-fuel-energy-surcharge",impacto:"Aumenta el costo puerta a puerta en corredores específicos, y el desvío de barcazas puede requerir manejo y transporte extra. No son recargos universales a todo flete marítimo.",accion:"Revisar origen, destino, terminal interior, fecha de aplicación y cláusulas de recargos antes de cerrar tarifas y facturas."},
{region:"EUROPA · ESPAÑA",modo:"ALTA · EFECTOS POSTHUELGA",imagen:"https://commons.wikimedia.org/wiki/Special:FilePath/Port_of_Valencia,_August_2026.jpg?width=1200",bandera:"https://flagcdn.com/w40/es.png",titular:"Tras la huelga del 11, verificar reanudación y carga pendiente",dato:"La huelga general del 11 nov. paralizó operaciones de estiba en terminales de Valencia y Algeciras y afectó operaciones en Barcelona. La asociación logística UNO describió efectos concentrados en determinadas zonas, sin disrupción significativa a nivel nacional. Algunas terminales tenían previsto retomar turnos desde la madrugada del 12; la reanudación real debe confirmarse por terminal. Fuentes: https://www.europapress.es/economia/transportes-00343/noticia-cifra-minimo-muy-localizado-impacto-huelga-logistica-transporte-20261111184159.html · https://www.oepb.org/web/2026/11/12/la-huelga-general-paraliza-los-puertos/",impacto:"Puede haber rolados, cambios de cut-off y retrasos de inspección o retiro de contenedores, sin que ello implique un paro nacional activo el 12 nov.",accion:"Reconﬁrmar con cada terminal reapertura de gates, asignación de turnos, salida de buques y disponibilidad de transporte terrestre."},
{region:"BRASIL · PUERTO DE SANTOS",modo:"ALTA · AVANCE HOY",imagen:"https://commons.wikimedia.org/wiki/Special:FilePath/SantosContainers.JPG?width=1200",bandera:"https://flagcdn.com/w40/br.png",titular:"Santos recupera cerca de 70% de copias de seguridad tras ciberataque",dato:"Según información publicada el 12 nov., la Autoridad Portuaria de Santos reportó haber recuperado alrededor del 70% de las copias de seguridad afectadas por el incidente del 6 nov. y espera restaurar más servicios internos. Las operaciones marítimas y accesos terrestres continúan; algunas gestiones administrativas aún requieren contingencias. Fuente: https://c-level.folha.uol.com.br/infraestrutura/2026/11/porto-de-santos-diz-que-recuperou-70-de-copias-de-arquivos-apos-ataque-hacker.shtml",impacto:"Pueden requerirse procesos manuales, verificaciones documentales o coordinación adicional; no hay confirmación de cierre general del puerto.",accion:"Verificar estado de liberación y documentación con el agente local y consultar al terminal ante cada embarque."}
],
vigilancia:[
{titulo:"Chile | Transporte por carretera",bandera:"https://flagcdn.com/w40/cl.png",texto:"Alerta WSSA del 10 nov.: nueva huelga indefinida de transportistas con afectaciones en Ruta 5 Norte (Pozo Almonte) y otros tramos. San Antonio y Valparaíso mantenían actividad marítima. No se corroboró la continuidad exacta al 12 nov.; confirmar con transportista y autoridades locales. Fuente: https://www.wssa.com/content/strike-alerts-chile-spain"},
{titulo:"México | Monterrey y Nuevo Laredo",bandera:"https://flagcdn.com/w40/mx.png",texto:"Mantener ventanas de cruce flexibles, confirmar seguridad vial y transportistas. Tras levantarse bloqueos previos, no anunciar nuevo paro nacional sin aviso confirmado."},
{titulo:"México | Manzanillo y Lázaro Cárdenas",bandera:"https://flagcdn.com/w40/mx.png",texto:"El reporte Kuehne+Nagel del 10 nov. estimó esperas móviles de siete días: 2.25 días en Manzanillo y 3.0 en Lázaro Cárdenas. Son cifras fechadas y no tiempo de espera garantizado hoy."},
{titulo:"México | Feriado 16 de noviembre",bandera:"https://flagcdn.com/w40/mx.png",texto:"Lunes 16 nov. descanso oficial por Revolución Mexicana: confirmar horarios de patios, almacenes, plantas, aduanas y transportistas."},
{titulo:"Estados Unidos | LA/Long Beach",bandera:"https://flagcdn.com/w40/us.png",texto:"La extensión de las negociaciones con ILWU Local 26 llega al 20 nov.; no hay huelga portuaria inmediata confirmada. Supervisar avisos oficiales y turnos terminales."},
{titulo:"Estados Unidos | Accesos terrestres",bandera:"https://flagcdn.com/w40/us.png",texto:"El Vincent Thomas Bridge cerró el 7 nov. por obras prolongadas. Verificar desvíos de drayage. El cierre vial no supone cierre de las terminales."},
{titulo:"Estados Unidos | Veterans Day finalizado",bandera:"https://flagcdn.com/w40/us.png",texto:"Los horarios especiales de terminal del 11 nov. son un evento pasado. Reconﬁrmar citas y movimientos reprogramados para el 12; no publicar hoy como feriado activo."},
{titulo:"España | Efectos residuales",bandera:"https://flagcdn.com/w40/es.png",texto:"Huelga general fue el miércoles 11. Confirmar reapertura y cut-offs en Valencia, Barcelona y Algeciras. Las afectaciones no fueron uniformes en todo el territorio."},
{titulo:"Alemania | Bajo nivel del Rin",bandera:"https://flagcdn.com/w40/de.png",texto:"Maersk: Andernach EUR 625/contenedor y Bonn EUR 175/contenedor, vigentes desde 3 nov. para carga elegible. Pueden sumarse recargos por bajo nivel."},
{titulo:"Nórdicos y Bálticos | Combustible",bandera:"https://flagcdn.com/w40/dk.png",texto:"Maersk aplica desde 11 nov. recargo en envíos Store Door: Estonia 23%, Dinamarca 14%, Letonia 13%, Suecia 10%, Finlandia 6%, Noruega y Lituania 4%. No aplica automáticamente a todos los servicios."},
{titulo:"China | Espacio y conexiones",bandera:"https://flagcdn.com/w40/cn.png",texto:"Último WCI verificable en el corte consultado: 5 nov. por USD 4,389/FEU global. Validar blank sailings y cut-offs por naviera y terminal; no actualizar una cifra sin publicación fuente."},
{titulo:"India | Operación post-Diwali",bandera:"https://flagcdn.com/w40/in.png",texto:"Reconfirmar horarios de fábricas, choferes y terminales en Nhava Sheva, Mundra y Chennai. No atribuir cierres portuarios a ciclones no verificados."},
{titulo:"Brasil | Recuperación de Santos",bandera:"https://flagcdn.com/w40/br.png",texto:"Fuente del 12 nov. reporta 70% de copias de seguridad recuperadas tras ciberataque; sin cierre de navegación ni accesos terrestres. Verificar documentos por operación."},
{titulo:"Próximas fechas | Vigilancia",bandera:"",texto:"16 nov.: feriado México; 20 nov.: plazo de negociación ILWU Local 26; monitorear noticias y avisos posteriores a la huelga española del 11."}
],
metricas:[
{indicador:"Recargo Andernach",valor:"€625",tendencia:"Por contenedor elegible, Maersk; desde 3 nov."},
{indicador:"Recargo Bonn",valor:"€175",tendencia:"Por contenedor elegible, Maersk; desde 3 nov."},
{indicador:"Estonia · combustible",valor:"+23%",tendencia:"Store Door Maersk; desde 11 nov."},
{indicador:"Dinamarca · combustible",valor:"+14%",tendencia:"Store Door Maersk; desde 11 nov."},
{indicador:"Santos · recuperación",valor:"~70%",tendencia:"Copias de seguridad, reporte 12 nov."},
{indicador:"Drewry WCI global",valor:"US$4,389",tendencia:"Por FEU; último dato verificado 5 nov., no dato de hoy."},
{indicador:"Manzanillo · espera",valor:"2.25 días",tendencia:"Promedio móvil 7 días; reporte 10 nov."},
{indicador:"LA/LB · plazo laboral",valor:"20 nov.",tendencia:"Fin de prórroga contractual ILWU Local 26."}
],
recomendaciones:[
"Europa: verificar de inmediato cargos de contingencia para Andernach y Bonn y las nuevas tasas de combustible de Maersk en Nórdicos/Bálticos antes de emitir cotizaciones door-to-door.",
"España: llamar a las terminales específicas de Valencia, Algeciras y Barcelona para confirmar gates, cut-offs y salidas reprogramadas tras huelga del 11 nov.",
"Brasil: corroborar con agente local el proceso documental en Santos durante la recuperación de sistemas, sin describir el puerto como cerrado.",
"Chile: consultar al transportista restricciones de carretera reportadas desde el 10 nov.; no afirmar que siguen activas sin reporte local del 12.",
"EE. UU.: monitorear negociación LA/Long Beach con plazo del 20 nov. y preparar rutas alternas por Vincent Thomas Bridge.",
"México: confirmar Nuevo Laredo, Manzanillo y Lázaro Cárdenas; anticipar el feriado del lunes 16 nov.",
"India y Asia: confirmar espacio, cut-offs y disponibilidad terrestre después de Diwali; no extrapolar esperas desactualizadas.",
"Fuentes: Maersk Rin https://www.maersk.com/news/articles/2026/11/09/andernach-inland-terminal-contingency-surcharge · Maersk Nórdicos https://www.maersk.com/news/articles/2026/11/09/emergency-inland-fuel-energy-surcharge · España https://www.europapress.es/economia/transportes-00343/noticia-cifra-minimo-muy-localizado-impacto-huelga-logistica-transporte-20261111184159.html · Santos https://c-level.folha.uol.com.br/infraestrutura/2026/11/porto-de-santos-diz-que-recuperou-70-de-copias-de-arquivos-apos-ataque-hacker.shtml"
]
};
const retrasos=[
{puerto:"España · Valencia/Algeciras",tiempo:"12 nov. · verificar",estado:"Reanudación de operaciones posthuelga del 11; consultar terminal."},
{puerto:"España · Barcelona",tiempo:"12 nov. · verificar",estado:"Validar gates y cut-offs tras suspensión de turnos el 11."},
{puerto:"Alemania · Andernach",tiempo:"€625",estado:"Contingencia por bajo nivel del Rin; por contenedor elegible desde 3 nov."},
{puerto:"Alemania · Bonn",tiempo:"€175",estado:"Contingencia por bajo nivel del Rin; por contenedor elegible desde 3 nov."},
{puerto:"Brasil · Santos",tiempo:"~70%",estado:"Copias de seguridad recuperadas según reporte 12 nov.; puerto operativo."},
{puerto:"México · Manzanillo",tiempo:"2.25 días",estado:"Espera móvil 7 días, reportada el 10 nov.; no cifra en vivo."},
{puerto:"México · Lázaro Cárdenas",tiempo:"3.0 días",estado:"Espera móvil 7 días, reportada el 10 nov.; no cifra en vivo."},
{puerto:"Chile · Accesos terrestres",tiempo:"12 nov. · verificar",estado:"Alerta huelga transportistas emitida el 10; estado actual por confirmar."},
{puerto:"EE. UU. · LA/Long Beach",tiempo:"20 nov.",estado:"Plazo negociación laboral ILWU Local 26, sin huelga activa confirmada."}
];
// Corte editorial 12 nov. 2026. Riesgos no son necesariamente interrupciones activas; fuentes y observaciones fechadas.

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
                {"fotoUrl" in item && "fotoCredito" in item && item.fotoCredito ? <a href={String(item.fotoUrl)} target="_blank" rel="noopener noreferrer" className="absolute bottom-1 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[9px] text-white">{String(item.fotoCredito)}</a> : null}
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
