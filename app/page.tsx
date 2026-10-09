import Image from "next/image";

// ======================================================
// EDITAR AQUÍ CADA DÍA
// ======================================================

const brief = {
  fecha: "9 de octubre de 2026",
  titulo: "Vector Global Logistics | Radar Logístico Global",
  subtitulo: "Retrasos portuarios, cierres por condiciones meteorológicas y riesgos de transporte. Referencias operativas del 9 de octubre; confirmar cada ETA con la terminal y la naviera.",
  noticias: [
    {
      region: "MÉXICO", modo: "MARÍTIMO Y TERRESTRE",
      imagen: "https://cdn.star.nesdis.noaa.gov/FLOATER/EP202026/GEOCOLOR/20262810430_GOES19-ABI-FL-GEOCOLOR-EP202026-1000x1000.jpg",
      bandera: "https://flagcdn.com/w40/mx.png",
      titular: "Lázaro Cárdenas: cierre a la navegación por Simón",
      dato: "El cierre a la navegación en Lázaro Cárdenas por las condiciones asociadas a Simón altera la programación de buques y la coordinación de embarques en el Pacífico mexicano. En Manzanillo también es importante revisar las condiciones de operación de terminal y navegación.",
      impacto: "Reprogramación potencial de escalas, retiros y entregas; la duración del retraso dependerá de la reapertura y de la recuperación operativa.",
      accion: "Confirmar avisos de Capitanía de Puerto, estado de terminal, itinerario de la naviera y nuevas ETA antes de comprometer entregas.",
    },
    {
      region: "CHINA", modo: "MARÍTIMO",
      imagen: "https://unsplash.com/photos/tWd8h1Ad9G0/download?force=true&w=1200",
      bandera: "https://flagcdn.com/w40/cn.png",
      titular: "Shanghái y Ningbo mantienen presión por congestión",
      dato: "La congestión en Shanghái y Ningbo continúa presionando las operaciones marítimas en China. La disponibilidad de atraque y las restricciones en patios pueden afectar la secuencia de operaciones y la salida de mercancías.",
      impacto: "Riesgo de salidas reprogramadas, conexiones perdidas y ventanas de carga más ajustadas.",
      accion: "Confirmar atraque, cut-off, espacio disponible y alternativas para embarques críticos.",
    },
    {
      region: "ESTADOS UNIDOS", modo: "PORTUARIO Y AÉREO",
      imagen: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
      bandera: "https://flagcdn.com/w40/us.png",
      titular: "Isaías afecta la planificación de puertos y vuelos",
      dato: "Las condiciones meteorológicas asociadas a Isaías han motivado restricciones y previsiones de suspensión de operaciones en puertos y aeropuertos de la costa estadounidense del golfo de México. La recuperación dependerá de los avisos oficiales y de las inspecciones posteriores.",
      impacto: "Las restricciones e inspecciones posteriores pueden afectar vuelos, buques y transporte terrestre. No hay estimación fiable de horas de retraso total.",
      accion: "Confirmar con autoridades, aerolíneas, terminales y transportistas el estatus actual y la reprogramación.",
    },
  ],
  vigilancia: [
    { titulo: "Europa | Rotterdam y Amberes", bandera: "https://flagcdn.com/w40/eu.png", texto: "Rotterdam: 1.39 días de espera de buques, con 12–24 horas adicionales para barcazas y feeders. Amberes: 1.37 días y demoras de barcazas cercanas a 24 horas. Referencias reportadas, no lecturas en vivo." },
    { titulo: "Europa | Bremerhaven y Hamburgo", bandera: "https://flagcdn.com/w40/de.png", texto: "Bremerhaven: 1.08 días de espera y ocupación de patio reportada del 92%. Hamburgo: 1.14 días de espera de buques. Validar disponibilidad y citas antes de programar retiro." },
    { titulo: "Brasil | Navegantes, Itajaí y Manaus", bandera: "https://flagcdn.com/w40/br.png", texto: "Navegantes: 5.0 días; Itajaí: 2.0 días; Manaus: 1.0 día, según las referencias compartidas. La temporada seca del Amazonas podría añadir restricciones de navegación más adelante." },
    { titulo: "India / conexión por Colombo", bandera: "https://flagcdn.com/w40/lk.png", texto: "Colombo había reportado demoras de atraque de hasta 24–36 horas para buques con ventana confirmada. Es un dato anterior, NO una lectura en vivo del 9 de octubre." },
    { titulo: "Aéreo | Florida", bandera: "https://flagcdn.com/w40/us.png", texto: "Los 441 vuelos demorados fueron reportados el 7 de octubre hasta las 2:30 p. m. No utilizar esta cifra como acumulado del 9 de octubre. Confirmar estatus de aeropuertos y aerolíneas." },
  ],
  metricas: [
    { indicador: "Lázaro Cárdenas", valor: "3.4–3.5 días", tendencia: "Antes del cierre; demora actual sin cuantificar" },
    { indicador: "Manzanillo", valor: "1.4 días", tendencia: "Referencia previa a restricciones" },
    { indicador: "Shanghái", valor: "3.51 días", tendencia: "Algunas terminales superan 7 días" },
    { indicador: "Ningbo", valor: "2.37 días", tendencia: "Restricciones de patio y atraque" },
    { indicador: "Navegantes", valor: "5.0 días", tendencia: "Congestión elevada reportada" },
    { indicador: "Rotterdam", valor: "1.39 días", tendencia: "Barcazas/feeders: +12–24 h" },
    { indicador: "Amberes", valor: "1.37 días", tendencia: "Barcazas: alrededor de +24 h" },
    { indicador: "Bremerhaven", valor: "1.08 días", tendencia: "Patio al 92% reportado" },
    { indicador: "Hamburgo", valor: "1.14 días", tendencia: "Espera de buques" },
    { indicador: "Itajaí", valor: "2.0 días", tendencia: "Referencia reportada" },
    { indicador: "Manaus", valor: "1.0 día", tendencia: "Vigilar temporada seca" },
  ],
  recomendaciones: [
    "México: tratar las esperas previas a Simón solo como referencia y confirmar reapertura, itinerario y ETA con la naviera.",
    "Europa: contemplar las demoras adicionales de barcazas y feeders al planificar conexiones, retiros y entregas.",
    "Asia y Brasil: validar ventanas de atraque, disponibilidad de patio y reservas antes de confirmar compromisos comerciales.",
    "EE. UU. y Colombo: diferenciar cifras históricas de estatus actual; no convertir retrasos sin estimación pública en ETAs garantizadas.",
  ],
};

