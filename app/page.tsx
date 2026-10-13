import Image from "next/image";

// ======================================================
// EDITAR AQUÍ CADA DÍA
// ======================================================

const brief = {
  "fecha": "martes 13 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Prioridad alta: Simón mantiene riesgos para la carga del Pacífico mexicano, las afectaciones aéreas en Medio Oriente requieren revisar conexiones y los ajustes de tarifas para carga refrigerada en Brasil pueden modificar costos. Reconfirmar operaciones y cotizaciones antes de comprometer fechas.",
  "noticias": [
    {
      "region": "MÉXICO",
      "modo": "ALTO · CLIMA Y PUERTOS",
      "imagen": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hurricane_Melissa_at_landfall_true_color.png",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Simón: riesgo para el Pacífico mexicano",
      "dato": "Continúan las afectaciones por lluvia, oleaje e inundaciones en el Pacífico mexicano. Se han comunicado cierres preventivos y afectaciones en el entorno de Manzanillo, Lázaro Cárdenas y Puerto Vallarta; cada puerto y terminal requiere confirmación actualizada. Fuentes: Servicio Meteorológico Nacional, AP y Reuters.",
      "impacto": "Posibles restricciones de navegación, demoras en atraques, citas, carga terrestre y vuelos.",
      "accion": "Verificar estatus oficial de puerto, terminal, naviera, carreteras y cada vuelo antes de confirmar fechas; considerar holgura de 1–2 días según ruta."
    },
    {
      "region": "MEDIO ORIENTE",
      "modo": "ALTO · TRANSPORTE AÉREO",
      "imagen": "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200",
      "bandera": "https://flagcdn.com/w40/sa.png",
      "titular": "Restricciones aéreas en Medio Oriente: revisar conexiones por Riad",
      "dato": "Los ataques recientes generaron el cierre del aeropuerto internacional Rey Khalid en Riad hasta al menos el 17 de octubre y cancelaciones de varias aerolíneas. Fuente: Reuters, 12 de octubre de 2026.",
      "impacto": "Menor capacidad aérea, desvíos, cancelaciones y riesgos para conexiones regionales.",
      "accion": "Reconfirmar itinerarios y disponibilidad vuelo por vuelo; valorar hubs alternativos y coberturas de seguro."
    },
    {
      "region": "BRASIL",
      "modo": "MEDIO · TARIFAS Y CARGA REFRIGERADA",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "https://flagcdn.com/w40/br.png",
      "titular": "Brasil: ajustes de tarifas para contenedores refrigerados",
      "dato": "Se reportan incrementos indicativos de US$300–600 por contenedor reefer brasileño, según ruta y destino, y ajustes de cargos OHC/DHC de Maersk a partir del 1 de noviembre. Los montos dependen de naviera, contrato y vigencia.",
      "impacto": "Posibles aumentos del costo logístico para exportadores e importadores de carga refrigerada y necesidad de revisar vigencias de tarifas.",
      "accion": "Solicitar cotización actualizada, confirmar cargos locales y vigencia antes de cerrar precios o reservar espacio."
    }
  ],
  "vigilancia": [
    {
      "titulo": "Asia | Congestión y transbordos",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Reportes puntuales señalan demoras de hasta 10 días en rutas o terminales afectadas tras Golden Week; reconfirmar conexiones, booking y cut-offs. No equivale al promedio de todos los puertos."
    },
    {
      "titulo": "Bélgica | Amberes: huelga pendiente de confirmar",
      "bandera": "https://flagcdn.com/w40/be.png",
      "texto": "El horario difundido 13 oct. 19:30–15 oct. 07:30 aparece vinculado a información del año anterior; NO hay confirmación suficiente de cierre para 2026. Verificar con puerto, naviera y agentes antes de anunciar bloqueos o desvíos."
    },
    {
      "titulo": "Europa | Caudal bajo en el Rin",
      "bandera": "https://flagcdn.com/w40/de.png",
      "texto": "Las restricciones por caudal pueden limitar carga de barcazas en determinados tramos. Verificar calado, capacidad y alternativas ferroviarias o terrestres."
    },
    {
      "titulo": "EE. UU. | Recuperación del Golfo",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Persisten consecuencias del huracán Isaías en Florida y Alabama. Validar cada terminal, canal, horario de cita y acceso terrestre; no asumir que todos los puertos tienen la misma situación."
    },
    {
      "titulo": "Panamá | Presión sobre tránsitos",
      "bandera": "https://flagcdn.com/w40/pa.png",
      "texto": "Los tiempos de espera pueden variar por tipo de buque y reserva. Comprobar itinerarios, costos y opciones intermodales antes de añadir una demora generalizada."
    },
    {
      "titulo": "Argentina | Posible afectación laboral marítima",
      "bandera": "https://flagcdn.com/w40/ar.png",
      "texto": "Se reportan medidas laborales de 48 horas; confirmar vigencia, servicio y terminal antes de ajustar rutas por Montevideo o Brasil."
    },
    {
      "titulo": "Bangladesh | Chittagong",
      "bandera": "https://flagcdn.com/w40/bd.png",
      "texto": "Protestas laborales y amenaza de medidas adicionales desde el 19 de octubre. Confirmar actividad de terminal y citas; no tratar la amenaza como huelga total vigente."
    },
    {
      "titulo": "India | Omisiones de escala",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Avisos de omisiones de escala de CMA CGM y congestión de conexiones vía Colombo o Singapur. Validar booking, servicios y cargos; considerar Dussehra alrededor del 19–20 de octubre."
    },
    {
      "titulo": "EE. UU. y Brasil | Recuperación tras feriados",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Tras Columbus Day y Nossa Senhora Aparecida del 12 de octubre, revisar horarios administrativos, citas y documentación."
    }
  ],
  "metricas": [
    {
      "indicador": "México · Simón",
      "valor": "Alto",
      "tendencia": "Verificar navegación, terminales y vuelos"
    },
    {
      "indicador": "Arabia Saudita · Riad",
      "valor": "17 oct.",
      "tendencia": "Cierre reportado hasta al menos esa fecha"
    },
    {
      "indicador": "Asia · Congestión",
      "valor": "Hasta 10 d",
      "tendencia": "Solo rutas/terminales afectadas; cifra indicativa"
    },
    {
      "indicador": "Bélgica · Amberes",
      "valor": "No confirmado",
      "tendencia": "La ventana 13–15 oct. requiere validación 2026"
    },
    {
      "indicador": "Europa · Rin",
      "valor": "Variable",
      "tendencia": "Confirmar calado según tramo"
    },
    {
      "indicador": "EE. UU. · Golfo",
      "valor": "Recuperación",
      "tendencia": "Consultar estado por puerto"
    },
    {
      "indicador": "India · Escalas",
      "valor": "Reconfirmar",
      "tendencia": "Según servicio y conexión"
    },
    {
      "indicador": "Brasil · Reefer",
      "valor": "US$300–600",
      "tendencia": "Rango anunciado; sujeto a cotización"
    }
  ],
  "recomendaciones": [
    "Prioridad 1: validar cierres, navegación, terminales, carreteras y aeropuertos del Pacífico mexicano antes de prometer ETAs.",
    "Prioridad 2: reconfirmar carga aérea vía Medio Oriente, costos de contenedores reefer en Brasil y servicios con transbordo asiático.",
    "No publicar la huelga de Amberes como confirmada para el 13–15 de octubre de 2026 sin aviso oficial actualizado.",
    "Revisar caudal del Rin, puertos del Golfo estadounidense, conexiones por Panamá, condiciones en Argentina e India y aumentos tarifarios en Brasil."
  ]
};

