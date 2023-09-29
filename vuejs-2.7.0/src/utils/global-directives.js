export const UseVFormDirective = {
    mounted: (el, data) => {

        el.classList.add('form');
        const childs = Array.from(el.childNodes);

        // submit click
        const buttons = childs.filter(child => child.tagName === 'BUTTON')
        const submitButton = buttons.find(button => button.type === 'submit')
        submitButton?.addEventListener('click', () => {
            const formData = data.value
            formData.onSubmit();
        })
    }

}