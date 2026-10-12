import Image from "next/image";

// ======================================================
// EDITAR AQUÍ CADA DÍA
// ======================================================

const brief = {
  "fecha": "lunes 12 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Riesgo alto en el Pacífico mexicano por el huracán Simón. Recuperación tras Isaías en EE. UU., afectaciones ferroviarias en Bélgica y ajustes por feriados en Brasil y Estados Unidos. Confirmar operaciones, citas y rutas antes de comprometer fechas de entrega.",
  "noticias": [
    {
      "region": "MÉXICO",
      "modo": "PUERTOS · AEROPUERTOS · CARRETERAS",
      "imagen": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hurricane_Melissa_at_landfall_true_color.png",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Simón eleva el riesgo logístico en el Pacífico mexicano",
      "dato": "El huracán Simón mantiene lluvias extremas, inundaciones y riesgo de deslaves en la costa occidental, especialmente Jalisco, Colima y Michoacán. Se reportan restricciones portuarias en Manzanillo y Lázaro Cárdenas y suspensiones aeroportuarias en Puerto Vallarta y Manzanillo. Los horarios de reapertura requieren verificación directa.",
      "impacto": "Posibles suspensiones de navegación, reprogramación de buques y citas, cancelaciones aéreas y demoras terrestres. Un cierre de navegación no implica necesariamente cierre idéntico de todas las terminales.",
      "accion": "Confirmar por separado navegación, atraque, recepción de carga, patios, acceso vial y NOTAM de PVR/ZLO antes de prometer fechas."
    },
    {
      "region": "ESTADOS UNIDOS",
      "modo": "CARRETERAS · PUERTOS · FERIADO",
      "imagen": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Columbus_citizens_foundation_2019_parade_jeh.jpg",
      "bandera": "https://flagcdn.com/w40/us.png",
      "titular": "Recuperación tras Isaías y ajustes por Columbus Day",
      "dato": "Tras el paso de Isaías por el noroeste de Florida, persisten riesgos locales de inundación, caída de árboles y cortes eléctricos. El lunes 12 también es Columbus Day; algunas terminales portuarias modifican sus horarios de puerta para camiones, incluida Virginia.",
      "impacto": "Los cierres parciales y las rutas dañadas pueden generar desvíos, entregas tardías y cambios de citas incluso cuando un puerto principal reabre.",
      "accion": "Confirmar estatus de puertos del Golfo, accesos en Florida y Alabama, horarios de terminales y disponibilidad de transporte local."
    },
    {
      "region": "ASIA",
      "modo": "CONGESTIÓN · CAPACIDAD",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "titular": "Post–Golden Week: revisar conexiones, espacio y tarifa",
      "dato": "Los reportes para Shanghai presentan mediciones distintas: 0.6 días de mediana en un indicador frente a 7–10 días en terminales o rutas afectadas. Ningbo registra referencias de 2–4 días. Los blank sailings y la congestión pueden reducir espacio disponible.",
      "impacto": "Mayor incertidumbre en las fechas de salida, transbordo y entrega; el retraso en una terminal no representa el promedio de todo el puerto.",
      "accion": "Reconfirmar booking, cut-off, equipo, terminal, transbordo y tarifa por ruta; no usar referencias de mercado como cotización garantizada."
    }
  ],
  "vigilancia": [
    {
      "titulo": "Europa | Bélgica y conexiones ferroviarias",
      "bandera": "https://flagcdn.com/w40/be.png",
      "texto": "El paro nacional del sector público afecta trenes y transporte urbano hoy; Eurostar anunció cancelaciones seleccionadas hacia/desde Bruselas. Los trabajos ferroviarios en Rheintalbahn pueden añadir restricciones. Verificar la conexión intermodal; no asumir cierre portuario general."
    },
    {
      "titulo": "Europa | Tarifa Asia–Norte de Europa",
      "bandera": "https://flagcdn.com/w40/eu.png",
      "texto": "MSC anunció tarifas FAK desde el 19 de octubre: US$3,150 por 20 pies y US$4,500 por 40 pies, sujetas a condiciones y cargos adicionales. Solicitar cotización vigente antes del booking."
    },
    {
      "titulo": "Brasil | Nossa Senhora Aparecida",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Feriado nacional este 12 de octubre: posibles cierres bancarios, menor capacidad administrativa y cambios de horario en transporte. No hay cierre portuario nacional confirmado. Maersk anunció ajustes OHC/DHC desde el 1 de noviembre, no desde hoy."
    },
    {
      "titulo": "India | Mundra y Dussehra",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "La disputa previa en patios de vacíos de Mundra concluyó, pero cada retiro y cita depende de equipo y depot. El calendario de Nhava Sheva señala Dussehra el 20 de octubre. Comprobar conexiones vía Colombo y recargos aplicables."
    },
    {
      "titulo": "Aeropuertos | Puerto Vallarta y Manzanillo",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Se reportaron suspensiones relacionadas con Simón. Los horarios de cierre o reapertura publicados pueden variar: verificar NOTAM, aerolínea y confirmación de aceptación de carga antes de movilizar embarques."
    }
  ],
  "metricas": [
    {
      "indicador": "Manzanillo, MX",
      "valor": "Sin estimación",
      "tendencia": "Demoras asociadas a Simón: confirmar terminal y cita"
    },
    {
      "indicador": "Lázaro Cárdenas, MX",
      "valor": "Sin estimación",
      "tendencia": "Restricción a navegación; validar operación"
    },
    {
      "indicador": "Shanghai, CN",
      "valor": "0.6 d / 7–10 d",
      "tendencia": "Mediana general vs. reportes de terminales afectadas"
    },
    {
      "indicador": "Ningbo, CN",
      "valor": "2–4 días",
      "tendencia": "Referencia por terminal tras Golden Week"
    },
    {
      "indicador": "Rotterdam, NL",
      "valor": "43 horas",
      "tendencia": "Espera de barcazas; buques: mediana 0.08 días"
    },
    {
      "indicador": "Amberes, BE",
      "valor": "44 horas",
      "tendencia": "Espera de barcazas / conexión interior"
    },
    {
      "indicador": "Navegantes, BR",
      "valor": "≈5 días",
      "tendencia": "Promedio móvil 30 sep.–6 oct., no dato en vivo"
    },
    {
      "indicador": "Mundra, IN",
      "valor": "≈1 hora",
      "tendencia": "Fondeo de buques; no incluye patio ni aduana"
    }
  ],
  "recomendaciones": [
    "Prioridad máxima: confirmar cierres, aceptación de carga y nuevas citas en Manzanillo, Lázaro Cárdenas y aeropuertos PVR/ZLO.",
    "Revalidar rutas terrestres del Pacífico mexicano y del Golfo estadounidense; no asumir tiempos habituales tras Simón e Isaías.",
    "Considerar Columbus Day en EE. UU., el feriado brasileño y las afectaciones ferroviarias en Bélgica al programar conexiones.",
    "Reconfirmar tarifas y espacios Asia–Europa para salidas desde el 19 de octubre; verificar cargos de Brasil previstos desde el 1 de noviembre."
  ]
};

