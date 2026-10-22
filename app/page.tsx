import Image from "next/image";

// DATOS EDITABLES — 22 OCTUBRE 2026
const brief = {
  "fecha": "jueves 22 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Alerta climática en el Pacífico: Vance amenaza con afectar la planificación portuaria mexicana y Champi altera vuelos en Taiwán y Japón. También vigilamos costos aéreos, congestión y huelgas.",
  "noticias": [
    {
      "region": "MÉXICO · PACÍFICO",
      "modo": "ALTO · TORMENTA VANCE",
      "imagen": "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Vance se intensifica: atención preventiva a Manzanillo y Lázaro Cárdenas",
      "dato": "El NHC reportó a las 03:00 h CST del 22 de octubre la tormenta tropical Vance, con vientos sostenidos de 85 km/h, a 820 km al sur-suroeste de Acapulco y 1,075 km al sur-sureste de Manzanillo. No había avisos costeros activos en ese corte. Fuente: https://prod-east-nhc.woc.noaa.gov/mobile/text/refresh/MIATCPEP2%2Bhtml/220847.shtml",
      "impacto": "El oleaje y los cambios en las condiciones meteorológicas pueden alterar maniobras, navegación y programación de citas. No se ha confirmado por esta fuente un cierre portuario general.",
      "accion": "Validar avisos NHC y Capitanías de Puerto antes de liberar carga; revisar ventanas y alternativas logísticas para embarques críticos."
    },
    {
      "region": "TAIWÁN · ASIA ORIENTAL",
      "modo": "ALTO · TIFÓN CHAMPI",
      "imagen": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200",
      "bandera": "https://flagcdn.com/w40/tw.png",
      "titular": "Champi afecta la conectividad aérea de Taiwán y Japón",
      "dato": "Reuters informó el 22 de octubre alertas meteorológicas en Taiwán, 125 vuelos domésticos cancelados allí y más de 100 vuelos domésticos cancelados en Japón. El sistema, anteriormente clasificado como supertifón, continúa generando condiciones peligrosas. Fuente: https://www.reuters.com/business/environment/taiwan-issues-land-warning-ahead-arrival-powerful-typhoon-champi-2026-10-22/",
      "impacto": "Riesgo de conexiones perdidas, reprogramación de carga aérea y desvíos o cambios de itinerario marítimos en Asia oriental.",
      "accion": "Reconfirmar vuelos y escalas de Taiwán y Japón del 22 al 26 de octubre; solicitar planes de contingencia a aerolíneas y navieras."
    },
    {
      "region": "LATINOAMÉRICA · CARGA AÉREA",
      "modo": "ALERTA · COSTO DEL COMBUSTIBLE",
      "imagen": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
      "bandera": "",
      "titular": "Combustible aéreo presiona costos y posibles recargos",
      "dato": "ALTA informó un aumento interanual del 79% en gasto de combustible de aerolíneas latinoamericanas y un aumento de su participación en costos desde 28% hasta 38%. No se trata de un alza equivalente en el precio del flete aéreo. Fuente: https://volavi.co/aviacion/alta-alerta-aumento-gasto-combustible-aerolineas-latinoamerica",
      "impacto": "Posibles revisiones de fuel surcharge y cotizaciones, según aerolínea, ruta y vigencia del contrato.",
      "accion": "Solicitar cotización todo incluido con recargo de combustible desglosado; confirmar vigencia y espacio para embarques prioritarios."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Puertos del Golfo y frente frío",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Se han reportado cierres por frente frío en Veracruz, Coatzacoalcos, Alvarado, Dos Bocas, Frontera y Sánchez Magallanes. No asumir que todas las restricciones continúan vigentes para toda embarcación: consultar diariamente el estado oficial de Capitanías y terminales. https://meteorologia.semar.gob.mx/puertos/"
    },
    {
      "titulo": "México | Manzanillo y Lázaro Cárdenas",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Referencias aportadas para el corte: Manzanillo 1.4 días y Lázaro Cárdenas 3.4 días de espera de buques; cifras pendientes de confirmación comparable con terminal/naviera. Vance aumenta la necesidad de revisar citas, oleaje y rutas, pero no demuestra cierre automático. https://www.nhc.noaa.gov/"
    },
    {
      "titulo": "México | Carreteras, CDMX y frontera",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Se reportó reapertura de México–Toluca tras bloqueo; verificar operación actual con CAPUFE. En CDMX pueden presentarse marchas y cierres puntuales en corredores clave; confirmar ruta y hora antes de despachar. En cruces EE. UU.–México, validar documentación e inspecciones con agente aduanal y transportista."
    },
    {
      "titulo": "Estados Unidos | Puertos y carga aérea",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Los Ángeles registra una espera de buques cercana a un día según referencias recientes, pero accesos ferroviarios y terrestres pueden añadir demoras. La cifra aproximada de US$6.41/kg para China–Norteamérica debe validarse por fecha, ruta y modalidad antes de usarla como tarifa actual. Thanksgiving: 26 de noviembre."
    },
    {
      "titulo": "Brasil | Navegantes, Itajaí y aduanas",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Referencias compartidas: Navegantes 5 días de espera y 78% de ocupación de patio; Itajaí 2 días y Manaus 1 día. Datos pendientes de actualización por terminal. Investigar avisos vigentes de Receita Federal antes de afirmar huelga indefinida nacional. Feriado: 20 de noviembre."
    },
    {
      "titulo": "India | Nhava Sheva y carga aérea",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Referencia compartida de Nhava Sheva: 1.83 días de espera, pendiente de validación actual. Revisar camiones, disponibilidad de gate y conectividad aérea por Mumbai. Confirmar con cada aerolínea suspensiones hacia Arabia Saudita; no generalizar cancelaciones. Diwali: 8 de noviembre."
    },
    {
      "titulo": "Taiwán y Asia | Champi y congestión",
      "bandera": "https://flagcdn.com/w40/tw.png",
      "texto": "El tifón Champi ha ocasionado cancelaciones de vuelos en Taiwán y Japón, según Reuters (22 oct.). Verificar salida de buques y vuelos de Keelung, Taichung, Kaohsiung y hubs regionales. Los promedios de Shanghái, Ningbo, Qingdao y Manila cambian diariamente; no presentar datos sin corte comprobado. https://www.reuters.com/business/environment/taiwan-issues-land-warning-ahead-arrival-powerful-typhoon-champi-2026-10-22/"
    },
    {
      "titulo": "Europa | Francia, Rotterdam y Bélgica",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Rotterdam está en fase de recuperación tras acciones laborales; algunas conexiones de barcazas y feeder continúan con retrasos. Revisar Le Havre y Marsella–Fos, así como posibles restricciones en Amberes/Zeebrugge. La huelga aérea francesa citada terminó el 21 de octubre: verificar nuevos avisos antes de atribuir interrupciones al 22."
    },
    {
      "titulo": "Combustible | Aéreo y terrestre",
      "bandera": "",
      "texto": "ALTA informó +79% en gasto de combustible de aerolíneas latinoamericanas, no en tarifas de carga. En México el estímulo complementario al diésel aproximado de $2.35 MXN/L para 17–23 oct. es un apoyo fiscal, no un incremento de precio. Comparar tarifas y recargos aplicables por proveedor. https://volavi.co/aviacion/alta-alerta-aumento-gasto-combustible-aerolineas-latinoamerica"
    },
    {
      "titulo": "Calendario | Próximos festivos",
      "bandera": "",
      "texto": "1 nov. Todos los Santos (según país); 2 nov. Día de Muertos (México, no descanso federal obligatorio); 8 nov. Diwali (India); 16 nov. Revolución Mexicana; 20 nov. Consciência Negra (Brasil); 24 nov. Guru Nanak Jayanti (India); 26 nov. Thanksgiving (EE. UU.). Confirmar horarios operativos."
    }
  ],
  "metricas": [
    {
      "indicador": "Vance · viento sostenido",
      "valor": "85 km/h",
      "tendencia": "NHC 22 oct., 03:00 CST; tormenta tropical, no cierre portuario confirmado."
    },
    {
      "indicador": "Vance · distancia a Manzanillo",
      "valor": "1,075 km",
      "tendencia": "Al sur-sureste del puerto; corte NHC 22 oct., 03:00 CST."
    },
    {
      "indicador": "Taiwán · vuelos cancelados",
      "valor": "125",
      "tendencia": "Vuelos domésticos cancelados reportados por Reuters el 22 oct.; cifra sujeta a actualización."
    },
    {
      "indicador": "Japón · vuelos cancelados",
      "valor": ">100",
      "tendencia": "Vuelos domésticos cancelados reportados por Reuters el 22 oct."
    },
    {
      "indicador": "Aerolíneas LATAM · gasto en combustible",
      "valor": "+79%",
      "tendencia": "Variación interanual reportada por ALTA; NO incremento de tarifa de carga."
    },
    {
      "indicador": "Aerolíneas LATAM · combustible en costos",
      "valor": "38%",
      "tendencia": "Participación de costo informada por ALTA, frente a 28% anteriormente."
    },
    {
      "indicador": "México · estímulo extra al diésel",
      "valor": "$2.35/L",
      "tendencia": "Apoyo fiscal del 17–23 oct.; no es variación del precio al público."
    },
    {
      "indicador": "Puertos · esperas estimadas",
      "valor": "Validar",
      "tendencia": "Los tiempos dependen de la terminal y del corte operativo; confirmar con naviera."
    }
  ],
  "recomendaciones": [
    "Pacífico mexicano: revisar los avisos de Vance y SEMAR antes de adelantar o reprogramar operaciones en Manzanillo y Lázaro Cárdenas.",
    "Taiwán y Japón: reconfirmar vuelos y conexiones marítimas del 22 al 26 de octubre; contemplar itinerarios alternativos.",
    "Carga aérea: confirmar fuel surcharge, tarifa final, validez y espacio disponible por ruta antes de cotizar.",
    "Brasil e India: validar patios, demoras portuarias y despachos aduanales con operador local antes de comprometer ETA.",
    "Europa: verificar restricciones por terminal y avisos laborales vigentes; evitar aplicar huelgas ya concluidas al día actual.",
    "Temporada alta: planear inventarios considerando Diwali, puente de México, Consciência Negra y Thanksgiving."
  ]
};

