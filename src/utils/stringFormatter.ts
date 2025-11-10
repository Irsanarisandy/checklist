export const formatText = (text: string) => {
	const wordArr = text.split("_");

	if (wordArr.length < 2) return text;

	return wordArr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};
