import Image from "next/image";

// DATOS EDITABLES — CORTE 24 NOVIEMBRE 2026
const brief = {
  "fecha": "martes 24 de noviembre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Riesgo global medio-alto. Prioridades: amenaza de nuevas movilizaciones de transportistas en México, segundo día de huelga regional en Brasil y ajustes operativos por Thanksgiving en EE. UU. Europa mantiene presión portuaria e intermodal; Bélgica registra afectaciones localizadas.",
  "noticias": [
    {
      "region": "MÉXICO · AUTOTRANSPORTE",
      "modo": "MEDIA-ALTA · RIESGO DE MOVILIZACIÓN",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Transportistas mantienen advertencia de nuevo paro nacional",
      "dato": "El 24 nov. se reportó que organizaciones de carga mantienen la posibilidad de un paro por inseguridad carretera. Las mesas de negociación continúan; no se ha verificado una fecha de paro ni un cierre nacional activo. Fuentes: https://t21.com.mx/transportistas-negocian-en-dos-frentes-problematicas-que-motivaron-el-paro-nacional-continuan/ · https://cadenapolitica.com/2026/11/24/transportistas-amenazan-con-paro-nacional-por-inseguridad-en-carreteras/",
      "impacto": "Posible variabilidad de entregas terrestres y disponibilidad de unidades si se materializan las protestas.",
      "accion": "Confirmar condiciones operativas con transportistas y fuentes oficiales antes de despachar; prever margen para entregas críticas.",
      "fotoCredito": "Imagen ilustrativa: Unsplash",
      "fotoUrl": "https://unsplash.com/photos"
    },
    {
      "region": "BRASIL · RIO GRANDE DO NORTE",
      "modo": "ALTA REGIONAL · SEGUNDO DÍA",
      "imagen": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/br.png",
      "titular": "Huelga de carga en Rio Grande do Norte continúa sin acuerdo",
      "dato": "El 24 nov. la huelga entró en su segundo día tras negociaciones sin acuerdo. El sindicato reporta afectación a por lo menos 30 empresas, incluyendo distribución de mercancías. Es una movilización regional, no nacional. Fuente: https://novonoticias.com.br/sem-avanco-nas-negociacoes-caminhoneiros-no-rn-mantem-greve-por-tempo-indeterminado/",
      "impacto": "Riesgo de falta de unidades, retrasos en recogida/entrega y mayor variabilidad en conexiones terrestres dentro del estado; no implica una huelga nacional de Brasil.",
      "accion": "Confirmar adhesión de cada transportista y rutas afectadas, evaluar capacidad alternativa y notificar con anticipación cambios de ETA.",
      "fotoCredito": "Imagen ilustrativa de transporte terrestre: Unsplash",
      "fotoUrl": "https://unsplash.com/s/photos/truck-on-highway"
    },
    {
      "region": "EUROPA · NORTE DE EUROPA",
      "modo": "ALTA · CONGESTIÓN Y EQUIPOS",
      "imagen": "https://images.unsplash.com/photo-1707635649895-242ea947e888?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/eu.png",
      "titular": "Europa: congestión y afectaciones intermodales en Bélgica",
      "dato": "La movilización belga del 23 nov. afectó los puertos interiores de Lieja y Namur; Amberes-Brujas informó que su operación no fue interrumpida. También se anunciaron acciones ferroviarias del 24 al 26 nov.; confirmar el alcance por servicio. Persiste la presión de congestión en el norte de Europa. Fuentes: https://www.bairdmaritime.com/amp/story/shipping/inland-shipping/belgian-general-strike-port-traffic · https://kbl.kukla-spedition.com/news/information-update-2026 · https://www.chrobinson.com/en-gb/resources/insights-and-advisories/north-america-freight-insights/nov-2026-freight-market-update/ocean/",
      "impacto": "Posibles retrasos de atraque y conexiones intermodales, menor confiabilidad de itinerarios y presión para conseguir equipo en reservas de diciembre.",
      "accion": "Reservar con mayor anticipación, confirmar equipos vacíos y cut-offs con naviera, validar rutas alternas y mantener margen en ETAs para operaciones críticas.",
      "fotoCredito": "Imagen ilustrativa: Bernd Dittrich / Unsplash",
      "fotoUrl": "https://unsplash.com/photos/an-overhead-view-of-cargo-containers-and-a-crane-06axNInHp-I"
    }
  ],
  "vigilancia": [
    {
      "titulo": "Europa | Bélgica, conexiones interiores",
      "bandera": "https://flagcdn.com/w40/be.png",
      "texto": "El paro del 23 nov. afectó Lieja y Namur, sin interrupción reportada en Amberes-Brujas. Aviso de acciones ferroviarias 24–26 nov.; validar servicio. https://www.bairdmaritime.com/amp/story/shipping/inland-shipping/belgian-general-strike-port-traffic"
    },
    {
      "titulo": "EE. UU. | LA/Long Beach, acuerdo preliminar",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "PMA e ILWU Local 26 alcanzaron acuerdo preliminar el 21 nov., evitando el paro inmediato. Ratificación sindical pendiente; no divulgar huelga activa. https://www.pmanet.org/press_releases/"
    },
    {
      "titulo": "EE. UU. | Intermodal de Costa Oeste",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Seguimiento a contenedores pendientes de tren y disponibilidad de drayage en LA/LB. La cifra de 35,700 contenedores no se trata aquí como medición vigente al 23 sin verificación del corte."
    },
    {
      "titulo": "EE. UU. | Thanksgiving 26 nov.",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "El jueves 26 nov. habrá horarios especiales en terminales estadounidenses. Consultar por turno y terminal el calendario actualizado el 23 nov. https://www.oocl.com/usa/eng/localinformation/localnews/2026/Pages/2026Jan05.aspx?site=usa"
    },
    {
      "titulo": "México | Lázaro Cárdenas y CPKC",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "No se dispone de actualización independiente de demoras ferroviarias; confirmar ETA con naviera, ferrocarril y terminal."
    },
    {
      "titulo": "México | Carreteras y puertos",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Amenaza de nuevas protestas por inseguridad; no se verificó cierre nacional activo. Consultar avisos oficiales antes de despachar. https://t21.com.mx/transportistas-negocian-en-dos-frentes-problematicas-que-motivaron-el-paro-nacional-continuan/"
    },
    {
      "titulo": "Europa | Francia, España e Italia",
      "bandera": "https://flagcdn.com/w40/eu.png",
      "texto": "Huelgas y paros del 17–21 nov. son antecedentes; revisar recuperación de terminales, corredores ferroviarios y citas. No presentarlos como huelgas vigentes hoy sin aviso puntual."
    },
    {
      "titulo": "Asia | Suez y conexiones",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "El retorno parcial de algunas rutas al Canal de Suez no implica normalización general: seguir confirmando desvíos, transbordos, exposición de seguridad y tiempos por servicio."
    },
    {
      "titulo": "Asia | Carga aérea",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "La carga aérea mantiene presión estacional; confirmar disponibilidad y tarifa por ruta. https://www.forwardernews.com/brief/2026-11-22"
    },
    {
      "titulo": "India | Akvan y puertos orientales",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Verificar normalización de servicios tras el temporal de la semana anterior; no hay confirmación independiente de cierre vigente."
    },
    {
      "titulo": "Brasil | GRI Asia–Latinoamérica desde 1 dic.",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Hapag-Lloyd y CMA CGM anunciaron un GRI de US$1,000 por contenedor efectivo desde el 1 dic. para rutas elegibles Asia–Latinoamérica, incluido México. Confirmar alcance, fecha de carga, equipo y tarifa final. https://www.cma-cgm.com/news/5705/rate-announcement-from-asia-to-latin-america?cat=prices-surcharges"
    },
    {
      "titulo": "Brasil | Santos",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Confirmar disponibilidad y ventanas con terminal; no se ha verificado cierre general vigente."
    },
    {
      "titulo": "Tarifas | Drewry 19 nov.",
      "bandera": "",
      "texto": "WCI: US$4,176/FEU (−3% semanal). Shanghai–LA US$7,026 (−5%); Shanghai–NY US$8,194 (−9%); Rotterdam US$3,496 (sin cambio); Génova US$4,436 (+6%). https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update"
    },
    {
      "titulo": "Capacidad | Cancelaciones anunciadas",
      "bandera": "",
      "texto": "Drewry proyecta 42 blank sailings entre las semanas 48–52, 6% de 724 itinerarios previstos en grandes rutas este-oeste. Es una previsión de calendario, no cancelaciones ya ejecutadas. https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/cancelled-sailings-tracker"
    },
    {
      "titulo": "Calendario | Próximos hitos",
      "bandera": "",
      "texto": "24–26 nov.: acciones ferroviarias anunciadas en Bélgica; 26 nov.: Thanksgiving EE. UU.; 1 dic.: ajustes tarifarios anunciados en rutas elegibles Asia–Latinoamérica."
    },
    {
      "titulo": "EE. UU. | Mercado terrestre",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "El reporte del 24 nov. indica tarifa spot dry van de US$2.29/milla sin combustible, semana al 20 nov., +US$0.06 semanal. Referencia de mercado, no cotización. https://www.forwardernews.com/brief/2026-11-23"
    },
    {
      "titulo": "Chile | San Antonio",
      "bandera": "https://flagcdn.com/w40/cl.png",
      "texto": "El informe del 17 nov. indica que la huelga terminó el 6 nov.; verificar recuperación de citas y equipos. https://www.rslog.com/newsroom/rs-news-2026-11-17/"
    },
    {
      "titulo": "Oceanía | Australia y Nueva Zelanda",
      "bandera": "https://flagcdn.com/w40/au.png",
      "texto": "Reporte del 23 nov. advierte congestión y disponibilidad ajustada de espacios; confirmar reserva y salida. https://kbl.kukla-spedition.com/news/information-update-2026"
    }
  ],
  "metricas": [
    {
      "indicador": "Shanghai–Los Ángeles",
      "valor": "US$7,026",
      "tendencia": "por FEU · −5% semanal · Drewry 19 nov."
    },
    {
      "indicador": "Shanghai–Nueva York",
      "valor": "US$8,194",
      "tendencia": "por FEU · −9% semanal · Drewry 19 nov."
    },
    {
      "indicador": "Shanghai–Róterdam",
      "valor": "US$3,496",
      "tendencia": "por FEU · sin cambio · Drewry 19 nov."
    },
    {
      "indicador": "Shanghai–Génova",
      "valor": "US$4,436",
      "tendencia": "por FEU · +6% semanal · Drewry 19 nov."
    },
    {
      "indicador": "Drewry WCI global",
      "valor": "US$4,176",
      "tendencia": "por FEU · −3% semanal · 19 nov."
    },
    {
      "indicador": "Blank sailings proyectados",
      "valor": "42",
      "tendencia": "semanas 48–52 · 6% de 724 itinerarios"
    },
    {
      "indicador": "Asia–LatAm · GRI anunciado",
      "valor": "+US$1,000",
      "tendencia": "por contenedor elegible · desde 1 dic."
    },
    {
      "indicador": "LA/LB · situación sindical",
      "valor": "Acuerdo",
      "tendencia": "21 nov. · pendiente de ratificación"
    },
    {
      "indicador": "EE. UU. · Dry van spot",
      "valor": "US$2.29/milla",
      "tendencia": "Sin combustible · semana al 20 nov. · +US$0.06"
    }
  ],
  "recomendaciones": [
    "Europa: asegurar espacios y equipo para diciembre y verificar conexiones interiores belgas por servicio.",
    "México: monitorear negociaciones del autotransporte y confirmar condiciones de tránsito antes de despachar; no asumir que hay un paro nacional activo.",
    "Brasil: segundo día de huelga regional en Rio Grande do Norte; confirmar capacidad y compromisos de entrega con proveedores.",
    "EE. UU.: la huelga en LA/Long Beach se evitó con acuerdo preliminar el 21 nov., pendiente de ratificación. Mantener revisión de tren/drayage y prepararse para Thanksgiving el 26.",
    "India: tras Akvan, validar la continuidad de las operaciones en la costa oriental a nivel de puerto y transportista sin extrapolar cierres a todo el país.",
    "Asia–Latinoamérica: Hapag-Lloyd y CMA CGM anunciaron GRI de US$1,000 desde 1 dic. (incluye México y Brasil según rutas). Revalidar vigencia, equipos y cotización final.",
    "Mercado: las cuatro tarifas de Drewry corresponden al 19 nov. y son indicadores de referencia Shanghai–destino, no tarifas all-in ni Asia–México.",
    "Bélgica: verificar recuperación de conexiones interiores y posibles afectaciones ferroviarias del 24 al 26 nov.",
    "Fuentes adicionales: https://novonoticias.com.br/sem-avanco-nas-negociacoes-caminhoneiros-no-rn-mantem-greve-por-tempo-indeterminado/ · https://www.forwardernews.com/brief/2026-11-23 · https://www.oocl.com/usa/eng/localinformation/localnews/2026/Pages/2026Jan05.aspx?site=usa"
  ]
};
const retrasos = [
  {
    "puerto": "México · Manzanillo",
    "tiempo": "5–9 h · reporte 4 nov.",
    "estado": "Congestión histórica por obras Manzanillo–Colima, no espera en vivo; confirmar tránsito hoy."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Revalidar ferrocarril",
    "estado": "Sin verificación independiente de demoras vigentes; confirmar servicio y salida con operador."
  },
  {
    "puerto": "EE. UU. · LA/Long Beach",
    "tiempo": "Acuerdo 21 nov.",
    "estado": "Huelga evitada mediante acuerdo preliminar; vigilar ratificación y conexiones intermodales."
  },
  {
    "puerto": "Europa · Róterdam",
    "tiempo": "Congestión",
    "estado": "Altas ocupaciones de patio y demoras feeder/barcaza reportadas en semana 11–17 nov."
  },
  {
    "puerto": "Europa · Hamburgo/Bremerhaven",
    "tiempo": "Capacidad ajustada",
    "estado": "Seguimiento a patio, ventanas de atraque y conexión intermodal; confirmar con operador."
  },
  {
    "puerto": "Europa · Bélgica",
    "tiempo": "23–26 nov.",
    "estado": "Afectación interior el 23; Amberes-Brujas sin interrupción reportada. Verificar acciones ferroviarias anunciadas."
  },
  {
    "puerto": "Brasil · Rio Grande do Norte",
    "tiempo": "24 nov. · día 2",
    "estado": "Huelga regional continúa sin acuerdo; confirmar disponibilidad."
  },
  {
    "puerto": "India · Odisha / Paradip",
    "tiempo": "Post-Akvan",
    "estado": "Confirmar operatividad tras temporal; no se ha validado un cierre general."
  },
  {
    "puerto": "Asia · Busan / Yantian",
    "tiempo": "Monitoreo",
    "estado": "Verificar disponibilidad y conexiones específicas; no extrapolar reportes anteriores a hoy."
  }
];
// Imágenes de portada ilustrativas; no representan necesariamente los incidentes del día.

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
                {"fotoUrl" in item && "fotoCredito" in item && item.fotoCredito ? <a href={String(item.fotoUrl)} target="_blank" rel="noopener noreferrer" className="absolute bottom-1 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[9px] text-white">{String(item.fotoCredito)}</a> : null}
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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 24 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte editorial: lunes 23 de noviembre de 2026. Fuentes: Drewry (19 nov.), Kuehne+Nagel (17 nov.), T21 (4 nov.), PMA (21 nov.), navieras (GRI 1 dic.) y medios locales Brasil (23 nov.). Los riesgos futuros no son cierres confirmados. Las tarifas no son cotizaciones all-in.</span>
        </div>
      </footer>
    </main>
  );
}
