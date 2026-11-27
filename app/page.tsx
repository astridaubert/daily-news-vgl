import Image from "next/image";

// DATOS EDITABLES — CORTE 27 NOVIEMBRE 2026
const brief = {
  "fecha": "viernes 27 de noviembre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Riesgo global medio-alto. Prioridades: restricciones carreteras en México, reaperturas y horarios especiales tras Thanksgiving en Estados Unidos, y congestión portuaria e intermodal en el norte de Europa. Black Friday y los recargos anunciados para diciembre requieren anticipar capacidad.",
  "noticias": [
    {
      "region": "MÉXICO · AUTOTRANSPORTE",
      "modo": "MEDIA-ALTA · TRANSPORTE TERRESTRE",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/5/50/Freight_truck_as_seen_on_highway.jpg",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "México: restricciones carreteras y seguimiento a negociaciones del autotransporte",
      "dato": "Reportes del 27 nov. registran cierres parciales, manifestaciones e incidentes en distintas carreteras. La reunión de seguimiento entre autoridades y transportistas estaba prevista para hoy; no se ha verificado su resultado ni un cierre generalizado de la red. Fuentes: https://www.nmas.com.mx/movilidad/que-carreteras-mexico-estan-cerradas-hoy-27-de-noviembre-2026-accidentes-cierre-bloqueos/ · https://www.adn40.mx/mexico/2026-11-20/transportistas-mantienen-amenaza-con-un-nuevo-paro-nacional-habra-bloqueos-en-carreteras-esta-semana/",
      "impacto": "Posible variabilidad de tiempos de tránsito y entregas; las restricciones pueden cambiar durante el día.",
      "accion": "Consultar avisos vigentes de CAPUFE y Guardia Nacional, validar la ruta con el transportista y comunicar cambios de ETA.",
      "fotoCredito": "Imagen ilustrativa: Soulful sunshine · CC BY-SA 4.0 · recorte",
      "fotoUrl": "https://commons.wikimedia.org/wiki/File:Freight_truck_as_seen_on_highway.jpg"
    },
    {
      "region": "EUROPA · NORTE DE EUROPA",
      "modo": "ALTA · CONGESTIÓN Y EQUIPOS",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/4/45/Shipping_container_stacks_-_Port_of_Rotterdam_-_2017_-_3.jpg",
      "bandera": "https://flagcdn.com/w40/eu.png",
      "titular": "Europa: congestión en Reino Unido y presión sobre contenedores vacíos",
      "dato": "El reporte del 26 nov. señala que los retrasos de buques, el clima y las restricciones ferroviarias siguen dificultando la recuperación de la red británica e irlandesa. La congestión del norte de Europa retrasa también el retorno de equipos vacíos a Asia. Fuente: https://www.containersignal.com/posts/2026-11-26-cs-daily/",
      "impacto": "Posibles retrasos de atraque y conexiones intermodales, menor confiabilidad de itinerarios y presión para conseguir equipo en reservas de diciembre.",
      "accion": "Retirar importaciones disponibles cuanto antes, verificar instrucciones de devolución de vacíos y reservar transporte interior con flexibilidad.",
      "fotoCredito": "Archivo: AgainErick · CC BY-SA 4.0 · recorte",
      "fotoUrl": "https://commons.wikimedia.org/wiki/File:Shipping_container_stacks_-_Port_of_Rotterdam_-_2017_-_3.jpg"
    },
    {
      "region": "EE. UU. · TRANSPORTE MARÍTIMO Y FRONTERA",
      "modo": "MEDIA-ALTA · HORARIOS ESPECIALES",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/ba/New_York_container_terminal_%28Staten_Island%29_north_gate.jpg",
      "bandera": "https://flagcdn.com/w40/us.png",
      "titular": "EE. UU.: reaperturas y horarios especiales tras Thanksgiving",
      "dato": "Tras los cierres programados del 26 nov., SC Ports prevé reabrir accesos de contenedores el viernes 27; las operaciones de carga suelta mantienen restricciones. Otros puertos pueden operar con horarios diferenciados. Fuentes: https://scspa.com/advisories/thanksgiving-holiday-gate-hours-2/ · https://www.oocl.com/usa/eng/localinformation/localnews/2026/Pages/2026NOV24.aspx",
      "impacto": "Menos ventanas disponibles para retiro y entrega; posibles costos de almacenaje y cambios de itinerario.",
      "accion": "Confirmar horario efectivo, citas y días libres por terminal antes de programar retiros.",
      "fotoCredito": "Imagen de archivo: Jim.henderson / Wikimedia Commons · CC0",
      "fotoUrl": "https://commons.wikimedia.org/wiki/File:New_York_container_terminal_(Staten_Island)_north_gate.jpg"
    }
  ],
  "vigilancia": [
    {
      "titulo": "España | Las Palmas",
      "bandera": "https://flagcdn.com/w40/es.png",
      "texto": "Transportistas preparan una posible suspensión del servicio de contenedores desde el 30 nov.; no es un paro activo confirmado. https://in-supply.co.uk/las-palmas-hauliers-prepare-container-transport-stoppage/"
    },
    {
      "titulo": "Europa | Reino Unido e Irlanda",
      "bandera": "https://flagcdn.com/w40/gb.png",
      "texto": "Maersk mantiene advertencia de acumulación de carga y presión en la red interior. https://www.maersk.com/news/articles/2026/11/24/uki-logistics-network-operational-update"
    },
    {
      "titulo": "Asia–Europa | Recargos de temporada",
      "bandera": "",
      "texto": "Drewry informa anuncios de PSS de US$1,000–1,500/FEU desde el 1 dic. en rutas Asia–Europa. Confirmar condiciones por naviera. https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update"
    },
    {
      "titulo": "Brasil | Rio Grande do Norte",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "La suspensión temporal fue reportada el 25 nov.; no se ha verificado el resultado de la audiencia prevista el 26. Confirmar con operador local."
    },
    {
      "titulo": "Colombia | Recuperación tras protestas",
      "bandera": "https://flagcdn.com/w40/co.png",
      "texto": "Movilizaciones del 17 al 22 nov.; verificar entregas pendientes. No se confirmó participación de trabajadores portuarios. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-24-11-2026"
    },
    {
      "titulo": "Europa | Bélgica, conexiones interiores",
      "bandera": "https://flagcdn.com/w40/be.png",
      "texto": "Sin interrupción portuaria importante reportada en el informe del 24 nov.; verificar conexiones interiores y aduanas. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-24-11-2026"
    },
    {
      "titulo": "EE. UU. | LA/Long Beach, acuerdo preliminar",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "PMA e ILWU Local 26 alcanzaron acuerdo preliminar el 21 nov., evitando el paro inmediato. Ratificación sindical pendiente; no divulgar huelga activa. https://www.pmanet.org/press_releases/"
    },
    {
      "titulo": "EE. UU. | Intermodal de Costa Oeste",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Reporte del 24 nov.: permanencia ferroviaria media de 10 días en Los Ángeles y 11 en Long Beach. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-24-11-2026"
    },
    {
      "titulo": "EE. UU. | Operación posterior a Thanksgiving",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "El 27 nov. se prevén reaperturas y horarios diferenciados; verificar cada terminal. https://scspa.com/advisories/thanksgiving-holiday-gate-hours-2/"
    },
    {
      "titulo": "México | Lázaro Cárdenas y CPKC",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "No se dispone de actualización independiente de demoras ferroviarias; confirmar ETA con naviera, ferrocarril y terminal."
    },
    {
      "titulo": "México | Carreteras y puertos",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Reportes del 27 nov. registran restricciones e incidentes; validar situación vigente antes del despacho. https://www.nmas.com.mx/movilidad/que-carreteras-mexico-estan-cerradas-hoy-27-de-noviembre-2026-accidentes-cierre-bloqueos/"
    },
    {
      "titulo": "Europa | Francia, España e Italia",
      "bandera": "https://flagcdn.com/w40/eu.png",
      "texto": "Huelgas y paros del 17–21 nov. son antecedentes; revisar recuperación de terminales, corredores ferroviarios y citas. No presentarlos como huelgas vigentes hoy sin aviso puntual."
    },
    {
      "titulo": "Asia | Suez y conexiones",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Drewry informa el 26 nov. que 60 buques transitaron el canal la semana pasada. El retorno parcial no implica normalización general. https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update"
    },
    {
      "titulo": "Asia | Carga aérea",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Maersk identifica presión estacional del 27 al 30 nov. por Black Friday y Cyber Monday; confirmar capacidad y tarifas. https://www.maersk.com/news/articles/2026/11/06/maersk-asia-pacific-market-update-november"
    },
    {
      "titulo": "India | Akvan y puertos orientales",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Sin confirmación independiente de cierre vigente en la costa oriental; Nhava Sheva registra presión por exportaciones según reporte del 24 nov. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-24-11-2026"
    },
    {
      "titulo": "Brasil | GRI Asia–Latinoamérica desde 1 dic.",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Hapag-Lloyd y CMA CGM anunciaron un GRI de US$1,000 por contenedor efectivo desde el 1 dic. para rutas elegibles Asia–Latinoamérica, incluido México. Confirmar alcance, fecha de carga, equipo y tarifa final. https://www.cma-cgm.com/news/5705/rate-announcement-from-asia-to-latin-america?cat=prices-surcharges"
    },
    {
      "titulo": "Brasil | Santos",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Operación de terminales estable según informe del 24 nov.; espera media de buques de 1.11 días. https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-24-11-2026"
    },
    {
      "titulo": "Tarifas | Drewry 26 nov.",
      "bandera": "",
      "texto": "WCI US$4,032/FEU (−3% semanal). Shanghai–LA US$6,437 (−8%); Nueva York US$7,615 (−7%); Róterdam US$3,485 (estable según Drewry); Génova US$4,802 (+8%). https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update"
    },
    {
      "titulo": "Capacidad | Cancelaciones anunciadas",
      "bandera": "",
      "texto": "Drewry reporta 7 cancelaciones anunciadas para la próxima semana en el transpacífico y 7 en Asia–Europa/Mediterráneo. Son itinerarios anunciados, no cancelaciones ejecutadas. https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update"
    },
    {
      "titulo": "Calendario | Próximos hitos",
      "bandera": "",
      "texto": "27–30 nov.: Black Friday y Cyber Monday; 30 nov.: posible suspensión de transporte de contenedores en Las Palmas; 1 dic.: ajustes tarifarios anunciados."
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
      "valor": "US$6,437",
      "tendencia": "por FEU · −8% semanal · Drewry 26 nov."
    },
    {
      "indicador": "Shanghai–Nueva York",
      "valor": "US$7,615",
      "tendencia": "por FEU · −7% semanal · Drewry 26 nov."
    },
    {
      "indicador": "Shanghai–Róterdam",
      "valor": "US$3,485",
      "tendencia": "por FEU · estable según Drewry · Drewry 26 nov."
    },
    {
      "indicador": "Shanghai–Génova",
      "valor": "US$4,802",
      "tendencia": "por FEU · +8% semanal · Drewry 26 nov."
    },
    {
      "indicador": "Drewry WCI global",
      "valor": "US$4,032",
      "tendencia": "por FEU · −3% semanal · Drewry 26 nov."
    },
    {
      "indicador": "Blank sailings · semana próxima",
      "valor": "14",
      "tendencia": "7 transpacífico + 7 Asia–Europa/Med · Drewry 26 nov."
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
    "Europa: acelerar retiros y confirmar devolución de vacíos; anticipar reservas de diciembre.",
    "México: confirmar restricciones carreteras vigentes y coordinar contingencias con transportistas.",
    "Brasil: confirmar resultado de la audiencia del 26 y disponibilidad de unidades; no asumir reanudación de huelga.",
    "EE. UU.: confirmar reaperturas y horarios especiales del 27 nov., citas y días libres.",
    "India: tras Akvan, validar la continuidad de las operaciones en la costa oriental a nivel de puerto y transportista sin extrapolar cierres a todo el país.",
    "Asia–Latinoamérica: Hapag-Lloyd y CMA CGM anunciaron GRI de US$1,000 desde 1 dic. (incluye México y Brasil según rutas). Revalidar vigencia, equipos y cotización final.",
    "Mercado: utilizar los indicadores Drewry del 26 nov. como referencia, no como cotizaciones all-in; revalidar recargos de diciembre.",
    "Bélgica: verificar recuperación de conexiones interiores y posibles afectaciones ferroviarias del 24 al 26 nov.",
    "Fuentes recientes: https://www.nmas.com.mx/movilidad/que-carreteras-mexico-estan-cerradas-hoy-27-de-noviembre-2026-accidentes-cierre-bloqueos/ · https://scspa.com/advisories/thanksgiving-holiday-gate-hours-2/ · https://www.containersignal.com/posts/2026-11-26-cs-daily/"
  ]
};
const retrasos = [
  {
    "puerto": "México · Manzanillo",
    "tiempo": "1.89 días · 24 nov.",
    "estado": "Espera media de buques de siete días; no medición en vivo."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Revalidar ferrocarril",
    "estado": "Sin verificación independiente de demoras vigentes; confirmar servicio y salida con operador."
  },
  {
    "puerto": "EE. UU. · LA/Long Beach",
    "tiempo": "10 / 11 días · 24 nov.",
    "estado": "Permanencia ferroviaria media; verificar citas por Thanksgiving."
  },
  {
    "puerto": "Europa · Róterdam",
    "tiempo": "1.27 días · 24 nov.",
    "estado": "Espera media de buques; retrasos en conexiones interiores."
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
    "tiempo": "26 nov. · conciliación",
    "estado": "Sin resultado verificado de la audiencia prevista el 26 nov.; confirmar operación."
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
  },
  {
    "puerto": "India · Nhava Sheva",
    "tiempo": "3.14 días · 24 nov.",
    "estado": "Espera media de buques; presión por exportación."
  },
  {
    "puerto": "Europa · Reino Unido e Irlanda",
    "tiempo": "Aviso 24 nov.",
    "estado": "Acumulación de carga y restricciones interiores; recuperación gradual."
  },
  {
    "puerto": "EE. UU. · Nueva York / Charleston",
    "tiempo": "27 nov. · reaperturas",
    "estado": "Horarios diferenciados tras el festivo; confirmar acceso y citas."
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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 27 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Actualización: viernes 27 de noviembre de 2026. Fuentes: SC Ports, OOCL, Maersk, Kuehne+Nagel, Drewry, ContainerSignal y prensa local. Las restricciones pueden cambiar; las tarifas no son cotizaciones all-in.</span>
        </div>
      </footer>
    </main>
  );
}
