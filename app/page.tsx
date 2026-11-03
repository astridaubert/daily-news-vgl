import Image from "next/image";

// DATOS EDITABLES — 3 NOVIEMBRE 2026
const brief = {
  "fecha": "martes 3 de noviembre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Nuevas alertas: India enfrenta afectaciones tras el paso del ciclón Murasu; México entra en una transición documental aduanera; y Europa presenta retrasos en Tilbury y riesgo de nuevas huelgas. En Estados Unidos continúa la negociación laboral en LA/Long Beach. Las tarifas marítimas muestran movimientos mixtos, no aumentos globales.",
  "noticias": [
    {
      "region": "INDIA · ANDHRA PRADESH",
      "modo": "ALTA · CICLÓN TOCÓ TIERRA · 3 NOV",
      "imagen": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hurricane_Isabel_from_ISS.jpg?width=1200",
      "bandera": "https://flagcdn.com/w40/in.png",
      "titular": "Murasu ya tocó tierra: suspenden trenes y algunos vuelos en India",
      "dato": "AP informó este 3 de noviembre que Murasu tocó tierra cerca de Ongole, Andhra Pradesh, con vientos sostenidos de 100–110 km/h. Se reportaron suspensiones de servicios ferroviarios y algunos vuelos, además de lluvias intensas. No se confirmó cierre de todos los puertos. Fuente: AP e IMD, 3 nov.",
      "impacto": "Posibles retrasos en transporte terrestre, conexiones aéreas y operaciones portuarias de la costa este. La afectación requiere confirmación por terminal y proveedor.",
      "accion": "Revisar embarques hacia/desde Andhra Pradesh; confirmar servicio ferroviario, vuelos, accesos y ventanas de terminal."
    },
    {
      "region": "MÉXICO · ADUANAS",
      "modo": "ALTA · TRÁMITE ADUANERO POR ETAPAS",
      "imagen": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "México cambia el trámite para declarar el valor de mercancías importadas",
      "dato": "El SAT comenzó el 1 de noviembre la implementación por etapas de la Manifestación de Valor Electrónica (MVE). Es el documento con el que el importador declara cuánto valen las mercancías que introduce a México, y ahora debe transmitir esa información digitalmente mediante la Ventanilla Única. Esta primera etapa aplica solo a mercancías destinadas a elaboración, transformación o reparación en recinto fiscalizado. Según el calendario publicado por el SAT, el recinto fiscalizado estratégico inicia el 15 de noviembre, la importación temporal el 1 de enero de 2027 y la definitiva el 15 de enero de 2027. Fuente: SAT, 2 oct. de 2026.",
      "impacto": "Si la empresa no identifica cuándo entra en vigor la obligación para su tipo de importación o no prepara los datos de valor y documentos de respaldo, podría enfrentar correcciones o demoras en el despacho. No todas las importaciones deben adoptar el cambio al mismo tiempo.",
      "accion": "Consultar al agente aduanal qué régimen se utiliza, confirmar su fecha de aplicación y preparar con anticipación la información de valor de las mercancías y documentación de respaldo."
    },
    {
      "region": "EUROPA · REINO UNIDO / FRANCIA",
      "modo": "MEDIA · CONGESTIÓN Y ACCIONES LABORALES",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "",
      "titular": "Tilbury registra congestión y Francia mantiene riesgo de movilizaciones",
      "dato": "Un reporte operativo del 2 de noviembre señala retrasos de buques en Tilbury, Reino Unido; en Francia se reportan demoras menores por protestas. Everstream informó de convocatoria de huelga general francesa para el 5 de noviembre. Alcance portuario por confirmar. Fuentes: Kukla, 2 nov.; Everstream, 28 oct.",
      "impacto": "Potenciales variaciones en ETA, entregas y transporte terrestre. Las acciones laborales no significan cierre general de puertos europeos.",
      "accion": "Validar estado de terminales, citas de transporte y conexiones de carga para Reino Unido y Francia; monitorear el 5 nov."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Aduanas, aranceles y feriado",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "El SAT informó introducción gradual de la MVE por régimen; corroborar norma vigente. En acero/aluminio hacia EE. UU., no asumir reducción del arancel Section 232 del 50% sin acuerdo oficial. El lunes 16 nov. es descanso obligatorio por la Revolución Mexicana. Fuentes: SAT/Profedet; FreightSpot 2 nov."
    },
    {
      "titulo": "Estados Unidos | LA / Long Beach",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Los trabajadores de vigilancia ILWU Local 26 mantienen negociaciones. La extensión vence el 4 nov. a las 17:00 PT; no hay huelga activa confirmada. Si fracasan las conversaciones, podrían afectarse accesos y movimiento de contenedores. Fuentes: PMA/STG y The Loadstar, 3 nov."
    },
    {
      "titulo": "Estados Unidos | Nueva York/Nueva Jersey",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Un reporte operativo del 2 nov. señala escasez de contenedores vacíos y necesidad de reservar citas con anticipación. Confirmar disponibilidad de equipo por terminal y naviera. Fuente: Kukla Beverage Logistics."
    },
    {
      "titulo": "Brasil | Nuevas tarifas terminales",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Maersk aplicó revisiones OHC/DHC desde el 1 nov. según puerto y equipo. En Suape redujo a BRL 1,585 (dry) y 1,620 (reefer); no presentar el ajuste como aumento universal. Fuentes: Maersk 1 y 30 oct."
    },
    {
      "titulo": "China | Shanghái y Qingdao",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "El reporte de Kuehne+Nagel del 27 oct. señala presión por acumulación de buques en Shanghái y posibles restricciones asociadas a ejercicios en Qingdao hasta el 30 nov. Son antecedentes operativos, no cierres verificados hoy; reconfirmar itinerarios."
    },
    {
      "titulo": "Asia | Singapur y Vietnam",
      "bandera": "https://flagcdn.com/w40/sg.png",
      "texto": "Según Kuehne+Nagel (27 oct.), Singapur enfrenta presión por transbordos; Vung Tau registra alta ocupación y demoras de atraque. Revisar feeder, carga transbordada y conexión; sin actualización más reciente confirmada."
    },
    {
      "titulo": "India | Diwali · 8 nov.",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Diwali se celebra el domingo 8 nov. Se prevén horarios reducidos o falta de personal en algunas fábricas y transportistas del 5 al 12 nov.; comprobar caso por caso. Fuente: Embajada de India y aviso operativo local."
    },
    {
      "titulo": "Europa | España y Bélgica",
      "bandera": "https://flagcdn.com/w40/es.png",
      "texto": "España: convocatoria de huelga el 11 nov., impacto específico aún por determinar. Bélgica: anuncio de huelga de 3 días, 24–26 nov., con posible efecto en ferrocarril y servicios. Fuentes: Kuehne+Nagel 13 oct. y Kukla 2 nov."
    },
    {
      "titulo": "Medio Oriente | Ormuz y Suez",
      "bandera": "",
      "texto": "Drewry (29 oct.) reporta persistencia de disrupciones en Ormuz, mientras el tránsito por Suez se recupera parcialmente. Riesgos de itinerarios y recargos deben verificarse por naviera; no asumir cierre total o normalización general."
    },
    {
      "titulo": "Calendario | Próximas fechas",
      "bandera": "",
      "texto": "4 nov.: negociación LA/LB; 5 nov.: convocatoria de huelga Francia; 8 nov.: Diwali India; 11 nov.: convocatoria España; 15 nov.: siguiente fase MVE anunciada; 16 nov.: descanso obligatorio México; 24–26 nov.: huelga anunciada Bélgica."
    }
  ],
  "metricas": [
    {
      "indicador": "Flete global · Drewry",
      "valor": "US$4,429",
      "tendencia": "Por FEU (40 pies), -3%; referencia 29 oct., última publicada."
    },
    {
      "indicador": "China → Los Ángeles",
      "valor": "US$7,514",
      "tendencia": "Por FEU, -6%; Drewry 29 oct."
    },
    {
      "indicador": "China → Róterdam",
      "valor": "US$3,686",
      "tendencia": "Por FEU, +1%; Drewry 29 oct."
    },
    {
      "indicador": "India · Murasu",
      "valor": "100–110 km/h",
      "tendencia": "Vientos sostenidos al tocar tierra el 3 nov.; AP/IMD."
    },
    {
      "indicador": "EE. UU. · LA/LB",
      "valor": "4 nov.",
      "tendencia": "17:00 PT; vence prórroga de negociación laboral."
    },
    {
      "indicador": "Brasil · Suape dry",
      "valor": "BRL 1,585",
      "tendencia": "Nuevo cargo OHC/DHC de Maersk desde 1 nov."
    },
    {
      "indicador": "India · Diwali",
      "valor": "8 nov.",
      "tendencia": "Validar disponibilidad del 5 al 12 nov."
    }
  ],
  "recomendaciones": [
    "India: confirmar la reapertura efectiva de rutas terrestres, vuelos y ventanas de terminal tras Murasu; anticipar impactos por Diwali.",
    "México: revisar régimen y calendario de la MVE con el agente aduanal; corroborar publicación normativa antes de declarar obligatoriedad.",
    "Estados Unidos: mantener plan alternativo para embarques LA/Long Beach hasta el cierre de las negociaciones del 4 nov.; revisar equipo vacío en NY/NJ.",
    "Europa: reconfirmar ETA y transporte en Tilbury y Francia; preparar contingencia para las convocatorias de huelga de noviembre.",
    "Asia: validar congestión y conexiones en Shanghái, Qingdao, Singapur y Vung Tau; no reutilizar tiempos de espera de octubre como mediciones en vivo.",
    "Brasil: recotizar OHC/DHC por puerto, equipo y fecha de cálculo; en Suape se redujeron cargos de dry y reefer.",
    "Precios: aprovechar la caída transpacifica donde aplique, sin asumir una baja en Asia–Europa; verificar FAK, recargos y blank sailings por servicio."
  ]
};

