export function getFormattedDate() {
  const createdAt = new Date();
  const year = createdAt.getFullYear();
  const month = (createdAt.getMonth() + 1).toString().padStart(2, '0');
  const day = createdAt.getDate().toString().padStart(2, '0');

  return `${year}. ${month}. ${day}.`;
}
