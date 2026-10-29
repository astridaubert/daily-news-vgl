import Image from "next/image";

// DATOS EDITABLES — 29 OCTUBRE 2026
const brief = {
  "fecha": "jueves 29 de octubre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "Riesgo alto por movilizaciones portuarias del 30 de octubre en más de 100 puertos; India enfrenta secuelas del ciclón Arnab, mientras LA/Long Beach mantiene alerta laboral y México opera con retrasos residuales. Confirmar itinerarios antes de comprometer entregas.",
  "noticias": [
    {
      "region": "GLOBAL · PUERTOS",
      "modo": "ALERTA PREVENTIVA · 30 OCT",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200",
      "bandera": "",
      "titular": "Más de 100 puertos prevén acciones sindicales el 30 de octubre",
      "dato": "La Federación Internacional de los Trabajadores del Transporte informó el 28 de octubre acciones coordinadas en más de 100 puertos de 17 países para el viernes 30. Entre los puertos mencionados están Génova, Gioia Tauro, Marsella, Pireo, Tánger y Mersin. Italia tiene huelga portuaria nacional convocada por 24 horas. No todos los puertos suspenderán actividades: habrá huelgas y manifestaciones con distinta intensidad. Fuentes: ITF (28 oct.), Port Technology International (26 oct.).",
      "impacto": "Posibles demoras de atraque, gate, movimientos de patio y conexiones terrestres o feeder, según terminal y modalidad de protesta.",
      "accion": "Confirmar con naviera y terminal la participación real, operación de gate y buque para el 30 oct.; reservar margen o alternativas en carga crítica."
    },
    {
      "region": "INDIA · CICLÓN ARNAB",
      "modo": "RIESGO ALTO · 28–29 OCT",
      "imagen": "https://commons.wikimedia.org/wiki/Special:FilePath/Arnab_2026-10-26_0740Z.jpg?width=1200",
      "bandera": "https://flagcdn.com/w40/in.png",
      "titular": "Arnab se debilita; continúan riesgos logísticos en India",
      "dato": "Arnab cruzó Andhra Pradesh y Yanam el 28 de octubre, con vientos sostenidos de 125–135 km/h y ráfagas de 150 km/h. Para la noche del 28 se había debilitado a depresión profunda, según boletines del IMD. Persisten lluvias y riesgos de acceso terrestre. Fuentes: IMD/GDACS (28 oct.) e Indian Express (29 oct.).",
      "impacto": "Riesgo de interrupciones en carreteras, ferrocarriles, puertos y vuelos próximos a Kakinada, Visakhapatnam y Vijayawada.",
      "accion": "Confirmar avisos de puerto, horarios ferroviarios y vuelo por vuelo; recalcular ETA en servicios del este de India."
    },
    {
      "region": "MÉXICO · AUTOTRANSPORTE",
      "modo": "RECUPERACIÓN · 29 OCT",
      "imagen": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Termina el paro nacional; continúa vigilancia de rutas y citas",
      "dato": "Tras el diálogo con Gobernación, organizaciones transportistas reportaron el levantamiento del paro nacional el 27 de octubre. La situación puede variar en puntos específicos, incluida la carretera federal 45 en Zacatecas. No se confirma cierre nacional activo hoy; cada restricción local requiere validación con CAPUFE y autoridades. Fuentes: La Jornada Zacatecas y NTR Zacatecas (27–28 oct.).",
      "impacto": "Posibles reprogramaciones de entregas y citas por acumulación de viajes; cualquier nueva afectación debe verificarse por tramo.",
      "accion": "Reconfirmar con transportista, CAPUFE y receptor los accesos, citas y tiempos estimados, especialmente en corredores afectados."
    }
  ],
  "vigilancia": [
    {
      "titulo": "México | Puertos del Pacífico",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Manzanillo y Lázaro Cárdenas presentan recuperación posterior a Simón y Trudy. Validar acumulación, inspecciones y citas por terminal. Vigilar bloqueos localizados y condiciones de lluvia o viento en el norte, sin afirmar cierres generales."
    },
    {
      "titulo": "Estados Unidos | Los Ángeles / Long Beach",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Se reporta posibilidad de conflicto laboral de ILWU Local 26 con referencia al 1 de noviembre. Tratarlo como riesgo preventivo, no como huelga iniciada; confirmar status con cada terminal y naviera."
    },
    {
      "titulo": "Estados Unidos | Drayage y puertos del Golfo",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Vigilar disponibilidad de unidades, citas intermodales y restricciones locales de recuperación en puertos del Golfo; la condición de cada puerto requiere aviso de autoridad portuaria o USCG vigente."
    },
    {
      "titulo": "Europa | Francia e Italia",
      "bandera": "",
      "texto": "Acciones sindicales previstas para el 30 de octubre. Italia tiene convocatoria nacional de 24 horas; en Francia y otros países el grado de afectación puede variar por terminal. Revisar Le Havre, Marsella-Fos, Dunkerque y puertos italianos."
    },
    {
      "titulo": "Europa | Rin, Rotterdam y Amberes",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Monitorear bajos niveles del Rin, recargos de barcaza y efectos acumulados de paros anteriores. Solicitar tiempos y tarifas actualizados; no asumir que esperas históricas siguen vigentes."
    },
    {
      "titulo": "Asia | Shanghái, Singapur y Colombo",
      "bandera": "https://flagcdn.com/w40/sg.png",
      "texto": "Seguir conexiones y rollovers tras Golden Week. Las colas y los tiempos de espera cambian por terminal; confirmar itinerario y disponibilidad de feeders."
    },
    {
      "titulo": "India | Puertos del este",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Arnab afecta Andhra Pradesh y Yanam. Monitorear Kakinada, Visakhapatnam, Gangavaram y las conexiones ferroviarias y aéreas de la región; consultar avisos oficiales antes de despachar."
    },
    {
      "titulo": "Brasil | Puertos y cargos noviembre",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Sin cierre portuario nacional verificado el 29 de octubre. Confirmar horarios y accesos de Santos y puertos del sur/sudeste; revisar cargos OHC/DHC anunciados para el 1 de noviembre según naviera y servicio. Nossa Senhora Aparecida fue el 12 de octubre, no el 28."
    },
    {
      "titulo": "Global | Tarifas y mercado financiero",
      "bandera": "",
      "texto": "Revisar GRIs de Asia–México por naviera y vigencia. La volatilidad bursátil y las expectativas de tasas pueden influir indirectamente en financiamiento, flotas y demanda futura; la sesión del 14 de octubre no debe presentarse como caída de hoy ni como interrupción logística demostrada."
    },
    {
      "titulo": "Calendario | Próximas fechas",
      "bandera": "",
      "texto": "30 oct.: acciones en más de 100 puertos (modalidad sujeta a terminal). 1 nov.: posible escalamiento laboral LA/LB, sujeto a confirmación. 2 nov.: Día de Muertos en México (no descanso federal obligatorio). 8 nov.: Diwali en India. 16 nov.: descanso por Revolución Mexicana."
    }
  ],
  "metricas": [
    {
      "indicador": "Acción portuaria internacional",
      "valor": "30 oct.",
      "tendencia": "Más de 100 puertos en 17 países; impacto varía por terminal (ITF, 28 oct.)."
    },
    {
      "indicador": "Italia · huelga portuaria",
      "valor": "24 h",
      "tendencia": "Convocatoria registrada para el 30 oct."
    },
    {
      "indicador": "Arnab · vientos sostenidos",
      "valor": "125–135 km/h",
      "tendencia": "En tierra 28 oct.; debilitado a depresión profunda esa noche."
    },
    {
      "indicador": "México · paro transportista",
      "valor": "Concluido",
      "tendencia": "Acuerdo de levantamiento 27 oct.; verificar ruta."
    },
    {
      "indicador": "Drewry WCI · referencia",
      "valor": "USD 4,585",
      "tendencia": "Por FEU, reporte 22 oct.; no es cotización de hoy."
    },
    {
      "indicador": "Shanghái → Rotterdam",
      "valor": "USD 3,632",
      "tendencia": "Por FEU, referencia 22 oct.; verificar tarifa actual."
    },
    {
      "indicador": "Shanghái → Génova",
      "valor": "USD 4,152",
      "tendencia": "Por FEU, referencia 22 oct.; verificar tarifa actual."
    },
    {
      "indicador": "LA/LB · conflicto laboral",
      "valor": "Preventivo",
      "tendencia": "Posible desde 1 nov.; sin paro confirmado al corte."
    }
  ],
  "recomendaciones": [
    "Europa: identificar terminales involucradas el 30 de octubre y reconfirmar buque, gate, citas, transbordos y alternativas antes del zarpe.",
    "India: comprobar cierres por ciclón Arnab en puertos del este, vuelos y trenes; agregar holgura de tránsito a carga sensible.",
    "México: no presentar el paro nacional como activo; revisar operaciones residuales por corredor con CAPUFE y transportista.",
    "LA/LB: anticipar escenarios de continuidad o afectación sindical sin afirmar huelga confirmada; monitorear drayage y citas.",
    "Asia–México y Brasil: confirmar recargos GRI, OHC y DHC por naviera, fecha, terminal y tipo de equipo.",
    "Indicadores financieros: mantener la volatilidad bursátil como contexto indirecto, no como una interrupción operacional inmediata."
  ]
};

