import RangedatePicker from 'src/RangedatePicker.vue'
import { createVM } from '../helpers/utils.js'

describe('RangedatePicker.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<rangedate-picker></rangedate-picker>
`, { components: { RangedatePicker }})
  })
})
