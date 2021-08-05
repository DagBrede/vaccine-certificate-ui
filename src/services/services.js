//
import translate from "translate"


translate.engine = "google";
translate.key = process.env.REACT_APP_GOOGLE_KEY;

const translateText = async (inputText, fromLan, toLan) => {
  if (toLan !== "no") {
    const translatedText = await translate(inputText, { from: fromLan, to: toLan }).then(text => {
      return text
    });

    return translatedText
  }

  return inputText
}

export { translateText }