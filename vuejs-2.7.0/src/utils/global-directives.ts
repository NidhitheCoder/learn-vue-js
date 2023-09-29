import type { FormItem } from '@/types'

const getElementValue = (element: any) => {
  if (element.nodeName === 'INPUT' && element.type === 'radio') {
    const selectedValue = document.querySelector(
      `input[name="${element.name}"]:checked`
    ) as HTMLInputElement

    return selectedValue.value
  }

  return element.value
}

export interface FormDirectiveProps {
  value: {
    fields: string[]
    onSubmit: (formValues: FormItem) => void
  }
}

export const UseVFormDirective = {
  mounted: (element: HTMLElement, data: FormDirectiveProps) => {
    element.classList.add('form')
    const herd = Array.from(element.childNodes) as HTMLElement[]

    // submit click
    const buttons = herd.filter(
      (child: HTMLElement) => child.tagName === 'BUTTON'
    ) as HTMLButtonElement[]
    const submitButton = buttons.find((button) => button.type === 'submit')

    submitButton?.addEventListener('click', () => {
      const { fields, onSubmit } = data.value

      const formValues: FormItem = {}
      fields.map((field: string) => {
        const element = document.getElementById(field)
        const value = getElementValue(element)
        formValues[field] = value
      })

      onSubmit(formValues)
    })
  }
}
