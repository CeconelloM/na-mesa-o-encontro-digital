import thumbPrayer from "@/assets/thumb-prayer.jpg";
import thumbFamily from "@/assets/thumb-family.jpg";
import thumbCommunity from "@/assets/thumb-community.jpg";
import thumbWorship from "@/assets/thumb-worship.jpg";
import thumbBibleStudy from "@/assets/thumb-biblestudy.jpg";
import thumbGrace from "@/assets/thumb-grace.jpg";
import thumbYouth from "@/assets/thumb-youth.jpg";

export type ContentType = "video-aula" | "filme" | "serie";

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: ContentType;
  category: string;
  duration: string;
  year: number;
  rating: number;
  episodes?: number;
  videoUrl?: string;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  likes: number;
  createdAt: string;
  replies?: Comment[];
}

export const categories = [
  "Oração", "Família", "Comunidade", "Louvor", "Estudo Bíblico", "Graça", "Juventude", "Casamento", "Liderança", "Missões"
];

export const contents: ContentItem[] = [
  {
    id: "1",
    title: "A Arte da Oração",
    description: "Uma série de vídeo-aulas sobre como desenvolver uma vida de oração profunda e transformadora. Aprenda a se conectar com Deus de maneira íntima e verdadeira.",
    thumbnail: thumbPrayer,
    type: "video-aula",
    category: "Oração",
    duration: "8 aulas • 4h 30min",
    year: 2024,
    rating: 4.9,
  },
  {
    id: "2",
    title: "Família Cristã",
    description: "Um filme emocionante sobre a jornada de uma família que descobre o verdadeiro significado do amor incondicional através da fé.",
    thumbnail: thumbFamily,
    type: "filme",
    category: "Família",
    duration: "1h 52min",
    year: 2024,
    rating: 4.7,
  },
  {
    id: "3",
    title: "Comunhão à Mesa",
    description: "Série sobre o poder da comunidade cristã e como a vida em comunhão transforma relacionamentos e fortalece a fé de cada membro.",
    thumbnail: thumbCommunity,
    type: "serie",
    category: "Comunidade",
    duration: "6 episódios",
    year: 2024,
    rating: 4.8,
    episodes: 6,
  },
  {
    id: "4",
    title: "Adoração Sem Fronteiras",
    description: "Documentário sobre como o louvor cristão conecta culturas e transforma vidas ao redor do mundo inteiro.",
    thumbnail: thumbWorship,
    type: "filme",
    category: "Louvor",
    duration: "1h 28min",
    year: 2023,
    rating: 4.6,
  },
  {
    id: "5",
    title: "Mergulhando na Palavra",
    description: "Curso completo de estudo bíblico para iniciantes e avançados. Descubra os contextos históricos e as aplicações práticas das Escrituras.",
    thumbnail: thumbBibleStudy,
    type: "video-aula",
    category: "Estudo Bíblico",
    duration: "12 aulas • 6h",
    year: 2024,
    rating: 4.9,
  },
  {
    id: "6",
    title: "Graça Abundante",
    description: "Um documentário poderoso sobre histórias reais de redenção e a graça de Deus manifestada em situações impossíveis.",
    thumbnail: thumbGrace,
    type: "filme",
    category: "Graça",
    duration: "1h 35min",
    year: 2023,
    rating: 4.8,
  },
  {
    id: "7",
    title: "Geração com Propósito",
    description: "Série voltada para jovens cristãos que buscam seu propósito e querem viver uma vida com significado e impacto.",
    thumbnail: thumbYouth,
    type: "serie",
    category: "Juventude",
    duration: "8 episódios",
    year: 2024,
    rating: 4.5,
    episodes: 8,
  },
];

export const mockComments: Comment[] = [
  {
    id: "c1",
    author: "Maria Silva",
    avatar: "MS",
    text: "Esse conteúdo transformou minha vida de oração! Muito obrigada por compartilhar.",
    likes: 24,
    createdAt: "2024-12-15",
    replies: [
      {
        id: "c1r1",
        author: "João Santos",
        avatar: "JS",
        text: "Concordo plenamente, Maria! Também foi muito edificante pra mim.",
        likes: 8,
        createdAt: "2024-12-16",
      },
    ],
  },
  {
    id: "c2",
    author: "Ana Costa",
    avatar: "AC",
    text: "Que benção! Compartilhei com todo o meu grupo de estudo bíblico.",
    likes: 15,
    createdAt: "2024-12-18",
  },
  {
    id: "c3",
    author: "Pedro Oliveira",
    avatar: "PO",
    text: "A qualidade da produção está incrível. Parabéns pela dedicação!",
    likes: 32,
    createdAt: "2025-01-02",
  },
];

export const getContentsByType = (type: ContentType) =>
  contents.filter((c) => c.type === type);

export const getContentsByCategory = (category: string) =>
  contents.filter((c) => c.category === category);

export const getContentById = (id: string) =>
  contents.find((c) => c.id === id);
