import Image from "next/image";

// DATOS EDITABLES — 30 OCTUBRE 2026
const brief = {
  "fecha": "viernes 30 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Alerta por huelgas y movilizaciones en 113 puertos de 22 países hoy 30 de octubre. Italia convoca paro de 24 horas; Veracruz y puertos estadounidenses participan con alcance por confirmar. Los Ángeles/Long Beach mantienen una amenaza laboral distinta para el 1 de noviembre, aún en negociación.",
  "noticias": [
    {
      "region": "GLOBAL · HUELGA PORTUARIA",
      "modo": "ALERTA ALTA · 30 OCT",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "",
      "titular": "113 puertos de 22 países participan en jornada de acción portuaria",
      "dato": "Reuters y Port Technology International reportan una movilización coordinada este viernes 30 de octubre que combina huelgas, paros parciales y manifestaciones. Puertos identificados incluyen Le Havre, Marsella, Génova, Gioia Tauro, El Pireo, Valencia, Hamburgo, Tánger y Nhava Sheva/JNPT. Italia registra una huelga portuaria nacional de 24 horas. Participación no equivale a cierre total de los 113 puertos. Fuentes: Reuters y Port Technology International, 30 oct. 2026.",
      "impacto": "Posibles retrasos en carga y descarga, puertas, patios, ferris y conexiones terrestres, según sindicato, terminal y turno.",
      "accion": "Validar el estatus real por terminal y buque, citas de retiro y fechas de conexión; priorizar cargas críticas y alternativas."
    },
    {
      "region": "MÉXICO · VERACRUZ",
      "modo": "RIESGO DE INTERRUPCIONES · 30 OCT",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Veracruz figura en la movilización internacional de estibadores",
      "dato": "La Unión de Estibadores y Jornaleros de Veracruz figura entre los sindicatos participantes de la jornada del 30 de octubre. No se confirmó cierre generalizado de todas las terminales ni de la aduana. Fuente: convocatoria USB/ORSA y reportes World Ports Organization/Kuehne+Nagel, 27–30 oct.",
      "impacto": "Posibles restricciones puntuales de maniobras, ingreso, recepción, retiro de contenedores y citas de transporte terrestre.",
      "accion": "Solicitar confirmación escrita a terminal, agente y transportista antes de despachar; informar al cliente si cambia la ETA."
    },
    {
      "region": "ESTADOS UNIDOS · LA / LONG BEACH",
      "modo": "RIESGO PREVENTIVO · 1 NOV",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/us.png",
      "titular": "Posible huelga del 1 de noviembre en Los Ángeles y Long Beach",
      "dato": "Aproximadamente 250 trabajadores de vigilancia de ILWU Local 26 autorizaron una eventual huelga desde el domingo 1 de noviembre a las 17:00 hora del Pacífico. Negociaciones siguen abiertas y se informa de posibles extensiones del acuerdo. Este conflicto es distinto a las movilizaciones de hoy de ILWU Local 10 en San Francisco/Oakland. Fuentes: STG Logistics (29 oct.), FreightWaves (28 oct.) y WSJ (30 oct.).",
      "impacto": "Si ocurre el paro, podría restringirse el acceso a terminales y retrasarse la operación de buques, patios, ferrocarril y entregas.",
      "accion": "Confirmar terminal y ventanas de gate, monitorear negociación del 1 nov. y anticipar medidas para carga urgente."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Veracruz",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Sindicato de estibadores participa en la movilización del 30 oct. No hay confirmación de cierre total; validar cada terminal, gate y servicio terrestre."
    },
    {
      "titulo": "Estados Unidos | San Francisco y Oakland",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "ILWU Local 10 aparece entre los apoyos a la jornada internacional del 30 oct.; no atribuir cierre general de los puertos sin aviso operativo."
    },
    {
      "titulo": "Estados Unidos | Los Ángeles y Long Beach",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Amenaza separada de ILWU Local 26 para el 1 nov. a las 17:00 PT; sindicatos y empleadores siguen negociando, con posible prórroga. No afirmar que están en huelga hoy."
    },
    {
      "titulo": "Europa | Italia",
      "bandera": "https://flagcdn.com/w40/it.png",
      "texto": "Huelga portuaria nacional de 24 horas: Génova, Livorno, Trieste, Gioia Tauro, Ravenna, Ancona y Civitavecchia entre los puertos mencionados. Alcance operativo variable."
    },
    {
      "titulo": "Europa | Francia, Grecia y España",
      "bandera": "",
      "texto": "Le Havre, Marsella, Dunkerque, El Pireo, Valencia, Barcelona y Algeciras aparecen entre puertos movilizados; distinguir huelga de manifestación y confirmar terminal. En Grecia se reporta impacto en ferris."
    },
    {
      "titulo": "Europa | Hamburgo, Rotterdam y Amberes",
      "bandera": "https://flagcdn.com/w40/de.png",
      "texto": "Hamburgo participa en la jornada. Rotterdam y Amberes enfrentan rezagos y congestión reportados previamente; validar capacidad y conexiones sin atribuirles cierres no confirmados."
    },
    {
      "titulo": "India | JNPT y costa este",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "JNPT/Nhava Sheva, Chennai, Cochin, Gangavaram, Kakinada y Visakhapatnam figuran en convocatoria; en la costa este revisar además secuelas del ciclón Arnab y reapertura de terminales."
    },
    {
      "titulo": "Asia | Conexiones",
      "bandera": "https://flagcdn.com/w40/sg.png",
      "texto": "Shanghái, Ningbo, Singapur y Busan mantienen riesgos de congestión o itinerarios inestables según reportes de octubre. Confirmar feeder, ETD y ETA por servicio."
    },
    {
      "titulo": "Brasil | Tarifas y feriado",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Maersk anuncia ajustes OHC/DHC en puertos brasileños desde el 1 nov. El 2 nov. es feriado nacional (Finados); reconfirmar recepción, disponibilidad y costos aplicables."
    },
    {
      "titulo": "Calendario | Fechas próximas",
      "bandera": "",
      "texto": "30 oct.: acciones en 113 puertos (no todos cerrados). 1 nov.: posible conflicto LA/LB si fracasa negociación. 2 nov.: inhabilidad en dependencias específicas de México y feriado en Brasil. 8 nov.: Diwali en India. 16 nov.: descanso obligatorio en México."
    }
  ],
  "metricas": [
    {
      "indicador": "Movilización global",
      "valor": "113 puertos",
      "tendencia": "22 países, más de 25 sindicatos; Reuters y PTI, 30 oct."
    },
    {
      "indicador": "Italia · huelga nacional",
      "valor": "24 h",
      "tendencia": "30 de octubre; efecto variable por terminal."
    },
    {
      "indicador": "México · Veracruz",
      "valor": "En alerta",
      "tendencia": "Participación sindical; sin cierre general confirmado."
    },
    {
      "indicador": "LA/LB · posible paro",
      "valor": "1 nov.",
      "tendencia": "Desde 17:00 PT, condicionado a negociaciones."
    },
    {
      "indicador": "Los Ángeles · rail dwell",
      "valor": "~9 días",
      "tendencia": "Referencia 27 oct.; solo contenedores ferroviarios."
    },
    {
      "indicador": "Long Beach · rail dwell",
      "valor": "~10 días",
      "tendencia": "Referencia 27 oct.; no es espera de buque."
    },
    {
      "indicador": "Brasil · OHC/DHC",
      "valor": "1 nov.",
      "tendencia": "Ajustes publicados por Maersk; según puerto y equipo."
    },
    {
      "indicador": "Diwali · India",
      "valor": "8 nov.",
      "tendencia": "Validar calendario real de fábrica y servicios."
    }
  ],
  "recomendaciones": [
    "Priorizar hoy operaciones en Italia, Francia, Grecia y Veracruz: confirmar por escrito si la terminal opera y las citas siguen vigentes.",
    "No confundir movilización global del 30 de octubre con la posible huelga de seguridad de Los Ángeles/Long Beach del 1 de noviembre.",
    "En Estados Unidos monitorear San Francisco/Oakland y por separado la negociación de ILWU Local 26 en LA/LB.",
    "Para India validar tanto participación en acciones portuarias como recuperación por el ciclón Arnab y horarios de proveedores antes de Diwali.",
    "Revisar conexiones de Rotterdam/Amberes, Asia y el feriado de Brasil del 2 de noviembre; no usar tiempos indicativos como medición en vivo.",
    "Confirmar cada recargo de noviembre por naviera, origen, destino y tipo de equipo; comunicar cambios de ETA antes de prometer entregas."
  ]
};

