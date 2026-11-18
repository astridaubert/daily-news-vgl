import Image from "next/image";

// DATOS EDITABLES — CORTE 18 NOVIEMBRE 2026
const brief = {
  "fecha": "miércoles 18 de noviembre de 2026",
  "titulo": "Vector Global Logistics | Radar Logístico Global",
  "subtitulo": "18 de noviembre: LA/Long Beach mantiene riesgo de huelga al 20 pese a operar sin paro confirmado; Guanajuato reabrió puntos afectados por bloqueos agrícolas del 17, mientras el frente frío 6 complica operaciones en el Golfo. China mantiene alerta por vientos marítimos y Santos avanza en recuperación digital. Tarifas Drewry: último corte 12 nov.",
  "noticias": [
    {
      "region": "MÉXICO · PUERTO INTERIOR Y CARRETERAS",
      "modo": "SEGUIMIENTO · REAPERTURA Y RIESGO DE NUEVOS CIERRES",
      "imagen": "https://images.unsplash.com/photo-1778629794381-d3ae4a54311c?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Guanajuato restablece circulación tras bloqueos agrícolas; vigilar nuevos acuerdos",
      "dato": "Durante el 17 de noviembre, productores realizaron más de 20 bloqueos en varias entidades. En Guanajuato hubo afectaciones en la Federal 45 a la altura de Puerto Interior; la Secretaría de Seguridad y Paz reportó liberados los puntos monitoreados a las 18:30 de ayer. En Jalisco se comenzaron a retirar bloqueos por una mesa de diálogo convocada para hoy 18. Esto no acredita que todos los tramos de cinco estados estén cerrados hoy. Fuentes: https://zonafranca.mx/politica-sociedad/liberan-carreteras-de-guanajuato-seguira-dialogo-con-la-secretaria-de-gobierno/ · https://www.jornada.com.mx/2026/11/18/estados/025n1est",
      "impacto": "Riesgo de tiempos de tránsito variables, retrasos remanentes y nuevas movilizaciones en los corredores León–Silao, Bajío y conexiones de larga distancia. La apertura reportada requiere confirmación antes de cada despacho.",
      "accion": "Antes de enviar unidades, validar circulación con Guardia Nacional Carreteras/autoridad estatal y transportista; reconfirmar acceso a Puerto Interior, citas, ETAs y rutas de contingencia.",
      "fotoCredito": "Imagen ilustrativa: Nishat Samadzai / Unsplash",
      "fotoUrl": "https://unsplash.com/photos/two-white-trucks-driving-on-a-highway-neCb34TcLEg"
    },
    {
      "region": "MÉXICO · FRENTE FRÍO 6 Y GOLFO",
      "modo": "ALTA · VIENTO, LLUVIA Y OPERACIONES MARÍTIMAS",
      "imagen": "https://images.unsplash.com/photo-1567604154063-4e079ff60be3?auto=format&fit=crop&w=1200&q=85",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "titular": "Frente frío 6: lluvias y evento de Norte exigen revisar maniobras en puertos del Golfo",
      "dato": "El Servicio Meteorológico Nacional pronostica el 18 de noviembre lluvias muy fuertes en Veracruz, Oaxaca, Chiapas y Tabasco. Las rachas pueden llegar a 70–90 km/h en el istmo y Golfo de Tehuantepec, 50–70 km/h en zonas de Veracruz y 30–50 km/h en Tamaulipas. La previsión no confirma cierres activos de todos los puertos; cada capitanía publica restricciones propias. Fuente: https://smn.conagua.gob.mx/es/pronostico-meteorologico-general",
      "impacto": "Posibles limitaciones de practicaje, atraque, ingreso de buques, movimientos de carga y transporte terrestre por lluvia intensa. Especial vigilancia en Veracruz, Altamira/Tampico, Dos Bocas y conexiones del sureste según avisos oficiales.",
      "accion": "Comprobar con capitanía, terminal y naviera si hay cierre a navegación, restricciones de grúas o suspensión de maniobras; ajustar cut-offs y avisar cambios de ETA.",
      "fotoCredito": "Imagen ilustrativa: Unsplash (oleaje, no fotografía del evento en México)",
      "fotoUrl": "https://unsplash.com/fr/s/photos/temp%C3%AAte-en-mer"
    },
    {
      "region": "MERCADO MARÍTIMO · TARIFAS SPOT",
      "modo": "REFERENCIA · DREWRY 12 NOV.",
      "imagen": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
      "bandera": "",
      "titular": "Último corte spot: tarifas Asia–EE. UU. y Europa retroceden; revisar recargos",
      "dato": "Drewry (12 nov.): WCI US$4,305/FEU (-2% semanal). Shanghái–Los Ángeles US$7,416 (-2%); Shanghái–Nueva York US$9,020 (-3%); Shanghái–Róterdam US$3,504 (-3%); Shanghái–Génova US$4,168 (sin variación). Nueva evaluación semanal del 19 nov. aún no publicada al corte del 18. Fuente: https://www.drewry.co.uk/maritime-research-opinion-browser/world-container-index-assessed-by-drewry",
      "impacto": "Las bajas spot por corredor no aseguran espacio ni compensan automáticamente incrementos FAK/PSS, costos portuarios o contingencias terrestres. Los valores citados no son tarifas de hoy en tiempo real.",
      "accion": "Solicitar oferta formal por ruta, fecha, equipo y días libres; validar PSS, transbordos y disponibilidad con las navieras antes de cotizar."
    }
  ],
  "vigilancia": [
    {
      "titulo": "EE. UU. | LA/Long Beach: plazo 20 nov.",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "PMA/ILWU Local 26 extendieron conversaciones hasta el viernes 20 nov. Unos 250 vigilantes están involucrados. Según PMA, la eventual huelga podría afectar terminales que manejan ~85% de la carga de Long Beach y ~33% de Los Ángeles; son proporciones expuestas, no paralizadas. No hay huelga activa confirmada al 18. Fuentes: https://www.reuters.com/business/world-at-work/los-angeles-long-beach-port-employers-extend-negotiations-with-watchmen-union-2026-11-09/ · https://www.flexport.com/blog/potential-strike-250-port-watchmen-could-stall-la-and-long-beach/"
    },
    {
      "titulo": "EE. UU. | Drayage, trenes y puente",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Vincent Thomas Bridge lleva cerrado desde el 7 nov. por obras de larga duración. Flexport reportó 7.19 días promedio de espera de contenedores de importación destinados a tren en septiembre; no extrapolarlo como dato en vivo ni publicar 14,500 unidades con 9+ días sin corroboración. Confirmar cita, rail cutoff y posible almacenaje con terminal. Fuente: https://www.flexport.com/blog/potential-strike-250-port-watchmen-could-stall-la-and-long-beach/"
    },
    {
      "titulo": "México | Bloqueos agrícolas: corte 18 nov.",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Más de 20 bloqueos ocurrieron el 17 en varios estados. La autoridad reportó restablecida circulación de puntos monitoreados en Guanajuato desde 18:30 del 17; protestas de Jalisco comenzaron a levantarse. Se prevé diálogo con Segob hoy. No describir todos los tramos como activos hoy sin reporte vial actualizado. Fuentes: https://zonafranca.mx/politica-sociedad/liberan-carreteras-de-guanajuato-seguira-dialogo-con-la-secretaria-de-gobierno/ · https://www.jornada.com.mx/2026/11/18/estados/025n1est"
    },
    {
      "titulo": "México | Monterrey–Nuevo Laredo/Laredo",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "Validar con operador las condiciones de ruta y seguridad, disponibilidad de tractocamión y ventanas fronterizas. Los cierres agrícolas del Bajío no implican por sí solos afectación directa de Nuevo Laredo."
    },
    {
      "titulo": "México | Frente frío 6",
      "bandera": "https://flagcdn.com/w40/mx.png",
      "texto": "SMN 18 nov.: lluvias muy fuertes en Veracruz, Oaxaca, Chiapas y Tabasco; Norte 50–70 km/h en Veracruz centro-sur y 30–50 km/h en Tamaulipas; 70–90 km/h en Tehuantepec. Cierre de puertos a navegación por confirmar capitanía por capitanía. Fuente: https://smn.conagua.gob.mx/es/pronostico-meteorologico-general"
    },
    {
      "titulo": "Europa | España: normalización y huelgas",
      "bandera": "https://flagcdn.com/w40/es.png",
      "texto": "El paro del 11 nov. es antecedente, no interrupción vigente en todos los puertos. Verificar retrasos de conexiones en Algeciras, Valencia y Barcelona. Una movilización ferroviaria convocada para el 23 nov. debe confirmarse en avisos de operadores; no proyectar automáticamente cancelaciones."
    },
    {
      "titulo": "Europa | Recargos y río Rin",
      "bandera": "https://flagcdn.com/w40/de.png",
      "texto": "Hay avisos de FAK/PSS para Asia–Europa/Mediterráneo a finales de noviembre y contingencias de nivel de agua del Rin. Los importes dependen de naviera, fecha de vigencia y origen-destino; confirmar aviso tarifario antes de trasladar cargos al cliente."
    },
    {
      "titulo": "Asia | Vientos marítimos 18–19 nov.",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "China Meteorological Administration 18 nov., 06:00: vientos fuerza 7, ráfagas 8–9 en Mar Amarillo, Mar de China Oriental y estrecho de Taiwán; sectores pueden llegar a fuerza 8 con ráfagas 9–10. Revisar maniobras por puerto; no hay confirmación de cierre general de Shanghái/Ningbo. Fuente: https://www.mot.gov.cn/fuwu/yujingtishi/haiyangtianqigb/202611/t20261118_4227955.html"
    },
    {
      "titulo": "China | Shanghái y capacidad",
      "bandera": "https://flagcdn.com/w40/cn.png",
      "texto": "Drewry reportó 49 horas de espera media en Shanghái para la semana previa a 12 nov. Es un indicador fechado, no medición del 18. Verificar ETD, transbordos y blank sailings. No atribuir congestión actual al tifón Champi: el episodio confirmado es de octubre. Fuente: https://www.drewry.co.uk/maritime-research-opinion-browser/world-container-index-assessed-by-drewry"
    },
    {
      "titulo": "Brasil | Santos: recuperación administrativa",
      "bandera": "https://flagcdn.com/w40/br.png",
      "texto": "Autoridad portuaria se reunió con terminales el 17 nov. tras incidente del 6. Sistemas administrativos aún con contingencias, pero APS señaló que el movimiento de carga no estaba comprometido. Tramitar ajustes por canal alterno indicado por el operador. Fuente: https://dataportuaria.com/en/brasil/ports/santos-port-authority-details-cyber-incident-to-terminals-acaf5d"
    },
    {
      "titulo": "India | Nhava Sheva y Mundra",
      "bandera": "https://flagcdn.com/w40/in.png",
      "texto": "Reconfirmar gate, transporte terrestre, stock de contenedores y conexiones con Colombo después del calendario festivo; no publicar como actual el supuesto ciclón Arnab ni una 'semana 45' ya transcurrida sin evidencia operativa. No se verificó cierre portuario general."
    },
    {
      "titulo": "Chile | Transporte y conectividad",
      "bandera": "https://flagcdn.com/w40/cl.png",
      "texto": "Verificar condiciones de Ruta 5, transportistas y accesos a puertos por tramo; mantener la alerta como monitoreo operacional, sin afirmar protestas activas basadas solo en noticias del 13 nov."
    },
    {
      "titulo": "Mercado | Spot Asia–EE. UU.",
      "bandera": "https://flagcdn.com/w40/us.png",
      "texto": "Drewry 12 nov.: Shanghái–LA US$7,416 (-2%) y Shanghái–NY US$9,020 (-3%) por FEU. Los anuncios de aumentos no equivalen a una subida efectiva del índice. Fuente: https://www.drewry.co.uk/maritime-research-opinion-browser/world-container-index-assessed-by-drewry"
    },
    {
      "titulo": "Mercado | Spot Asia–Europa",
      "bandera": "https://flagcdn.com/w40/nl.png",
      "texto": "Drewry 12 nov.: Shanghái–Róterdam US$3,504 (-3%) y Shanghái–Génova US$4,168 (estable) por FEU. Validar PSS específicos antes de ofertar. Fuente: https://www.drewry.co.uk/maritime-research-opinion-browser/world-container-index-assessed-by-drewry"
    },
    {
      "titulo": "Calendario | Próximos hitos",
      "bandera": "",
      "texto": "18 nov.: mesa de diálogo sobre bloqueos agrícolas; 18–19 nov.: vientos fuertes en mares chinos; 19 nov.: próximo corte semanal esperado de Drewry; 20 nov.: vence extensión de negociación ILWU Local 26. Monitorear capitanías mexicanas por frente frío 6."
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
      "indicador": "LA/LB · plazo",
      "valor": "20 nov.",
      "tendencia": "Vence extensión de negociación, sin paro confirmado"
    },
    {
      "indicador": "Guanajuato · reapertura",
      "valor": "17 nov.",
      "tendencia": "18:30 h: circulación restablecida en puntos monitoreados"
    },
    {
      "indicador": "Veracruz · viento",
      "valor": "50–70 km/h",
      "tendencia": "SMN · 18 nov., zonas centro/sur"
    },
    {
      "indicador": "China · vientos",
      "valor": "Fuerza 7–8",
      "tendencia": "Aviso marítimo · 18–19 nov."
    }
  ],
  "recomendaciones": [
    "México / Bajío: confirmar con Guardia Nacional y operadores las condiciones actuales antes de salir; el 17 nov. se documentaron cierres, pero Guanajuato reportó liberación de puntos monitoreados desde las 18:30 de ayer.",
    "México / Golfo: verificar avisos de capitanías y terminales para Veracruz, Tampico/Altamira y Tabasco, antes de afirmar cierre por viento o suspender un embarque; programar márgenes por lluvia y Norte.",
    "EE. UU. / LA–Long Beach: monitorear la negociación ILWU Local 26 hasta el 20 nov.; validar terminal, cita de drayage, disponibilidad de tren, desvíos por Vincent Thomas Bridge y costos de demurrage/detention.",
    "China / Asia: atender el boletín marítimo oficial de vientos 18–19 nov.; pedir confirmación de maniobras, ETD, ETA y conexiones en Shanghái, Ningbo y puertos afectados.",
    "Europa: revisar backlog específico tras la huelga española del 11 nov., próxima agenda ferroviaria y recargos FAK/PSS por naviera; no utilizar incrementos genéricos como tarifas universalmente aplicables.",
    "Brasil: anticipar gestión documental en Santos por recuperación de sistemas APS y confirmar canal alterno; según la autoridad, el movimiento de carga no se vio comprometido.",
    "India: confirmar disponibilidad de transporte y equipo en Nhava Sheva, Mundra y otros orígenes; no mencionar 'antes de Diwali' cuando el evento ya pasó.",
    "Fuentes verificadas al 18 nov.: Guanajuato https://zonafranca.mx/politica-sociedad/liberan-carreteras-de-guanajuato-seguira-dialogo-con-la-secretaria-de-gobierno/ · bloqueos https://www.jornada.com.mx/2026/11/18/estados/025n1est · SMN https://smn.conagua.gob.mx/es/pronostico-meteorologico-general · LA/LB https://www.flexport.com/blog/potential-strike-250-port-watchmen-could-stall-la-and-long-beach/ · Drewry https://www.drewry.co.uk/maritime-research-opinion-browser/world-container-index-assessed-by-drewry · China CMA https://www.mot.gov.cn/fuwu/yujingtishi/haiyangtianqigb/202611/t20261118_4227955.html · Brasil https://dataportuaria.com/en/brasil/ports/santos-port-authority-details-cyber-incident-to-terminals-acaf5d"
  ]
};
const retrasos = [
  {
    "puerto": "México · Guanajuato Puerto Interior",
    "tiempo": "Liberado · 17 nov.",
    "estado": "Estado reportó circulación restablecida 18:30 del 17; corroborar antes de despacho."
  },
  {
    "puerto": "México · Golfo",
    "tiempo": "Alerta SMN",
    "estado": "Frente frío 6 con Norte y lluvias; restricción portuaria por confirmar."
  },
  {
    "puerto": "EE. UU. · LA/Long Beach",
    "tiempo": "20 nov.",
    "estado": "Vence extensión ILWU Local 26/PMA; sin paro confirmado."
  },
  {
    "puerto": "EE. UU. · Vincent Thomas",
    "tiempo": "Cerrado",
    "estado": "Desde 7 nov. por obras; confirmar rutas alternas."
  },
  {
    "puerto": "China · mares cercanos",
    "tiempo": "18–19 nov.",
    "estado": "Vientos fuerza 7–8 en sectores; puertos específicos requieren aviso local."
  },
  {
    "puerto": "China · Shanghái",
    "tiempo": "49 horas",
    "estado": "Dato Drewry del 12 nov., referente a semana previa."
  },
  {
    "puerto": "Brasil · Santos",
    "tiempo": "Recuperación",
    "estado": "Sistemas administrativos en recuperación; movimiento de carga sin impacto reportado por APS."
  },
  {
    "puerto": "Europa · España",
    "tiempo": "Seguimiento",
    "estado": "Verificar backlog tras movilización del 11 nov."
  },
  {
    "puerto": "India · Nhava Sheva",
    "tiempo": "Verificar",
    "estado": "Consultar disponibilidad de gates, equipos y conexión por operador."
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
