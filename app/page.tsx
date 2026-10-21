import Image from "next/image";

// DATOS EDITABLES — 21 OCTUBRE 2026
const brief = {
  "fecha": "miércoles 21 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Clima y restricciones portuarias en México, riesgos de conexión en Europa y recargos de combustible en carga aérea. Valida el estado de cada ruta antes de despachar.",
  "noticias": [
    {
      "region": "MÉXICO",
      "modo": "ALTO · PUERTOS DEL GOLFO",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Frente frío mantiene en alerta a los puertos del Golfo",
      "dato": "Las lluvias del frente frío 2 han afectado el sur de Veracruz. Se reportaron cierres marítimos en el Golfo; el estatus de cada capitanía puede cambiar durante el día. Consulta: https://meteorologia.semar.gob.mx/puertos/",
      "impacto": "Posibles restricciones de navegación, cambios de escala y retrasos en conexiones terrestres.",
      "accion": "Confirmar apertura para el tipo de embarcación, con SEMAR, agente naviero y terminal antes de programar carga."
    },
    {
      "region": "GLOBAL · CARGA AÉREA",
      "modo": "ATENCIÓN · COMBUSTIBLE",
      "imagen": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
      "bandera": "",
      "titular": "El combustible presiona cotizaciones y recargos aéreos",
      "dato": "WorldACD reportó para la semana 41 tarifas globales promedio de US$3.13/kg (contrato + spot) y spot de US$3.55/kg, ambas estables frente a la semana anterior. El combustible sigue presionando los recargos. Fuente: https://rutair.com/news/first-fortnight-of-october-sees-rates-hold-steady/",
      "impacto": "Las tarifas base no suben igual en todas las rutas, pero la vigencia de cotizaciones y los fuel surcharges requieren vigilancia.",
      "accion": "Pedir tarifa total y vigencia escrita, confirmar recargos y reservar capacidad para embarques críticos."
    },
    {
      "region": "EUROPA · FRANCIA",
      "modo": "ALTO · LE HAVRE",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "https://flagcdn.com/w40/fr.png",
      "titular": "Verificar operación de terminales en Le Havre",
      "dato": "El reporte operativo del 20 de octubre de Kuehne+Nagel señalaba problemas en la terminal TNMSC tras un incidente informático. La reapertura y restricciones específicas requieren confirmación actualizada. Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026",
      "impacto": "Riesgo de citas reprogramadas, acumulación de contenedores y enlaces terrestres tardíos.",
      "accion": "Validar gate-in/gate-out, terminal concreta y depósitos alternos directamente con naviera y operador."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Manzanillo y accesos",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Tras el paso de Trudy se reportaron suspensiones puntuales y reprogramación de citas, pero no hay base para anunciar un cierre general del puerto hoy. Confirmar ventanas en Contecon, SSA, TIMSA y otras terminales. Reuters informó que se levantaron las alertas ciclónicas. https://www.reuters.com/business/environment/hurricane-trudy-lashes-mexicos-pacific-coast-is-set-weaken-tonight-2026-10-18/"
    },
    {
      "titulo": "México | Carreteras y cruces",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Verificar incidencias vigentes en Monterrey–Saltillo, Monterrey–Nuevo Laredo, Nuevo Teapa–Cosoleacaque y Cumbres de Maltrata; no presentar bloqueos anteriores como activos sin reporte reciente. En frontera, revisar inspecciones, documentación y disponibilidad de operadores. https://www.freshplaza.com/latin-america/article/9884677/stricter-u-s-trucking-rules-raise-concerns-over-freight-delays-with-mexico/"
    },
    {
      "titulo": "México | Diésel",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Estímulo complementario fiscal de aproximadamente $2.35 MXN/L vigente del 17 al 23 de octubre. No equivale a aumento de precio de bomba. Validar ajustes de combustible por transportista. https://www.eleconomista.com.mx/economia/aumentan-2-35-pesos-litro-subsidio-diesel-mayor-nivel-ano-20261018-839258.html"
    },
    {
      "titulo": "Estados Unidos | Puertos y frontera",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "La referencia del 20 de octubre indica espera cercana a un día para buques en Los Ángeles, pero los flujos ferroviarios e interiores pueden añadir tiempo. Revisar cruce y disponibilidad de camiones entre México y EE. UU.; Thanksgiving será el 26 de noviembre. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"
    },
    {
      "titulo": "Brasil | Navegantes y aduanas",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "La congestión reportada en Navegantes exige validar tiempos de espera y capacidad de patio antes de confirmar ETA. Los avisos sobre huelga aduanal nacional y cierres aeroportuarios necesitan confirmación específica; no se tratan como cierres generales verificados. Feriado: 20 de noviembre."
    },
    {
      "titulo": "India | Nhava Sheva y Mumbai",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Revisar congestión terrestre en Nhava Sheva y disponibilidad de conexiones aéreas por Mumbai. No se confirman aquí las supuestas cancelaciones generalizadas de Air India/IndiGo; validar vuelos con la aerolínea. Diwali: 8 de noviembre; Guru Nanak Jayanti: 24 de noviembre."
    },
    {
      "titulo": "Asia | Shanghái y rutas",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "La última referencia semanal disponible (20 oct.) indica 2.14 días de espera media de buques en Shanghái. Confirmar ventanas, omisiones de escala, cut-offs y rutas vía Oriente Medio; las interrupciones por combustible dependen de aerolínea y aeropuerto. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"
    },
    {
      "titulo": "Europa | Rotterdam, Bélgica, Italia",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Rotterdam estaba en recuperación tras acciones laborales, aunque persistían demoras en barcazas y feeders. Revisar limitaciones de pilotaje en Amberes/Zeebrugge y convocatorias laborales por localidad en Francia e Italia; no asumir que todos los puertos o vuelos están suspendidos. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"
    },
    {
      "titulo": "Carga aérea | Tarifas y fuel surcharge",
      "bandera": "",
      "texto": "Semana 41 (5–11 octubre): tarifa mundial media US$3.13/kg; spot US$3.55/kg, sin alza semanal general. Volumen global +9% interanual. Combustible y cambios de rutas pueden elevar recargos individuales: pedir cotización todo incluido, ruta y vigencia. https://rutair.com/news/first-fortnight-of-october-sees-rates-hold-steady/"
    },
    {
      "titulo": "Calendario | Próximos festivos",
      "bandera": "",
      "texto": "1 nov. Todos los Santos (según país); 2 nov. Día de Muertos (México, no descanso federal obligatorio); 8 nov. Diwali (India); 16 nov. Revolución Mexicana; 20 nov. Consciência Negra (Brasil); 24 nov. Guru Nanak Jayanti (India); 26 nov. Thanksgiving (EE. UU.). Confirmar horarios de proveedores."
    }
  ],
  "metricas": [
    {
      "indicador": "Aéreo mundial · tarifa media",
      "valor": "US$3.13/kg",
      "tendencia": "Contrato + spot; semana 41 (5–11 oct.), WorldACD; estable semanalmente."
    },
    {
      "indicador": "Aéreo mundial · tarifa spot",
      "valor": "US$3.55/kg",
      "tendencia": "Promedio mundial semana 41; no es precio por ruta."
    },
    {
      "indicador": "Carga aérea · volumen mundial",
      "valor": "+9% interanual",
      "tendencia": "Tonelaje semana 41 frente al mismo periodo de 2025."
    },
    {
      "indicador": "Shanghái · espera de buques",
      "valor": "2.14 días",
      "tendencia": "Referencia semanal publicada el 20 oct.; no es dato en vivo."
    },
    {
      "indicador": "Rotterdam · espera de buques",
      "valor": "1.18 días",
      "tendencia": "Referencia semanal del 20 oct.; feeder puede tardar más."
    },
    {
      "indicador": "Manzanillo · espera de buques",
      "valor": "2.41 días",
      "tendencia": "Referencia del 20 oct.; no implica cierre general."
    },
    {
      "indicador": "México · apoyo fiscal al diésel",
      "valor": "$2.35 MXN/L",
      "tendencia": "Estímulo del 17 al 23 oct.; no representa aumento de precio."
    },
    {
      "indicador": "India · Nhava Sheva",
      "valor": "1.87 días",
      "tendencia": "Referencia semanal del 20 oct.; verificar puerta y terminal."
    }
  ],
  "recomendaciones": [
    "México: revisar el mapa de Capitanías de SEMAR y citas de Manzanillo antes de despachar; no asumir cierres nacionales.",
    "Transporte terrestre: validar bloqueos y capacidad real de cruce con operador, CAPUFE y Guardia Nacional.",
    "Aéreo: pedir cotización total con fuel surcharge, vigencia y ruta; anticipar espacio para embarques críticos.",
    "Europa: confirmar terminal y gate en Le Havre; añadir margen a conexiones feeder en Rotterdam y Amberes.",
    "Asia, India y Brasil: revisar cut-offs, terminales y conexiones antes de prometer tiempos de tránsito.",
    "Festivos: ajustar inventario y cut-offs antes de Diwali, el feriado mexicano del 16 de noviembre y Thanksgiving."
  ]
};

