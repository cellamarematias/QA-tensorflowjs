const qna = require('@tensorflow-models/qna');

const text = "I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!";

const question = "What does the father teach?"

const loadModel = async () => {
  // Leer el modelo
  const model = await qna.load();

  // Encontrar nuestra pregunta
  const answers = await model.findAnswers(question, text);

  console.log('Respuestas:');
  console.log(answers);
}

loadModel();
