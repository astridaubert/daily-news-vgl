import Image from "next/image";

// DATOS EDITABLES — CORTE 10 NOVIEMBRE 2026
const brief = {
fecha:"martes 10 de noviembre de 2026",
titulo:"Vector Global Logistics | Radar Logístico Global",
subtitulo:"10 de noviembre: horarios especiales por Veterans Day el 11 nov. en LA/LB y NY/NJ; Dublín prevé restricciones viales del 10 al 13 nov.; navieras ajustan tarifas y recargos Asia–Mediterráneo. Noticias diferentes al 9 nov., con recomendaciones para anticipar costos y retrasos.",
noticias:[
{region:"ESTADOS UNIDOS · VETERANS DAY",modo:"ALTA · MIÉRCOLES 11 NOV",imagen:"https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",bandera:"https://flagcdn.com/w40/us.png",titular:"Veterans Day: horarios especiales en LA/LB y NY/NJ",dato:"11 de noviembre: en LA/LB operan primer y segundo turnos APM, Everport, FMS, ITS, LBCT, TRAPAC, TTI, WBCT y YTI; PCT solo primer turno. Pier A cierra ambos turnos, PCT el segundo y LBCT el tercero. En NY/NJ: Maher cerrado, Port Liberty Bayonne 06:00–13:00 solo con cita; APM, Port Liberty New York y PNCT abiertos. Fuentes: STG Logistics (9 nov.) https://www.stgusa.com/alerts/notice-la-lb-and-ny-nj-port-terminals-veterans-day-schedule-2/ y Port Liberty New York https://portlibertynewyork.com/daily-update/.",impacto:"Restricciones de acceso y turnos pueden afectar retiros, entregas, citas y generar cargos por demurrage o per diem. No significa cierre general de los puertos.",accion:"Confirmar turno directamente con terminal, asegurar cita y revisar días libres antes de despachar."},
{region:"EUROPA · IRLANDA / DUBLÍN",modo:"ALTA · 10–13 NOV",imagen:"https://commons.wikimedia.org/wiki/Special:FilePath/Container_Terminal_at_North_Wall_Quay%2C_Dublin_-_geograph.org.uk_-_5417793.jpg",bandera:"https://flagcdn.com/w40/ie.png",titular:"Dublín prevé restricciones viales y posibles retrasos en accesos portuarios",dato:"Entre el 10 y el 13 nov. se esperan cierres viales y restricciones de circulación por la cumbre de la Comunidad Política Europea y reuniones de líderes de la UE. El 12 nov. se esperan también concentraciones de FORSA y huelga de 24 horas del sector público. Fuente: WSSA, 9 nov. https://www.wssa.com/content/disruption-update-uswc-chile-france-ireland",impacto:"El acceso a Docklands, North Wall Quay, Spencer Place y Samuel Beckett Bridge puede complicar recolecciones y entregas vinculadas con Dublin Port; los efectos dependen de cada ruta.",accion:"Programar movimientos con anticipación, verificar restricciones locales y revisar free time, almacenamiento y demurrage."},
{region:"ASIA–MEDITERRÁNEO · TARIFAS MARÍTIMAS",modo:"ALTA · AJUSTES DE NOVIEMBRE",imagen:"https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",bandera:"",titular:"MSC y Maersk ajustan tarifas y recargos Asia–Mediterráneo",dato:"MSC elevó tarifas FAK publicadas para la segunda mitad de noviembre y extendió la aplicación geográfica de recargos vinculados con riesgo de piratería y Canal de Suez. Maersk anunció un Peak Season Surcharge (PSS) para tráfico desde Lejano Oriente al Mediterráneo. Las medidas no son equivalentes y deben revisarse por servicio, fecha y destino. Fuente: Container News, 10 nov. https://container-news.com/asia-mediterranean-freight-pricing-the-costs-beyond-headline-rates/",impacto:"El precio base no necesariamente refleja el costo final del embarque; los recargos pueden cambiar la comparación de cotizaciones.",accion:"Solicitar desglose completo de flete, PSS y recargos aplicables; confirmar vigencia y condiciones antes de reservar."}
],
vigilancia:[
{titulo:"México | Carreteras y fronteras",bandera:"https://flagcdn.com/w40/mx.png",texto:"Los bloqueos nacionales previos fueron levantados tras mesas de negociación; vigilar nuevos avisos de transportistas sin anunciar paro activo no corroborado. Confirmar cruces Nuevo Laredo/Laredo y rutas de Monterrey. El lunes 16 nov. es día de descanso oficial en México."},
{titulo:"México | Manzanillo y Lázaro Cárdenas",bandera:"https://flagcdn.com/w40/mx.png",texto:"Priorizar avisos meteorológicos, oleaje, gate appointments, cierres por capitanía y tiempos de patio. No publicar las cifras 1.4/3.4 días como actuales sin una fuente portuaria del 9 nov."},
{titulo:"Estados Unidos | Riesgo laboral",bandera:"https://flagcdn.com/w40/us.png",texto:"PMA extendió acuerdo con ILWU Local 26 hasta el 20 nov. Las terminales permanecen operativas, pero existe riesgo de interrupción si fracasan conversaciones. Fuente: https://www.pmanet.org/statements-and-press-releases/"},
{titulo:"Estados Unidos | Veterans Day, 11 nov.",bandera:"https://flagcdn.com/w40/us.png",texto:"STG Logistics informó horarios diferenciados: Pier A no operará en primeros dos turnos, PCT cierra segundo turno, LBCT tercero y Maher (NY/NJ) permanecerá cerrado. Port Liberty Bayonne: 06:00–13:00 con cita. Validar confirmación por terminal. Fuente: https://www.stgusa.com/alerts/notice-la-lb-and-ny-nj-port-terminals-veterans-day-schedule-2/"},
{titulo:"Estados Unidos | Cierre de puente",bandera:"https://flagcdn.com/w40/us.png",texto:"Vincent Thomas Bridge cerrado desde el 7 nov. por obras durante aproximadamente 16 meses; confirmar desvíos, citas y disponibilidad de drayage; no describir como cierre de puerto."},
{titulo:"Irlanda | Accesos a Dublin Port",bandera:"https://flagcdn.com/w40/ie.png",texto:"10–13 nov.: restricciones de circulación por cumbres internacionales; 12 nov. se prevén concentraciones laborales y huelga del sector público. Revisar ventanas de transporte. Fuente: https://www.wssa.com/content/disruption-update-uswc-chile-france-ireland"},
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
"Europa: para Dublin Port, revisar cierres viales y ventanas de recolección del 10 al 13 nov.; para el resto de Europa comprobar conexiones feeder y barcaza.",
"China: validar ventanas de carga y blank sailings de la semana 46 antes de confirmar ETD.",
"India: validar horarios regionales, disponibilidad de choferes, fábricas y equipos tras Diwali del 8 nov.; no anunciar cierre portuario nacional sin confirmación.",
"Brasil: verificar liberaciones aduanales por operación; no asumir huelga nacional sin corroboración.",
"Asia–Mediterráneo: comparar FAK, PSS y recargos de seguridad/Suez por ruta y naviera; no extrapolar el WCI global a cada cotización.",
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
