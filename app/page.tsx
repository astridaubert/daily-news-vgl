import Image from "next/image";

// DATOS EDITABLES — 26 OCTUBRE 2026
const brief = {
  "fecha": "lunes 26 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "México: movilizaciones del autotransporte amenazan tiempos de entrega y cruces. En el Pacífico, Vance se debilita; Taiwán y Japón recuperan operaciones tras Champi. Vigilancia portuaria para el 30 de octubre.",
  "noticias": [
    {
      "region": "MÉXICO · TRANSPORTE TERRESTRE",
      "modo": "ALERTA ALTA · MOVILIZACIONES 26 OCT",
      "imagen": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Paro de transportistas: riesgo en corredores industriales y fronterizos",
      "dato": "CANACAR mantuvo movilizaciones desde la mañana del 26 de octubre; medios reportan una previsión de 44 concentraciones en 30 entidades. No todos los puntos son bloqueos totales. Corredores a vigilar: México–Querétaro, México–Pachuca, México–Puebla, Arco Norte, Bajío, Guadalajara y accesos a la frontera norte. Fuente: https://www.jornada.com.mx/2026/10/26/economia/021n1eco",
      "impacto": "Posibles tiempos extra para carga terrestre, recolecciones, distribución y cruces México–EE. UU.; impacto variable por tramo y horario. En Manzanillo se reportaba operación portuaria sin afectación por las protestas al corte consultado.",
      "accion": "Reconfirmar rutas y disponibilidad de unidades; consultar CAPUFE y transportistas antes de prometer ETA. Evitar asumir que todas las vías anunciadas están cerradas."
    },
    {
      "region": "MÉXICO · PACÍFICO",
      "modo": "ALERTA CLIMÁTICA · VANCE",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Nora_1997-09-21_1630Z.png",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Vance pierde fuerza: atención preventiva a puertos del Pacífico",
      "dato": "NHC, 26 oct. 09:00 CST: tormenta tropical con vientos sostenidos de 100 km/h, a 425 km al sur-suroeste de Manzanillo; avanza oeste-noroeste a 11 km/h. Sin alertas costeras vigentes. Fuente: https://prod-west-nhc.woc.noaa.gov/text/refresh/MIATCPEP2%2Bshtml/261433.shtml",
      "impacto": "Oleaje, lluvia y ajustes preventivos de navegación pueden alterar ventanas de atraque y accesos de Manzanillo, Lázaro Cárdenas y Puerto Vallarta. No se confirma cierre portuario general.",
      "accion": "Vigilar avisos del NHC y SEMAR y confirmar ventanas de terminal y naviera hasta el 30 de octubre."
    },
    {
      "region": "ASIA · TAIWÁN Y JAPÓN",
      "modo": "RECUPERACIÓN · CHAMPI",
      "imagen": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200",
      "bandera": "https://flagcdn.com/w40/tw.png",
      "titular": "Champi se degrada; persisten retrasos de vuelos y ferris",
      "dato": "Champi se transformó en ciclón extratropical el 25 de octubre, según reportes publicados el 26. Taiwán había informado 977 vuelos cancelados y 96 servicios de ferry suspendidos al corte del 23 de octubre; no representan cancelaciones nuevas del día 26. Fuente: https://focustaiwan.tw/society/202610230007",
      "impacto": "Es posible que la carga aérea y marítima experimente acumulación y reprogramaciones en Taoyuan y puertos de Taiwán, así como conexiones con Japón.",
      "accion": "Confirmar vuelos, carga disponible, puertos y nuevas fechas de conexión. No trasladar el acumulado del 23 de octubre a una cifra diaria."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Carreteras y cruces",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Movilizaciones de transportistas el 26 oct. Vigilar México–Querétaro, México–Pachuca, Arco Norte, Bajío, Guadalajara, Monterrey–Laredo y Reynosa. Los bloqueos deben validarse por tramo; consultar CAPUFE."
    },
    {
      "titulo": "México | Pacífico: Vance",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "NHC 26 oct., 09:00 CST: tormenta tropical de 100 km/h, 425 km SSO de Manzanillo, sin avisos costeros. Vigilar oleaje y lluvias hasta el 30 oct. https://www.nhc.noaa.gov/"
    },
    {
      "titulo": "México | Puertos y AIFA",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Manzanillo seguía operando sin afectaciones por el paro en el reporte consultado; verificar cada terminal. En AIFA, monitorear accesos por Chamapa–Lechería, México–Pachuca y Arco Norte."
    },
    {
      "titulo": "Estados Unidos | Cruces y puertos",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "El paro en México podría disminuir la capacidad de camiones hacia Laredo y otros cruces. Confirmar inspecciones y ventanas; en Los Ángeles/Long Beach vigilar conexiones ferroviarias y de temporada alta."
    },
    {
      "titulo": "Brasil | Navegantes y aduanas",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Referencias reportadas: Navegantes ~5 días, Itajaí ~2 días, Manaus ~1 día. No son métricas confirmadas para hoy; solicitar corte vigente de terminal y consultar efectos aduaneros con Receita Federal."
    },
    {
      "titulo": "India | Nhava Sheva y EPIC2/IOS",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Referencia de espera en Nhava Sheva: 1.83 días, pendiente de validación. Revisar omisiones de escalas de Tsingtao Express, Kyoto Express y Sofia Express directamente con CMA CGM."
    },
    {
      "titulo": "Taiwán y Japón | Recuperación Champi",
      "bandera": "https://flagcdn.com/w40/tw.png",
      "texto": "Tras el paso de Champi, comprobar normalización de carga aérea y ferris; 977 vuelos y 96 salidas de ferry afectados corresponden al acumulado del 23 oct., no al 26."
    },
    {
      "titulo": "Europa | Rotterdam, Amberes y Francia",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Rotterdam continúa recuperando conexiones tras la huelga; verificar barcazas y feeders. En Amberes vigilar retrasos y en Francia avisos portuarios actuales, sin describir la huelga aérea del 17–21 como vigente."
    },
    {
      "titulo": "Global | Acción portuaria 30 octubre",
      "bandera": "",
      "texto": "Organizaciones sindicales convocaron una jornada internacional de acción el 30 de octubre. Los cierres y terminales participantes aún requieren confirmación local; no equiparar convocatoria con suspensión general."
    },
    {
      "titulo": "Calendario | Próximos festivos",
      "bandera": "",
      "texto": "1 nov. Todos los Santos (según país); 2 nov. Día de Muertos (no descanso obligatorio federal en México); 8 nov. Diwali (India); 13–16 nov. Buen Fin; 16 nov. puente Revolución Mexicana; 20 nov. Consciência Negra (Brasil); 24 nov. Guru Nanak Jayanti (India); 26 nov. Thanksgiving (EE. UU.)."
    }
  ],
  "metricas": [
    {
      "indicador": "México · movilizaciones previstas",
      "valor": "44",
      "tendencia": "Previsión de concentraciones en 30 entidades, no 44 cierres confirmados · 26 oct."
    },
    {
      "indicador": "México · entidades con concentraciones",
      "valor": "30",
      "tendencia": "Reportes iniciales de la jornada del 26 oct.; alcance cambiante."
    },
    {
      "indicador": "Vance · viento sostenido",
      "valor": "100 km/h",
      "tendencia": "Tormenta tropical, NHC · 26 oct. 09:00 CST."
    },
    {
      "indicador": "Vance · distancia a Manzanillo",
      "valor": "425 km",
      "tendencia": "Sur-suroeste del puerto · NHC 26 oct. 09:00 CST."
    },
    {
      "indicador": "Taiwán · vuelos cancelados",
      "valor": "977",
      "tendencia": "Acumulado publicado 23 oct.; no equivale a cancelaciones del 26 oct."
    },
    {
      "indicador": "Taiwán · ferris suspendidos",
      "valor": "96",
      "tendencia": "Salidas reportadas el 23 oct.; confirmar recuperación actual."
    },
    {
      "indicador": "Brasil · espera en Navegantes",
      "valor": "~5 días",
      "tendencia": "Referencia sin corte confirmado al 26 oct.; validar con terminal."
    },
    {
      "indicador": "Puertos · jornada laboral",
      "valor": "30 oct.",
      "tendencia": "Convocatoria internacional; afectación real pendiente de confirmación."
    }
  ],
  "recomendaciones": [
    "México: confirmar por tramo las protestas y accesos antes de prometer tiempos de entrega o cruces; mantener opciones de reprogramación.",
    "Pacífico mexicano: consultar NHC, SEMAR y avisos de terminales antes de modificar atraques; no asumir cierres generales.",
    "Taiwán/Japón: reconfirmar guías aéreas, vuelos y disponibilidad real; considerar recuperación escalonada tras Champi.",
    "Brasil e India: distinguir referencias históricas de datos vigentes al comunicar tiempos de espera.",
    "Europa y puertos globales: revisar avisos para la convocatoria del 30 de octubre sin presentar toda protesta anunciada como paro confirmado.",
    "Temporada alta: anticipar Diwali (8 nov.), puente mexicano (16 nov.), Consciência Negra (20 nov.) y Thanksgiving (26 nov.)."
  ]
};