const retrasos = [
  {
    "puerto": "México · Manzanillo",
    "tiempo": "Sin estimación confirmada",
    "estado": "Citas y operación afectadas por Simón; validar terminal/naviera."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Sin estimación confirmada",
    "estado": "Cierre a navegación reportado; verificar actualización oficial."
  },
  {
    "puerto": "China · Shanghai",
    "tiempo": "0.6 días mediana; 7–10 días en áreas afectadas",
    "estado": "Fuentes y metodologías distintas; rango alto no es promedio del puerto."
  },
  {
    "puerto": "China · Ningbo",
    "tiempo": "2–4 días",
    "estado": "Depende de terminal y atraque específico."
  },
  {
    "puerto": "Países Bajos · Rotterdam",
    "tiempo": "0.08 días buques; 43 h barcazas",
    "estado": "Modalidades distintas; no comparar directamente."
  },
  {
    "puerto": "Bélgica · Amberes",
    "tiempo": "44 horas (barcazas)",
    "estado": "Puede afectar conexiones con el interior."
  },
  {
    "puerto": "Brasil · Navegantes",
    "tiempo": "≈5 días",
    "estado": "Referencia 30 sep.–6 oct.; no es medición en vivo."
  },
  {
    "puerto": "India · Mundra",
    "tiempo": "≈1 hora (fondeo)",
    "estado": "No incluye disponibilidad de vacíos, citas ni aduana."
  }
];

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
                  alt={item.region === "MÉXICO" ? "Imagen satelital ilustrativa de un huracán (no corresponde a Simón)" : item.region === "ESTADOS UNIDOS" ? "Desfile de Columbus Day de 2019, imagen ilustrativa" : item.titular}
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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">RETRASOS PORTUARIOS · 12 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Tiempos de espera reportados</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">Referencias recientes de buques o conexiones, no demora asegurada de cada contenedor. Los puertos afectados por Simón carecen de una estimación confiable mientras duren las suspensiones.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Tiempo reportado</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 12 de octubre de 2026. Fuentes: Reuters, AP y referencias sectoriales facilitadas; cifras sujetas a confirmación directa con autoridades, terminales y navieras.
          </span>
        </div>
      </footer>
    </main>
  );
}
