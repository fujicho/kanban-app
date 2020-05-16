import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import KbnLoginView from '@/components/templates/KbnLoginView'

//　ローカルなVueコンストラクタを作成
const localVue = createLocalVue()

//　ローカルなVueコンストラクタにVuexをインストール
localVue.use(Vuex)

describe('KbnLoginView', () => {
  let actions
  let $router
  let store
  let LoginFormComponentStub

  // `KbnLoginForm`コンポーネントのログインボタンのクリックをトリガーするヘルパー関数
  const triggerLogin = (loginView, target) => {
    const loginForm = loginView.find(target)
    loginForm.vm.onlogin('foo@domain.com', '12345678')
  }

  beforeEach(() => {
    // KbnLoginFormコンポーネントのスタブの設定
    LoginFormComponentStub = {
      name: 'KbnLoginForm',
      props: ['onlogin'],
      render: h => h('p', ['login form'])
    }

    // Vue Routerのモック設定
    $router = {
      push: sinon.spy()
    }

    // loginアクションの動作確認の為のVuex周りの設定
    actions = {
      login: sinon.stub() // loginアクションのモック
    }
    store = new Vuex.store({
      state: {},
      actions
    })
  })

  
})