import Image from "next/image";

// ======================================================
// EDITAR AQUÍ CADA DÍA
// ======================================================

const brief = {
  fecha: "jueves 15 de octubre de 2026",
  titulo: "Vector Global Logistics | Radar Logístico Global",
  subtitulo: "15 de octubre: riesgo alto por el huracán Trudy en el Pacífico mexicano y afectaciones marítimas en Amberes; alzas de fletes Asia–México, congestión en conexiones asiáticas y mayor volatilidad financiera. Confirmar condiciones por terminal, ruta y naviera antes de comprometer entregas.",
  noticias: [
    {
      region: "MÉXICO",
      modo: "ALTO · HURACÁN TRUDY",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/0/04/Hurricane_Isabel_from_ISS.jpg",
      bandera: "https://flagcdn.com/w40/mx.png",
      titular: "Trudy alcanza categoría 1: vigilar operaciones en el Pacífico",
      dato: "El NHC confirmó el 15 oct. a las 03:00 CST vientos de 120 km/h y ubicación a 735 km al sur-sureste de Manzanillo. Pronostica intensificación a huracán mayor el viernes. No había avisos costeros activos en el boletín. Fuente: NHC, aviso 8 (15 oct.).",
      impacto: "Posibles reprogramaciones de buques, vuelos y transporte terrestre en Manzanillo, Lázaro Cárdenas y rutas costeras conforme evolucione la trayectoria. Simón se debilitó a tormenta tropical.",
      accion: "Consultar NHC, SMN y avisos de capitanías y terminales; validar puertos, citas, carreteras y vuelos individualmente. No anunciar cierres sin confirmación."
    },
    {
      region: "EUROPA",
      modo: "ALTO · OPERACIÓN PORTUARIA",
      imagen: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      bandera: "https://flagcdn.com/w40/be.png",
      titular: "Amberes: recuperar conexiones tras interrupciones por huelga",
      dato: "Se reportaron restricciones al tráfico marítimo en Amberes del 13 al 15 de octubre por conflicto laboral. El restablecimiento efectivo y los buques pendientes requieren confirmación directamente con puerto, terminal y naviera; no asumir normalidad inmediata.",
      impacto: "Riesgo de acumulación de escalas, retrasos de atraque, conexiones perdidas y arrastres logísticos con Rotterdam y rutas interiores.",
      accion: "Reconfirmar ETA y ventana de atraque de cada buque; añadir margen de tránsito y evaluar puerto alternativo si resulta viable."
    },
    {
      region: "ASIA → MÉXICO",
      modo: "ALTO · TARIFAS MARÍTIMAS",
      imagen: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      bandera: "https://flagcdn.com/w40/cn.png",
      titular: "Hapag-Lloyd incrementa US$1,000 por contenedor en rutas Asia–México",
      dato: "Desde el 15 de octubre, Hapag-Lloyd aplica un incremento general de tarifas (GRI) de US$1,000 por contenedor en rutas del Lejano Oriente hacia la costa oeste de México, para equipos 20' Dry, 40' Dry y 40' NOR. Como referencia, la tarifa publicada para 40' Dry pasa de US$5,100 a US$6,100. Fuente: comunicado de Hapag-Lloyd.",
      impacto: "El alza presiona los presupuestos de importación y puede afectar cotizaciones y márgenes. El costo final depende de la ruta, los acuerdos comerciales, el equipo y los recargos aplicables.",
      accion: "Recalcular cotizaciones y confirmar con la naviera tarifa total, recargos, disponibilidad de espacio y vigencia antes de reservar o comprometer precios."
    }
  ],
  vigilancia: [
    {
      titulo: "Estados Unidos | drayage, importaciones y costos",
      bandera: "https://flagcdn.com/w40/us.png",
      texto: "Vigilar disponibilidad de chasises, operadores y citas en gateways marítimos y rampas interiores. La incertidumbre arancelaria puede alterar reservas y provocar adelanto de importaciones; confirmar por corredor y transportista."
    },
    {
      titulo: "Asia | conexiones post-Golden Week",
      bandera: "https://flagcdn.com/w40/sg.png",
      texto: "Revisar itinerarios de Shanghái, Singapur y Colombo, disponibilidad de feeders y rollover. Las cifras de 7–10 días en Shanghái y ocupación de patio superior a 130% en Colombo requieren reconfirmación por terminal."
    },
    {
      titulo: "India | Mundra, Nhava Sheva y escalas",
      bandera: "https://flagcdn.com/w40/in.png",
      texto: "Reconfirmar reservas y escalas de servicios sujetos a omisiones, especialmente EPIC2, así como conexiones vía Colombo y Singapur. Prever disponibilidad variable por Dussehra según localidad."
    },
    {
      titulo: "Brasil | cargos futuros y ajustes operativos",
      bandera: "https://flagcdn.com/w40/br.png",
      texto: "Dar seguimiento a cargos OHC/DHC anunciados para noviembre y a condiciones de terminal en Santos, Itajaí y Navegantes. El feriado de Nossa Senhora Aparecida fue el lunes 12 de octubre, no el 14."
    },
    {
      titulo: "Mercados | inflación, tasas y cadenas de suministro",
      bandera: "https://flagcdn.com/w40/us.png",
      texto: "El 14 oct. el Nasdaq cayó 1.88%, el S&P 500 1.11% y el Dow 0.09% tras inflación estadounidense superior a la prevista. El efecto logístico es un riesgo prospectivo sobre financiamiento, inversión y demanda, no evidencia de interrupción del comercio. Fuentes: Reuters y AP, 14 oct."
    },
    {
      titulo: "Medio Oriente | seguridad y seguros",
      bandera: "https://flagcdn.com/w40/om.png",
      texto: "Mantener seguimiento a riesgos marítimos y cláusulas de seguro en rutas expuestas a Ormuz; reconfirmar escalas, primas de riesgo y costos de combustible con proveedor."
    }
  ],
  metricas: [
    { indicador: "Huracán Trudy · Intensidad", valor: "120 km/h", tendencia: "Vientos sostenidos registrados el 15 oct. · NHC" },
    { indicador: "Trudy · Distancia a Manzanillo", valor: "735 km", tendencia: "Al sur-sureste; posición reportada, no distancia de impacto" },
    { indicador: "Hapag-Lloyd · Alza de flete", valor: "+US$1,000", tendencia: "Incremento anunciado por contenedor aplicable Asia–Oeste de México desde el 15 oct." },
    { indicador: "Hapag-Lloyd · Tarifa 40' Dry", valor: "US$6,100", tendencia: "Tarifa base publicada para ruta aplicable; verificar recargos y condiciones" },
    { indicador: "Nasdaq · Bolsa de EE. UU.", valor: "−1.88%", tendencia: "Variación al cierre del 14 oct.; indicador financiero, no retraso logístico" },
    { indicador: "S&P 500 · Bolsa de EE. UU.", valor: "−1.11%", tendencia: "Variación al cierre del 14 oct.; posible señal de incertidumbre económica" },
    { indicador: "Dow Jones · Bolsa de EE. UU.", valor: "−0.09%", tendencia: "Variación al cierre del 14 oct.; no mide movimiento de carga" },
    { indicador: "Puerto de Amberes · Operación", valor: "Por confirmar", tendencia: "Validar reanudación, ETA y atraque por buque y terminal tras la huelga" }
  ],
  recomendaciones: [
    "Prioridad 1 — Trudy (16–18 oct.): verificar alertas NHC/SMN, puertos, citas terrestres y vuelos; activar rutas alternas únicamente cuando sea necesario.",
    "Prioridad 2 — Amberes: reconfirmar atraque y conexiones tras la interrupción de tráfico; añadir holgura a los itinerarios críticos.",
    "Prioridad 3 — Asia–México: incorporar GRI vigente desde el 15 oct. y cotejar tarifa completa y recargos con la naviera.",
    "Asia e India: confirmar transbordos, feeder y posibles omisiones de escala por booking; no generalizar retrasos a todos los puertos.",
    "Brasil: anticipar cargos de noviembre y consultar las condiciones particulares de terminales; el feriado nacional ocurrió el 12 de octubre.",
    "Riesgo financiero: monitorear tasas, combustible y demanda de electrónica sin presentar la caída bursátil como interrupción operativa."
  ]
};

