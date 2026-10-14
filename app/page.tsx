import Image from "next/image";

// ======================================================
// EDITAR AQUÍ CADA DÍA
// ======================================================

const brief = {
  "fecha": "miércoles 14 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Actualización 14 de octubre: mayor presión de capacidad en cruces México–EE. UU., vigilancia por Trudy y Simón en el Pacífico mexicano, ataques contra navegación cerca de Ormuz y riesgos en el Mar Negro. En Panamá, el Canal sigue operativo; verificar restricciones regionales antes de confirmar itinerarios.",
  "noticias": [
    {
      "region": "MÉXICO–EE. UU.",
      "modo": "ALTO · CRUCE FRONTERIZO",
      "imagen": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Visas B-1: presión sobre capacidad transfronteriza",
      "dato": "FreightWaves (13 oct.) reporta alrededor de 25,000 visas B-1 revocadas a transportistas mexicanos. Tarifas spot interanuales: San Diego–Phoenix +57%, Laredo–Dallas +43% y Laredo–Chicago +35%. Fuente: FreightWaves, 13 oct. 2026.",
      "impacto": "Menor disponibilidad de operadores, más rechazos de cargas y mayores costos en corredores México–Estados Unidos.",
      "accion": "Verificar vigencia de documentos del operador, capacidad confirmada, cruce y ruta; reservar margen de tiempo y actualizar tarifas antes de cotizar."
    },
    {
      "region": "MÉXICO",
      "modo": "ALTO · CICLÓN TROPICAL",
      "imagen": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hurricane_Melissa_at_landfall_true_color.png",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Trudy: nuevo riesgo para el Pacífico mexicano",
      "dato": "El NHC informó el 14 oct. a las 09:00 CST que Trudy tenía vientos de 60 mph (95 km/h), estaba a unos 600 km al sur de Acapulco y podría convertirse en huracán esta noche. No había alertas costeras vigentes en ese boletín. Imagen ilustrativa de un ciclón, no de Trudy. Fuente: NHC, aviso 5.",
      "impacto": "Posibles alteraciones posteriores por oleaje, lluvias o viento en puertos, carreteras costeras y conexiones aéreas; la intensidad y el acercamiento aún están sujetos al pronóstico.",
      "accion": "Dar seguimiento al NHC, SMN y capitanías; reconfirmar Manzanillo, Lázaro Cárdenas, Acapulco y Puerto Vallarta por separado. Planear contingencias sin anunciar cierres aún no confirmados."
    },
    {
      "region": "PANAMÁ",
      "modo": "ALTO · INFRAESTRUCTURA PORTUARIA",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "https://flagcdn.com/w40/pa.png",
      "titular": "Sismo de 7.7: Canal operativo, vigilancia en puertos",
      "dato": "El terremoto del 9 de octubre ocasionó daños e inspecciones de infraestructura. Reuters y AP reportaron que el Canal de Panamá permaneció operativo. Se reportan restricciones de actividad en puertos estatales regionales, que deben confirmarse con la Autoridad Marítima antes de gestionar cargas.",
      "impacto": "Posibles demoras locales, inspecciones y cambios en autorizaciones portuarias. No existe un cierre general del Canal confirmado por las fuentes consultadas.",
      "accion": "Consultar la Autoridad del Canal y la Autoridad Marítima; verificar terminal y reserva específica. No extender restricciones de puertos regionales a Balboa o Cristóbal sin aviso oficial."
    },
    {
      "region": "MEDIO ORIENTE",
      "modo": "ALTO · SEGURIDAD MARÍTIMA",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/om.png",
      "titular": "Ormuz: ataques a buques presionan rutas y costos",
      "dato": "Financial Times informó el 13 de octubre de una intensificación de ataques contra buques en el estrecho de Ormuz: 24 embarcaciones atacadas durante las dos semanas anteriores al 11 de octubre. Los desvíos y transbordos están incrementando la demanda de buques tanque. Fuente: Financial Times, 13 oct. 2026.",
      "impacto": "Riesgo para tránsitos, seguridad de tripulaciones, costos de flete y disponibilidad de buques; impactos distintos según carga y corredor.",
      "accion": "Confirmar itinerario, exposición a zona de riesgo, condiciones de seguro y alternativas con naviera antes de comprometer plazos."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Simón se debilita, pero persiste vigilancia",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "El NHC informó el 14 de octubre a las 08:00 MST que Simón bajó a 90 mph y se desplazaba lentamente al suroeste frente a Cabo Corrientes. Revisar avisos para operaciones portuarias y enlaces terrestres del occidente mexicano; no asumir cierres generalizados."
    },
    {
      "titulo": "Mar Negro | Ataques a buques cerca de Bulgaria",
      "bandera": "https://flagcdn.com/w40/bg.png",
      "texto": "Reuters reportó el 13 de octubre que un ataque con drones hundió un buque mercante cerca de Krapets, Bulgaria, y que otra nave también resultó afectada. Verificar escalas, restricciones, cobertura de seguro y seguridad de la ruta antes de embarcar."
    }
  ],
  "metricas": [
    {
      "indicador": "México–EE. UU. · Visas B-1",
      "valor": "~25,000",
      "tendencia": "Revocaciones reportadas por FreightWaves"
    },
    {
      "indicador": "San Diego–Phoenix",
      "valor": "+57%",
      "tendencia": "Tarifa spot interanual reportada"
    },
    {
      "indicador": "Laredo–Dallas",
      "valor": "+43%",
      "tendencia": "Tarifa spot interanual reportada"
    },
    {
      "indicador": "Laredo–Chicago",
      "valor": "+35%",
      "tendencia": "Tarifa spot interanual reportada"
    },
    {
      "indicador": "Trudy · 14 oct., 09:00 CST",
      "valor": "60 mph",
      "tendencia": "Vientos sostenidos; NHC aviso 5"
    },
    {
      "indicador": "Panamá · Sismo 9 oct.",
      "valor": "M 7.7",
      "tendencia": "Canal operativo según Reuters/AP"
    },
    {
      "indicador": "Canal de Panamá",
      "valor": "Operativo",
      "tendencia": "Verificar reservas y avisos de ACP"
    },
    {
      "indicador": "Simón · 14 oct.",
      "valor": "90 mph",
      "tendencia": "Vientos sostenidos a las 08:00 MST, NHC"
    },
    {
      "indicador": "Ormuz · Ataques a buques",
      "valor": "24",
      "tendencia": "En dos semanas al 11 oct.; Financial Times"
    }
  ],
  "recomendaciones": [
    "Priorizar documentación del operador y capacidad real en cruces México–EE. UU.; revisar tarifas de los corredores afectados.",
    "Seguir boletines del NHC para Trudy y Simón. Confirmar operación de terminales, carreteras y vuelos sin presuponer cierres.",
    "Consultar seguridad marítima y seguros antes de programar cargas expuestas a Ormuz o al Mar Negro; evaluar rutas alternativas.",
    "En Panamá, confirmar autorizaciones específicas de puertos regionales y reservas de tránsito del Canal, que permanece operativo según los reportes disponibles."
  ]
};