const retrasos = [
  {
    "puerto": "México · Manzanillo",
    "tiempo": "Por confirmar",
    "estado": "Verificar navegación, puerta de terminal y citas después de Simón."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Por confirmar",
    "estado": "Validar capitanía, atraques y apertura de terminal antes de programar."
  },
  {
    "puerto": "China · Shanghai",
    "tiempo": "Hasta 10 días en reportes puntuales",
    "estado": "No es promedio del puerto; validar buque y terminal."
  },
  {
    "puerto": "China · Ningbo",
    "tiempo": "Variable según terminal",
    "estado": "Consultar ETD/ETA y transbordos concretos."
  },
  {
    "puerto": "Bélgica · Amberes",
    "tiempo": "No confirmado",
    "estado": "No afirmar cierre 13–15 oct. 2026 sin comunicado oficial."
  },
  {
    "puerto": "Alemania / Países Bajos · Rin",
    "tiempo": "Variable según calado",
    "estado": "Revisar limitaciones de barcazas y alternativa intermodal."
  },
  {
    "puerto": "India · Escalas",
    "tiempo": "Variable según servicio",
    "estado": "Consultar omisiones, feeders y booking."
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
                  alt={item.region === "MÉXICO" ? "Imagen satelital ilustrativa de un huracán; no corresponde a Simón" : item.region === "ESTADOS UNIDOS" ? "Desfile de Columbus Day de 2019, imagen ilustrativa" : item.titular}
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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">RETRASOS PORTUARIOS · 13 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado operativo y demoras por verificar</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Tiempo reportado</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 13 de octubre de 2026. Fuentes: Reuters, AP, SMN y reportes operativos; cifras indicativas sujetas a confirmación directa con autoridades, terminales, aerolíneas y navieras.</span>
        </div>
      </footer>
    </main>
  );
}
