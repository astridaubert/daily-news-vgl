import Image from "next/image";

// DATOS EDITABLES — CORTE 10 NOVIEMBRE 2026
const brief = {
fecha:"martes 10 de noviembre de 2026",
titulo:"Vector Global Logistics | Radar Logístico Global",
subtitulo:"10 de noviembre: el 11 nov. habrá horarios especiales por Veterans Day en terminales de LA/Long Beach y NY/NJ. La negociación laboral en LA/LB continúa hasta el 20 nov.; persisten desvíos por el Vincent Thomas Bridge. Drewry WCI (último dato, 5 nov.): US$4,389 por FEU (-1% semanal).",
noticias:[
{region:"ESTADOS UNIDOS · LOS ÁNGELES / LONG BEACH",modo:"ALTA · NEGOCIACIÓN HASTA 20 NOV",imagen:"https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",bandera:"https://flagcdn.com/w40/us.png",titular:"LA/Long Beach evita huelga inmediata: nuevo plazo 20 de noviembre",dato:"PMA confirmó el 6 de noviembre una prórroga con ILWU Local 26 hasta el 20 de noviembre. Unos 250 vigilantes portuarios siguen negociando: no hay huelga activa confirmada. El Vincent Thomas Bridge cerró al tráfico desde el 7 de noviembre por aproximadamente 16 meses. Fuentes: PMA, 6 nov.; Port Technology, 9 nov.; avisos de Caltrans/Maersk.",impacto:"Riesgo laboral diferido; el cierre vial complica rutas de drayage, citas, tiempos de tránsito terrestre y costos. Los puertos no están cerrados.",accion:"Confirmar ruta de camiones alternativa, citas de terminal, conexión ferroviaria y free time; monitorear 20 nov."},
{region:"MEDIO ORIENTE · SUEZ / ORMUZ",modo:"ALTA · CAMBIO DE RUTAS MARÍTIMAS",imagen:"https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",bandera:"",titular:"Maersk ajusta rutas por Suez mientras persiste la incertidumbre en Ormuz",dato:"Maersk informó el 9 de noviembre que su servicio ME1 Gemini está en transición a la ruta del Canal de Suez. La naviera mantiene avisos específicos para cargas que atraviesan el estrecho de Ormuz debido a las condiciones regionales. Fuente: Maersk, IMEA Market Update, 9 nov. 2026: https://www.maersk.com/news/articles/2026/11/09/india-middle-east-and-africa-market-update-november",impacto:"Los ajustes de servicios y restricciones regionales pueden modificar itinerarios, transbordos, conexiones y tiempos de entrega para carga vinculada a Medio Oriente. No implica que todos los servicios globales tengan la misma afectación.",accion:"Verificar ruta confirmada y avisos de cada naviera; revisar ETA, puertos de transbordo y conexiones antes de comprometer fechas de entrega."},
{region:"ESTADOS UNIDOS · VETERANS DAY · 11 NOV",modo:"ALTA · HORARIOS ESPECIALES",imagen:"https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",bandera:"https://flagcdn.com/w40/us.png",titular:"Veterans Day: restricciones por turno en LA/LB y cierre de Maher en NY/NJ",dato:"Miércoles 11 nov. 2026. LA/LB: APM, Everport, FMS, ITS, LBCT, TRAPAC, TTI, WBCT y YTI operarán primer y segundo turno; PCT solo primer turno. Cerrados: Pier A (primer y segundo turno), PCT (segundo) y LBCT (tercero). NY/NJ: APM, Port Liberty New York y PNCT abiertos; Port Liberty Bayonne de 6:00 a 13:00 solo con cita; Maher cerrado. Fuente: STG Logistics, aviso del 9 nov. 2026: https://www.stgusa.com/alerts/notice-la-lb-and-ny-nj-port-terminals-veterans-day-schedule-2/",impacto:"Las restricciones pueden afectar entregas, retiros y citas de contenedores; podrían generarse cargos por demurrage o per diem. La disponibilidad debe validarse con cada terminal.",accion:"Confirmar turno y cita directamente con terminal y transportista antes del 11 nov.; revisar free time, demurrage y per diem."}
],
vigilancia:[
{titulo:"México | Carreteras y fronteras",bandera:"https://flagcdn.com/w40/mx.png",texto:"Los bloqueos nacionales previos fueron levantados tras mesas de negociación; vigilar nuevos avisos de transportistas sin anunciar paro activo no corroborado. Confirmar cruces Nuevo Laredo/Laredo y rutas de Monterrey. El lunes 16 nov. es día de descanso oficial en México."},
{titulo:"México | Manzanillo y Lázaro Cárdenas",bandera:"https://flagcdn.com/w40/mx.png",texto:"Priorizar avisos meteorológicos, oleaje, gate appointments, cierres por capitanía y tiempos de patio. No publicar las cifras 1.4/3.4 días como actuales sin una fuente portuaria del 9 nov."},
{titulo:"Estados Unidos | Riesgo laboral",bandera:"https://flagcdn.com/w40/us.png",texto:"PMA extendió acuerdo con ILWU Local 26 hasta el 20 nov. Las terminales permanecen operativas, pero existe riesgo de interrupción si fracasan conversaciones. Fuente: https://www.pmanet.org/statements-and-press-releases/"},
{titulo:"Estados Unidos | Veterans Day, 11 nov.",bandera:"https://flagcdn.com/w40/us.png",texto:"STG Logistics informó horarios diferenciados: Pier A no operará en primeros dos turnos, PCT cierra segundo turno, LBCT tercero y Maher (NY/NJ) permanecerá cerrado. Port Liberty Bayonne: 06:00–13:00 con cita. Validar confirmación por terminal. Fuente: https://www.stgusa.com/alerts/notice-la-lb-and-ny-nj-port-terminals-veterans-day-schedule-2/"},
{titulo:"Estados Unidos | Cierre de puente",bandera:"https://flagcdn.com/w40/us.png",texto:"Vincent Thomas Bridge cerrado desde el 7 nov. por obras durante aproximadamente 16 meses; confirmar desvíos, citas y disponibilidad de drayage; no describir como cierre de puerto."},
{titulo:"Europa | Francia, Róterdam, Amberes",bandera:"https://flagcdn.com/w40/fr.png",texto:"La huelga francesa de remolcadores anunciada para el 6–7 nov. es un evento pasado; verificar efectos residuales y nuevas convocatorias. Róterdam y Amberes: comprobar conexiones feeder/barcaza por terminal, sin asignar esperas en días sin fuente actual."},
{titulo:"Europa | Asia–Europa y Suez",bandera:"https://flagcdn.com/w40/nl.png",texto:"Shanghái–Róterdam US$3,615/FEU (-2%), Génova US$4,166 (estable). Drewry alerta riesgo de llegadas simultáneas desde rutas Suez y Cabo de Buena Esperanza; navieras intentan alzas FAK a mitad de noviembre."},
{titulo:"China | Shanghái y capacidad",bandera:"https://flagcdn.com/w40/cn.png",texto:"Drewry, 5 nov.: espera media reciente en Shanghái mejoró a unas 35 horas, tras varias semanas de congestión; tres blank sailings transpacíficos anunciados para la semana siguiente. Confirmar cut-off por terminal."},
{titulo:"Asia | Conexiones y riesgo geopolítico",bandera:"https://flagcdn.com/w40/sg.png",texto:"Vigilar transbordos, itinerarios por Suez y recargos según naviera; conflicto en Ormuz y seguridad regional pueden afectar algunos servicios. No asumir que todos los embarques China–México pasan por Medio Oriente."},
{titulo:"Brasil | Santos, Navegantes y Manaus",bandera:"https://flagcdn.com/w40/br.png",texto:"Revisar disponibilidad aduanal, terminal, transporte por carretera y niveles fluviales. La supuesta huelga aduanal nacional iniciada el 25 oct. no está corroborada para hoy; no publicarla como vigente. Confirmar eventos caso por caso."},
{titulo:"India | Nhava Sheva, Mundra, Chennai",bandera:"https://flagcdn.com/w40/in.png",texto:"Diwali 8 nov. y celebraciones regionales podrían reducir personal y camiones; validar operaciones individualmente. No atribuir interrupciones al ciclón Arnab sin confirmación meteorológica."},
{titulo:"Calendario | Próximos hitos",bandera:"",texto:"11 nov.: Veterans Day y horarios especiales en terminales de EE. UU.; 16 nov.: descanso oficial en México por Revolución Mexicana; 20 nov.: nuevo plazo laboral PMA–ILWU Local 26 en LA/Long Beach. Verificar blank sailings por servicio."}
],
metricas:[
{indicador:"Drewry WCI global",valor:"US$4,389",tendencia:"Por FEU, -1% semanal, 5 nov."},
{indicador:"Shanghái → Los Ángeles",valor:"US$7,539",tendencia:"Por FEU; sin cambio semanal."},
{indicador:"Shanghái → Nueva York",valor:"US$9,303",tendencia:"Por FEU; -3% semanal."},
{indicador:"Shanghái → Róterdam",valor:"US$3,615",tendencia:"Por FEU; -2% semanal."},
{indicador:"Shanghái → Génova",valor:"US$4,166",tendencia:"Por FEU; estable semanal."},
{indicador:"LA/LB · plazo laboral",valor:"20 nov.",tendencia:"PMA / ILWU Local 26; extensión confirmada."},
{indicador:"Vincent Thomas Bridge",valor:"16 meses",tendencia:"Cierre vial iniciado el 7 nov."},
{indicador:"Blank sailings",valor:"46",tendencia:"Previstos semanas 46–50; Drewry 6 nov."}
],
recomendaciones:[
"EE. UU.: confirmar horarios y citas de terminal para Veterans Day (11 nov.), revisar free time y cargos; verificar desvíos del Vincent Thomas Bridge y monitorear negociación ILWU Local 26 hasta el 20 nov.",
"México: consultar avisos de transportistas y vialidad; confirmar horarios por feriado del 16 nov. y condiciones de Manzanillo/Lázaro Cárdenas.",
"Europa: comprobar conexiones feeder/barcaza y posible concentración de llegadas por la transición Suez/Cabo.",
"China: validar ventanas de carga y blank sailings de la semana 46 antes de confirmar ETD.",
"India: validar horarios regionales, disponibilidad de choferes, fábricas y equipos tras Diwali del 8 nov.; no anunciar cierre portuario nacional sin confirmación.",
"Brasil: verificar liberaciones aduanales por operación; no asumir huelga nacional sin corroboración.",
"Global: no extrapolar el WCI a todas las rutas; confirmar tarifa y recargos por cotización específica.",
"Fuentes: PMA https://www.pmanet.org/statements-and-press-releases/ · Drewry https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update · STG https://www.stgusa.com/alerts/notice-la-lb-and-ny-nj-port-terminals-veterans-day-schedule-2/ · Maersk https://www.maersk.com/news/articles/2026/11/09/india-middle-east-and-africa-market-update-november"
]
};
const retrasos=[
{puerto:"EE. UU. · LA/Long Beach",tiempo:"20 nov.",estado:"Prórroga laboral ILWU Local 26; no huelga activa."},
{puerto:"EE. UU. · Terminales LA/LB y NY/NJ",tiempo:"11 nov.",estado:"Veterans Day: turnos especiales y cierre de Maher; confirmar citas y horarios por terminal."},
{puerto:"EE. UU. · Vincent Thomas Bridge",tiempo:"Desde 7 nov.",estado:"Cierre vial de ~16 meses; terminales continúan operativas."},
{puerto:"México · Manzanillo",tiempo:"10 nov. · verificar",estado:"Confirmar citas y condiciones marítimas; sin espera promedio actual verificada."},
{puerto:"México · Lázaro Cárdenas",tiempo:"10 nov. · verificar",estado:"Validar condiciones de oleaje y capitanía; sin espera promedio actual verificada."},
{puerto:"China · Shanghái",tiempo:"35 horas",estado:"Promedio reportado por Drewry el 5 nov. para la semana anterior."},
{puerto:"Europa · Le Havre",tiempo:"6–7 nov.",estado:"Preaviso anterior de paro de remolcadores; no anunciar como vigente."},
{puerto:"India · Nhava Sheva",tiempo:"10 nov. · verificar",estado:"Variaciones de operación por Diwali y jornadas regionales."},
{puerto:"Brasil · Santos",tiempo:"10 nov. · verificar",estado:"Confirmar estado local de aduana, transportistas y terminal."}
];
// Corte editorial 10 nov. 2026. Fuentes: PMA, STG Logistics (9 nov.), Maersk (9 nov.) y Drewry WCI (5 nov.). No confundir riesgos con interrupciones confirmadas.

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
