export const isNullUndefinedEmptStg = (value) => value === null || value === undefined || value === '';

export function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }