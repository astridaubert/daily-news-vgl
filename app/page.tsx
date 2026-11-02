import Image from "next/image";

// DATOS EDITABLES — 2 NOVIEMBRE 2026
const brief = {
  "fecha": "lunes 2 de noviembre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Riesgo prioritario en San Antonio (Chile), la costa este de India por el ciclón Murasu y Los Ángeles/Long Beach por negociación laboral. Las afectaciones deben confirmarse por embarque y terminal. Como oportunidad, el servicio ME1 de Maersk y Hapag-Lloyd cambia su itinerario a través de Suez, sin representar una normalización general de la región.",
  "noticias": [
    {
      "region": "CHILE · SAN ANTONIO",
      "modo": "ALERTA ALTA · ACCESOS TERRESTRES",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "https://flagcdn.com/w40/cl.png",
      "titular": "Bloqueos de transportistas complican accesos a depósitos de San Antonio",
      "dato": "Se reportan movilizaciones y bloqueos en accesos a depósitos extraportuarios. No debe interpretarse como cierre general del puerto. Confirmar la situación específica con transportistas y agentes locales.",
      "impacto": "Posibles demoras de retiro y entrega de contenedores, especialmente sensibles para carga perecedera y temporada de fruta.",
      "accion": "Identificar depósitos afectados, revisar accesos habilitados y coordinar alternativas para embarques con fecha crítica."
    },
    {
      "region": "INDIA · ANDHRA PRADESH",
      "modo": "ALERTA ALTA · CICLÓN MURASU",
      "imagen": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Yasa_2020-12-16_0210Z.jpg?width=1200",
      "bandera": "https://flagcdn.com/w40/in.png",
      "titular": "Murasu amenaza la costa este de India durante la noche del 2 de noviembre",
      "dato": "El pronóstico meteorológico indica cruce costero entre Nellore y Narsapur, cerca de Ongole, entre la noche del 2 y madrugada del 3 de noviembre, con vientos de 100–110 km/h y ráfagas de hasta 120 km/h. Fuente: IMD, boletín del 2 de noviembre.",
      "impacto": "Riesgo de afectación a terminales, accesos terrestres y conexiones. No se consideran confirmados cierres particulares sin aviso del operador.",
      "accion": "Validar itinerarios, ventanas portuarias y transporte terrestre con terminal y naviera antes de actualizar compromisos."
    },
    {
      "region": "ESTADOS UNIDOS · LOS ÁNGELES / LONG BEACH",
      "modo": "ALERTA ALTA · NEGOCIACIÓN LABORAL",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/us.png",
      "titular": "Continúan negociaciones de seguridad portuaria; plazo hasta el 4 de noviembre",
      "dato": "La extensión del plazo de negociación hasta el 4 de noviembre a las 17:00 (hora del Pacífico) ya fue acordada. Persiste riesgo de paro en ausencia de acuerdo; no reportar huelga activa.",
      "impacto": "Si se concreta una interrupción, podrían verse afectadas citas, retiros de contenedores y conexiones ferroviarias; no implica afectación actual de todas las terminales.",
      "accion": "Identificar embarques expuestos y reconfirmar citas de retiro, conexiones ferroviarias y fechas comprometidas."
    }
  ],
  "vigilancia": [
    {
      "titulo": "Canal de Suez | Servicio ME1",
      "bandera": "",
      "texto": "Maersk y Hapag-Lloyd anuncian cambio del servicio ME1 India–Europa por Suez. Primer zarpe afectado: Atlanta Express desde Salalah el 4 de noviembre. No extrapolar a todos los servicios ni prometer ahorro. Fuente: Maersk, 2 nov."
    },
    {
      "titulo": "Europa | Sistema EES",
      "bandera": "",
      "texto": "Las dificultades del control de entrada/salida de personas pueden repercutir en tripulaciones, ferris y rotación de buques. No equivalen a bloqueo general de aduanas para mercancías."
    },
    {
      "titulo": "Brasil | Cargos OHC/DHC",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Ajustes de Maersk desde el 1 de noviembre: comprobar puerto, terminal y tipo de equipo. Hay reducciones específicas en Suape; no describir todos los ajustes como aumentos."
    },
    {
      "titulo": "España | Convocatoria del 11 nov.",
      "bandera": "https://flagcdn.com/w40/es.png",
      "texto": "Se informa una convocatoria de huelga general para el 11 de noviembre. Repercusiones en transporte y terminales pendientes de participación y servicios mínimos; confirmar avisos locales."
    },
    {
      "titulo": "India | Diwali",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Diwali está previsto para el 8 de noviembre. Confirmar días de operación y disponibilidad real de plantas, proveedores, agentes y transportistas."
    },
    {
      "titulo": "Chile | Carga perecedera",
      "bandera": "https://flagcdn.com/w40/cl.png",
      "texto": "Dar prioridad a contenedores refrigerados y embarques de fruta con ventana de retiro o entrega próxima. Confirmar acceso a depósitos extraportuarios sin asumir cierre general de San Antonio."
    },
    {
      "titulo": "Estados Unidos | LA/LB",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Monitorear negociación de vigilancia y seguridad hasta el 4 de noviembre, 17:00 PT. La prórroga ya fue acordada. No reportar huelga como iniciada."
    },
    {
      "titulo": "Calendario | Fechas próximas",
      "bandera": "",
      "texto": "2–3 nov.: posible impacto de Murasu; 4 nov.: fin del plazo laboral LA/LB y cambio ME1 por Suez; 8 nov.: Diwali; 11 nov.: convocatoria de huelga en España."
    }
  ],
  "metricas": [
    {
      "indicador": "India · Murasu",
      "valor": "100–110 km/h",
      "tendencia": "Ráfagas hasta 120 km/h; pronóstico de cruce 2–3 nov."
    },
    {
      "indicador": "EE. UU. · LA/LB",
      "valor": "4 nov.",
      "tendencia": "17:00 hora del Pacífico; plazo de negociación extendido."
    },
    {
      "indicador": "Suez · ME1",
      "valor": "4 nov.",
      "tendencia": "Primer cambio programado desde Salalah; solo servicio ME1."
    },
    {
      "indicador": "India · Diwali",
      "valor": "8 nov.",
      "tendencia": "Confirmar calendarios reales de operación."
    },
    {
      "indicador": "España · huelga",
      "valor": "11 nov.",
      "tendencia": "Convocatoria; afectación aún por confirmar."
    },
    {
      "indicador": "Brasil · OHC/DHC",
      "valor": "1 nov.",
      "tendencia": "Revisar tarifas específicas por puerto y equipo."
    }
  ],
  "recomendaciones": [
    "Priorizar embarques perecederos en San Antonio y carga con fechas críticas en la costa este de India; confirmar exposición real y accesos.",
    "Monitorear hasta el 4 de noviembre las negociaciones de seguridad portuaria en Los Ángeles y Long Beach; no presentar un paro como activo.",
    "Confirmar por escrito ajustes OHC/DHC en Brasil y fechas/itinerarios del servicio ME1 antes de emitir nuevas cotizaciones.",
    "Revisar ventanas operativas de proveedores en India por Diwali y planes de contingencia ante la convocatoria de huelga de España.",
    "Comunicar al cliente únicamente interrupciones verificadas en su terminal, ruta o embarque, separando hechos confirmados de riesgos preventivos."
  ]
};

