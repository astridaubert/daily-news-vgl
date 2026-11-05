import Image from "next/image";

// DATOS EDITABLES — CORTE 5 NOVIEMBRE 2026
const brief = {
fecha: "jueves 5 de noviembre de 2026",
titulo: "Vector Global Logistics | Radar Logístico Global",
subtitulo: "Alertas prioritarias de hoy: la negociación laboral de Los Ángeles/Long Beach se amplía al 6 de noviembre; Francia registra huelgas portuarias y Chile enfrenta bloqueos en San Antonio con desvíos de buques. El cierre vial del Vincent Thomas Bridge comienza el 7 de noviembre. Drewry reporta una baja semanal del 1% en su índice global.",
noticias: [
{ region:"ESTADOS UNIDOS · LOS ÁNGELES / LONG BEACH",modo:"CRÍTICA · HUELGA POTENCIAL · 6 NOV",
imagen:"https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",bandera:"https://flagcdn.com/w40/us.png",
titular:"LA/Long Beach: acuerdo laboral se extiende hasta la medianoche del 6 de noviembre",
dato:"La Pacific Maritime Association informó el 4 de noviembre que extendió el contrato con ILWU Local 26 hasta la medianoche del viernes 6 de noviembre (hora del Pacífico). Siguen las negociaciones con mediación federal; no se ha confirmado huelga activa. Los trabajadores de vigilancia participan en accesos a terminales que manejan cerca del 85% de la carga de Long Beach y 33% de Los Ángeles. Fuente: PMA, difundido por Transport Topics, 5 nov.",
impacto:"Una interrupción podría limitar el acceso a terminales, el retiro de contenedores y las conexiones intermodales. La exposición Asia–México depende de si el embarque utiliza estos puertos.",
accion:"Identificar carga que pase por LA/LB, reconfirmar citas de drayage y ferrocarril y preparar alternativas por servicios directos a México cuando sea viable."},
{ region:"FRANCIA · LE HAVRE / ROUEN",modo:"ALTA · HUELGA PORTUARIA 5–6 NOV",
imagen:"https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",bandera:"https://flagcdn.com/w40/fr.png",
titular:"Huelga portuaria en Francia afecta accesos y conexiones marítimas",
dato:"Inchcape Shipping Services reportó una huelga de trabajadores portuarios de las 06:00 del 5 a las 06:00 del 6 de noviembre, con interrupciones en Le Havre y accesos a determinados muelles. Otra huelga nacional de remolque está anunciada para el 7–8 de noviembre; el alcance en Rouen y Port-Jérôme aún debe confirmarse. Fuente: Inchcape, 5 nov.",
impacto:"Posibles restricciones de atraque, accesos y operaciones en terminales afectadas, junto con alteraciones de itinerarios y transbordos.",
accion:"Confirmar con terminal y agente portuario las ventanas de atraque, remolcadores y posibles omisiones antes de comprometer ETA."},
{ region:"CHILE · PUERTO DE SAN ANTONIO",modo:"ALTA · BLOQUEOS Y DESVÍO DE BUQUE",
imagen:"https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",bandera:"https://flagcdn.com/w40/cl.png",
titular:"Bloqueos en San Antonio desvían un buque Cherry Express hacia Valparaíso",
dato:"Transportistas independientes mantienen bloqueos en accesos a depósitos extraportuarios de San Antonio desde finales de octubre. El 4 de noviembre, PortalPortuario y Diario Financiero confirmaron el desvío del YM Orchid, del servicio Cherry Express, hacia Valparaíso. Las terminales continúan operativas, pero existe presión sobre retiro y disponibilidad de contenedores.",
impacto:"Riesgo en disponibilidad de equipo vacío, retiros, entregas y capacidad de exportación, especialmente para productos perecederos.",
accion:"Confirmar disponibilidad de depósitos, tractocamiones y espacios; evaluar Valparaíso solo con validación de itinerario, costos y capacidad."}
],
vigilancia:[
{titulo:"México | Aduanas y corredores fronterizos",bandera:"https://flagcdn.com/w40/mx.png",texto:"Las movilizaciones de transportistas de fines de octubre fueron suspendidas tras acuerdos de diálogo. No se confirma un nuevo paro nacional activo el 5 de noviembre. Monitorear incidencias concretas en Nuevo Laredo/Laredo, Manzanillo y Veracruz; validar calendario de Manifestación de Valor Electrónica con el agente aduanal."},
{titulo:"Estados Unidos | Vincent Thomas Bridge",bandera:"https://flagcdn.com/w40/us.png",texto:"Caltrans confirma cierre total del Vincent Thomas Bridge (SR-47) desde las 00:01 del 7 nov. por aproximadamente 16 meses. Los puertos LA/LB seguirán abiertos; el riesgo principal son desvíos y tiempos de transporte terrestre más largos. Fuente: Caltrans y Maersk, 4 nov."},
{titulo:"Europa | Francia · remolque 7–8 nov.",bandera:"https://flagcdn.com/w40/fr.png",texto:"Además del paro de estibadores del 5–6 nov., está convocada una huelga nacional de remolcadores desde las 08:00 del 7 hasta las 08:00 del 8 nov. Verificar por puerto; Le Havre podría reducir o suspender servicios de remolque. Fuente: Inchcape, 5 nov."},
{titulo:"Europa | Amberes, Róterdam y Alemania",bandera:"https://flagcdn.com/w40/be.png",texto:"La congestión de barcazas y feeder continúa afectando fiabilidad en determinados corredores europeos. Bremerhaven y Hamburgo presentan presión de patios según reportes operativos del 3 nov.; verificar terminal y ETA antes de planear conexiones."},
{titulo:"China / Asia | Congestión y transbordos",bandera:"https://flagcdn.com/w40/cn.png",texto:"Las esperas en puertos chinos muestran señales de mejora tras el tifón Champi, aunque persisten cuellos de botella locales y congestión en hubs de transbordo. Drewry (5 nov.) reporta una mejora en Shanghái. Revisar cambios de conexión en Vietnam, Indonesia y Tailandia."},
{titulo:"India | Diwali y capacidad",bandera:"https://flagcdn.com/w40/in.png",texto:"Diwali se celebra el 8 nov. La operación puede reducirse en fábricas, camiones y terminales según ciudad y proveedor. Revisar despachos en Mundra, Nhava Sheva, Chennai y transbordos por Colombo; no asumir cierres nacionales uniformes."},
{titulo:"Brasil | Santos y trámites aduaneros",bandera:"https://flagcdn.com/w40/br.png",texto:"Santos mantiene riesgo de demoras por volumen agrícola, camiones y disponibilidad de equipos. No se ha corroborado con fuente sindical u oficial actual una huelga aduanal nacional indefinida iniciada el 25 oct.; confirmar despacho por terminal y carga antes de anunciarla."},
{titulo:"Medio Oriente | Estrecho de Ormuz",bandera:"",texto:"Maersk informó el 5 nov. que las restricciones en Ormuz y la congestión de red siguen elevando costos de bunker, manipulación y afectando confiabilidad. Validar recargos, seguros y disponibilidad por naviera y puerto; servicios directos China–México no atraviesan necesariamente Ormuz."},
{titulo:"Global | Maersk revisa al alza sus perspectivas",bandera:"",texto:"Maersk elevó por tercera vez su guía 2026: EBITDA subyacente previsto de USD 14.0–14.5 mil millones. Señala demanda resiliente, congestión y costos por Ormuz; no implica que las tarifas de todos los corredores estén subiendo. Fuente: Maersk, 5 nov."},
{titulo:"Calendario | Próximos días",bandera:"",texto:"5–6 nov.: huelga portuaria francesa; 6 nov. medianoche PT: plazo LA/LB; 7 nov.: cierre del Vincent Thomas Bridge; 7–8 nov.: huelga de remolque en Francia; 8 nov.: Diwali India; 16 nov.: feriado México."}
],
metricas:[
{indicador:"Flete global · Drewry",valor:"US$4,389",tendencia:"Por FEU (40 pies), -1% semanal; publicado 5 nov."},
{indicador:"Shanghái → Los Ángeles",valor:"US$7,539",tendencia:"Por FEU; sin cambio semanal. Drewry, 5 nov."},
{indicador:"Shanghái → Nueva York",valor:"US$9,303",tendencia:"Por FEU; -3% semanal. Drewry, 5 nov."},
{indicador:"LA/LB · límite laboral",valor:"6 nov.",tendencia:"Medianoche hora del Pacífico; huelga sin confirmar."},
{indicador:"Francia · paro portuario",valor:"24 horas",tendencia:"5 nov. 06:00 a 6 nov. 06:00; Inchcape."},
{indicador:"Vincent Thomas Bridge",valor:"16 meses",tendencia:"Cierre vial desde 7 nov.; Caltrans."},
{indicador:"Chile · San Antonio",valor:"1 desvío",tendencia:"YM Orchid hacia Valparaíso, confirmado 4 nov."},
{indicador:"Maersk · EBITDA 2026",valor:"US$14–14.5 mil M",tendencia:"Proyección elevada, no tarifa de flete. Maersk 5 nov."}
],
recomendaciones:[
"EE. UU.: revisar embarques que usan LA/Long Beach y citas de drayage; confirmar el desenlace de negociaciones el 6 de noviembre.",
"California: preparar rutas terrestres alternativas por el cierre del Vincent Thomas Bridge el 7 de noviembre; puertos continúan operativos.",
"Francia: verificar accesos, remolcadores, itinerarios y transbordos del 5 al 8 de noviembre.",
"Chile: revisar depósitos extraportuarios en San Antonio, equipos vacíos y opciones reales en Valparaíso, especialmente para perecederos.",
"China y Asia: validar ETA y conexiones; el WCI baja pero no representa todas las cotizaciones intraasiáticas.",
"India: confirmar cut-off, horarios de fábrica, transporte y equipo antes de Diwali.",
"Brasil: confirmar liberaciones aduaneras por operación y demoras en Santos; no publicar huelga nacional no corroborada.",
"México: seguir eventos de carretera concretos y obligaciones aduaneras vigentes, evitando reutilizar un paro de octubre como activo.",
"Medio Oriente: comparar rutas, recargos de combustible, seguros y tiempos de transbordo según itinerario."
]
};
const retrasos=[
{puerto:"Francia · Le Havre",tiempo:"5–6 nov.",estado:"Huelga portuaria 24 horas; accesos marítimos restringidos en muelles seleccionados. Fuente: Inchcape 5 nov."},
{puerto:"Francia · Remolque",tiempo:"7–8 nov.",estado:"Convocatoria nacional; validar disponibilidad de remolcadores por puerto."},
{puerto:"Chile · San Antonio",tiempo:"4–5 nov.",estado:"Bloqueos en depósitos extraportuarios; un Cherry Express desviado a Valparaíso."},
{puerto:"EE. UU. · LA / Long Beach",tiempo:"6 nov. medianoche PT",estado:"Prórroga laboral ILWU Local 26; huelga no confirmada."},
{puerto:"EE. UU. · Vincent Thomas Bridge",tiempo:"Desde 7 nov.",estado:"Cierre de carretera SR-47 durante aproximadamente 16 meses; puertos operativos."},
{puerto:"China · Shanghái",tiempo:"5 nov.",estado:"Drewry reporta mejora en esperas tras semanas de congestión; confirmar por terminal."},
{puerto:"India · Nhava Sheva",tiempo:"3 nov. · referencia",estado:"2.25 días de espera media anterior; verificar estado actualizado y festivos."},
{puerto:"Brasil · Santos",tiempo:"3 nov. · referencia",estado:"1.93 días de espera media anterior; confirmar ventanas y trámites."},
{puerto:"Emiratos · Fujairah",tiempo:"3 nov. · referencia",estado:"8.86 días de espera media anterior por congestión; confirmar antes de cotizar."}
];
// Corte editorial: 5 nov. 2026. Drewry 5 nov.; eventos locales 4–5 nov.; promedios portuarios históricos identificados.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 5 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 5 de noviembre de 2026. Fuentes: Drewry (5 nov.), PMA/Transport Topics, Inchcape (5 nov.), Caltrans, Maersk (5 nov.), PortalPortuario/Diario Financiero (4 nov.) y reportes operativos de Kuehne+Nagel (3 nov.). Las mediciones portuarias previas no son datos en vivo. Confirmar con terminal, naviera y agente aduanal.</span>
        </div>
      </footer>
    </main>
  );
}