const retrasos = [
  {
    "puerto": "Europa · múltiples puertos",
    "tiempo": "30 oct. · preventivo",
    "estado": "Acciones previstas en más de 100 puertos; Italia convoca huelga de 24 h. Verificar terminal."
  },
  {
    "puerto": "India · Andhra Pradesh",
    "tiempo": "28–29 oct.",
    "estado": "Arnab ya cruzó tierra y se debilitó; continúan riesgos de inundación y retrasos portuarios, ferroviarios y aéreos."
  },
  {
    "puerto": "México · carreteras",
    "tiempo": "Paro concluido",
    "estado": "Levantamiento anunciado 27 oct.; confirmar circulación y citas por tramo."
  },
  {
    "puerto": "México · Manzanillo/Lázaro Cárdenas",
    "tiempo": "Recuperación",
    "estado": "Verificar recepción, accesos, acumulación y ventanas por terminal."
  },
  {
    "puerto": "LA/LB · terminales",
    "tiempo": "Desde 1 nov. · riesgo",
    "estado": "Posible conflicto laboral; no hay huelga confirmada para hoy."
  },
  {
    "puerto": "Europa · Rin/Rotterdam",
    "tiempo": "Validar al día",
    "estado": "Riesgo de niveles bajos y congestión de barcazas; consultar operadores."
  },
  {
    "puerto": "Asia · Singapur/Colombo",
    "tiempo": "Validar transbordo",
    "estado": "Comprobar conexiones, colas y feeders por terminal."
  },
  {
    "puerto": "Brasil · Santos y sur",
    "tiempo": "Validar cita",
    "estado": "Sin cierre nacional confirmado; revisar terminal y nuevos cargos aplicables desde noviembre."
  }
];

// Corte: 29 oct. 2026; tarifas Drewry 22 oct. Fuentes dentro de cada noticia.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN LOGÍSTICA · CORTE 29 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
            Corte informativo del 29 de octubre de 2026. Fuentes: ITF, IMD/GDACS, NASA Earth Observatory, prensa portuaria y referencias operativas sujetas a validación. Datos sujetos a actualización y confirmación con terminal, naviera y proveedor.</span>
        </div>
      </footer>
    </main>
  );
}
