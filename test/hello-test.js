import assert from 'power-assert'
import foxtail from 'foxtail'
import sinon from 'sinon'
const config = require('../config.json')

describe('foxtail-hello-world', () => {
  it('listenerに追加されていること', () => {
    let fox = new foxtail(config)
    assert(fox.listeners.length === 0)
    require('../lib/hello.js')(fox)
    assert(fox.listeners.length === 1)
  })

  describe('ツイートイベントが起きたとき', ()=> {
    let Res = function() {}
    Res.prototype.reply = function(cb) {
      return cb()
    }
    let fox = new foxtail(config)
    require('../lib/hello.js')(fox)
    let cb = fox.listeners[0].cb

    it('ツイートがhelloのときres.replyが呼ばれること', () => {
      let res = new Res()
      let stub = sinon.stub(res, 'reply')
      Res.prototype.text = 'hello'

      assert(stub.callCount === 0)
      cb(res)
      assert(stub.callCount === 1)
    })

    it('ツイートがbyebyeのときres.replyが呼ばれないこと', () => {
      let res = new Res()
      let stub = sinon.stub(res, 'reply')
      Res.prototype.text = 'byebye'

      assert(stub.callCount === 0)
      cb(res)
      assert(stub.callCount === 0)
    })
  })
})
