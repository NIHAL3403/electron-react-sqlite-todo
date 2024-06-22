// test/specs/app.e2e.js
const { expect } = require('chai');

describe('Electron App', () => {
    it('should open main window and add todo item', () => {
        browser.url('/');
        // Write your test steps using WebDriverIO commands
        const addButton = $('.add-todo-btn');
        addButton.click();

        const todoInput = $('.todo-input');
        todoInput.setValue('Test todo item');
        addButton.click();

        const todoItems = $$('.todo-item');
        expect(todoItems).to.have.lengthOf(1);
    });
});
