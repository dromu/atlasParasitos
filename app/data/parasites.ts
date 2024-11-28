export const parasites = {
  'giardia-lamblia': {
    name: 'Giardia lamblia',
    type: 'Protozoo',
    images: [
      {
        url: '/images/giardia-lamblia-1.jpg',
        description: 'Trofozoíto de Giardia lamblia visto al microscopio óptico.'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Giardia_lamblia_SEM_8698_lores.jpg/640px-Giardia_lamblia_SEM_8698_lores.jpg',
        description: 'Imagen de microscopía electrónica de barrido de Giardia lamblia.'
      }
    ]
  },
  'entamoeba-histolytica': {
    name: 'Entamoeba histolytica',
    type: 'Protozoo',
    images: [
      {
        url: '/images/entamoeba-histolytica-1.jpg',
        description: 'Trofozoíto de Entamoeba histolytica con un glóbulo rojo fagocitado, característica distintiva de esta especie.'
      },
      {
        url: '/images/entamoeba-histolytica-2.jpg',
        description: 'Quiste maduro de Entamoeba histolytica con cuatro núcleos visibles.'
      },
      {
        url: '/images/entamoeba-histolytica-3.jpg',
        description: 'Úlcera amebiana en el colon, causada por la invasión de Entamoeba histolytica en la mucosa intestinal.'
      }
    ]
  },
  'cryptosporidium-parvum': {
    name: 'Cryptosporidium parvum',
    type: 'Protozoo',
    images: [
      {
        url: '/images/cryptosporidium-parvum-1.jpg',
        description: 'Ooquistes de Cryptosporidium parvum. Se observan estructuras esféricas con una pared resistente.'
      },
      {
        url: '/images/cryptosporidium-parvum-2.jpg',
        description: 'Infección por Cryptosporidium parvum en el intestino delgado. Se observan múltiples ooquistes en la luz intestinal.'
      },
      {
        url: '/images/cryptosporidium-parvum-3.jpg',
        description: 'Microfotografía electrónica de un ooquiste de Cryptosporidium parvum, mostrando detalles de su estructura.'
      }
    ]
  },
  'ascaris-lumbricoides': {
    name: 'Ascaris lumbricoides',
    type: 'Helminto',
    images: [
      {
        url: '/images/ascarisLumbr0.jpg',
        description: 'Huevo fértil de Ascaris lumbricoides observado al microscopio.'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ascaris_lumbricoides.jpeg/640px-Ascaris_lumbricoides.jpeg',
        description: 'Adultos de Ascaris lumbricoides.'
      }
    ]
  },
  'taenia-solium': {
    name: 'Taenia solium',
    type: 'Helminto',
    images: [
      {
        url: '/images/taenia-solium-1.jpg',
        description: 'Proglótide grávida de Taenia solium. Se observan los numerosos huevos en su interior.'
      },
      {
        url: '/images/taenia-solium-2.jpg',
        description: 'Huevos de Taenia solium. Se observan los embriones hexacanto en su interior.'
      },
      {
        url: '/images/taenia-solium-3.jpg',
        description: 'Cisticerco de Taenia solium en el tejido muscular. Se observa la vesícula llena de líquido y el escólex invaginado.'
      }
    ]
  },
  'trichuris-trichiura': {
    name: 'Trichuris trichiura',
    type: 'Helminto',
    images: [
      {
        url: '/images/trichuris-trichiura-1.jpg',
        description: 'Adulto de Trichuris trichiura. Se observa su forma característica de látigo.'
      },
      {
        url: '/images/trichuris-trichiura-2.jpg',
        description: 'Huevos de Trichuris trichiura. Se observan los huevos con sus tapones polares.'
      },
      {
        url: '/images/trichuris-trichiura-3.jpg',
        description: 'Trichuris trichiura adulto en el intestino grueso. Se observa su extremo anterior incrustado en la mucosa intestinal.'
      }
    ]
  },
  'enterobius-vermicularis': {
    name: 'Enterobius vermicularis',
    type: 'Helminto',
    images: [
      {
        url: '/images/enterobius-vermicularis-1.jpg',
        description: 'Adulto de Enterobius vermicularis hembra. Se observa su forma característica y su tamaño pequeño.'
      },
      {
        url: '/images/enterobius-vermicularis-2.jpg',
        description: 'Huevos de Enterobius vermicularis. Se observan los huevos con su forma característica.'
      },
      {
        url: '/images/enterobius-vermicularis-3.jpg',
        description: 'Enterobius vermicularis adulto en el intestino grueso. Se observa su localización en la región cecal.'
      }
    ]
  },
}

export type Parasite = {
  name: string;
  type: 'Protozoo' | 'Helminto';
  images: Array<{
    url: string;
    description: string;
  }>;
}

export type ParasiteId = keyof typeof parasites;

