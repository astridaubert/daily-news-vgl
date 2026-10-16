import Image from "next/image";

// ======================================================
// EDITAR AQUÍ CADA DÍA
// ======================================================

const brief = {
  "fecha": "viernes 16 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "16 de octubre: Trudy alcanza categoría 3 y eleva el riesgo en puertos y accesos del Pacífico mexicano. El riesgo de suministro de diésel presiona la planeación terrestre, dos buques se hundieron cerca de Ormuz y un paro de autotransporte afecta Sicilia. Revisar itinerarios, costos, seguros y disponibilidad antes de comprometer entregas.",
  "noticias": [
    {
      "region": "MÉXICO",
      "modo": "ALTO · HURACÁN Y TRANSPORTE",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/0/04/Hurricane_Isabel_from_ISS.jpg",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Trudy alcanza categoría 3: vigilar puertos y carreteras del Pacífico",
      "dato": "El 16 de octubre, AP y Reuters reportaron que Trudy alcanzó categoría 3, con vientos cercanos a 195 km/h. Las lluvias previstas elevan el riesgo de inundaciones y deslaves en Colima, Jalisco y Michoacán. No se verificó un listado confiable de cierres carreteros activos por tramo. Imagen ilustrativa, no corresponde a Trudy. Fuentes: AP y Reuters (16 oct.).",
      "impacto": "Posibles interrupciones de acceso a Manzanillo, Lázaro Cárdenas, centros de distribución y rutas terrestres costeras; las afectaciones concretas dependerán de cada tramo y terminal.",
      "accion": "Consultar SMN, NHC, SICT, CAPUFE y autoridades estatales; verificar carretera, terminal, citas y vuelos antes de despachar. No reportar cierres sin confirmación."
    },
    {
      "region": "MEDIO ORIENTE",
      "modo": "ALTO · SEGURIDAD MARÍTIMA",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/om.png",
      "titular": "Dos buques se hunden cerca de Ormuz: riesgo para rutas y seguros",
      "dato": "Reuters informó el 14 de octubre el hundimiento del portacontenedores GFS Pride, con bandera de Singapur, y del granelero Cape Dao cerca de Ormuz, tras ataques. La Autoridad Marítima de Singapur confirmó el hundimiento de GFS Pride y que GFS Giselle sufrió daños pero no se hundió. Fuentes: Reuters y MPA Singapur (14 oct.).",
      "impacto": "La mayor exposición a incidentes marítimos puede modificar itinerarios, primas de seguro, costos de combustible y opciones de transbordo en rutas vinculadas con el Golfo.",
      "accion": "Validar recorrido, restricciones de naviera, coberturas de seguro, escalas y alternativas de puerto antes de confirmar nuevas cargas."
    },
    {
      "region": "ITALIA",
      "modo": "ALTO · PARO DE AUTOTRANSPORTE",
      "imagen": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200",
      "bandera": "https://flagcdn.com/w40/it.png",
      "titular": "Paro de transportistas en Sicilia del 16 al 20 de octubre",
      "dato": "El calendario oficial de huelgas del Ministerio de Transportes italiano registra una paralización regional del transporte de mercancías por cuenta de terceros del 16 al 20 de octubre en Sicilia; ANSA confirma el llamado al paro por altos costos del combustible. Fuente: Ministerio de Transportes de Italia y ANSA.",
      "impacto": "Riesgo de menor capacidad de recolección y entrega, acumulación de contenedores y retrasos de conexiones portuarias y terrestres en Sicilia.",
      "accion": "Confirmar disponibilidad real de transporte, retiro de unidades, patios y ventanas de conexión antes de despachar."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Diésel: riesgo condicionado, no desabasto confirmado",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Una eventual restricción estadounidense de exportaciones de diésel podría presionar costos y disponibilidad para el autotransporte mexicano. Especialistas citan inventarios equivalentes a unos 13 días y dependencia relevante de importaciones; CANACAR ha estimado impactos económicos en un escenario de interrupción. No se confirma una suspensión vigente de exportaciones. Fuentes: El Economista, El Financiero y reportes del sector, septiembre-octubre de 2026."
    },
    {
      "titulo": "México | Autopartes: suspensión de arancel",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "El País reportó el 16 de octubre la suspensión por cinco años del arancel mexicano del 10% sobre determinadas importaciones de autopartes destinadas al ensamblaje de vehículos. Verificar fracciones, reglas y publicación normativa antes de aplicar el beneficio a un embarque."
    },
    {
      "titulo": "China | Congestión y tarifas",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Monitorear presión de capacidad tras Golden Week, tiempos por terminal en Shanghái y Ningbo y posibles ajustes de tarifas. Las cifras difundidas de +6% semanal y esperas de 78/77 horas no pudieron confirmarse suficientemente para todas las terminales, por lo que deben verificarse antes de cotizar."
    },
    {
      "titulo": "Brasil | Mayor presión sobre costos",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Se reportan alzas en fletes marítimos y transporte interior, aunque los rangos de US$300–600 por contenedor y R$28,000–32,000 por viaje no pudieron verificarse como referencias generales. Solicitar tarifa por ruta, fecha, equipo y proveedor; considerar cargos anunciados para noviembre."
    },
    {
      "titulo": "India | Tarifas hacia Europa y transbordos",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "El mercado India–Europa sigue sujeto a condiciones variables de tarifa, capacidad y conexiones por Colombo y Singapur. Validar booking, escala, feeder y transbordo por servicio; no generalizar una tendencia uniforme a todas las rutas."
    },
    {
      "titulo": "Italia | Otros paros de transporte",
      "bandera": "https://flagcdn.com/w40/it.png",
      "texto": "El registro oficial italiano también incluye paros regionales de autotransporte en Calabria del 16 al 20 de octubre y una huelga portuaria en Nápoles/Salerno del 15 al 16; confirmar afectaciones por operador y terminal."
    }
  ],
  "metricas": [
    {
      "indicador": "Trudy · Intensidad 16 oct.",
      "valor": "Cat. 3",
      "tendencia": "Vientos cercanos a 195 km/h · AP / Reuters"
    },
    {
      "indicador": "Trudy · Lluvias previstas",
      "valor": "Hasta 30 cm",
      "tendencia": "Máximos puntuales reportados en zonas de riesgo · Reuters"
    },
    {
      "indicador": "Diésel México · Inventarios estimados",
      "valor": "13 días",
      "tendencia": "Escenario de referencia citado por especialista; no desabasto confirmado"
    },
    {
      "indicador": "Diésel México · Dependencia externa",
      "valor": "30–50%",
      "tendencia": "Porción aproximada del consumo abastecida vía importaciones, según especialistas"
    },
    {
      "indicador": "Ormuz · Buques hundidos",
      "valor": "2",
      "tendencia": "Eventos reportados cerca del estrecho · Reuters, 14 oct."
    },
    {
      "indicador": "Sicilia · Paro transporte",
      "valor": "5 días",
      "tendencia": "Del 16 al 20 oct. · registro oficial de Italia"
    },
    {
      "indicador": "Autopartes México · Arancel",
      "valor": "10%",
      "tendencia": "Suspensión reportada para importaciones elegibles; validar regulación"
    },
    {
      "indicador": "Carreteras Pacífico MX",
      "valor": "Verificar",
      "tendencia": "Sin cierres por tramo confirmados; consultar SICT/CAPUFE antes de salida"
    }
  ],
  "recomendaciones": [
    "Prioridad 1 — Trudy: consultar alertas oficiales, confirmar ruta y operación de puerto, terminal y aeropuerto antes de despachar; no asumir cierres sin reporte por tramo.",
    "Prioridad 2 — Ormuz: verificar coberturas de seguro, rutas, escalas y puertos alternativos para embarques expuestos.",
    "Prioridad 3 — Sicilia y Calabria: comprobar disponibilidad de camiones del 16 al 20 de octubre y reprogramar conexiones sensibles.",
    "México — Diésel: analizar sensibilidad de tarifas terrestres a restricciones potenciales, sin presentar el escenario como desabasto actual.",
    "China, India y Brasil: reconfirmar tarifas por ruta y reserva, espacio, conexión y cargos vigentes antes de comprometer precios.",
    "Automotriz México: revisar con el agente aduanal la elegibilidad de autopartes ante el cambio arancelario reportado."
  ]
};

