import axios from 'axios'

// Auth API モジュールで利用するHTTPクライアントをモック化
const mockAUth = adapter => {
  const injector = require('inject-loader!@/api/auth')
  const clientMock = injector({
    './client': axios.create({ adapter })
  })
  return clientMock.default
}

describe('Auth APIモジュール', () => {
  describe('login', () => {
    const token = '1234567890abcdef'
    const userId = 'foo@domain.com'
    const password = '12345678'

    describe('成功', () => {
      it('token, userIdが取得できること', done => {
        const adapter = config => {
          return new Promise((resolve, reject) => {
            resolve({ data: { token, userId }, status: 200 })
          })
        }

        const auth = mockAuth(adapter)
        auth.login({ address, password })
          .then(res => {
            expect(res.token).to.equal(token)
            expect(res.userId).to.equal(userId)
          })
          .then(done)
      })
    })

    descri
  })
})