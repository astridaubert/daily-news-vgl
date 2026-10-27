import Image from "next/image";

// DATOS EDITABLES — 27 OCTUBRE 2026
const brief = {
  "fecha": "martes 27 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Alerta en México por posibles nuevos bloqueos; tarifas marítimas al alza rumbo a noviembre, blank sailings en Asia–Europa y presión energética en rutas internacionales.",
  "noticias": [
    {
      "region": "MÉXICO · TRANSPORTE TERRESTRE",
      "modo": "ALERTA · SEGUIMIENTO 27 OCT",
      "imagen": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Paro de transportistas: continúan riesgos de bloqueos y demoras",
      "dato": "Tras las movilizaciones del 26 de octubre, la mayoría de cierres se levantó durante la noche, pero se reportaron tramos pendientes y amenazas de nuevas protestas el 27. México–Toluca, México–Querétaro, México–Pachuca y Chamapa–Lechería requieren monitoreo; no hay cierre nacional confirmado para este martes.",
      "impacto": "Afectaciones intermitentes a recolecciones, rutas industriales, accesos aeroportuarios y tiempos de entrega, según tramo y horario.",
      "accion": "Validar CAPUFE, SICT y operador por corredor; reconfirmar citas y ETA. No tratar amenazas de bloqueo como cierres confirmados."
    },
    {
      "region": "GLOBAL · FLETES MARÍTIMOS",
      "modo": "ALZA · TARIFAS NOVIEMBRE",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "",
      "titular": "Tarifas marítimas al alza: navieras anuncian nuevos precios para noviembre",
      "dato": "Las tarifas del transporte marítimo de contenedores registran su segunda semana consecutiva de aumentos. Según el último reporte disponible de Drewry, publicado el 22 de octubre, el índice mundial alcanzó USD 4,585 por contenedor de 40 pies, un incremento semanal del 2%. Ante esta tendencia, MSC y CMA CGM anunciaron nuevas tarifas de referencia para noviembre en rutas desde Asia hacia Europa y el Mediterráneo, que oscilan entre USD 4,500 y USD 5,200 por contenedor de 40 pies, dependiendo del destino. Estos anuncios podrían generar mayores costos logísticos durante noviembre, aunque los incrementos dependerán de cada ruta, naviera y condiciones del mercado.",
      "impacto": "Los importadores podrían recibir cotizaciones más altas o con menor vigencia durante noviembre. El incremento real dependerá de la ruta, la naviera, la disponibilidad de espacio y los recargos aplicables; no significa que todos los embarques subirán por igual.",
      "accion": "Revisar las nuevas cotizaciones antes de confirmar embarques. En rutas Asia–México, validar por separado si existen aumentos aplicables y su fecha de entrada en vigor."
    },
    {
      "region": "GOLFO PÉRSICO · ENERGÍA",
      "modo": "RIESGO · COSTOS Y SEGUROS",
      "imagen": "https://commons.wikimedia.org/wiki/Special:FilePath/US_Navy_040705-N-2972R-040_A_merchant_ship_sails_off_the_starboard_side_of_the_amphibious_assault_ship_USS_Kearsarge_%28LHD_3%29_while_transiting_the_Straits_of_Hormuz.jpg?width=1200",
      "bandera": "",
      "titular": "Ormuz mantiene presión sobre seguros, combustible y fletes",
      "dato": "La tensión en el Estrecho de Ormuz sigue elevando el riesgo para el transporte marítimo internacional. Aunque el tránsito continúa, la incertidumbre en la zona mantiene presión sobre los seguros de guerra, los costos de combustible y algunos recargos logísticos.",
      "impacto": "Esto puede traducirse en mayores costos de transporte y más volatilidad en las cotizaciones, especialmente en rutas sensibles al precio del combustible o expuestas a recargos por riesgo.",
      "accion": "Revisar con navieras y operadores logísticos los recargos vigentes, validar la cobertura de seguro y anticipar posibles ajustes de tarifa en embarques internacionales."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Protestas y accesos",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "La mayoría de bloqueos del 26 fue levantada, pero algunos continuaron y podrían reanudarse el 27. Verificar México–Toluca, México–Querétaro, México–Pachuca y Chamapa–Lechería por tramo con CAPUFE."
    },
    {
      "titulo": "Asia–México | GRI y contratos",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Solicitar confirmación escrita de cualquier GRI/FAK aplicado a México, equipo 20’/40’, vigencia, puerto y fecha de zarpe. Un anuncio para Europa no prueba automáticamente un alza equivalente hacia México."
    },
    {
      "titulo": "Asia–Europa | Blank sailings",
      "bandera": "",
      "texto": "Drewry: ocho salidas canceladas anunciadas para la semana siguiente al 22 oct., contra dos la semana anterior. Revisar reservas, rollovers y conexiones."
    },
    {
      "titulo": "Estados Unidos | Última milla",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Monitorear recargos por combustible y tarifas de paquetería de temporada alta. Porcentajes y precios spot aportados requieren validación por fecha y servicio antes de publicarse como vigentes."
    },
    {
      "titulo": "Global | Golfo Pérsico y Ormuz",
      "bandera": "",
      "texto": "Riesgo de guerra eleva costos de seguro y transporte. Consultar advisories de navieras y aseguradoras para cada tránsito; evitar atribuir a hoy cotizaciones no verificadas."
    },
    {
      "titulo": "Singapur | Transbordos",
      "bandera": "https://flagcdn.com/w40/sg.png",
      "texto": "Vigilar congestión y tiempos de conexión en servicios Asia–Europa; la espera específica de tres días aportada está pendiente de validación actual por terminal."
    },
    {
      "titulo": "Brasil | Puertos y carreteras",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Seguir recuperación de rutas tras elecciones y lluvias, además de ventanas y filas en puertos. Restricciones electorales del 25 oct. no deben presentarse como cierres vigentes el 27."
    },
    {
      "titulo": "India | Nhava Sheva y Mundra",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Reconfirmar disponibilidad de contenedor, gate y omisiones de escala con naviera; no asumir esperas históricas como mediciones actuales."
    },
    {
      "titulo": "Europa | Rotterdam y Amberes",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Solicitar estimados actualizados de barcazas y feeders; la recuperación de retrasos previos puede ser escalonada."
    },
    {
      "titulo": "Calendario | Próximos festivos",
      "bandera": "",
      "texto": "1 nov. Todos los Santos (según país); 2 nov. Día de Muertos (no descanso federal obligatorio en México); 8 nov. Diwali (India); 16 nov. puente de Revolución Mexicana; 20 nov. Consciência Negra (Brasil); 26 nov. Thanksgiving (EE. UU.)."
    }
  ],
  "metricas": [
    {
      "indicador": "Drewry WCI · global",
      "valor": "USD 4,585",
      "tendencia": "+2% semanal · por FEU al 22 oct."
    },
    {
      "indicador": "Shanghái → Rotterdam",
      "valor": "USD 3,632",
      "tendencia": "+3% semanal · FEU · 22 oct."
    },
    {
      "indicador": "Shanghái → Génova",
      "valor": "USD 4,152",
      "tendencia": "+5% semanal · FEU · 22 oct."
    },
    {
      "indicador": "MSC · Asia–Norte de Europa",
      "valor": "USD 4,500",
      "tendencia": "FAK por FEU anunciado desde 1 nov., sujeto a condiciones."
    },
    {
      "indicador": "CMA CGM · Asia–Med. oeste",
      "valor": "USD 4,900",
      "tendencia": "FAK por FEU anunciado 1–14 nov."
    },
    {
      "indicador": "Asia–Europa · salidas canceladas",
      "valor": "8",
      "tendencia": "Anunciadas para la semana posterior al 22 oct. · Drewry."
    },
    {
      "indicador": "México · paro carretero",
      "valor": "27 oct.",
      "tendencia": "Seguimiento; cierres sujetos a confirmación por tramo."
    },
    {
      "indicador": "Riesgo en Ormuz",
      "valor": "Elevado",
      "tendencia": "Seguros y recargos requieren cotización específica."
    }
  ],
  "recomendaciones": [
    "Asia–Europa: cotizar con vigencia definida para zarpe de noviembre; comparar FAK anunciadas con la oferta spot y verificar conceptos incluidos.",
    "Asia–México: confirmar por escrito la aplicación de GRI, puertos, fechas y tipo de contenedor; no trasladar automáticamente las tarifas europeas.",
    "Blank sailings: revisar itinerarios, reservar capacidad alternativa y definir margen para transbordos o rollovers.",
    "México: monitorear accesos y protestas con CAPUFE antes de confirmar ETA, sin asumir bloqueos nacionales permanentes.",
    "Golfo Pérsico: revisar seguro de guerra y recargos energéticos en rutas expuestas.",
    "Última milla en EE. UU.: validar fuel surcharges y escalas de temporada alta en contrato antes de presupuestar."
  ]
};

