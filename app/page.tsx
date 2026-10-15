import Image from "next/image";

// =============================================
// VECTOR GLOBAL LOGISTICS
// RADAR LOGÍSTICO GLOBAL
// Actualización: 15 de octubre de 2026
// =============================================

const brief = {
  fecha: "jueves 15 de octubre de 2026",
  titulo: "Vector Global Logistics | Radar Logístico Global",

  subtitulo:
    "15 de octubre: riesgo alto por el huracán Trudy en el Pacífico mexicano y afectaciones marítimas en Amberes. Nuevos incrementos de fletes Asia–México, congestión en conexiones asiáticas y volatilidad financiera exigen revisar costos, itinerarios y capacidad antes de comprometer entregas.",

  noticias: [
    {
      region: "MÉXICO",
      modo: "ALTO · HURACÁN TRUDY",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Hurricane_Isabel_from_ISS.jpg",
      bandera: "https://flagcdn.com/w40/mx.png",
      titular:
        "Trudy gana fuerza y eleva el riesgo logístico en el Pacífico mexicano",
      dato:
        "El NHC informó el 15 de octubre que Trudy alcanzó categoría 1, con vientos sostenidos de 120 km/h. El pronóstico contempla un fortalecimiento adicional durante el viernes 16. Las condiciones podrían generar afectaciones por lluvias, oleaje y viento en zonas de la costa del Pacífico mexicano. Fuente: NHC, aviso del 15 de octubre.",
      impacto:
        "Las operaciones marítimas, aéreas y terrestres relacionadas con Manzanillo, Lázaro Cárdenas y otros puntos del Pacífico podrían enfrentar cambios de itinerario, restricciones preventivas o reprogramaciones conforme evolucione el ciclón.",
      accion:
        "Revisar boletines del NHC y SMN, confirmar el estado de terminales y capitanías, validar accesos carreteros y verificar vuelos antes de comprometer fechas de entrega."
    },
    {
      region: "EUROPA",
      modo: "ALTO · OPERACIÓN PORTUARIA",
      imagen:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      bandera: "https://flagcdn.com/w40/be.png",
      titular:
        "Amberes enfrenta retrasos tras interrupciones por huelga",
      dato:
        "Las restricciones al tráfico marítimo registradas entre el 13 y el 15 de octubre generan presión sobre las operaciones del puerto de Amberes. La recuperación depende de la disponibilidad operativa y de la atención a los buques pendientes. El estado de cada terminal debe confirmarse directamente.",
      impacto:
        "Los retrasos pueden afectar ventanas de atraque, conexiones intermodales, disponibilidad de equipos y tiempos de entrega en cadenas de suministro vinculadas con Europa.",
      accion:
        "Confirmar ETA, terminal y ventana de atraque con la naviera. Evaluar alternativas de conexión y contemplar márgenes adicionales para embarques críticos."
    },
    {
      region: "ASIA → MÉXICO",
      modo: "ALTO · AUMENTO DE FLETES",
      imagen:
        "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      bandera: "https://flagcdn.com/w40/cn.png",
      titular:
        "Hapag-Lloyd incrementa US$1,000 por contenedor en rutas Asia–México",
      dato:
        "A partir del 15 de octubre, Hapag-Lloyd aplica un incremento general de tarifas (GRI) de US$1,000 por contenedor en rutas desde el Lejano Oriente hacia la costa oeste de México. El ajuste contempla equipos de 20' Dry, 40' Dry y 40' NOR. Como referencia, la tarifa publicada para un contenedor 40' Dry pasa de US$5,100 a US$6,100. Fuente: Hapag-Lloyd, comunicado oficial de septiembre de 2026.",
      impacto:
        "El ajuste incrementa las tarifas anunciadas para importaciones marítimas en las rutas aplicables y puede modificar presupuestos, márgenes y cotizaciones comerciales. El costo efectivo dependerá de las condiciones contractuales, los recargos y el itinerario de cada embarque.",
      accion:
        "Actualizar cotizaciones antes de confirmar reservas, verificar tarifas y recargos con la naviera y anticipar el impacto económico en embarques próximos a salir de Asia."
    }
  ],

  vigilancia: [
    {
      titulo: "Estados Unidos | Capacidad y costos",
      bandera: "https://flagcdn.com/w40/us.png",
      texto:
        "La disponibilidad de drayage, chasises y citas en terminales y rampas ferroviarias continúa siendo un factor de planificación. La incertidumbre comercial y arancelaria podría generar cambios de origen, adelantos de importaciones y variaciones en tarifas. Confirmar capacidad y tiempos por corredor."
    },
    {
      titulo: "Asia | Congestión post-Golden Week",
      bandera: "https://flagcdn.com/w40/sg.png",
      texto:
        "Las conexiones marítimas posteriores a Golden Week requieren seguimiento. Shanghái, Singapur y Colombo presentan riesgos de congestión, demoras de transbordo y disponibilidad variable de feeders. Reconfirmar escalas, espacios y tiempos reales con la naviera."
    },
    {
      titulo: "India | Omisiones de escala y conexiones",
      bandera: "https://flagcdn.com/w40/in.png",
      texto:
        "Se recomienda revisar servicios vinculados con Mundra, Nhava Sheva y Hazira ante posibles omisiones de escala. Las conexiones a través de Colombo y Singapur también pueden verse afectadas. Considerar los próximos festivos locales de octubre al programar operaciones."
    },
    {
      titulo: "Brasil | Nuevos cargos y operación",
      bandera: "https://flagcdn.com/w40/br.png",
      texto:
        "Monitorear las condiciones de los principales puertos brasileños y los cargos OHC/DHC anunciados por Maersk para noviembre. Confirmar vigencia y aplicación antes de cotizar. El feriado nacional de Nossa Senhora Aparecida ocurrió el 12 de octubre."
    },
    {
      titulo: "Mercados | Inflación y volatilidad",
      bandera: "https://flagcdn.com/w40/us.png",
      texto:
        "La caída bursátil del 14 de octubre incrementó la atención sobre inflación, tasas de interés y demanda futura. Para la logística, los riesgos se relacionan principalmente con costos de financiamiento, inversión en capacidad y cambios potenciales en el movimiento de mercancías."
    },
    {
      titulo: "Medio Oriente | Seguridad marítima",
      bandera: "https://flagcdn.com/w40/om.png",
      texto:
        "La situación en rutas cercanas al estrecho de Ormuz requiere seguimiento por posibles repercusiones en seguros, combustible, itinerarios y disponibilidad de transporte marítimo. Verificar restricciones específicas antes de confirmar nuevas operaciones."
    }
  ],

  metricas: [
    {
      indicador: "Trudy · 15 oct.",
      valor: "120 km/h",
      tendencia: "Vientos sostenidos · NHC"
    },
    {
      indicador: "Trudy · Ubicación reportada",
      valor: "735 km",
      tendencia: "Al sur-sureste de Manzanillo"
    },
    {
      indicador: "GRI Asia–México",
      valor: "+US$1,000",
      tendencia: "Por contenedor aplicable"
    },
    {
      indicador: "Hapag-Lloyd · 40' Dry",
      valor: "US$6,100",
      tendencia: "Tarifa publicada Asia–Oeste México"
    },
    {
      indicador: "Nasdaq · 14 oct.",
      valor: "−1.88%",
      tendencia: "Variación de cierre reportada"
    },
    {
      indicador: "S&P 500 · 14 oct.",
      valor: "−1.11%",
      tendencia: "Variación de cierre reportada"
    },
    {
      indicador: "Dow · 14 oct.",
      valor: "−0.09%",
      tendencia: "Variación de cierre reportada"
    },
    {
      indicador: "Amberes",
      valor: "Validar",
      tendencia: "Estado operativo por terminal"
    }
  ],

  recomendaciones: [
    "México: monitorear Trudy durante el 16–18 de octubre y confirmar operaciones portuarias, carreteras y vuelos antes de comprometer entregas.",
    "Europa: revisar conexiones y ventanas de atraque en Amberes tras las interrupciones por huelga.",
    "Asia–México: recalcular tarifas marítimas con el GRI anunciado por Hapag-Lloyd y confirmar costos finales de cada embarque.",
    "Asia e India: reservar con anticipación, verificar transbordos y revisar omisiones de escala para carga urgente.",
    "Brasil: anticipar cambios de cargos previstos para noviembre y confirmar condiciones operativas por terminal.",
    "Mercados: mantener flexibilidad comercial ante cambios en tasas, costos de combustible e inversión industrial."
  ]
};