const retrasos = [
  {
    "puerto": "Chile · San Antonio",
    "tiempo": "2 nov. · alerta alta",
    "estado": "Accesos a depósitos extraportuarios con bloqueos reportados; verificar ubicación y terminal. No cierre general confirmado."
  },
  {
    "puerto": "India · costa de Andhra Pradesh",
    "tiempo": "2–3 nov. · alerta alta",
    "estado": "Murasu: riesgo meteorológico de interrupciones; cierres de puerto requieren confirmación puntual."
  },
  {
    "puerto": "EE. UU. · Los Ángeles/Long Beach",
    "tiempo": "4 nov. · 17:00 PT",
    "estado": "Prórroga de negociación acordada; posible paro futuro, no huelga activa."
  },
  {
    "puerto": "Canal de Suez · ME1",
    "tiempo": "Desde 4 nov.",
    "estado": "Cambio de ruta confirmado por Maersk para servicio ME1; consultar itinerarios y tarifas."
  },
  {
    "puerto": "Brasil · terminales seleccionadas",
    "tiempo": "Desde 1 nov.",
    "estado": "Ajustes OHC/DHC según puerto y equipo; Suape incluye reducciones específicas."
  },
  {
    "puerto": "España · terminales y transporte",
    "tiempo": "11 nov. · previsto",
    "estado": "Convocatoria de huelga; impactos pendientes de participación y servicios mínimos."
  },
  {
    "puerto": "India · fábricas y operadores",
    "tiempo": "8 nov. · Diwali",
    "estado": "Confirmar disponibilidad de personal, días inhábiles y recogidas."
  }
];

// Corte: 2 nov. 2026, Monterrey. Validar afectaciones operativas por embarque.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 2 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 2 de noviembre de 2026. Fuentes: IMD/APSDMA, Maersk y alertas operativas reportadas sujetas a validación por terminal y naviera. Riesgo preventivo no equivale a interrupción confirmada.</span>
        </div>
      </footer>
    </main>
  );
}
