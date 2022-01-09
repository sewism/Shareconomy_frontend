import { mount } from '@vue/test-utils'
import Entry from '@/views/Entry'
import Toast from '@/components/Toast'

describe('Testing Entry.vue', () => {
  it('should have toast component if new Entry', () => {
    const wrapper = mount(Entry, {
      data: function () {
        return {
          firstName: '',
          lastName: '',
          email: '',
          titel: '',
          category: '',
          zipcode: '',
          description: '',
          imageURL: '',
          new: true
        }
      }
    })
    const toast = wrapper.findComponent(Toast)
    expect(toast.exists()).toBeTruthy()
  })

  it('should not have toast component if normal Entry', () => {
    const wrapper = mount(Entry, {
      data: function () {
        return {
          firstName: '',
          lastName: '',
          email: '',
          titel: '',
          category: '',
          zipcode: '',
          description: '',
          imageURL: '',
          new: false
        }
      }
    })
    const toast = wrapper.findComponent(Toast)
    expect(toast.exists()).toBeFalsy()
  })

  it('should render first name and last name and titel', () => {

    const wrapper = mount(Entry, {
      data: function () {
        return {
          firstName: 'Max',
          lastName: 'Mustermann',
          email: 'mm@aol.com',
          titel: 'Mustermantel',
          category: 'MODE',
          zipcode: '007',
          description: 'Modischer Mustermatel, must have!',
          imageURL: '',
          new: false
        }
      }
    })

    const cardTitle = wrapper.find('.card-title')
    const cardName = wrapper.find('.card-name')
    expect(cardTitle.text()).toBe('Mustermantel')
    expect(cardName.text()).toBe('Max Mustermann')
  })

})
