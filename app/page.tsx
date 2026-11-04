import Image from "next/image";

// DATOS EDITABLES — CORTE 4 NOVIEMBRE 2026
const brief = {
  fecha: "miércoles 4 de noviembre de 2026",
  titulo: "Vector Global Logistics | Radar Logístico Global",
  subtitulo: "Medio Oriente mantiene restricciones y recargos por el Estrecho de Hormuz; LA/Long Beach enfrenta una fecha límite laboral este 4 de noviembre. China acumula retrasos tras el tifón Champi, India se prepara para Diwali y Europa presenta afectaciones puntuales. Las tarifas marítimas no suben de forma generalizada.",
  noticias: [
    {
      region: "MEDIO ORIENTE · ESTRECHO DE HORMUZ",
      modo: "CRÍTICA · RUTAS Y RECARGOS · 4 NOV",
      imagen: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      bandera: "",
      titular: "Hormuz sigue restringiendo rutas y elevando costos logísticos",
      dato: "Drewry informó el 29 de octubre solo dos tránsitos por Hormuz durante la semana anterior. Forto, en su actualización del 3 de noviembre, reporta desvíos por transbordo y puentes terrestres vía Salalah, Khor Fakkan, Fujairah, Sharjah y Yeda; también restricciones de reservas y recargos extraordinarios para carga del Golfo. Fuentes: Drewry (29 oct.) y Forto (3 nov.).",
      impacto: "Mayor incertidumbre en tiempos de tránsito, seguros, combustible, conexiones y costos para rutas que utilizan el Golfo. No implica que los servicios directos de China a México atraviesen Hormuz.",
      accion: "Confirmar itinerario real, disponibilidad de espacios, recargos, seguro y alternativas con cada naviera antes de autorizar desvíos."
    },
    {
      region: "ESTADOS UNIDOS · LOS ÁNGELES / LONG BEACH",
      modo: "CRÍTICA · PLAZO LABORAL HOY 17:00 PT",
      imagen: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      bandera: "https://flagcdn.com/w40/us.png",
      titular: "LA/Long Beach: vence hoy la prórroga para evitar una huelga",
      dato: "ILWU Local 26 y la asociación patronal mantienen conversaciones sobre unos 250 trabajadores de vigilancia. La extensión vence este miércoles 4 de noviembre a las 17:00 hora del Pacífico (19:00 Monterrey). Al corte informativo no se confirma huelga activa. Fuentes: STG Logistics (actualizado 2 nov.), ICIS y Alba (3 nov.).",
      impacto: "Si no hay acuerdo o nueva prórroga, podrían afectarse accesos, retiros de contenedores y conexiones intermodales. La exposición de embarques Asia–México depende de si pasan por estos puertos.",
      accion: "Identificar embarques con escala en LA/LB, priorizar contenedores liberados y revisar rutas directas a México cuando sean viables."
    },
    {
      region: "ASIA · CHINA / INDIA",
      modo: "ALTA · CONGESTIÓN Y FESTIVIDAD",
      imagen: "https://images.unsplash.com/photo-1532634896-26909d0d4b4a?w=1200",
      bandera: "",
      titular: "Ningbo y Shanghái acumulan retrasos; India ajusta operaciones por Diwali",
      dato: "Kuehne+Nagel (3 nov.) registra esperas promedio de 2.23 días en Ningbo y 2.12 en Shanghái tras el tifón Champi; Nhava Sheva registra 2.25 días. Diwali se celebra el 8 de noviembre y puede reducir actividad de proveedores y transportistas según la localidad.",
      impacto: "Aumenta el riesgo de conexiones perdidas, cambios de salida y menor disponibilidad puntual de equipos. Los festivos no suponen un cierre nacional uniforme de puertos.",
      accion: "Confirmar cut-off, gate-in, disponibilidad de proveedores y conexiones con agentes en China e India."
    }
  ],
  vigilancia: [
    {
      titulo: "México | Transporte y seguridad carretera",
      bandera: "https://flagcdn.com/w40/mx.png",
      texto: "Las movilizaciones de transportistas del 26 de octubre afectaron 38 puntos en 19 estados según Segob. No hay corroboración de un nuevo bloqueo nacional indefinido activo el 4 de noviembre; validar incidentes por tramo. Vigilar accesos a puertos, Nuevo León y corredores fronterizos. Fuente: Segob, 26 oct."
    },
    {
      titulo: "México | Manifestación de Valor Electrónica",
      bandera: "https://flagcdn.com/w40/mx.png",
      texto: "Implementación gradual de MVE anunciada desde el 1 de noviembre para el primer régimen; verificar vigencia normativa y calendario con agente aduanal. Las importaciones definitivas tienen fecha anunciada del 15 de enero de 2027. Fuente: ANAM/SAT y FreightSpot, 2 nov."
    },
    {
      titulo: "Estados Unidos | Ferrocarril y LA/LB",
      bandera: "https://flagcdn.com/w40/us.png",
      texto: "Kuehne+Nagel (3 nov.) registra estadías ferroviarias aproximadas de 9 días en Los Ángeles y 10 en Long Beach. La amenaza de paro afecta principalmente embarques que usan estas terminales; una ruta marítima directa Asia–México no requiere pasar por LA/LB."
    },
    {
      titulo: "Europa | Francia y Alemania",
      bandera: "https://flagcdn.com/w40/fr.png",
      texto: "Le Havre refleja efectos de movilizaciones sobre arribos. Bremerhaven reporta ocupación de patios cercana al 95%, y Hamburgo alrededor del 85%, con niebla y mantenimiento. Verificar cualquier convocatoria laboral por fecha y terminal. Fuente: Kuehne+Nagel, 3 nov."
    },
    {
      titulo: "Europa | Italia y Reino Unido",
      bandera: "https://flagcdn.com/w40/it.png",
      texto: "Génova restringe tráfico en Sampierdarena el 4–5 nov. de 09:00 a 13:00 por trabajos con munición histórica; Trieste enfrenta efectos de fuertes vientos. London Gateway reporta omisiones de escalas y restricciones de atraque. Fuente: Kuehne+Nagel, 3 nov."
    },
    {
      titulo: "China / Japón | Alta densidad portuaria",
      bandera: "https://flagcdn.com/w40/cn.png",
      texto: "Ningbo 2.23 días y Shanghái 2.12 días de espera de buques; Tokio mantiene patios de 96–97% de ocupación y Yokohama cerca del 93%. Son promedios reportados el 3 nov., no mediciones en vivo. Fuente: Kuehne+Nagel."
    },
    {
      titulo: "Asia | Busan, Port Klang y Vietnam",
      bandera: "https://flagcdn.com/w40/sg.png",
      texto: "Busan registra ocupación cercana al 93% y mantenimiento de equipos; Port Klang 85–90%; Vung Tau 90–95%. La alta densidad aumenta el riesgo para conexiones fuera de ventana. Fuente: Kuehne+Nagel, 3 nov."
    },
    {
      titulo: "India | Diwali y transbordos",
      bandera: "https://flagcdn.com/w40/in.png",
      texto: "Diwali: domingo 8 nov. Nhava Sheva: espera media 2.25 días; Colombo 1.58 días. El ciclón Arnab afectó recientemente la costa este, sin evidencia de cierre general de Chennai hoy. Confirmar horarios de fábricas y transportistas. Fuente: Kuehne+Nagel, 3 nov."
    },
    {
      titulo: "Brasil | Santos y despacho",
      bandera: "https://flagcdn.com/w40/br.png",
      texto: "Santos registra 1.93 días de espera media, presión exportadora agrícola, restricciones de camiones y alta demanda reefer. No se ha corroborado una huelga nacional de auditores aduanales activa desde el 25 oct.; no comunicarla como confirmada. Fuente: Kuehne+Nagel, 3 nov."
    },
    {
      titulo: "Medio Oriente | Puertos alternativos",
      bandera: "",
      texto: "Fujairah registra 8.86 días de espera, Khor Fakkan 7.25 y Sharjah 3. Los traslados de terminal a terminal pueden tardar 12–15 días, frente a 5 previamente. Considerar Salalah/Duqm solo previa confirmación de capacidad. Fuente: Kuehne+Nagel, 3 nov."
    },
    {
      titulo: "Calendario | Fechas próximas",
      bandera: "",
      texto: "4 nov.: plazo laboral LA/LB; 4–5 nov.: restricciones Génova; 8 nov.: Diwali India; 11 nov.: convocatoria de huelga en España (alcance por confirmar); 16 nov.: feriado oficial México. Confirmar operatividad con cada proveedor."
    }
  ],
  metricas: [
    { indicador: "Flete global · Drewry", valor: "US$4,429", tendencia: "Por FEU · -3% semanal; dato del 29 oct., última publicación." },
    { indicador: "Shanghái → LA", valor: "US$7,514", tendencia: "Por FEU · -6% semanal; Drewry, 29 oct." },
    { indicador: "Shanghái → Róterdam", valor: "US$3,686", tendencia: "Por FEU · +1% semanal; Drewry, 29 oct." },
    { indicador: "Shanghái → Génova", valor: "US$4,151", tendencia: "Por FEU · sin cambio semanal; Drewry, 29 oct." },
    { indicador: "Ningbo · espera buques", valor: "2.23 días", tendencia: "Promedio 7 días; Kuehne+Nagel, 3 nov." },
    { indicador: "Santos · espera buques", valor: "1.93 días", tendencia: "Promedio 7 días; Kuehne+Nagel, 3 nov." },
    { indicador: "Fujairah · espera", valor: "8.86 días", tendencia: "Promedio 7 días; Kuehne+Nagel, 3 nov." },
    { indicador: "LA/LB · fecha límite", valor: "4 nov.", tendencia: "17:00 PT (19:00 Monterrey); paro no confirmado." }
  ],
  recomendaciones: [
    "Medio Oriente: verificar recargos, seguros, restricciones por carga y puertos alternativos; no asumir que todo embarque Asia–México cruza Hormuz.",
    "Estados Unidos: revisar hoy a las 17:00 PT el estado laboral LA/Long Beach y proteger embarques con conexión intermodal en esos puertos.",
    "China: reconfirmar cut-off y ETA desde Ningbo y Shanghái; prever pérdida de conexiones posteriores al tifón.",
    "India: acordar con proveedores y transportistas horarios alrededor de Diwali del 8 de noviembre y revisar transbordos por Colombo.",
    "Europa: validar ventanas en Génova, London Gateway, Hamburgo y Bremerhaven; monitorear huelgas específicas, sin asumir cierre europeo.",
    "Brasil: priorizar visibilidad de despachos y disponibilidad de equipos en Santos; no reportar huelga aduanal nacional sin confirmación.",
    "México: confirmar rutas carreteras y requisitos de MVE por régimen; no presentar las protestas del 26 de octubre como bloqueo activo hoy.",
    "Tarifas: comparar cotizaciones por corredor y recargos; el WCI global cayó 3% pese a subidas puntuales en Asia–Europa."
  ]
};