const retrasos = [
  { puerto: "México · Manzanillo", tiempo: "Por confirmar", estado: "Vigilancia por Trudy; confirmar capitanía, terminal y cita." },
  { puerto: "México · Lázaro Cárdenas", tiempo: "Por confirmar", estado: "Evaluar meteorología, accesos y operación por terminal." },
  { puerto: "México · Puerto Vallarta", tiempo: "Por confirmar", estado: "Validar vuelos y accesos ante evolución del temporal." },
  { puerto: "Bélgica · Amberes", tiempo: "Variable", estado: "Confirmar recuperación tras huelga y atraque de cada buque." },
  { puerto: "China · Shanghái", tiempo: "Variable", estado: "Confirmar cola por terminal y reserva post-Golden Week." },
  { puerto: "Singapur / Colombo", tiempo: "Variable", estado: "Validar conexiones, rollovers y feeders." },
  { puerto: "India · Mundra / Nhava Sheva", tiempo: "Variable", estado: "Confirmar omisiones y escala por servicio y buque." },
  { puerto: "Europa · Rin", tiempo: "Variable", estado: "Confirmar calado y capacidad de barcazas según tramo." }
];

// Fuentes: NHC aviso 8 (15 oct.); Hapag-Lloyd GRI efectivo 15 oct.; Reuters/AP (14 oct.).
// Los datos no confirmados en tiempo real se presentan como riesgos sujetos a verificación.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">RETRASOS PORTUARIOS · 15 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado operativo y demoras por verificar</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Tiempo reportado</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 15 de octubre de 2026. Fuentes: NHC, Hapag-Lloyd, Reuters y AP. Pronósticos y restricciones sujetos a cambios y a confirmación con autoridades, terminales, aerolíneas y navieras.</span>
        </div>
      </footer>
    </main>
  );
}
