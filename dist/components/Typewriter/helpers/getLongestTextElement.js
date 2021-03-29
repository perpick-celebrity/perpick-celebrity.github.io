const descendingSortFunction = (firstElement, secondElement) => secondElement.text.length - firstElement.text.length;
const getLongestTextElement = (elements) => {
  const descendingTextLengthOrder = elements.sort(descendingSortFunction);
  const longestTextElement = descendingTextLengthOrder[0].currentNode;
  return longestTextElement;
};
export {getLongestTextElement};
