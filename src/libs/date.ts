export const dateFormat = (dateTime: string) => {
  try {
    const date = new Date(dateTime);

    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const formattedDate = `${month} ${day}, ${hour}:${minute < 10 ? '0' : ''}${minute}`;

    return `${month} ${day}, ${hour}:${minute < 10 ? '0' : ''}${minute}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
};