const retrasos = [
  {
    "puerto": "México · Carreteras",
    "tiempo": "26 oct. · por tramo",
    "estado": "Movilizaciones anunciadas; consultar cierres reales, desvíos y velocidades antes de confirmar ETA."
  },
  {
    "puerto": "México · Manzanillo",
    "tiempo": "Validar hoy",
    "estado": "Puerto reportado operativo frente al paro; vigilar navegación por Vance con SEMAR."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Vigilancia preventiva",
    "estado": "Vance: posibles ajustes por oleaje; no se confirma cierre general."
  },
  {
    "puerto": "Estados Unidos · frontera",
    "tiempo": "Riesgo variable",
    "estado": "El paro mexicano puede afectar disponibilidad terrestre y cruces; verificar transportista."
  },
  {
    "puerto": "Taiwán · Taoyuan",
    "tiempo": "Recuperación",
    "estado": "Vuelos cancelados previamente por Champi; confirmar programación actual de carga."
  },
  {
    "puerto": "Taiwán · Keelung / Taipei",
    "tiempo": "Verificar terminal",
    "estado": "Revisar reaperturas y posibles acumulaciones tras Champi."
  },
  {
    "puerto": "Brasil · Navegantes",
    "tiempo": "~5 días (referencia)",
    "estado": "Valor sin corte confirmado al 26 oct.; validar con terminal."
  },
  {
    "puerto": "India · Nhava Sheva",
    "tiempo": "1.83 días (referencia)",
    "estado": "Actualizar gate, tiempos y omisiones de escalas con naviera."
  },
  {
    "puerto": "Europa · Rotterdam / Amberes",
    "tiempo": "Verificar conexiones",
    "estado": "Posibles demoras residuales en barcazas y feeders; no atribuir cierre general."
  }
];

// Actualización: NHC 26 oct. 09:00 CST; prensa mexicana 26 oct.; cancelaciones Taiwán corte 23 oct.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 26 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
