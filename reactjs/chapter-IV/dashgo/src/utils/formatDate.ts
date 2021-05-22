export function formatDate(date: string) {
  const formated = new Date(date).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return formated;
}
