import type { IModule } from "@/components/Courses/indx.model";

export const courses: IModule[] = [
  {
    "id": 1,
    "title": "1. Interpretação de Textos",
    "lessons": { "total": 1193, "duration": "100h 22m" },
    "exercises": { "total": 181, "duration": "79h 12m" },
    "materials": { "total": 53, "duration": "86h 03m" }
  },
  {
    "id": 3,
    "parent_id": 1,
    "title": "Competência 01: Palavras, Imagem e Vida Social",
    "lessons": { "total": 523, "duration": "44h 59m" },
    "exercises": { "total": 62, "duration": "28h 39m" },
    "materials": { "total": 12, "duration": "34h 03m" }
  },
  {
    "id": 4,
    "parent_id": 1,
    "title": "Competência 06: Texto - Contexto e Função",
    "lessons": { "total": 510, "duration": "42h 24m" },
    "exercises": { "total": 80, "duration": "38h 54m" },
    "materials": { "total": 29, "duration": "39h 03m" }
  },
  {
    "id": 5,
    "parent_id": 1,
    "title": "Competência 07: Opiniões e Pontos de Vista",
    "lessons": { "total": 210, "duration": "32h 24m" },
    "exercises": { "total": 30, "duration": "18h 54m" },
    "materials": { "total": 50, "duration": "49h 03m" }
  },
  {
    "id": 6,
    "parent_id": 5,
    "title": "1.1 Linguagem Verbal e Não Verbal",
    "lessons": { "total": 210, "duration": "32h 24m" },
    "exercises": { "total": 30, "duration": "18h 54m" },
    "materials": { "total": 50, "duration": "49h 03m" }
  },
  {
    "id": 7,
    "parent_id": 5,
    "title": "1.2 Estratégias Empregadas na Construção de Texto",
    "lessons": { "total": 210, "duration": "32h 24m" },
    "exercises": { "total": 30, "duration": "18h 54m" },
    "materials": { "total": 50, "duration": "49h 03m" }
  },
  {
    "id": 8,
    "parent_id": 5,
    "title": "1.3 Voz Autoral, Crítica e Perspectiva do Eu-Lírico",
    "lessons": { "total": 210, "duration": "32h 24m" },
    "exercises": { "total": 30, "duration": "18h 54m" },
    "materials": { "total": 50, "duration": "49h 03m" }
  },
  {
    "id": 9,
    "parent_id": 1,
    "title": "Competência 08: Diversidade Linguística",
    "lessons": { "total": 29, "duration": "02h 15m" },
    "exercises": { "total": 6, "duration": "02h 27m" },
    "materials": { "total": 3, "duration": "02h 18m" }
  },
  {
    "id": 2,
    "title": "2. Gramática",
    "lessons": { "total": 86, "duration": "14h 41m" },
    "exercises": { "total": 27, "duration": "10h 45m" },
    "materials": { "total": 10, "duration": "10h 00m" }
  },
  {
    "id": 10,
    "parent_id": 2,
    "title": "2.1 Fonologia",
    "lessons": { "total": 7, "duration": "01h 02m" },
    "exercises": { "total": 4, "duration": "01h 36m" },
    "materials": { "total": 2, "duration": "01h 36m" }
  },
  {
    "id": 11,
    "parent_id": 2,
    "title": "2.2 Morfologia",
    "lessons": { "total": 4, "duration": "00h 55m" },
    "exercises": { "total": 6, "duration": "02h 45m" },
    "materials": { "total": 1, "duration": "00h 48m" }
  },
  {
    "id": 12,
    "parent_id": 11,
    "title": "A. Estrutura e formação das palavras",
    "lessons": { "total": 4, "duration": "00h 55m" },
    "exercises": { "total": 6, "duration": "02h 45m" },
    "materials": { "total": 1, "duration": "00h 48m" }
  },
  {
    "id": 13,
    "parent_id": 11,
    "title": "B. Classes de palavras",
    "lessons": { "total": 27, "duration": "04h 41m" },
    "exercises": { "total": 1, "duration": "00h 21m" },
    "materials": { "total": 1, "duration": "02h 09m" }
  },
  {
    "id": 14,
    "parent_id": 2,
    "title": "2.3 Sintaxe",
    "lessons": { "total": 48, "duration": "07h 54m" },
    "exercises": { "total": 16, "duration": "08h 03m" },
    "materials": { "total": 6, "duration": "05h 27m" }
  }
]