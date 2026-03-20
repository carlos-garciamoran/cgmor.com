import 'server-only'

import { createClient } from '@vercel/edge-config'

export type BookItem = {
  title: string
  author: string
}

export type Category<T> = {
  id: string
  title: string
  items: T[]
}

export type MusesData = {
  books: Category<BookItem>[]
  films: Category<string>[]
}

const BOOKS_ITEM_KEY = 'books'
const FILMS_ITEM_KEY = 'films'

export async function getMusesData(): Promise<MusesData> {
  const [booksPayload, filmsPayload] = await Promise.all([
    getEdgeConfigValue(BOOKS_ITEM_KEY),
    getEdgeConfigValue(FILMS_ITEM_KEY),
  ])

  if (typeof booksPayload === 'undefined') {
    throw new Error(`Missing "${BOOKS_ITEM_KEY}" in Edge Config.`)
  }

  if (typeof filmsPayload === 'undefined') {
    throw new Error(`Missing "${FILMS_ITEM_KEY}" in Edge Config.`)
  }

  return {
    books: parseBookCategories(booksPayload),
    films: parseFilmCategories(filmsPayload),
  }
}

async function getEdgeConfigValue(key: string) {
  return createClient(process.env.EDGE_CONFIG, { cache: 'force-cache' }).get<unknown>(key)
}

function parseBookCategories(value: unknown) {
  return parseCategories(value, 'books', parseBookItem)
}

function parseFilmCategories(value: unknown) {
  return parseCategories(value, 'films', parseFilmItem)
}

function parseCategories<T>(
  value: unknown,
  fieldName: string,
  parseItem: (value: unknown, fieldName: string, index: number) => T,
): Category<T>[] {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid Edge Config payload for "${fieldName}": expected an array.`)
  }

  return value.map((entry, categoryIndex) => {
    if (!isRecord(entry)) {
      throw new Error(
        `Invalid Edge Config payload for "${fieldName}[${categoryIndex}]": expected an object.`,
      )
    }

    const id = entry.id
    const title = entry.title
    const items = entry.items

    if (typeof id !== 'string' || id.length === 0) {
      throw new Error(
        `Invalid Edge Config payload for "${fieldName}[${categoryIndex}].id": expected a non-empty string.`,
      )
    }

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error(
        `Invalid Edge Config payload for "${fieldName}[${categoryIndex}].title": expected a non-empty string.`,
      )
    }

    if (!Array.isArray(items)) {
      throw new Error(
        `Invalid Edge Config payload for "${fieldName}[${categoryIndex}].items": expected an array.`,
      )
    }

    return {
      id,
      title,
      items: items.map((item, itemIndex) => parseItem(item, fieldName, itemIndex)),
    }
  })
}

function parseBookItem(value: unknown, fieldName: string, index: number): BookItem {
  if (!isRecord(value)) {
    throw new Error(
      `Invalid Edge Config payload for "${fieldName}" item at index ${index}: expected an object.`,
    )
  }

  const title = value.title
  const author = value.author

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error(
      `Invalid Edge Config payload for "${fieldName}" item at index ${index}: expected title to be a non-empty string.`,
    )
  }

  if (typeof author !== 'string' || author.length === 0) {
    throw new Error(
      `Invalid Edge Config payload for "${fieldName}" item at index ${index}: expected author to be a non-empty string.`,
    )
  }

  return { title, author }
}

function parseFilmItem(value: unknown, fieldName: string, index: number) {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(
      `Invalid Edge Config payload for "${fieldName}" item at index ${index}: expected a non-empty string.`,
    )
  }

  return value
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}
