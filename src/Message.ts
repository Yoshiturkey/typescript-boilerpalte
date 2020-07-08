/**
 * class Message
 */
export default class Message {
  /**
   * constructor
   * @param {string} message
   */
  constructor(public message: string) {}

  /**
   * out
   * @return {string}
   */
  public out(): string {
    return `${this.message} world`
  }
}
