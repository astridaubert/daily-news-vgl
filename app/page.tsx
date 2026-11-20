import Image from "next/image";

// DATOS EDITABLES — CORTE 20 NOVIEMBRE 2026
const brief = {
  "fecha": "viernes 20 de noviembre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "20 de noviembre: LA/Long Beach entra en jornada clave de negociación ante el riesgo de paro desde el 21; el ciclón Akvan tocó tierra en la costa oriental de India. En Europa persisten presiones por congestión y el aviso de movilización en Bélgica para el 23. México requiere validación de rutas caso por caso.",
  "noticias": [
    {
      "region": "ESTADOS UNIDOS · LA / LONG BEACH",
      "modo": "ALTA · POSIBLE HUELGA DESDE 21 NOV.",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/us.png",
      "titular": "LA/Long Beach: negociación decisiva hoy ante posible huelga el 21",
      "dato": "Al 20 nov., PMA e ILWU Local 26 tienen prevista una sesión de negociación. La extensión contractual vence a las 00:01 del sábado 21 nov. (hora del Pacífico). PMA advierte que las seis terminales expuestas gestionan cerca del 85% de la carga de Long Beach y 33% de Los Ángeles. La huelga es un riesgo, NO un hecho confirmado. Fuentes: https://www.reuters.com/business/world-at-work/southern-california-port-employers-say-no-movement-watchmen-union-contract-talks-2026-11-18/ · https://www.ttnews.com/articles/strike-risk-los-angeles-ports",
      "impacto": "Posibles retrasos de recepción, liberaciones, trenes y drayage si se materializa el paro. El ferrocarril ya presenta demoras en enlaces de la costa oeste.",
      "accion": "Revisar llegada y disponibilidad de contenedores, adelantar retiros viables, reconfirmar ventanas terminal/rail y preparar alternativas por escrito; vigilar demurrage y detention.",
      "fotoCredito": "Imagen ilustrativa: Unsplash",
      "fotoUrl": "https://unsplash.com/photos"
    },
    {
      "region": "INDIA · GOLFO DE BENGALA",
      "modo": "ALTA · AKVAN TOCÓ TIERRA · 20 NOV.",
      "imagen": "https://images.unsplash.com/photo-1567604154063-4e079ff60be3?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/in.png",
      "titular": "Akvan toca tierra en Odisha: lluvias y riesgos de conexiones logísticas",
      "dato": "El ciclón Akvan cruzó la costa cerca de Gopalpur, Odisha, el 20 nov., con vientos de 70–80 km/h y rachas de hasta 90 km/h, según el servicio meteorológico indio. Se reportan lluvias fuertes en Odisha y Andhra Pradesh; los impactos concretos en puerto, ferrocarril y aviación deben confirmarse por operador. No hay base para afirmar cierre general de todos los puertos de India. Fuentes: https://www.reuters.com/business/environment/indias-eastern-coast-hit-by-third-cyclone-within-month-2026-11-20/ · https://mausam.imd.gov.in/backend/assets/cyclone_pdf/Tropical_cylone_advisory_no__30_based_on_0300_UTC_of_20_11_2026.pdf",
      "impacto": "Riesgo para accesos terrestres y ferroviarios, operación de terminales costeras, conexión marítima y posibles itinerarios aéreos en el este de India.",
      "accion": "Confirmar boletín IMD más reciente, gate-in, atraque, disponibilidad de tren y espacio aéreo con proveedor antes de posicionar carga; no desviar sin validar que el puerto alterno esté fuera del área expuesta.",
      "fotoCredito": "Imagen ilustrativa de oleaje: Unsplash",
      "fotoUrl": "https://unsplash.com/s/photos/storm-at-sea"
    },
    {
      "region": "EUROPA · PUERTOS DEL NORTE",
      "modo": "MEDIA-ALTA · PAROS Y RECUPERACIÓN OPERATIVA",
      "imagen": "https://images.unsplash.com/photo-1707635649895-242ea947e888?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/eu.png",
      "titular": "Europa: presión en puertos del norte y seguimiento a Bélgica",
      "dato": "El informe operativo del 17 nov. de Kuehne+Nagel identifica ocupación elevada en terminales de Hamburgo, Bremerhaven y Róterdam, y congestión en London Gateway. Francia tuvo paro portuario convocado el 17 nov.; verificar recuperación por terminal. Bélgica mantiene una movilización anunciada para el 23 nov., sujeta a confirmación de impacto local. Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-17-11-2026",
      "impacto": "Posibles retrasos puntuales en liberaciones, conexiones intermodales y ventanas de atraque; las afectaciones dependerán del puerto, terminal y servicio.",
      "accion": "Validar con navieras, terminales y agentes aduanales citas, liberaciones, ETAs y conexiones terrestres. Para Bélgica, anticipar documentación previa al 23 de noviembre.",
      "fotoCredito": "Imagen ilustrativa: Bernd Dittrich / Unsplash (Puerto de Róterdam, Países Bajos)",
      "fotoUrl": "https://unsplash.com/photos/an-overhead-view-of-cargo-containers-and-a-crane-06axNInHp-I"
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Corredores Bajío y accesos",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Los bloqueos agrícolas del 17 nov. son un antecedente; no hay confirmación suficiente para afirmar cierre nacional vigente hoy. Corroborar Federal 45, enlaces al Puerto Interior, accesos de terminales y ruta concreta con transportista/autoridades antes del despacho."
    },
    {
      "titulo": "México | Puerto Nuevo Manzanillo",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Semarnat otorgó autorización condicionada a una etapa del proyecto Puerto Nuevo Manzanillo en Cuyutlán. Se trata de infraestructura de largo plazo, no de capacidad portuaria adicional disponible hoy."
    },
    {
      "titulo": "EE. UU. | PMA e ILWU Local 26",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "PMA confirmó el 18 nov. negociaciones estancadas, nueva cita el 20 y riesgo de interrupción desde 00:01 del 21 nov. hora del Pacífico. No anunciar huelga activa antes de confirmarla. Fuente: https://www.pmanet.org/press_releases/statement-from-the-pacific-maritime-association-on-contract-talks-with-ilwu-local-26-at-ports-of-la-and-long-beach/"
    },
    {
      "titulo": "EE. UU. | Intermodal y Thanksgiving",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Persisten demoras ferroviarias de salida desde LA/LB por congestión y factores meteorológicos. Thanksgiving es el jueves 26 nov.: reservar con anticipación citas de retiro, tren, transporte terrestre y horarios de almacén."
    },
    {
      "titulo": "Europa | Francia",
      "bandera": "https://flagcdn.com/w40/fr.png",
      "texto": "Tras la convocatoria de paro portuario del 17 nov., verificar recuperación, escalas, disponibilidad de atraque y citas por terminal. No inferir huelga activa en toda Francia hoy."
    },
    {
      "titulo": "Europa | Bélgica, 23 nov.",
      "bandera": "https://flagcdn.com/w40/be.png",
      "texto": "Acción sindical nacional anunciada para el 23 nov. con posible afectación aduanera. Verificar aviso específico por puerto y aduana: no se ha confirmado un cierre marítimo nacional."
    },
    {
      "titulo": "Europa | España, Alemania, Reino Unido",
      "bandera": "https://flagcdn.com/w40/eu.png",
      "texto": "Revisar retrasos residuales de movilizaciones españolas y restricciones puntuales por niebla/viento y ventanas de atraque en puertos del norte de Europa. Confirmar afectaciones con operadores."
    },
    {
      "titulo": "Asia | China: Yantian",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Reporte operativo semanal 11–17 nov. apunta a restricciones de capacidad para megabuques tras una colisión con grúa. Exigir confirmación vigente de terminal/naviera antes de desviar carga."
    },
    {
      "titulo": "Asia | Busan y Japón",
      "bandera": "https://flagcdn.com/w40/kr.png",
      "texto": "El reporte semanal 11–17 nov. señala congestión de transbordos en Busan y ocupación elevada de patios de determinadas terminales japonesas. No extrapolar a todos los puertos; verificar conexión completa."
    },
    {
      "titulo": "India | Akvan después del impacto",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "20 nov.: Akvan tocó tierra cerca de Gopalpur, Odisha. Validar daños, accesos, disponibilidad de ferrocarril, terminales y ventanas de navegación con agentes locales; no generalizar cierres. Fuente: https://www.reuters.com/business/environment/indias-eastern-coast-hit-by-third-cyclone-within-month-2026-11-20/"
    },
    {
      "titulo": "Brasil | Santos",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "APS informó contingencia de sus sistemas administrativos tras incidente del 6 nov.; verificar documentación y citas. Fuente: https://www.porttechnology.org/news/safety-and-security/port-of-santos-cyber-incident/"
    },
    {
      "titulo": "Brasil | Feriado 20 nov.",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Día Nacional de Zumbi y de la Conciencia Negra: reconfirmar horarios de agentes, bancos, almacenes y terminales; no asumir suspensión uniforme."
    },
    {
      "titulo": "Tarifas | Referencia de mercado 17 nov.",
      "bandera": "",
      "texto": "Indicadores aportados en el reporte de 19 nov., referidos al 17: Asia–Costa Oeste de EE. UU. US$8,459/FEU (+3%); Asia–Costa Este US$9,848 (+1%); Asia–norte de Europa US$3,407 (sin cambio); Asia–Mediterráneo US$4,295 (-1%). No son cotizaciones all-in ni tarifas Asia–México."
    },
    {
      "titulo": "Calendario | Próximos hitos",
      "bandera": "",
      "texto": "20 nov.: negociación LA/LB, impacto de Akvan en India y feriado en Brasil; 21 nov. 00:01 PT: posible inicio de paro LA/LB; 23 nov.: movilización anunciada en Bélgica; 26 nov.: Thanksgiving en EE. UU."
    }
  ],
  "metricas": [
    {
      "indicador": "Asia–Costa Oeste EE. UU.",
      "valor": "US$8,459",
      "tendencia": "FEU · +3% semanal · referencia 17 nov."
    },
    {
      "indicador": "Asia–Costa Este EE. UU.",
      "valor": "US$9,848",
      "tendencia": "FEU · +1% semanal · referencia 17 nov."
    },
    {
      "indicador": "Asia–norte de Europa",
      "valor": "US$3,407",
      "tendencia": "FEU · sin cambio · referencia 17 nov."
    },
    {
      "indicador": "Asia–Mediterráneo",
      "valor": "US$4,295",
      "tendencia": "FEU · -1% semanal · referencia 17 nov."
    },
    {
      "indicador": "LA/LB · riesgo de paro",
      "valor": "21 nov.",
      "tendencia": "00:01 PT; sin paro confirmado al corte"
    },
    {
      "indicador": "India · ciclón Akvan",
      "valor": "Impacto 20 nov.",
      "tendencia": "Odisha · verificar conectividad"
    },
    {
      "indicador": "Bélgica · acción sindical",
      "valor": "23 nov.",
      "tendencia": "Afectación por confirmar"
    },
    {
      "indicador": "Brasil · feriado",
      "valor": "20 nov.",
      "tendencia": "Validar horarios de proveedores"
    }
  ],
  "recomendaciones": [
    "Estados Unidos: gestionar contenedores sensibles antes del vencimiento del contrato de ILWU Local 26; confirmar citas, trenes, drayage y costos de almacenamiento. Riesgo de paro desde 21 nov., no huelga activa al corte.",
    "India: Akvan ya tocó tierra; consultar avisos posteriores al impacto y confirmar continuidad por terminal, carretera, tren y aerolínea antes de programar o desviar carga.",
    "Brasil / Santos: preparar alternativas documentales ante contingencia administrativa; la situación no equivale a cierre general del puerto.",
    "Europa: confirmar recuperación de Francia y España; revisar liberaciones aduaneras en Bélgica antes del 23 nov. y afectaciones por clima en puertos concretos.",
    "México: confirmar circulación terrestre y accesos a puertos con información operativa local; no reciclar bloqueos o cierres de días anteriores como vigentes.",
    "Mercado: referencias tarifarias del 17 nov. no equivalen a cotizaciones all-in. Validar equipo, ruta, PSS, días libres, transbordos y disponibilidad.",
    "Calendario: Brasil 20 nov. y Thanksgiving EE. UU. 26 nov.; reservar transporte, citas y gestionar documentos con anticipación.",
    "Fuentes: PMA https://www.pmanet.org/press_releases/statement-from-the-pacific-maritime-association-on-contract-talks-with-ilwu-local-26-at-ports-of-la-and-long-beach/ · IMD https://mausam.imd.gov.in/backend/assets/cyclone_pdf/32__National_Bulletin_No_32-19Nov2026_1430IST.pdf · Santos https://www.porttechnology.org/news/safety-and-security/port-of-santos-cyber-incident/ · tarifas de referencia y Europa del reporte operativo suministrado (corte 19 nov. 2026)."
  ]
};
const retrasos = [
  {
    "puerto": "EE. UU. · LA/Long Beach",
    "tiempo": "21 nov. · riesgo",
    "estado": "PMA e ILWU Local 26: posible huelga desde 00:01 PT del sábado; NO cierre confirmado."
  },
  {
    "puerto": "India · Andhra Pradesh/Odisha",
    "tiempo": "20 nov. · impacto",
    "estado": "Akvan tocó tierra cerca de Gopalpur; comprobar continuidad de terminales, trenes y accesos."
  },
  {
    "puerto": "Brasil · Santos",
    "tiempo": "Contingencia",
    "estado": "Sistemas administrativos afectados; operación logística general no reportada como detenida."
  },
  {
    "puerto": "Europa · Francia",
    "tiempo": "Recuperación",
    "estado": "Revalidar citas y atrasos después de la convocatoria portuaria del 17 nov."
  },
  {
    "puerto": "Europa · Bélgica",
    "tiempo": "23 nov. · aviso",
    "estado": "Movilización sindical anunciada; confirmar posibles impactos aduaneros."
  },
  {
    "puerto": "China · Yantian",
    "tiempo": "Revalidar",
    "estado": "Reporte semanal señala limitaciones para megabuques tras incidente de grúa."
  },
  {
    "puerto": "Corea · Busan",
    "tiempo": "Conexiones",
    "estado": "Cuellos de botella de transbordo en reporte semanal; ETAs por confirmar."
  },
  {
    "puerto": "México · Bajío",
    "tiempo": "Monitoreo",
    "estado": "Revalidar tramos antes del despacho; no asumir bloqueos del 17 activos hoy."
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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 20 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte editorial: 20 de noviembre de 2026. Fuentes: Reuters (20 nov., India; 18 nov., LA/LB), PMA, Transport Topics (18 nov.) y Kuehne+Nagel (reporte 11–17 nov.). Las referencias tarifarias mantienen fecha propia del 17 nov.; no son cotizaciones en vivo. Validar situación y horarios por terminal y naviera.</span>
        </div>
      </footer>
    </main>
  );
}
