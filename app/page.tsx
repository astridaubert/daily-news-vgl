import Image from "next/image";

// DATOS EDITABLES — CORTE 13 NOVIEMBRE 2026
const brief = {
fecha:"viernes 13 de noviembre de 2026",
titulo:"Vector Global Logistics | Radar Logístico Global",
subtitulo:"13 de noviembre: Chile logra acuerdo con transportistas, pero persisten bloqueos locales; Shanghái registra mayor espera y blank sailings; Drewry confirma baja de 2% en fletes globales. LA/Long Beach continúa negociando hasta el 20, Santos opera bajo recuperación digital y México se prepara para el feriado del 16.",
noticias:[
  {
    "region": "CHILE · TRANSPORTE TERRESTRE",
    "modo": "ALTA · ACUERDO Y BLOQUEOS RESIDUALES",
    "imagen": "https://commons.wikimedia.org/wiki/Special:FilePath/Ruta_5_%2815483691449%29.jpg?width=1200",
    "fotoCredito": "Foto ilustrativa: order_242 / Wikimedia Commons · CC BY-SA 2.0",
    "fotoUrl": "https://commons.wikimedia.org/wiki/File:Ruta_5_(15483691449).jpg",
    "bandera": "https://flagcdn.com/w40/cl.png",
    "titular": "Chile logra acuerdo con transportistas; persisten bloqueos puntuales",
    "dato": "El 12 nov. el Gobierno y las principales organizaciones de transportistas alcanzaron un acuerdo para levantar la paralización de tres días. El 13 nov. se reportan protestas residuales y cierres intermitentes en algunas zonas, entre ellas La Araucanía. El conflicto estuvo asociado al precio del diésel; se anunciaron medidas de alivio sujetas, en parte, a aprobación legislativa. Fuente (13 nov.): https://www.salmonbusiness.com/chile-truckers-reach-deal-to-end-strike-but-roadblocks-persist/",
    "impacto": "Mejora el escenario general para rutas chilenas, pero los retiros y entregas terrestres, especialmente cargas refrigeradas o con ventanas estrictas, todavía pueden enfrentar cierres locales.",
    "accion": "Confirmar tramo, tránsito por Ruta 5 y disponibilidad de camiones antes de fijar citas hacia San Antonio, Valparaíso, Iquique o el sur."
  },
  {
    "region": "CHINA · SHANGHÁI Y ASIA",
    "modo": "ALTA · CONGESTIÓN Y BLANK SAILINGS",
    "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
    "bandera": "https://flagcdn.com/w40/cn.png",
    "titular": "Shanghái vuelve a acumular esperas mientras navieras reducen salidas",
    "dato": "Drewry informó el 12 nov. que la espera media en Shanghái pasó de 36 a 49 horas la semana anterior, revirtiendo una tendencia de mejoría. El reporte indica ocho blank sailings anunciados para la próxima semana frente a cuatro de la actual. Everstream, con datos de Kuehne+Nagel, reportó 2.12 días promedio en Shanghái y 2.23 días en Ningbo: metodologías y cortes distintos. Fuentes: https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry · https://www.everstream.ai/risk-centers/port-congestion-report-12-november-2026/",
    "impacto": "Mayor riesgo de cambios de itinerario, espacios ajustados y conexiones perdidas, especialmente en embarques con transbordo.",
    "accion": "Reconﬁrmar cut-offs, ETD, conexión y espacio con naviera; no atribuir el aumento de esperas a un tifón específico sin un aviso meteorológico confirmado."
  },
  {
    "region": "MERCADO MARÍTIMO · TARIFAS",
    "modo": "ALTA · NUEVO ÍNDICE 12 NOV.",
    "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
    "bandera": "",
    "titular": "Drewry: fletes globales caen 2%; tarifas transpacíficas retroceden",
    "dato": "En su corte del 12 nov., Drewry situó el World Container Index en US$4,305 por FEU (-2% semanal). Shanghái–Los Ángeles cayó 2% a US$7,416/FEU y Shanghái–Nueva York bajó 3% a US$9,020/FEU. Los operadores buscan gestionar capacidad con cancelaciones de salidas. Fuente: https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
    "impacto": "La caída del índice global no equivale a una baja uniforme de tarifas en todos los corredores ni elimina costos terrestres y recargos locales.",
    "accion": "Solicitar cotizaciones por ruta y vigencia; diferenciar tarifa base, recargos, demurrage/detention y condiciones de espacio."
  }
],
vigilancia:[
  {
    "titulo": "México | Monterrey, Laredo y transporte",
    "bandera": "https://flagcdn.com/w40/mx.png",
    "texto": "Tras las protestas de octubre por seguridad y costos del autotransporte, mantener seguimiento de rutas Monterrey–Nuevo Laredo/Laredo, cruces y disponibilidad de operadores. No se confirmó un nuevo paro nacional activo al 13 nov. Antecedente: https://www.freightwaves.com/news/mexican-truckers-launch-national-strike-over-highway-security-rising-costs"
  },
  {
    "titulo": "México | Feriado del lunes 16",
    "bandera": "https://flagcdn.com/w40/mx.png",
    "texto": "El 16 nov. es día de descanso oficial en México por la Revolución Mexicana. Confirmar horario de agencias aduanales, almacenes, plantas, terminales y transportistas; el feriado no implica cierre automático de todas las instalaciones. Fuente: https://embamex.sre.gob.mx/austria/images/AVISOS/DIAS_FESTIVOS_OFICIALES_MXICO_2026.pdf"
  },
  {
    "titulo": "Estados Unidos | LA/Long Beach",
    "bandera": "https://flagcdn.com/w40/us.png",
    "texto": "PMA e ILWU Local 26 extendieron conversaciones hasta el 20 nov. No hay huelga activa confirmada y los puertos siguen operando. El riesgo afecta especialmente accesos y seguridad de terminales si se rompe la negociación. Fuente: https://www.flexport.com/blog/potential-strike-250-port-watchmen-could-stall-la-and-long-beach/"
  },
  {
    "titulo": "Estados Unidos | Accesos a terminales",
    "bandera": "https://flagcdn.com/w40/us.png",
    "texto": "Mantener rutas de drayage alternativas alrededor del Vincent Thomas Bridge y validar citas de camión, movimientos ferroviarios y costos de espera. Verificar avisos oficiales de obra y afectaciones por operador."
  },
  {
    "titulo": "Europa | España posthuelga",
    "bandera": "https://flagcdn.com/w40/es.png",
    "texto": "La huelga general del 11 nov. afectó terminales de Barcelona, Valencia y Algeciras. Para el 13 nov. revisar backlog, turnos, gates y conexiones específicas; no describir la huelga de dos días antes como paro activo. Alerta: https://www.wssa.com/content/strike-alerts-chile-spain"
  },
  {
    "titulo": "Alemania | Río Rin y recargos Maersk",
    "bandera": "https://flagcdn.com/w40/de.png",
    "texto": "Maersk reactivó desde el 3 nov. recargos terrestres de €625 por contenedor afectado en Andernach y €175 en Bonn, separados de su low-water surcharge. Confirmar si el routing interior aplica. Fuente: https://www.maersk.com/news/articles/2026/11/09/andernach-inland-terminal-contingency-surcharge"
  },
  {
    "titulo": "Nórdicos/Bálticos | Recargos combustible",
    "bandera": "https://flagcdn.com/w40/dk.png",
    "texto": "Maersk anunció recargos de energía para determinados servicios Store Door desde el 11 nov. Las condiciones y porcentajes dependen del país y servicio; verificar aviso vigente antes de tarifar. Fuente: https://www.maersk.com/news/articles/2026/11/09/emergency-inland-fuel-energy-surcharge"
  },
  {
    "titulo": "China | Ningbo y Shanghái",
    "bandera": "https://flagcdn.com/w40/cn.png",
    "texto": "Everstream/Kuehne+Nagel (12 nov.) reportó 2.23 días de espera media en Ningbo y 2.12 días en Shanghái; Drewry reportó 49 horas de espera en Shanghái en un corte distinto. No son métricas en vivo ni directamente intercambiables."
  },
  {
    "titulo": "India | Reapertura de capacidad terrestre",
    "bandera": "https://flagcdn.com/w40/in.png",
    "texto": "Continuar verificando disponibilidad de transporte, documentación y espacios en Nhava Sheva, Mundra y Chennai durante la normalización operativa posterior a festividades. No se encontró evidencia suficiente para afirmar afectación actual por un ciclón llamado Arnab."
  },
  {
    "titulo": "Brasil | Santos",
    "bandera": "https://flagcdn.com/w40/br.png",
    "texto": "La Autoridad Portuaria de Santos anunció 70% de recuperación de backups después del ciberataque del 6 nov. Puerto, navegación y acceso terrestre permanecen en operación; trámites administrativos podrían requerir alternativas. Fuente: https://datamarnews.com/noticias/port-of-santos-administrative-systems-to-be-restored-gradually/"
  },
  {
    "titulo": "Chile | Ruta 5 y cargas sensibles",
    "bandera": "https://flagcdn.com/w40/cl.png",
    "texto": "Tras el acuerdo del 12 nov., algunas manifestaciones persistían el 13. Confirmar condición local de Ruta 5, accesos a puertos y movimientos de salmón/refrigerados. Fuente: https://www.salmonbusiness.com/chile-truckers-reach-deal-to-end-strike-but-roadblocks-persist/"
  },
  {
    "titulo": "Calendario | Próximos hitos",
    "bandera": "",
    "texto": "16 nov.: feriado oficial en México. 20 nov.: vence extensión de negociación laboral en LA/Long Beach. Seguimiento: recuperación digital en Santos y normalización tras huelga española del 11 nov."
  }
],
metricas:[
  {
    "indicador": "Drewry WCI · 12 nov.",
    "valor": "US$4,305",
    "tendencia": "Por FEU; -2% semanal."
  },
  {
    "indicador": "Shanghái–LA",
    "valor": "US$7,416",
    "tendencia": "Por FEU; -2% semanal, Drewry 12 nov."
  },
  {
    "indicador": "Shanghái–NY",
    "valor": "US$9,020",
    "tendencia": "Por FEU; -3% semanal, Drewry 12 nov."
  },
  {
    "indicador": "Shanghái · espera",
    "valor": "49 h",
    "tendencia": "Drewry; semana previa, frente a 36 h."
  },
  {
    "indicador": "Blank sailings",
    "valor": "8",
    "tendencia": "Anunciados para próxima semana, Drewry 12 nov."
  },
  {
    "indicador": "Andernach · Maersk",
    "valor": "€625",
    "tendencia": "Por contenedor afectado, desde 3 nov."
  },
  {
    "indicador": "Santos · backups",
    "valor": "~70%",
    "tendencia": "Recuperados según APS, informe 12 nov."
  },
  {
    "indicador": "LA/LB · plazo",
    "valor": "20 nov.",
    "tendencia": "Fin de extensión de negociación ILWU Local 26."
  }
],
recomendaciones:[
  "Chile: validar condiciones de Ruta 5 y accesos por tramo antes de programar entregas; el acuerdo con transportistas no elimina bloqueos residuales.",
  "China: revisar confirmaciones de espacio, conexiones, cut-offs y salidas canceladas. No usar una cifra de esperas como garantía de ETA.",
  "EE. UU.: monitorear negociación LA/Long Beach hasta el 20 nov.; confirmar citas y rutas de drayage, incluido el desvío del Vincent Thomas Bridge.",
  "Europa: revisar recargos elegibles de Maersk en Andernach/Bonn y Store Door en Nórdicos/Bálticos; confirmar backlog terminal por terminal tras la huelga española.",
  "Brasil: consultar con agente local los flujos documentales disponibles en Santos mientras se recuperan sistemas, sin reportar un cierre general del puerto.",
  "India: verificar espacio y disponibilidad de transportistas en Nhava Sheva, Mundra y Chennai; evitar alertas climáticas no corroboradas.",
  "México: anticipar ajustes operativos para el lunes festivo 16 nov. y reconfirmar cruces en Nuevo Laredo/Laredo.",
  "Fuentes clave: Drewry (12 nov.) https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry · Chile (13 nov.) https://www.salmonbusiness.com/chile-truckers-reach-deal-to-end-strike-but-roadblocks-persist/ · LA/LB https://www.flexport.com/blog/potential-strike-250-port-watchmen-could-stall-la-and-long-beach/ · Santos https://datamarnews.com/noticias/port-of-santos-administrative-systems-to-be-restored-gradually/"
]
};
const retrasos=[
  {
    "puerto": "China · Shanghái",
    "tiempo": "49 horas",
    "estado": "Drewry, dato reportado 12 nov. para semana previa; eran 36 horas la semana anterior."
  },
  {
    "puerto": "China · Ningbo",
    "tiempo": "2.23 días",
    "estado": "Everstream/Kuehne+Nagel, reporte 12 nov.; promedio según metodología del proveedor."
  },
  {
    "puerto": "Chile · Ruta 5",
    "tiempo": "13 nov. · verificar",
    "estado": "Acuerdo para levantar paro; algunos bloqueos locales persistían."
  },
  {
    "puerto": "España · Valencia/Barcelona",
    "tiempo": "Posthuelga",
    "estado": "11 nov. fue el paro; confirmar rezago y turnos con cada terminal."
  },
  {
    "puerto": "Alemania · Andernach",
    "tiempo": "€625",
    "estado": "Recargo Maersk por contenedor afectado; desde el 3 nov."
  },
  {
    "puerto": "Alemania · Bonn",
    "tiempo": "€175",
    "estado": "Recargo Maersk por contenedor afectado; desde el 3 nov."
  },
  {
    "puerto": "Brasil · Santos",
    "tiempo": "~70%",
    "estado": "Backups recuperados según APS al 12 nov.; puerto operativo."
  },
  {
    "puerto": "EE. UU. · LA/Long Beach",
    "tiempo": "20 nov.",
    "estado": "Límite negociación, sin huelga activa."
  },
  {
    "puerto": "México · operación",
    "tiempo": "16 nov.",
    "estado": "Feriado oficial; confirmar agenda de cada operador."
  }
];
// Corte editorial 13 nov. 2026. Diferenciar información confirmada, indicadores fechados y riesgos condicionales.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 13 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte editorial: 13 de noviembre de 2026. Fuentes principales: Drewry (12 nov.), APS/Datamar (12 nov.), SalmonBusiness (13 nov.), Flexport (9 nov.), Maersk (9 nov.). Datos sujetos a cambios; validar operación y horarios por terminal y naviera.</span>
        </div>
      </footer>
    </main>
  );
}
