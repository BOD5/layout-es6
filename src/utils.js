const validateEmail = (email) => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const errorBlock = (errorMsg) => {
  console.log(' - errorMsg:12 >', errorMsg); // eslint-disable-line no-console
  const content = document.createElement('p');
  content.classList.add('error', 'error-msg');
  content.innerHTML = errorMsg;
  return content;
};

export { validateEmail, insertAfter, errorBlock };
