import Image from "next/image";

// DATOS EDITABLES — CORTE 17 NOVIEMBRE 2026
const brief = {
  "fecha": "martes 17 de noviembre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "17 de noviembre: LA/Long Beach enfrenta un hito laboral el 20 de noviembre, con operaciones activas y desvíos por el cierre del Vincent Thomas Bridge. China advierte vientos fuertes en áreas marítimas del 17 al 19; Drewry reporta descenso de 2% en fletes spot globales. Santos mantiene recuperación de sistemas tras ciberataque.",
  "noticias": [
    {
      "region": "ESTADOS UNIDOS · LA/LONG BEACH",
      "modo": "ALTA · RIESGO LABORAL AL 20 NOV.",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "https://flagcdn.com/w40/us.png",
      "titular": "LA/Long Beach: negociación hasta el 20; puente cerrado y riesgo en accesos",
      "dato": "ILWU Local 26 y PMA extendieron hasta el 20 de noviembre el convenio de unos 250 vigilantes portuarios. No hay huelga activa confirmada. Según PMA, una interrupción podría afectar terminales que manejan ~85% de la carga de Long Beach y ~33% de Los Ángeles. El Vincent Thomas Bridge cerró el 7 de noviembre por 16 meses. Fuentes: https://www.icis.com/explore/resources/news/2026/11/09/11241010/ports-of-la-lb-watchmen-extend-contract-through-20-november-as-negotiations-continue/ · https://portoflosangeles.org/community/vtb-deck-replacement",
      "impacto": "El escenario combina un riesgo laboral condicionado a la negociación y una restricción terrestre ya vigente. Posibles efectos: gates, accesos de camión, ventanas ferroviarias, conexiones y costos por espera; las proporciones citadas representan carga expuesta, no paralizada.",
      "accion": "Activar vigilancia diaria hasta el 20; confirmar turno de terminal, appointment, cut-off, alternativa terrestre, disponibilidad ferroviaria y reglas de demurrage/detention."
    },
    {
      "region": "CHINA · VIENTOS Y CONGESTIÓN",
      "modo": "ALTA · ALERTA MARÍTIMA 17–19 NOV.",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "titular": "Vientos fuertes previstos en mares chinos; verificar restricciones por terminal",
      "dato": "La autoridad meteorológica china pronostica vientos de fuerza 7 con ráfagas 8–9 para el 17–18 nov. en sectores del Mar Amarillo, Mar de China Oriental y estrecho de Taiwán; algunas zonas pueden alcanzar fuerza 8 y ráfagas 9–10. El 18–19 nov. persisten vientos 7–8 y ráfagas 9–10 en varias zonas. Drewry informó espera media de 49 horas en Shanghái en la semana previa, frente a 36 horas antes. Fuentes: https://www.mot.gov.cn/fuwu/yujingtishi/haiyangtianqigb/202611/t20261117_4227897.html · https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
      "impacto": "Mayor probabilidad de ajustes de practicaje, fondeo, atraque o itinerario donde las autoridades locales impongan límites por viento. No se ha verificado cierre general de Shanghái o Ningbo hoy ni debe atribuirse automáticamente a un tifón concreto.",
      "accion": "Solicitar avisos de puerto y naviera para Shanghái, Ningbo y puertos con conexión; reconfirmar ETD/ETA, gate-in, cut-off, tiempos de transbordo y posibles blank sailings."
    },
    {
      "region": "MERCADO MARÍTIMO · SPOT",
      "modo": "ACTUALIZACIÓN · DREWRY 12 NOV.",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "",
      "titular": "Tarifas spot ceden: Asia–EE. UU. y Asia–Europa bajan en el último corte",
      "dato": "Drewry WCI: US$4,305/FEU (-2% semanal). Shanghái–LA US$7,416 (-2%); Shanghái–NY US$9,020 (-3%); Shanghái–Róterdam US$3,504 (-3%); Shanghái–Génova US$4,168 (estable). Son referencias del 12 nov., última evaluación semanal publicada al 17 nov., no cotizaciones instantáneas. Fuente: https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
      "impacto": "La baja spot permite revisar ofertas, pero navieras ajustan capacidad con blank sailings y pueden aplicar FAK/PSS. El índice no incorpora necesariamente recargos de terminal, interior o demurrage.",
      "accion": "Comparar cotización neta vigente por origen/destino, transbordos, equipo y días libres; separar tarifa marítima base, PSS y costos terrestres."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Bajío y cruces con Texas",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Riesgo reportado de protestas agrícolas en Guanajuato, Jalisco, Michoacán y Querétaro; no asumir cierres de carreteras sin evidencia de autoridades viales. Para Monterrey–Nuevo Laredo/Laredo, validar ruta, transportista, citas y ventanas de cruce con operador local. Fuente de riesgo inicial: monitoreo interno; corroboración puntual pendiente."
    },
    {
      "titulo": "EE. UU. | Fecha crítica: 20 nov.",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "ILWU Local 26/PMA extendieron el contrato hasta el viernes 20 nov. Trabajadores de seguridad controlan accesos a terminales; impacto eventual sería indirectamente mayor por líneas de piquete. No hay huelga declarada al corte. Fuente: https://www.icis.com/explore/resources/news/2026/11/09/11241010/ports-of-la-lb-watchmen-extend-contract-through-20-november-as-negotiations-continue/"
    },
    {
      "titulo": "EE. UU. | Vincent Thomas Bridge",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Cierre total vigente desde el 7 nov. de 2026, reapertura prevista en marzo de 2028. Revisar desvíos oficiales y tiempos reales de drayage; no recomendar preparación 'antes del cierre' porque ya ocurrió. Fuente: https://portoflosangeles.org/community/vtb-deck-replacement"
    },
    {
      "titulo": "Europa | España y conexiones",
      "bandera": "https://flagcdn.com/w40/es.png",
      "texto": "Huelga española del 11 nov. es un antecedente, no paro activo hoy. Confirmar rezago real por terminal en Barcelona, Valencia o Algeciras y cambios de itinerario antes de atribuir retrasos al conflicto."
    },
    {
      "titulo": "Europa | FAK, PSS y Rin",
      "bandera": "https://flagcdn.com/w40/de.png",
      "texto": "Drewry advierte anuncios de FAK y PSS para la segunda quincena de noviembre en Asia–Europa/Mediterráneo. Revisar naviera, vigencia, recargos de agua baja en el Rin y transbordos; no equiparar anuncios con cargos universales. Fuente: https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry"
    },
    {
      "titulo": "Asia | Mar Amarillo y China Oriental",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Pronóstico oficial 17–19 nov.: vientos fuerza 7–8 en múltiples zonas, con ráfagas 9–10 en partes del Mar Amarillo, Mar de China Oriental y estrecho de Taiwán. Riesgo de maniobras demoradas; cierre portuario específico sin confirmar. Fuente: https://www.mot.gov.cn/fuwu/yujingtishi/haiyangtianqigb/202611/t20261117_4227897.html"
    },
    {
      "titulo": "China | Shanghái y blank sailings",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Drewry (12 nov.) reporta 49 horas medias de espera en Shanghái (semana anterior: 36 horas) y ocho blank sailings anunciados para la semana siguiente, frente a cuatro en la semana de publicación. Son datos fechados, no en vivo. Fuente: https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry"
    },
    {
      "titulo": "Brasil | Santos recupera sistemas",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Al 17 nov. el puerto continúa recuperando sistemas administrativos afectados por el ciberataque del 6 nov.; la autoridad estima normalización para fines de la semana siguiente. No se verificó cierre general de operaciones marítimas; confirmar documentación por canal. Fuente: https://www.atribuna.com.br/noticias/portomar/ataque-hacker-ao-porto-de-santos-ainda-n-o-foi-superado-totalmente-sistemas-ser-o-normalizados-ate-a-proxima-semana-1.537095 · https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/porto-de-santos-sistemas-seguem-afetados-apos-ataque-cibernetico"
    },
    {
      "titulo": "India | Nhava Sheva/Mundra",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Validar tiempos de gate, disponibilidad terrestre, documentación y espacio por puerto tras las festividades de noviembre. No se verificó interrupción vigente causada por un ciclón 'Arnab'; no publicar esa atribución como hecho."
    },
    {
      "titulo": "Chile | Transporte terrestre",
      "bandera": "https://flagcdn.com/w40/cl.png",
      "texto": "Mantener monitoreo de Ruta 5 y accesos locales tras acuerdos recientes con transportistas; comprobar cierres actuales mediante avisos del operador. No extrapolar bloqueos reportados el 13 nov. al 17 sin verificación."
    },
    {
      "titulo": "Mercado | Spot Asia–EE. UU.",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Shanghái–LA US$7,416/FEU (-2% semanal) y Shanghái–NY US$9,020/FEU (-3%); corte Drewry 12 nov. La amenaza laboral de LA/LB no equivale a aumento spot ya realizado. Fuente: https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry"
    },
    {
      "titulo": "Mercado | Spot Asia–Europa",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Shanghái–Róterdam US$3,504/FEU (-3%) y Shanghái–Génova US$4,168/FEU (sin cambio). Vigilar anuncios FAK/PSS segunda quincena de nov. Fuente: https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry"
    },
    {
      "titulo": "Calendario | Próximos hitos",
      "bandera": "",
      "texto": "17–19 nov.: vientos fuertes en costas/mares de China; 20 nov.: vence extensión ILWU Local 26/PMA; 19 nov.: próxima publicación semanal esperada de Drewry (no disponible aún al corte); seguimiento de sistemas en Santos."
    }
  ],
  "metricas": [
    {
      "indicador": "Drewry WCI · 12 nov.",
      "valor": "US$4,305",
      "tendencia": "Por FEU; -2% semanal"
    },
    {
      "indicador": "Shanghái–LA",
      "valor": "US$7,416",
      "tendencia": "Por FEU; -2% semanal"
    },
    {
      "indicador": "Shanghái–NY",
      "valor": "US$9,020",
      "tendencia": "Por FEU; -3% semanal"
    },
    {
      "indicador": "Shanghái–Róterdam",
      "valor": "US$3,504",
      "tendencia": "Por FEU; -3% semanal"
    },
    {
      "indicador": "Shanghái–Génova",
      "valor": "US$4,168",
      "tendencia": "Por FEU; estable"
    },
    {
      "indicador": "Shanghái · espera",
      "valor": "49 h",
      "tendencia": "Semana anterior, Drewry 12 nov."
    },
    {
      "indicador": "LA/LB · plazo",
      "valor": "20 nov.",
      "tendencia": "Vence extensión negociación"
    },
    {
      "indicador": "China · vientos",
      "valor": "Fuerza 7–8",
      "tendencia": "Previsión zonas marítimas 17–19 nov."
    }
  ],
  "recomendaciones": [
    "EE. UU. / LA–Long Beach: vigilar PMA/ILWU Local 26 hasta el 20 nov. y confirmar con terminal gates, citas de camión, cut-offs y ferroviario; prever rutas terrestres alternas por cierre ya vigente del Vincent Thomas Bridge.",
    "China: consultar avisos meteorológicos y restricciones de maniobra de cada puerto, especialmente del 17 al 19 nov.; confirmar ETA, practicaje, cut-offs y conexiones antes de comprometer fecha de entrega.",
    "Tarifas: comparar spot vigente para Shanghái–LA, NY, Róterdam y Génova utilizando Drewry 12 nov. como referencia; validar FAK/PSS, equipo, espacio y días libres con navieras.",
    "México: monitorear posibles protestas agrícolas en el Bajío y verificar ruta terrestre hacia Laredo; no anunciar bloqueos activos sin confirmación oficial.",
    "Europa: revisar estado real de terminales españolas tras el 11 nov. y recargos específicos de cada naviera; no presentar como activo un paro que ya concluyó.",
    "Brasil: gestionar documentos de Santos con agentes locales durante recuperación de sistemas; evitar describir el puerto como cerrado.",
    "India: reconfirmar disponibilidad de camiones y espacios en Nhava Sheva, Mundra y Chennai, sin atribuir problemas a ciclones no corroborados.",
    "Fuentes: Drewry 12 nov. https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry · PMA/ILWU https://www.icis.com/explore/resources/news/2026/11/09/11241010/ports-of-la-lb-watchmen-extend-contract-through-20-november-as-negotiations-continue/ · Caltrans/Port of LA https://portoflosangeles.org/community/vtb-deck-replacement · China Meteorological Administration https://www.mot.gov.cn/fuwu/yujingtishi/haiyangtianqigb/202611/t20261117_4227897.html · Santos 17 nov. https://www.atribuna.com.br/noticias/portomar/ataque-hacker-ao-porto-de-santos-ainda-n-o-foi-superado-totalmente-sistemas-ser-o-normalizados-ate-a-proxima-semana-1.537095"
  ]
};
const retrasos = [
  {
    "puerto": "EE. UU. · LA/Long Beach",
    "tiempo": "20 nov.",
    "estado": "Plazo de negociación ILWU Local 26; no huelga activa confirmada."
  },
  {
    "puerto": "EE. UU. · Vincent Thomas",
    "tiempo": "Cerrado",
    "estado": "Desde 7 nov. 2026 hasta marzo 2028; confirmar desvíos de camión."
  },
  {
    "puerto": "China · Shanghái",
    "tiempo": "49 horas",
    "estado": "Drewry 12 nov.; semana previa, frente a 36 horas."
  },
  {
    "puerto": "China · Mar Amarillo",
    "tiempo": "17–19 nov.",
    "estado": "Pronóstico de vientos fuertes y ráfagas; cierres portuarios por confirmar."
  },
  {
    "puerto": "Brasil · Santos",
    "tiempo": "Recuperación",
    "estado": "Sistemas administrativos aún en recuperación al 17 nov.; operación marítima no reportada cerrada."
  },
  {
    "puerto": "Europa · España",
    "tiempo": "Revisar rezago",
    "estado": "Paro 11 nov. ya pasado; validar estado terminal por terminal."
  },
  {
    "puerto": "India · Nhava Sheva",
    "tiempo": "Verificar",
    "estado": "Confirmar gate, equipos y disponibilidad de transporte; sin ETA general verificable."
  },
  {
    "puerto": "México · Bajío",
    "tiempo": "Riesgo",
    "estado": "Posibles protestas agrícolas; bloqueos específicos sin confirmar."
  },
  {
    "puerto": "China · tarifas spot",
    "tiempo": "12 nov.",
    "estado": "WCI US$4,305/FEU (-2%); próxima actualización semanal pendiente."
  }
];
// Indicadores y riesgos con fechas de corte explícitas; no confundir riesgos con interrupciones confirmadas.

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