const retrasos = [
  { puerto: "Emiratos · Fujairah", tiempo: "8.86 días · 3 nov.", estado: "Congestión crítica; restricciones para carga especial y transferencias interiores." },
  { puerto: "Emiratos · Khor Fakkan", tiempo: "7.25 días · 3 nov.", estado: "Altos tiempos de espera; validar conexiones vía puentes terrestres." },
  { puerto: "China · Ningbo", tiempo: "2.23 días · 3 nov.", estado: "Acumulación de buques tras cierre por tifón; ciertas terminales con esperas superiores." },
  { puerto: "China · Shanghái", tiempo: "2.12 días · 3 nov.", estado: "Operaciones restablecidas, pero persisten demoras y densidad en patios." },
  { puerto: "India · Nhava Sheva", tiempo: "2.25 días · 3 nov.", estado: "Congestión en gate y transporte terrestre; revisar conexión feeder." },
  { puerto: "Brasil · Santos", tiempo: "1.93 días · 3 nov.", estado: "Alta actividad agrícola, presión sobre camiones y equipos reefer." },
  { puerto: "Alemania · Hamburgo", tiempo: "1.77 días · 3 nov.", estado: "Niebla, mantenimiento y ocupación de patios cercana al 85%." },
  { puerto: "Reino Unido · London Gateway", tiempo: "1.75 días · 3 nov.", estado: "Alta densidad y omisiones de escalas; restricciones hasta diciembre." },
  { puerto: "Italia · Génova", tiempo: "4–5 nov. · restricciones", estado: "Restricciones de tráfico en Sampierdarena entre 09:00 y 13:00." },
  { puerto: "EE. UU. · LA/Long Beach", tiempo: "4 nov. · 17:00 PT", estado: "Vence prórroga de negociación ILWU Local 26; no hay paro confirmado." }
];

// Corte editorial: 4 nov. 2026. Estadísticas portuarias: Kuehne+Nagel 3 nov.; tarifas: Drewry 29 oct.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 4 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 4 de noviembre de 2026. Fuentes: Drewry (29 oct.), Kuehne+Nagel (3 nov.), Forto (3 nov.), STG, ICIS, Alba, Segob y SAT/ANAM. Cifras portuarias y tarifas correspondientes a su fecha de reporte; no son mediciones en tiempo real. Confirmar cambios con naviera, terminal y agente aduanal.</span>
        </div>
      </footer>
    </main>
  );
}
