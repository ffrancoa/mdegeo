import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sin título",
    description: "Sin descripción",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Resumen",
      info: "Información",
      todo: "Por hacer",
      tip: "Consejo",
      success: "Éxito",
      question: "Pregunta",
      warning: "Advertencia",
      failure: "Fallo",
      danger: "Peligro",
      bug: "Error",
      example: "Ejemplo",
      quote: "Cita",
    },
    backlinks: {
      title: "Enlaces de Retroceso",
      noBacklinksFound: "No se han encontrado enlaces traseros",
    },
    themeToggle: {
      lightMode: "Modo claro",
      darkMode: "Modo oscuro",
    },
    explorer: {
      title: "Explorador",
    },
    footer: {
      createdWith: "Creado con",
    },
    graph: {
      title: "Topografía",
    },
    recentNotes: {
      title: "Notas Recientes",
      seeRemainingMore: ({ remaining }) => `Vea ${remaining} más →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transcluido de ${targetSlug}`,
      linkToOriginal: "Enlace al original",
    },
    search: {
      title: "Buscar ...",
      searchBarPlaceholder: "Escribe algo para iniciar una búsqueda.",
    },
    tableOfContents: {
      title: "Tabla de Contenido",
    },
  },
  pages: {
    rss: {
      recentNotes: "Notas recientes",
      lastFewNotes: ({ count }) => `Últimás ${count} notas`,
    },
    error: {
      title: "No se encontró.",
      notFound: "Esta página es privada o no existe.",
    },
    folderContent: {
      folder: "Carpeta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 artículo en esta carpeta" : `${count} artículos en esta carpeta.`,
    },
    tagContent: {
      tag: "Etiqueta",
      tagIndex: "Índice de Etiquetas",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 artículo con esta etiqueta" : `${count} artículos con esta etiqueta.`,
      showingFirst: ({ count }) => `Mostrando las primeras ${count} etiquetas.`,
      totalTags: ({ count }) => `Se encontraron ${count} etiquetas en total.`,
    },
  },
} as const satisfies Translation
