import Image from "next/image";

// DATOS EDITABLES — 20 OCTUBRE 2026
const brief = {
 "fecha":"martes 20 de octubre de 2026",
 "titulo":"Vector Global Logistics | Radar Logístico Global",
 "subtitulo":"Cierres por frente frío en el Golfo de México, restricciones en Le Havre y retrasos ferroviarios en EE. UU. Revisa el estatus de terminales y rutas antes de despachar.",
 "noticias":[
  {"region":"MÉXICO","modo":"ALTO · FRENTE FRÍO 2","imagen":"https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200","bandera":"https://flagcdn.com/w40/mx.png","titular":"Cierres portuarios en el Golfo de México","dato":"El reporte de SEMAR difundido el 19 de octubre informó cierre a toda navegación en Coatzacoalcos, Alvarado, Dos Bocas, Frontera y Sánchez Magallanes, además de puertos de Campeche. Hoy se reporta suspensión de lanchas y transbordador en Coatzacoalcos. La reapertura debe comprobarse por Capitanía.","impacto":"Posibles cambios de escala y demoras en accesos, maniobras y enlaces terrestres.","accion":"Consultar el mapa de apertura de puertos de SEMAR y confirmar cada escala con agente y terminal."},
  {"region":"EUROPA · FRANCIA","modo":"ALTO · LE HAVRE","imagen":"https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200","bandera":"https://flagcdn.com/w40/fr.png","titular":"Terminal TNMSC de Le Havre sigue cerrada","dato":"Kuehne+Nagel reporta el 20 de octubre que la terminal TNMSC continúa sin recepción ni entrega de contenedores tras un ciberataque, sin fecha confirmada de reapertura; algunos movimientos de vacíos siguen disponibles en depósitos privados.","impacto":"Acumulación de carga y posibles retrasos de exportación e importación.","accion":"Confirmar terminal de escala y alternativas de depósito con la naviera antes de programar transporte."},
  {"region":"MÉXICO · CARRETERAS","modo":"ALTO · MONTERREY–NUEVO LAREDO","imagen":"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200","bandera":"https://flagcdn.com/w40/mx.png","titular":"Accidente provoca cierre parcial rumbo a Ciénega de Flores","dato":"Reporte de las 07:05 del 20 de octubre indica cierre parcial cerca del km 87+900 de la carretera Monterrey–Nuevo Laredo. La situación puede cambiar durante el día; no equivale a cierre total de la ruta.","impacto":"Variabilidad en tiempos de entrega y cruce hacia Laredo.","accion":"Consultar Guardia Nacional Carreteras y confirmar tiempos con conductor antes de liberar unidades."}
 ],
 "vigilancia":[
  {"titulo":"México | Puertos, Trudy y Manzanillo","bandera":"https://flagcdn.com/w40/mx.png","texto":"Manzanillo registra 2.41 días de espera promedio de buques (7 días), según Kuehne+Nagel al 20 de octubre; tormentas recientes, aduana y accesos afectan desempeño. Trudy se alejó de la costa y las alertas de huracán fueron levantadas, por lo que no debe difundirse un cierre generalizado sin actualización de terminal. Fuentes: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026 · https://www.reuters.com/business/environment/hurricane-trudy-lashes-mexicos-pacific-coast-is-set-weaken-tonight-2026-10-18/"},
  {"titulo":"México | Rutas carreteras y frontera","bandera":"https://flagcdn.com/w40/mx.png","texto":"Accidente con cierre parcial en Monterrey–Nuevo Laredo km 87+900 reportado a las 07:05. Para Monterrey–Saltillo, Cumbres de Maltrata y Nuevo Teapa–Cosoleacaque verificar vigencia de cada bloqueo o accidente con Guardia Nacional/CAPUFE; no considerar un paro general sin comunicado. Alternativas a Nuevo Laredo: revisar carretera libre/autopista según incidente y capacidad disponible, sin desviar la unidad antes de obtener confirmación del operador. Fuente: https://comova.mx/aviso/accidente-con-cierre-parcial-en-monterrey-nuevo-laredo-km-87/"},
  {"titulo":"México | Diésel y tarifas terrestres","bandera":"https://flagcdn.com/w40/mx.png","texto":"Del 17 al 23 de octubre aplica estímulo complementario al diésel de $2.3533 MXN/L; es apoyo fiscal, NO incremento del precio ni tarifa del transporte. Referencia promedio nacional del diésel: $27.01 MXN/L según reporte publicado el 18 de octubre. Validar recargos particulares. Fuente: https://www.eleconomista.com.mx/economia/aumentan-2-35-pesos-litro-subsidio-diesel-mayor-nivel-ano-20261018-839258.html"},
  {"titulo":"Estados Unidos | Puertos, ferrocarril y aduanas","bandera":"https://flagcdn.com/w40/us.png","texto":"Los Ángeles y Long Beach promedian cerca de 1 día de espera de buques, pero el dwell ferroviario referencial es 8 y 10 días, respectivamente, según Kuehne+Nagel. Validar operación de CBP y tiempos reales en cada cruce fronterizo; no se corroboró cierre general de aduanas. Thanksgiving: 26 de noviembre. Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"},
  {"titulo":"Brasil | Santos, aduanas y capacidad","bandera":"https://flagcdn.com/w40/br.png","texto":"Santos registra 1.45 días de espera promedio semanal de buques, con presión por carga agrícola, contenedores y transporte interior. No se confirmó hoy una huelga aduanal indefinida a escala nacional ni un cierre aéreo general de Río: verificar avisos del operador antes de comunicarlo como hecho. Feriado nacional: 20 de noviembre (Consciência Negra). Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"},
  {"titulo":"India | Nhava Sheva, Mundra y clima","bandera":"https://flagcdn.com/w40/in.png","texto":"Nhava Sheva promedia 1.87 días de espera de buques y Mundra 1.5 días, en el informe del 20 de octubre. Confirmar disponibilidad terrestre, conexiones feeder y capacidad aérea antes de reservar; alertas sobre cancelaciones por ataques o cierre del aeropuerto de Mumbai necesitan comprobación adicional. Diwali: 8 de noviembre. Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"},
  {"titulo":"Asia | China, Vietnam y rutas marítimas","bandera":"https://flagcdn.com/w40/cn.png","texto":"Shanghái: 2.14 días de espera media (7 días), menor que la cifra anterior de 3.51. Ningbo: 1.95 días; densidad de patios alta en Shekou. En Vietnam, Vung Tau reporta hasta 4 días para buques fuera de ventana. Reconfirmar cut-off, transbordo y espacio en servicios Asia–América/Europa. Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"},
  {"titulo":"Europa | Rotterdam, Amberes y huelgas","bandera":"https://flagcdn.com/w40/nl.png","texto":"Rotterdam promedia 1.18 días de espera de buques, pero presenta demoras de 12–72 horas en barcazas/feeder en ciertas terminales. Amberes promedia 1.26 días. En el sur de Italia hay protestas por costos de combustible que afectan movimientos de carga. Huelgas aéreas francesas y belgas deben confirmarse por aeropuerto y franja antes de dar porcentajes de vuelos cancelados. Fuente: https://mykn.kuehne-nagel.com/news/article/port-operational-updates-from-20-10-2026"},
  {"titulo":"Calendario | Próximos festivos","bandera":"","texto":"1 nov. Todos los Santos (según país); 2 nov. Día de Muertos (México, no descanso federal obligatorio); 8 nov. Diwali (India); 16 nov. Revolución Mexicana (descanso oficial); 20 nov. Consciência Negra (Brasil); 24 nov. Guru Nanak Jayanti (India); 26 nov. Thanksgiving (EE. UU.). Validar jornadas locales de aduanas, almacenes y transportistas."}
 ],
 "metricas":[
  {"indicador":"Manzanillo · espera buques (7 días)","valor":"2.41 días","tendencia":"Promedio móvil reportado el 20 oct.; no es cierre de puerto."},
  {"indicador":"Shanghái · espera buques (7 días)","valor":"2.14 días","tendencia":"Promedio semanal; congestión menor que en reporte anterior."},
  {"indicador":"Rotterdam · espera buques (7 días)","valor":"1.18 días","tendencia":"Promedio semanal; barcazas y feeder pueden tardar 12–72 h."},
  {"indicador":"Nhava Sheva · espera buques (7 días)","valor":"1.87 días","tendencia":"Promedio semanal; verificar retrasos en puerta y transbordo."},
  {"indicador":"Santos · espera buques (7 días)","valor":"1.45 días","tendencia":"Promedio semanal; presión por volumen y transporte terrestre."},
  {"indicador":"Le Havre · terminal TNMSC","valor":"Cerrada","tendencia":"Sin gate-in/gate-out según actualización del 20 oct."},
  {"indicador":"México · estímulo extra al diésel","valor":"$2.35/L","tendencia":"Apoyo fiscal vigente 17–23 oct.; NO aumento del combustible."},
  {"indicador":"México · diésel promedio de referencia","valor":"$27.01/L","tendencia":"Precio nacional reportado el 18 oct.; puede variar por zona."}
 ],
 "recomendaciones":[
  "México: consultar SEMAR para reapertura de puertos del Golfo y validar con agente marítimo cada llegada o salida.",
  "Monterrey–Nuevo Laredo: confirmar continuidad de circulación y demoras cerca del km 87+900 antes de despachar; alternativas solo con validación del transportista.",
  "Europa: no programar gate-in/gate-out en TNMSC Le Havre sin confirmación de reactivación; sumar margen de conexión en Rotterdam para feeders.",
  "Asia e India: verificar itinerarios y espacio en Shanghái, Ningbo, Nhava Sheva y Mundra con los nuevos promedios semanales.",
  "EE. UU.: revisar dwell ferroviario en Los Ángeles y Long Beach y operación de cada aduana fronteriza; no confundir espera de buques con permanencia ferroviaria.",
  "Temporada alta: anticipar despachos afectados por Diwali (8 nov.), puente de México (16 nov.), Brasil (20 nov.) y Thanksgiving (26 nov.)."
 ]
};

