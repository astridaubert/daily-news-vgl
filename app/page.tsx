import Image from "next/image";

// DATOS EDITABLES — 23 OCTUBRE 2026
const brief = {
  "fecha": "viernes 23 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Dos alertas climáticas marcan la operación: Vance se convirtió en huracán frente al Pacífico mexicano y Champi provocó 977 cancelaciones aéreas en Taiwán. Revisa riesgos, fuentes y acciones para proteger tus embarques.",
  "noticias": [
    {
      "region": "MÉXICO · PACÍFICO",
      "modo": "ALTO · HURACÁN VANCE",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Nora_1997-09-21_1630Z.png",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Vance ya es huracán: vigilar Manzanillo y Lázaro Cárdenas",
      "dato": "El NHC confirmó el 23 de octubre a las 03:00 CST vientos de 140 km/h, ubicación a 930 km al sur-sureste de Manzanillo y desplazamiento al nor-noroeste de 9 km/h. Se prevé intensificación rápida; no había avisos costeros activos en ese corte. Fuente: https://prod-west-nhc.woc.noaa.gov/mobile/text/refresh/MIATCPEP2%2Bhtml/230859.shtml",
      "impacto": "Oleaje y corrientes peligrosas pueden alterar navegación, ventanas de atraque y traslados costeros durante el fin de semana. Posibles cierres son un riesgo preventivo, no una suspensión general confirmada.",
      "accion": "Confirmar Capitanía de Puerto, SEMAR y terminal antes de mover carga crítica; acordar planes alternativos para embarques del 24 al 26 de octubre."
    },
    {
      "region": "TAIWÁN · ASIA ORIENTAL",
      "modo": "ALTO · TIFÓN CHAMPI",
      "imagen": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200",
      "bandera": "https://flagcdn.com/w40/tw.png",
      "titular": "Champi interrumpe vuelos: 977 cancelaciones en Taiwán",
      "dato": "La autoridad aeronáutica reportó 977 vuelos cancelados hasta las 10:00 del 23 de octubre: 262 domésticos y 715 internacionales y a través del estrecho. En Taoyuan se cancelaron 596, incluidos 75 cargueros; se suspendieron 96 viajes de ferry. Fuente: https://focustaiwan.tw/society/202610230007",
      "impacto": "Riesgo inmediato de carga aérea retenida, conexiones perdidas y reprogramaciones. La normalización puede generar acumulaciones incluso después del paso del tifón.",
      "accion": "Reconfirmar cada vuelo, guía aérea y conexión con origen/destino Taiwán entre el 23 y el 26 de octubre; revisar avisos de aerolínea y puerto."
    },
    {
      "region": "GLOBAL · COMBUSTIBLE Y PUERTOS",
      "modo": "VIGILANCIA · COSTOS Y CAPACIDAD",
      "imagen": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
      "bandera": "",
      "titular": "Combustible, congestión y posibles acciones laborales presionan la logística",
      "dato": "Se mantiene vigilancia sobre recargos aéreos, congestión en Brasil e India y una posible jornada internacional de protesta portuaria el 30 de octubre. La afectación de cada terminal y los indicadores de costos requieren confirmación local antes de publicarse como cierre o tarifa vigente.",
      "impacto": "Las restricciones puntuales pueden modificar ETA, espacios de carga y cotizaciones sin implicar necesariamente un paro generalizado.",
      "accion": "Solicitar vigencia de tarifa, recargos desglosados y confirmación de disponibilidad con naviera, aerolínea, terminal y agente local."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Pacífico: Vance",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "NHC (23 oct., 03:00 CST): huracán categoría 1, 140 km/h, 930 km SSE de Manzanillo. Vigilar del 24 al 26 de octubre oleaje, navegación y accesos. No se había emitido aviso costero en ese corte. https://www.nhc.noaa.gov/"
    },
    {
      "titulo": "México | Golfo y frente frío",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Se reportan restricciones de navegación en Veracruz, Coatzacoalcos, Alvarado, Dos Bocas, Frontera y Sánchez Magallanes. La vigencia y clase de embarcación afectada deben comprobarse con SEMAR antes de afirmar cierres actuales. https://meteorologia.semar.gob.mx/puertos/"
    },
    {
      "titulo": "México | Carreteras y CDMX",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Manifestaciones, eventos masivos y accidentes pueden generar cierres puntuales en accesos de CDMX y carreteras federales. Validar CAPUFE, tráfico y horario antes de programar recolecciones o cruces."
    },
    {
      "titulo": "Estados Unidos | Frontera y puertos",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Revisar documentación e inspecciones en cruces México–EE. UU. y tiempos de recogida/ferrocarril en Los Ángeles y Long Beach. Las posibles acciones laborales del 30 de octubre no equivalen a un cierre ya confirmado."
    },
    {
      "titulo": "Brasil | Navegantes y aduanas",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Referencia operativa aportada: Navegantes ~5 días de espera y 78% de utilización de patio, Itajaí ~2 días y Manaus ~1 día; cifras aún sin corte verificable al 23 de octubre. Confirmar con terminal y Receita Federal posibles demoras aduanales."
    },
    {
      "titulo": "India | Nhava Sheva y servicio EPIC2/IOS",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Referencia de Nhava Sheva: 1.83 días de espera (sin confirmación actual). Revisar omisiones de escala anunciadas para Tsingtao Express, Kyoto Express y Sofia Express directamente con CMA CGM; reconfirmar booking y cut-off."
    },
    {
      "titulo": "Taiwán | Champi y carga aérea",
      "bandera": "https://flagcdn.com/w40/tw.png",
      "texto": "977 vuelos cancelados (incluidos 75 de carga en Taoyuan) y 96 servicios de ferry suspendidos reportados el 23 de octubre. Confirmar horarios, reprogramaciones y estado de terminales antes de despachar. https://focustaiwan.tw/society/202610230007"
    },
    {
      "titulo": "Europa | Rotterdam, Amberes y Francia",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Revisar barcazas y feeders tras la recuperación de Rotterdam, posibles retrasos en Amberes y avisos laborales franceses. No mantener como vigente una huelga aérea del 17 al 21 de octubre sin nuevo aviso."
    },
    {
      "titulo": "Puertos | Posibles acciones laborales del 30 oct.",
      "bandera": "",
      "texto": "Se ha señalado una convocatoria internacional para el 30 de octubre; validar participación, alcance y horarios por puerto. No presentar la cifra de terminales afectadas ni contenedores retenidos como hechos confirmados."
    },
    {
      "titulo": "Calendario | Próximos festivos",
      "bandera": "",
      "texto": "1 nov. Todos los Santos (según país); 2 nov. Día de Muertos (México, no descanso federal obligatorio); 8 nov. Diwali (India); 13–16 nov. Buen Fin; 16 nov. descanso por Revolución Mexicana; 20 nov. Consciência Negra (Brasil); 24 nov. Guru Nanak Jayanti (India); 26 nov. Thanksgiving (EE. UU.)."
    }
  ],
  "metricas": [
    {
      "indicador": "Vance · viento sostenido",
      "valor": "140 km/h",
      "tendencia": "Huracán categoría 1 · NHC 23 oct., 03:00 CST."
    },
    {
      "indicador": "Vance · distancia a Manzanillo",
      "valor": "930 km",
      "tendencia": "Al sur-sureste del puerto · corte NHC 23 oct."
    },
    {
      "indicador": "Taiwán · vuelos cancelados",
      "valor": "977",
      "tendencia": "Acumulado comunicado hasta las 10:00 del 23 oct.; no son solo vuelos de carga."
    },
    {
      "indicador": "Taoyuan · vuelos cargueros cancelados",
      "valor": "75",
      "tendencia": "Incluidos dentro de los 596 vuelos cancelados en el aeropuerto."
    },
    {
      "indicador": "Taiwán · servicios de ferry suspendidos",
      "valor": "96",
      "tendencia": "Salidas afectadas en 10 rutas; reporte del 23 oct."
    },
    {
      "indicador": "Brasil · espera en Navegantes",
      "valor": "~5 días",
      "tendencia": "Referencia aportada, NO verificada al 23 oct.; consultar terminal."
    },
    {
      "indicador": "India · espera en Nhava Sheva",
      "valor": "1.83 días",
      "tendencia": "Referencia aportada, pendiente de actualización operativa."
    },
    {
      "indicador": "Puertos · cierres preventivos",
      "valor": "Por validar",
      "tendencia": "Consultar avisos oficiales por terminal: no inferir cierres por pronóstico."
    }
  ],
  "recomendaciones": [
    "México: revisar diariamente avisos de NHC, SEMAR y terminales para Manzanillo, Lázaro Cárdenas y puertos del Golfo antes de adelantar carga.",
    "Taiwán: reconfirmar vuelos cargueros, conexiones y ventanas de embarque del 23 al 26 de octubre; considerar alternativas con el operador.",
    "Combustible y tarifas: cotizar con recargos desglosados y vigencia expresa; evitar tratar cambios del gasto aéreo como cambios automáticos de flete.",
    "Brasil e India: consultar demoras y liberación aduanal por terminal; no prometer ETA basados en referencias sin fecha verificable.",
    "Europa y EE. UU.: validar con cada puerto si participará en acciones laborales del 30 de octubre; planear planes B solo donde corresponda.",
    "Temporada alta: considerar Diwali (8 nov.), puente mexicano (16 nov.), Consciência Negra (20 nov.) y Thanksgiving (26 nov.)."
  ]
};