const retrasos = [
  {
    "puerto": "México · Manzanillo",
    "tiempo": "Por confirmar",
    "estado": "Vigilancia por Trudy; validar terminal, accesos y autorizaciones de capitanía."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Por confirmar",
    "estado": "Validar rutas de acceso, condiciones de lluvia y estado por terminal."
  },
  {
    "puerto": "México · Carreteras Pacífico",
    "tiempo": "Sin cierre confirmado",
    "estado": "Consultar SICT y CAPUFE por tramo; riesgo de inundación y deslaves."
  },
  {
    "puerto": "Italia · Sicilia",
    "tiempo": "16–20 oct.",
    "estado": "Paro regional de autotransporte; confirmar retiro y entrega de carga."
  },
  {
    "puerto": "Italia · Calabria",
    "tiempo": "16–20 oct.",
    "estado": "Paro de transportistas anunciado; confirmar proveedores afectados."
  },
  {
    "puerto": "Italia · Nápoles / Salerno",
    "tiempo": "15–16 oct.",
    "estado": "Huelga portuaria territorial registrada; verificar terminal y servicio."
  },
  {
    "puerto": "China · Shanghái / Ningbo",
    "tiempo": "Variable",
    "estado": "Consultar esperas por terminal y naviera; no hay cifra única verificada."
  },
  {
    "puerto": "India · Conexiones Europa",
    "tiempo": "Variable",
    "estado": "Confirmar itinerario, feeders y omisiones de escala."
  }
];

// Actualización 16 oct. 2026: fuentes AP, Reuters, MPA Singapore, MIT Italia, ANSA, El País, El Financiero y El Economista.

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
                  alt={item.region === "MÉXICO" ? "Imagen ilustrativa del huracán Isabel, no de Trudy" : item.titular + " · imagen ilustrativa"}
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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">RETRASOS PORTUARIOS · 16 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado operativo y demoras por verificar</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Tiempo reportado</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 16 de octubre de 2026. Fuentes: AP, Reuters, Autoridad Marítima de Singapur, Ministerio de Transportes de Italia, ANSA, El País, El Financiero y El Economista. Riesgos sujetos a validación por autoridad, terminal y proveedor.</span>
        </div>
      </footer>
    </main>
  );
}