const retrasos = [
 {"puerto":"México · Golfo: Coatzacoalcos / Alvarado / Dos Bocas","tiempo":"Verificar reapertura","estado":"Cierre a toda navegación reportado por SEMAR el 19 oct.; consultar estado actualizado por Capitanía."},
 {"puerto":"México · Manzanillo","tiempo":"2.41 días","estado":"Promedio semanal de espera de buques, 20 oct. · Kuehne+Nagel."},
 {"puerto":"Francia · Le Havre / TNMSC","tiempo":"Terminal cerrada","estado":"Sin gate-in/gate-out tras ciberataque; reapertura sin fecha confirmada."},
 {"puerto":"Países Bajos · Rotterdam","tiempo":"1.18 días","estado":"Espera de buques; feeder/barcazas con demoras 12–72 h en ciertas terminales."},
 {"puerto":"China · Shanghái","tiempo":"2.14 días","estado":"Promedio semanal de espera de buques, 20 oct."},
 {"puerto":"India · Nhava Sheva","tiempo":"1.87 días","estado":"Promedio semanal de espera; capacidad en rutas selectas presionada."},
 {"puerto":"Brasil · Santos","tiempo":"1.45 días","estado":"Promedio semanal de espera de buques; presión de conexiones terrestres."}
];

// Fuentes: Kuehne+Nagel 20 oct., SEMAR 19 oct., N+ 20 oct., ComoVa/GN 20 oct., DOF 16 oct., Reuters 18 oct.

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
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-14 md:px-10"><p className="text-sm font-bold tracking-[0.15em] text-[#FF3E32]">OPERACIÓN PORTUARIA · 20 DE OCTUBRE</p><h2 className="mt-3 text-3xl font-bold text-[#003C6F]">Estado de puertos y conexiones</h2><p className="mt-3 max-w-4xl text-sm leading-6 text-gray-600">No se dispone de tiempos en vivo comparables en todos los puertos. Las cifras indicativas y restricciones deben validarse con terminal y naviera antes de comprometer ETA.</p><div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#003C6F] text-white"><tr><th className="p-4">País / puerto</th><th className="p-4">Fecha o dato</th><th className="p-4">Estado e interpretación</th></tr></thead><tbody>{retrasos.map((r,i)=><tr key={r.puerto} className={i%2===0?"bg-[#F3F5F7]":"bg-white"}><td className="p-4 font-bold text-[#003C6F]">{r.puerto}</td><td className="p-4 font-semibold">{r.tiempo}</td><td className="p-4 text-gray-600">{r.estado}</td></tr>)}</tbody></table></div></div></section>

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
