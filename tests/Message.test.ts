import Message from '../src/Message'

describe('Message Class Test', () => {
  it('hello world', () => {
    const msg = new Message('hello')
    expect(msg.out()).toBe('hello world')
  })
})
