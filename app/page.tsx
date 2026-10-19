import Image from "next/image";

// DATOS EDITABLES — 19 OCTUBRE 2026
const brief = {
  "fecha": "lunes 19 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Tres alertas para hoy: ajustes operativos en Manzanillo, 44 salidas marítimas canceladas y presión del diésel sobre los fletes. Antes de despachar, confirma citas, espacio y tarifas.",
  "noticias": [
    {
      "region": "MÉXICO",
      "modo": "ALTO · MANZANILLO / TRUDY",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Manzanillo ajusta operaciones tras Trudy",
      "dato": "SSA anunció restricciones a vacíos y exportaciones; TIMSA reprogramó citas al 19 de octubre y Contecon previó retomar citas desde el mediodía del 19. La operación debe confirmarse por terminal.",
      "impacto": "Posibles retrasos en entregas, retiros y exportaciones.",
      "accion": "Confirmar citas, accesos y recepción de carga antes de enviar unidades."
    },
    {
      "region": "ASIA / GLOBAL",
      "modo": "ALTO · 44 SALIDAS CANCELADAS",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "titular": "44 salidas marítimas canceladas en cinco semanas",
      "dato": "Drewry reporta 44 cancelaciones de 713 salidas previstas del 19 de octubre al 22 de noviembre. Asia–Europa/Mediterráneo concentra el 44% de las cancelaciones.",
      "impacto": "Cambios de itinerario y riesgo de retrasos por falta de espacio.",
      "accion": "Reconfirmar salida y conexión; reservar alternativas con anticipación."
    },
    {
      "region": "MÉXICO",
      "modo": "ALTO · COSTO DE DIÉSEL",
      "imagen": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Diésel presiona los costos del transporte en México",
      "dato": "Del 17 al 23 de octubre se aplica un apoyo adicional de $2.35 por litro de diésel. El precio promedio nacional citado es de $27.01 por litro.",
      "impacto": "Posibles ajustes de tarifas y presión financiera para transportistas.",
      "accion": "Verificar recargos por combustible y disponibilidad de unidades."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | CANACAR: tensión por estímulos; paro no confirmado",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "CANACAR publicó el 15 de octubre un posicionamiento por cambios al estímulo fiscal para acreditamiento de casetas y pidió diálogo. No se localizó un comunicado oficial que confirme un paro nacional de unidades el 19 de octubre. Verificar capacidad directamente con transportistas sin anunciar cierre generalizado. Fuente: https://canacar.com.mx/category/comunicados/"
    },
    {
      "titulo": "Global | Ormuz, seguros y combustibles",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "La tensión en Oriente Medio mantiene exposición a cambios de rutas, primas de riesgo y precios energéticos. Confirmar con naviera y aseguradora cualquier impacto en tránsito o cobertura; no dar por confirmado un cierre total del estrecho ni incidentes específicos sin parte oficial."
    },
    {
      "titulo": "Europa | Le Havre, Francia y conexiones terrestres",
      "bandera": "https://flagcdn.com/w40/fr.png",
      "texto": "En Le Havre constan restricciones viales puntuales en accesos al área portuaria durante octubre. Otras alertas recibidas sobre huelgas en Francia, Bélgica, Países Bajos y niveles del Rin requieren validación local antes de atribuir demoras de 2–5 días a todos los servicios. Fuente: https://escales.haropaport.com/le-havre/accueil/"
    },
    {
      "titulo": "India | Nhava Sheva / JNPA y conexión a Europa",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Se reporta congestión de contenedores y posibles ajustes de servicios en Nhava Sheva; no se confirmó en esta revisión un aviso vigente específico de exenciones de almacenaje. Validar por terminal la situación de recepción, almacenaje, transbordos y escalas antes de reservar."
    },
    {
      "titulo": "México | Carreteras y capacidad terrestre",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Dar seguimiento a incidencias señaladas en México–Cuernavaca km 24, La Tinaja–Isla km 97, Durango–Mazatlán y Nuevo Teapa–Cosoleacaque. Su vigencia al corte no pudo corroborarse tramo por tramo; verificar con CAPUFE, Guardia Nacional y operador antes de liberar unidades."
    },
    {
      "titulo": "Estados Unidos | Frontera y Thanksgiving",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Verificar tiempos reales de cruce y cumplimiento regulatorio de autotransporte México–EE. UU. Thanksgiving será el jueves 26 de noviembre: coordinar cierres de almacén, tránsito y entregas con clientes y carriers."
    },
    {
      "titulo": "Brasil | Transporte y temporada alta",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Monitorear disponibilidad de buques para exportación de perecederos y conexiones aéreas en Río de Janeiro; el presunto paro de 24 horas y el incidente con buque Maersk requieren confirmación actualizada con operadores. El 20 de noviembre es feriado nacional (Consciência Negra)."
    },
    {
      "titulo": "Asia | Tifón, espacio marítimo y aviación",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Supervisar sistemas tropicales en el Pacífico occidental, conexiones aéreas y posibles cambios de itinerario. No se reprodujeron cifras de cancelaciones aéreas ni atribuciones a ataques sin evidencia suficiente. Solicitar estatus de vuelo o nave específicos."
    },
    {
      "titulo": "Calendario | Festivos que impactan operación",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Próximos hitos a planear: 1 nov. Todos los Santos (según país), 2 nov. Día de Muertos en México, 8 nov. Diwali en India, 16 nov. conmemoración de Revolución Mexicana, 20 nov. Consciência Negra en Brasil y 26 nov. Thanksgiving en EE. UU. Confirmar calendarios laborales locales."
    }
  ],
  "metricas": [
    {
        "indicador": "Manzanillo · Contecon",
        "valor": "19 oct.",
        "tendencia": "Citas previstas desde las 12:00; confirmar con la terminal."
    },
    {
        "indicador": "Manzanillo · Previos",
        "valor": "20 oct.",
        "tendencia": "Fecha prevista de reanudación de inspecciones previas."
    },
    {
        "indicador": "Salidas marítimas canceladas",
        "valor": "44",
        "tendencia": "De 713 salidas previstas entre el 19 oct. y el 22 nov."
    },
    {
        "indicador": "Porcentaje de salidas canceladas",
        "valor": "6%",
        "tendencia": "Proporción del total de servicios Este–Oeste programados."
    },
    {
        "indicador": "Asia–Europa · Peso de las cancelaciones",
        "valor": "44%",
        "tendencia": "De las 44 cancelaciones, esta ruta concentra casi la mitad."
    },
    {
        "indicador": "México · Apoyo adicional al diésel",
        "valor": "$2.35/L",
        "tendencia": "Subsidio adicional por litro vigente del 17 al 23 oct."
    },
    {
        "indicador": "México · Precio promedio del diésel",
        "valor": "$27.01/L",
        "tendencia": "Precio nacional de referencia citado el 18 oct.; no es el subsidio."
    },
    {
        "indicador": "Paro nacional de CANACAR",
        "valor": "No confirmado",
        "tendencia": "Verificar con transportistas antes de asumir suspensión de unidades."
    }
],
  "recomendaciones": [
    "Prioridad 1 — Manzanillo: confirmar con cada terminal si ya opera la recepción de vacíos/exportación; validar citas del 19, previos del 20 y accesos antes de despachar.",
    "Prioridad 2 — Rutas Asia–Europa: identificar reservas expuestas a los 44 blank sailings; reconfirmar zarpe, escala, conexión y ETA con naviera.",
    "Prioridad 3 — Autotransporte México: reconfirmar disponibilidad de unidades y recargos de diésel; el paro nacional referido debe verificarse antes de comunicarlo como hecho.",
    "Prioridad 4 — Ormuz y combustibles: revisar seguros, rutas alternas y sensibilidad de fletes a volatilidad energética sin afirmar cierre o desabasto no comprobados.",
    "Prioridad 5 — Europa e India: validar afectaciones por terminal, restricciones de acceso, conexiones y almacenaje directamente con operadores; evitar demoras estándar sin evidencia.",
    "Próximos cortes operativos: coordinar embarques antes de Diwali (8 nov.), México (16 nov.), Brasil (20 nov.) y Thanksgiving (26 nov.)."
  ]
};