const retrasos = [
  {
    "puerto": "México · Manzanillo",
    "tiempo": "Seguimiento 24–26 oct.",
    "estado": "Vance: comprobar maniobras, cierres de navegación y patio en avisos locales; sin cierre general confirmado por NHC."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Validar terminal",
    "estado": "Vigilar oleaje y programación de buques por Vance."
  },
  {
    "puerto": "México · Puertos del Golfo",
    "tiempo": "Consultar SEMAR",
    "estado": "Posibles restricciones por frente frío; confirmar tipo de embarcación y puerto específico."
  },
  {
    "puerto": "Taiwán · Taoyuan",
    "tiempo": "75 vuelos de carga cancelados",
    "estado": "Incluidos en las 596 cancelaciones del aeropuerto reportadas el 23 de octubre."
  },
  {
    "puerto": "Taiwán · Keelung / Taipei",
    "tiempo": "Verificar operación",
    "estado": "Revisar avisos de terminal y naviera por Champi, no presumir horarios de reapertura."
  },
  {
    "puerto": "Brasil · Navegantes",
    "tiempo": "~5 días (referencia)",
    "estado": "Indicador aportado sin validación del corte 23 oct.; confirmar con operador."
  },
  {
    "puerto": "India · Nhava Sheva",
    "tiempo": "1.83 días (referencia)",
    "estado": "Confirmar accesos, gate y escala de naviera con actualización local."
  },
  {
    "puerto": "Europa · Rotterdam / Amberes",
    "tiempo": "Verificar conexiones",
    "estado": "Posibles demoras de barcazas/feeder tras incidentes laborales; confirmar con terminal."
  }
];

// Datos meteorológicos NHC 23 oct. 03:00 CST y CNA 23 oct. 10:00 Taiwán.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN PORTUARIA · CORTE 23 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 23 de octubre de 2026. Fuentes: NHC, CNA/Focus Taiwan, SEMAR y referencias operativas sujetas a validación. Datos sujetos a actualización y confirmación con terminal, naviera y proveedor.</span>
        </div>
      </footer>
    </main>
  );
}