const retrasos = [
  {
    "puerto": "México · Golfo (Veracruz / Coatzacoalcos y otros)",
    "tiempo": "Consultar SEMAR",
    "estado": "Restricciones por frente frío reportadas; comprobar apertura vigente por embarcación."
  },
  {
    "puerto": "México · Manzanillo",
    "tiempo": "Validar patio y gate",
    "estado": "Precaución por Vance; no hay cierre general demostrado por el aviso NHC de las 03:00."
  },
  {
    "puerto": "México · Lázaro Cárdenas",
    "tiempo": "Validar terminal",
    "estado": "Referencia de 3.4 días proporcionada, pendiente de confirmación de corte y operador."
  },
  {
    "puerto": "Taiwán · Keelung / Taichung / Kaohsiung",
    "tiempo": "Monitoreo Champi",
    "estado": "Verificar viento, oleaje, salida de buques y avisos de terminales."
  },
  {
    "puerto": "China · Shanghái / Ningbo",
    "tiempo": "Verificar esperas",
    "estado": "Congestión variable; pedir promedio semanal actualizado por terminal."
  },
  {
    "puerto": "Brasil · Navegantes",
    "tiempo": "Validar ocupación",
    "estado": "Se reportó congestión; solicitar información actual al operador."
  },
  {
    "puerto": "Países Bajos · Rotterdam",
    "tiempo": "Validar conexión",
    "estado": "Posibles demoras adicionales de feeder/barcazas tras recuperación laboral."
  }
];

// Datos portuarios: última referencia publicada 20 oct.; carga aérea WorldACD semana 41.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN PORTUARIA · CORTE 22 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 22 de octubre de 2026. Fuentes: NHC, Reuters, ALTA, SEMAR y operadores logísticos. Datos sujetos a actualización y confirmación con terminal, naviera y proveedor.</span>
        </div>
      </footer>
    </main>
  );
}