const retrasos = [
  {
    "puerto": "México · Golfo (puerto por puerto)",
    "tiempo": "Verificar SEMAR",
    "estado": "Cierres recientes por frente frío; estatus vigente sujeto a cada Capitanía."
  },
  {
    "puerto": "México · Manzanillo",
    "tiempo": "2.41 días",
    "estado": "Promedio semanal de buques publicado el 20 oct.; citas por confirmar."
  },
  {
    "puerto": "Francia · Le Havre / TNMSC",
    "tiempo": "Validar gate",
    "estado": "Restricciones reportadas el 20 oct.; solicitar actualización a terminal."
  },
  {
    "puerto": "Países Bajos · Rotterdam",
    "tiempo": "1.18 días",
    "estado": "Promedio buques 20 oct.; demoras independientes en feeder/barcazas."
  },
  {
    "puerto": "China · Shanghái",
    "tiempo": "2.14 días",
    "estado": "Promedio semanal de espera de buques del 20 oct."
  },
  {
    "puerto": "India · Nhava Sheva",
    "tiempo": "1.87 días",
    "estado": "Promedio semanal del 20 oct.; confirmar cola terrestre."
  },
  {
    "puerto": "Brasil · Navegantes",
    "tiempo": "Consultar terminal",
    "estado": "Congestión reportada; sin tiempo en vivo comparable verificado."
  }
];

// Datos portuarios: última referencia publicada 20 oct.; carga aérea WorldACD semana 41.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN PORTUARIA · CORTE 21 DE OCTUBRE (REFERENCIAS 20 OCT.)</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 21 de octubre de 2026. Fuentes: SEMAR, WorldACD, Kuehne+Nagel, Reuters, El Economista y operadores portuarios. Operaciones sujetas a validación por terminal, naviera y proveedor.</span>
        </div>
      </footer>
    </main>
  );
}
