import React from 'react'

import Select from 'src/addons/Select/Select'
import FormSelect from 'src/collections/Form/FormSelect'
import * as common from 'test/specs/commonTests'

describe('FormSelect', () => {
  common.isConformant(FormSelect)

  it('renders a FormField with a Select control', () => {
    shallow(<FormSelect />)
      .find('FormField')
      .should.have.prop('control', Select)
  })
})
