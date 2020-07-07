/**
 * class Message
 */
export default class Message {
  message: string
  /**
   * constructor
   * @param {string} message
   */
  constructor(message: string) {
    this.message = message
  }

  /**
   * out
   * @return {string}
   */
  public out(): string {
    return `${this.message} world`
  }
}
