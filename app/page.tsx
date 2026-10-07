import Image from "next/image";

// ======================================================
// EDITAR AQUÍ CADA DÍA
// ======================================================

const brief = {
  fecha: "7 de octubre de 2026",

  titulo: "Vector Global Logistics | Radar Logístico Global",

  subtitulo:
    "Las principales disrupciones, riesgos y movimientos de mercado que los equipos de cadena de suministro deben conocer hoy, junto con acciones para anticiparse a posibles impactos.",

  noticias: [
    {
      region: "CHINA",
      modo: "MARÍTIMO Y AÉREO",
      imagen: "https://unsplash.com/photos/tWd8h1Ad9G0/download?force=true&w=1200",
      bandera: "https://flagcdn.com/w40/cn.png",
      titular:
        "Congestión posterior a la Semana Dorada extiende los tiempos desde Asia",
      dato:
        "Los cierres por la Semana Dorada, las afectaciones climáticas y la congestión portuaria continúan impactando Shanghái, Ningbo y Yantian, con esperas reportadas superiores a cinco días en algunos puntos.",
      impacto:
        "Los retrasos originados en Asia podrían trasladarse a las cadenas de suministro de Norteamérica y Europa durante las próximas semanas.",
      accion:
        "Considerar entre 7 y 14 días adicionales de flexibilidad para embarques críticos desde Asia y confirmar espacio con anticipación.",
    },
    {
      region: "INDIA",
      modo: "TRANSPORTE MARÍTIMO",
      imagen: "https://unsplash.com/photos/RoLHfV_R5bI/download?force=true&w=1200",
      bandera: "https://flagcdn.com/w40/in.png",
      titular:
        "Persisten riesgos de capacidad y conexiones desde India",
      dato:
        "Los efectos residuales posteriores a las disrupciones en Mundra continúan afectando el flujo de contenedores, mientras las cancelaciones de salidas mantienen presión sobre la capacidad disponible.",
      impacto:
        "La carga con origen en India podría enfrentar mayor riesgo de conexiones perdidas, reprogramaciones y tiempos de tránsito extendidos.",
      accion:
        "Confirmar reservas con anticipación y monitorear de cerca las conexiones de transbordo.",
    },
    {
      region: "EUROPA",
      modo: "MARÍTIMO Y TERRESTRE",
      imagen: "https://unsplash.com/photos/Iw5qETjoQto/download?force=true&w=1200",
      bandera: "https://flagcdn.com/w40/eu.png",
      titular:
        "Los bajos niveles del Rin presionan el transporte interior",
      dato:
        "Los niveles extremadamente bajos del río Rin están limitando las operaciones de barcazas en Alemania, mientras los puertos del norte de Europa continúan enfrentando presión operativa.",
      impacto:
        "La reducción de capacidad interior puede generar mayores costos y extender los tiempos de entrega.",
      accion:
        "Evaluar alternativas ferroviarias y terrestres para carga sensible al tiempo.",
    },
  ],

  vigilancia: [
    {
      titulo: "Estados Unidos",
      bandera: "https://flagcdn.com/w40/us.png",
      texto:
        "Los retrasos provenientes de Asia podrían traducirse en llegadas tardías a puertos de Estados Unidos, mientras la capacidad oceánica continúa bajo presión en rutas clave.",
    },
    {
      titulo: "México",
      bandera: "https://flagcdn.com/w40/mx.png",
      texto:
        "Actualmente no se reportan huelgas portuarias activas de gran escala, pero los principales puertos del Pacífico deben mantenerse bajo monitoreo ante posibles episodios de congestión.",
    },
    {
      titulo: "España | 28 oct – 2 nov",
      texto:
        "Una acción laboral prevista en Guadalajara podría generar afectaciones en distribución y movimientos interiores en el centro de España.",
    },
    {
      titulo: "Golfo de México",
      texto:
        "La temporada de huracanes permanece activa durante noviembre, manteniendo el riesgo de cierres temporales de puertos y afectaciones al transporte terrestre.",
    },
  ],

  recomendaciones: [
    "Considerar entre 7 y 14 días adicionales de flexibilidad para embarques críticos desde Asia.",
    "Monitorear Shanghái, Ningbo, Yantian y los principales puertos del norte de Europa.",
    "Evaluar rutas alternativas cuando exista exposición al Canal de Panamá, Mar Rojo u otras zonas de disrupción.",
    "Comunicar de manera proactiva posibles retrasos de Q4 a clientes y equipos internos.",
  ],
};

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
                      <img
                        src={item.bandera}
                        alt=""
                        className="h-3 w-5 rounded-[2px] object-cover shadow-sm"
                      />
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