// Referencias proporcionadas para este corte: FreshPlaza (congestión portuaria);
// PNJ (retrasos de vuelos en Florida); Daily Mirror (Colombo).
// Las cifras son indicativas y no representan monitoreo en vivo.

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

      {/* PRINCIPALES DESARROLLOS */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            PRINCIPALES DESARROLLOS
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
                  alt={item.titular}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-7">
                <div className="mb-7 flex items-start justify-between gap-4">
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

                <p className="mt-5 leading-7 text-gray-600">{item.dato}</p>

                <div className="mt-7 border-t border-gray-200 pt-6">
                  <p className="text-xs font-bold tracking-[0.14em] text-[#003C6F]">
                    IMPACTO POTENCIAL
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {item.impacto}
                  </p>
                </div>

                <div className="mt-5 rounded-xl bg-[#F3F5F7] p-4">
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
            Otros riesgos en el radar
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {brief.vigilancia.map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="flex items-center gap-2 font-bold text-[#003C6F]">
                  {"bandera" in item && item.bandera ? (
                    <img
                      src={item.bandera}
                      alt=""
                      className="h-3.5 w-5 rounded-[2px] object-cover shadow-sm"
                    />
                  ) : null}
                  <span>{item.titulo}</span>
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTRICAS CLAVE */}
      <section className="bg-[#F3F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            MÉTRICAS CLAVE
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#003C6F]">
            Señales a seguir hoy
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
              href="https://vectorgl.com"
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
            Información elaborada con base en fuentes especializadas de
            logística, transporte y comercio internacional.
          </span>
        </div>
      </footer>
    </main>
  );
}
