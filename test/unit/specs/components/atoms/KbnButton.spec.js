import { mount } from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'

describe('KbnButton',() => {
  describe('プロパティ',() => {
    describe('デフォルト',() => {
      it('kbn-buttonクラスを持つbutton要素で構成されること',() => {
        const button = mount(KbnButton)
        expect(button.is('button')).to.equal(true)
        expect(button,classes()).to.include('kbn0button')
      })
    })

    describe('button',() => {
      it('kbn-buttonクラスを持つbutton要素で構成されること',() => {
        const button = mount(KbnButton, {
          propsData: { type: 'button'}
        })
        expect(button.is('button')).to.equal(true)
        expect(button.classes()).to.include('kbn-button')
      })
    })

    describe('text',() => {
      it('kbn-button-textクラスを持つbutton要素で構成されること',() => {
        const button = mount(KbnButton,{
          propsData: {type: 'text'}
        })
        expect(button.is('button')).to.equal(true)
        expect(button.classes()).to.include('kbn-button-text')
      })
    })
  })

  
})