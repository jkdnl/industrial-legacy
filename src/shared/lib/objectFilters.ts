export type ObjectsSearchState = {
  q: string;
  typeIds: number[];
  statusIds: number[];
  cityIds: number[];
};

function toNumberArray(value: unknown) {
  if (Array.isArray(value)) {
    return value
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
  }

  if (typeof value === 'string' && value.length > 0) {
    return value
      .split(',')
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
  }

  return [];
}

export function validateObjectsSearch(search: Record<string, unknown>): ObjectsSearchState {
  return {
    q: typeof search.q === 'string' ? search.q : '',
    typeIds: toNumberArray(search.typeIds),
    statusIds: toNumberArray(search.statusIds),
    cityIds: toNumberArray(search.cityIds),
  };
}

export function serializeObjectsSearch(search: ObjectsSearchState) {
  return {
    q: search.q || undefined,
    typeIds: search.typeIds.length > 0 ? search.typeIds.join(',') : undefined,
    statusIds: search.statusIds.length > 0 ? search.statusIds.join(',') : undefined,
    cityIds: search.cityIds.length > 0 ? search.cityIds.join(',') : undefined,
  };
}
