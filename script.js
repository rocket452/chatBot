let model;

async function loadModel() {
  if (!model) {
    console.log("Loading model...");
    model = await tf.loadLayersModel('path/to/your/model.json');
    console.log("Model loaded");
  }
  return model;
}

async function runInference(input) {
  const loadedModel = await loadModel();
  const tensorInput = tf.tensor(input);
  const result = await loadedModel.predict(tensorInput);
  return result.dataSync();
}

// Use the model
document.getElementById('send-button').addEventListener('click', async () => {
  const userInput = document.getElementById('user-input').value;
  const result = await runInference(userInput);
  // Process the result and update the UI
});