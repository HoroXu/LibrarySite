// Generate Fake Fake Fake Tag! 
export const generateTag = text => {
  let tag = document.createElement('div')
  tag.textContent = text
  tag.setAttribute('name', text)
  SAUP.sendLogData('click', { tag }) // eslint-disable-line
}