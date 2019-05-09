/**
 * Predictors take a history sequence and output a guess for
 * the next element of the sequence
 *
 * Predictor :: (Array[String]) -> String
 * createPredictor :: (String, String) -> Predictor
 */

export const createStatic = (x, _) => () => x;

export const createRandom = (x, y) => () => (Math.random() >= 0.5 ? x : y);

const createSaturatingCounter = bits => (x, y) => history => {
  const totalStates = Math.pow(2, bits);
  const currentState = history.reduce(
    (state, value) =>
      value == x
        ? Math.max(0, state - 1)
        : Math.min(state + 1, totalStates - 1),
    totalStates / 2
  );

  return currentState < totalStates / 2 ? x : y;
};

export const createOneBitCounter = createSaturatingCounter(1);
export const createTwoBitCounter = createSaturatingCounter(2);