const retrasos = [
  {
    puerto: "México · Manzanillo",
    tiempo: "Por confirmar",
    estado:
      "Vigilancia por Trudy. Confirmar condiciones con capitanía, terminal y transportista."
  },
  {
    puerto: "México · Lázaro Cárdenas",
    tiempo: "Por confirmar",
    estado:
      "Revisar condiciones meteorológicas, accesos carreteros y operación portuaria."
  },
  {
    puerto: "México · Puerto Vallarta",
    tiempo: "Por confirmar",
    estado:
      "Verificar vuelos y operaciones logísticas conforme evolucione el temporal."
  },
  {
    puerto: "Bélgica · Amberes",
    tiempo: "Variable",
    estado:
      "Confirmar recuperación operativa, atraque y conexiones posteriores a la huelga."
  },
  {
    puerto: "China · Shanghái",
    tiempo: "Variable",
    estado:
      "Validar terminal, reserva y disponibilidad post-Golden Week."
  },
  {
    puerto: "Singapur / Colombo",
    tiempo: "Variable",
    estado:
      "Revisar tiempos de transbordo y disponibilidad de feeders."
  },
  {
    puerto: "India · Mundra / Nhava Sheva",
    tiempo: "Variable",
    estado:
      "Confirmar itinerario y posibles omisiones de escala."
  },
  {
    puerto: "Europa · Rin",
    tiempo: "Variable",
    estado:
      "Verificar calado, capacidad de barcazas y restricciones según tramo."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F5F7] text-[#111111]">

      {/* ENCABEZADO */}
      <section className="bg-[#003C6F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Image
              src="/Vector Logo White (1).png"
              alt="Vector Global Logistics"
              width={260}
              height={80}
              priority
              className="h-auto w-[220px] md:w-[260px]"
            />

            <div className="md:text-right">
              <p className="text-xs tracking-[0.15em] text-white/60">
                RADAR LOGÍSTICO GLOBAL
              </p>
              <p className="mt-1 font-semibold">
                {brief.fecha}
              </p>
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
        <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
          PRINCIPALES DESARROLLOS
        </p>

        <h2 className="mt-3 mb-8 text-3xl font-bold text-[#003C6F]">
          Lo más relevante de hoy
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {brief.noticias.map((item, index) => (
            <article
              key={item.titular}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={item.imagen}
                  alt={
                    item.region === "MÉXICO"
                      ? "Imagen ilustrativa de huracán Isabel, no de Trudy"
                      : item.titular
                  }
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-7">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-[#FF3E32]">
                      <img
                        src={item.bandera}
                        alt=""
                        className="h-3 w-5 rounded-sm object-cover"
                      />
                      {item.region}
                    </p>

                    <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-[#003C6F]">
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

                <p className="mt-5 leading-7 text-gray-600">
                  {item.dato}
                </p>

                {item.region === "MÉXICO" && (
                  <p className="mt-2 text-xs italic text-gray-400">
                    Fotografía ilustrativa de huracán.
                    No corresponde a Trudy.
                  </p>
                )}

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

      {/* VIGILANCIA INTERNACIONAL */}
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
                  <img
                    src={item.bandera}
                    alt=""
                    className="h-3.5 w-5 rounded-sm object-cover"
                  />
                  {item.titulo}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTADO PORTUARIO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
            ESTADO PORTUARIO · 15 DE OCTUBRE
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#003C6F]">
            Estado operativo y demoras por verificar
          </h2>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">
            Los tiempos y restricciones deben confirmarse
            directamente con autoridades, terminales y navieras
            antes de comprometer fechas de entrega.
          </p>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#003C6F] text-white">
                <tr>
                  <th className="p-4">País / puerto</th>
                  <th className="p-4">Tiempo reportado</th>
                  <th className="p-4">Estado e interpretación</th>
                </tr>
              </thead>

              <tbody>
                {retrasos.map((r, i) => (
                  <tr
                    key={r.puerto}
                    className={
                      i % 2 === 0
                        ? "bg-[#F3F5F7]"
                        : "bg-white"
                    }
                  >
                    <td className="p-4 font-bold text-[#003C6F]">
                      {r.puerto}
                    </td>
                    <td className="p-4 font-semibold">
                      {r.tiempo}
                    </td>
                    <td className="p-4 text-gray-600">
                      {r.estado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
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
              <div
                key={item.indicador}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold tracking-[0.12em] text-[#FF3E32]">
                  {item.indicador}
                </p>

                <p className="mt-3 text-2xl font-bold text-[#003C6F]">
                  {item.valor}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  {item.tendencia}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMENDACIONES */}
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

                <p className="leading-6 text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VECTOR */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">
              CÓMO PUEDE APOYAR VECTOR
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#003C6F]">
              Cuando las condiciones cambian, tu estrategia logística también debe poder adaptarse.
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
              Nuestro equipo analiza cada operación para encontrar
              alternativas que respondan a las necesidades específicas
              de tiempo, capacidad, ruta y tipo de carga.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-semibold text-[#003C6F] md:grid-cols-3">
              {[
                "Transporte aéreo",
                "Transporte marítimo",
                "Transporte terrestre",
                "Cruce fronterizo",
                "Carga expedita",
                "Carga crítica"
              ].map((servicio) => (
                <div
                  key={servicio}
                  className="rounded-lg bg-[#F3F5F7] p-4"
                >
                  {servicio}
                </div>
              ))}
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
            <p className="mt-1 text-white/60">
              vectorgl.com
            </p>
          </div>

          <span className="max-w-xl text-white/60 md:text-right">
            Corte informativo del 15 de octubre de 2026.
            Fuentes: NHC, Hapag-Lloyd, Reuters, AP y
            reportes del sector logístico.
            Pronósticos y restricciones sujetos a cambios
            y confirmación con autoridades, terminales y navieras.
          </span>
        </div>
      </footer>
    </main>
  );
}