const retrasos = [
  {
    "puerto": "Global · 113 puertos",
    "tiempo": "30 oct. · en curso",
    "estado": "Huelgas, paros parciales y manifestaciones en 22 países; no son 113 cierres simultáneos."
  },
  {
    "puerto": "Italia · Génova, Livorno y otros",
    "tiempo": "30 oct. · 24 h",
    "estado": "Convocatoria de huelga nacional; confirmar operación por terminal."
  },
  {
    "puerto": "México · Veracruz",
    "tiempo": "30 oct. · en vigilancia",
    "estado": "Participación sindical reportada; sin cierre total verificado."
  },
  {
    "puerto": "EE. UU. · San Francisco/Oakland",
    "tiempo": "30 oct. · participación",
    "estado": "Apoyo a jornada internacional; modalidad de acción por confirmar."
  },
  {
    "puerto": "EE. UU. · LA/Long Beach",
    "tiempo": "1 nov. · posible",
    "estado": "Amenaza de huelga de vigilantes, distinta a la movilización de hoy; negociación activa."
  },
  {
    "puerto": "Francia/Grecia/España",
    "tiempo": "30 oct. · variable",
    "estado": "Huelgas y protestas con diferente efecto; El Pireo reporta afectación a carga y ferris."
  },
  {
    "puerto": "India · JNPT y costa este",
    "tiempo": "30 oct. · doble riesgo",
    "estado": "Acciones sindicales y recuperación climática en el este; confirmar terminal."
  },
  {
    "puerto": "Brasil · puertos seleccionados",
    "tiempo": "1–2 nov.",
    "estado": "Ajustes de cargos Maersk desde 1 nov. y feriado del 2 nov.; verificar aplicabilidad."
  }
];

// Corte: 30 oct. 2026, mañana Monterrey; referencias de dwell 27 oct. Fuentes indicadas en noticias.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 30 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 30 de octubre de 2026. Fuentes: Reuters, Port Technology International, ITF, Kuehne+Nagel, STG Logistics, sindicatos portuarios y referencias operativas sujetas a validación. Datos sujetos a actualización y confirmación con terminal, naviera y proveedor.</span>
        </div>
      </footer>
    </main>
  );
}