const retrasos = [
  {
    "puerto": "México · Manzanillo",
    "tiempo": "Por confirmar",
    "estado": "Vigilancia por Trudy y condiciones previas; consultar capitanía y terminal."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Por confirmar",
    "estado": "Consultar estado operativo y pronóstico antes de reservar citas."
  },
  {
    "puerto": "México · Acapulco",
    "tiempo": "Por confirmar",
    "estado": "Monitorear trayectoria de Trudy; sin afirmar cierre."
  },
  {
    "puerto": "Panamá · Canal",
    "tiempo": "Operativo",
    "estado": "Reuters/AP no reportan suspensión por sismo; confirmar tránsito reservado."
  },
  {
    "puerto": "Panamá · Puertos regionales",
    "tiempo": "Restricciones por validar",
    "estado": "Consultar AMP para Puerto Mutis, Búcaro, El Agallito y Almirante."
  },
  {
    "puerto": "Panamá · Balboa/Cristóbal",
    "tiempo": "Sin cierre confirmado",
    "estado": "Verificar avisos oficiales y operativa de terminal."
  },
  {
    "puerto": "Europa · Rin",
    "tiempo": "Variable",
    "estado": "Confirmar calado y carga posible en tramo específico."
  }
];

// Fuentes: FreightWaves (13 oct.), NHC aviso 5 (14 oct.), Reuters y AP (9 oct.).
// Las condiciones operativas varían y deben verificarse con fuentes oficiales.

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
                  alt={item.titular + " · imagen ilustrativa"}
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

      {/* TABLA DE RETRASOS PORTUARIOS */}
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">RETRASOS PORTUARIOS · 14 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado operativo y demoras por verificar</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Tiempo reportado</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 14 de octubre de 2026. Fuentes: FreightWaves, NHC, Reuters, AP y Financial Times. Pronósticos y restricciones sujetos a cambios y a confirmación con autoridades, terminales, aerolíneas y navieras.</span>
        </div>
      </footer>
    </main>
  );
}