const retrasos = [
  {
    "puerto": "México · carreteras",
    "tiempo": "27 oct. · variable",
    "estado": "Continuidad de manifestaciones posible; cierres reales sujetos a avisos por tramo de CAPUFE/SICT."
  },
  {
    "puerto": "México · cruces fronterizos",
    "tiempo": "Confirmar hoy",
    "estado": "Revisar disponibilidad de unidades y ETAs por potenciales desvíos interiores."
  },
  {
    "puerto": "Asia–Europa · salidas",
    "tiempo": "8 cancelaciones",
    "estado": "Drewry, referencia publicada 22 oct. para la semana siguiente; confirmar servicio reservado."
  },
  {
    "puerto": "Asia–Europa · Rotterdam",
    "tiempo": "Validar itinerario",
    "estado": "Revisar ventanas de transbordo y conexión; no se afirma cierre portuario."
  },
  {
    "puerto": "Singapur · transbordo",
    "tiempo": "Validar terminal",
    "estado": "Comprobar cola y conexión con transportista; sin espera puntual confirmada hoy."
  },
  {
    "puerto": "Brasil · Navegantes",
    "tiempo": "Sin corte en vivo",
    "estado": "Solicitar ventana y espera vigente a terminal."
  },
  {
    "puerto": "India · Nhava Sheva",
    "tiempo": "Sin corte en vivo",
    "estado": "Verificar gate y escala con naviera."
  },
  {
    "puerto": "Europa · Rotterdam/Amberes",
    "tiempo": "Validar conexiones",
    "estado": "Revisar feeders y barcazas tras demoras anteriores."
  }
];

// Corte: 27 oct. 2026; tarifas Drewry 22 oct. Fuentes dentro de cada noticia.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 27 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