const retrasos = [
  {
    "puerto": "México · Manzanillo / SSA",
    "tiempo": "Hasta nuevo aviso",
    "estado": "Suspensión anunciada de vacíos y exportaciones desde el 17 oct.; verificar reanudación con terminal."
  },
  {
    "puerto": "México · Manzanillo / TIMSA",
    "tiempo": "19 oct.",
    "estado": "Citas del sábado 17 reprogramadas al lunes 19; verificar turnos asignados."
  },
  {
    "puerto": "México · Manzanillo / Contecon",
    "tiempo": "19 oct. >12:00",
    "estado": "Citas planificadas desde mediodía; previos previstos a partir del 20 oct."
  },
  {
    "puerto": "Asia–Europa / Mediterráneo",
    "tiempo": "44% de 44",
    "estado": "Proporción de blank sailings programados del 19 oct. al 22 nov. · Drewry."
  },
  {
    "puerto": "Transpacífico este",
    "tiempo": "36% de 44",
    "estado": "Porción de cancelaciones anunciadas; confirmar cada servicio y naviera."
  },
  {
    "puerto": "Francia · Le Havre",
    "tiempo": "Por terminal",
    "estado": "Restricciones viales de acceso identificadas; demoras marítimas no cuantificadas de forma general."
  },
  {
    "puerto": "India · Nhava Sheva/JNPA",
    "tiempo": "Por confirmar",
    "estado": "Validar congestión, cobros, patios y feeder directamente con terminal."
  }
];

// Fuentes principales: SSA/COPOMA (16 oct.), GOMSA (17 oct.), Reuters (18 oct.), Drewry (16 oct.), SHCP/El Economista (18 oct.), CANACAR (15 oct.).

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
                  {"bandera" in item && item.bandera ? (
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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN PORTUARIA · 19 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 19 de octubre de 2026. Fuentes: COPOMA/SSA, GOMSA, Contecon, Reuters, Drewry, SHCP, El Economista y CANACAR. Operaciones sujetas a validación por terminal, naviera y proveedor.</span>
        </div>
      </footer>
    </main>
  );
}
