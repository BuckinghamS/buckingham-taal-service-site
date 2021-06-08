import DOMPurify from 'dompurify'

export const ERROR_MESSAGE = 'Er is iets mis gegaan'

export const URLCreator = (title) => {
  return title && title.replace(/ /g, '-')
}

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
  return process.browser ? DOMPurify.sanitize(content) : content
}

export const slugCreator = (title) => {
  if (typeof title === 'string') {
    return title && title.split(' ').join('-').toLowerCase()
  }
}
