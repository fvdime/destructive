export const dateFormat = (timestamp: string) => {
  try {
    const dateObject = new Date(timestamp!);

    const options = { month: "short", day: "2-digit" } as const;
    let formattedDate = "";
    let formattedTime = "";
    if (dateObject) {
      formattedTime = `${dateObject
        .getHours()
        .toString()
        .padStart(2, "0")}:${dateObject
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        dateObject
      );
    }
    return  `${formattedDate}, ${formattedTime}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
};