const retrasos = [
  {
    "puerto": "India · Andhra Pradesh",
    "tiempo": "3 nov. · impacto actual",
    "estado": "Murasu tocó tierra; reportadas suspensiones ferroviarias y de algunos vuelos. Verificar cada puerto por separado."
  },
  {
    "puerto": "México · regímenes aduaneros",
    "tiempo": "Desde 1 nov. · gradual",
    "estado": "Calendario anunciado de MVE por régimen; versión normativa anticipada, confirmar vigencia con agente aduanal."
  },
  {
    "puerto": "EE. UU. · Los Ángeles/Long Beach",
    "tiempo": "4 nov. · 17:00 PT",
    "estado": "Negociación de vigilantes en curso; riesgo de paro, no huelga activa."
  },
  {
    "puerto": "EE. UU. · Nueva York/Nueva Jersey",
    "tiempo": "2 nov. · equipo",
    "estado": "Escasez de contenedores vacíos reportada; reservar citas y validar por naviera."
  },
  {
    "puerto": "Reino Unido · Tilbury",
    "tiempo": "2 nov. · congestión",
    "estado": "Retrasos en atraques reportados; validar ETA actualizado."
  },
  {
    "puerto": "Francia · transporte y puertos",
    "tiempo": "5 nov. · convocatoria",
    "estado": "Riesgo de huelga general y retrasos menores reportados; verificar alcance por terminal."
  },
  {
    "puerto": "China · Shanghái/Qingdao",
    "tiempo": "27 oct. · referencia",
    "estado": "Congestión y posible restricción en Qingdao; no es estado en vivo del 3 nov."
  },
  {
    "puerto": "Singapur / Vietnam · Vung Tau",
    "tiempo": "27 oct. · referencia",
    "estado": "Presión por transbordos y ocupación de patios; confirmar situación actual con línea."
  },
  {
    "puerto": "Brasil · terminales seleccionadas",
    "tiempo": "Desde 1 nov. · tarifas",
    "estado": "Revisión OHC/DHC Maersk por puerto/equipo; Suape registra reducciones."
  },
  {
    "puerto": "España · transporte y terminales",
    "tiempo": "11 nov. · convocatoria",
    "estado": "Huelga anunciada; sin afectación general confirmada."
  }
];

// Corte: 3 nov. 2026. Último WCI: 29 oct. 2026.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 3 DE NOVIEMBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 3 de noviembre de 2026. Fuentes: AP/IMD, SAT, Drewry (último índice del 29 oct.), Maersk, STG, The Loadstar, Kuehne+Nagel y Kukla. Fechas y niveles de impacto sujetos a validación con terminal, naviera y agente aduanal. Los datos históricos no son mediciones en tiempo real.</span>
        </div>
      </footer>
    </main>
  );
}
