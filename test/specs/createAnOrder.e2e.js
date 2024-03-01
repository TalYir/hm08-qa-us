const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    //1.Setting the address
    it('setting the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField = $(page.fromField);
        await fromField.waitForExist();
        const fromValue = await fromField.getValue();
        const toField = $(page.toField);
        await toField.waitForExist();
        const toValue = await toField.getValue();
        await browser.pause(2000);
        await expect(toField).toHaveValue('1300 1st St');
        await expect(fromField).toHaveValue('East 2nd Street, 601');
    })
    //2.Selecting Supportive plan
    it('selecting supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlan.scrollIntoView({ timeout: 15000 });
        await supportivePlan.waitForDisplayed();
        await supportivePlan.waitForClickable();
        await supportivePlan.click();
        await expect (supportivePlan.parentElement()).toHaveElementClass('active');  
    })
    //3.Filling in the phone number
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed();
        await expect(phoneNumberModal).toExist();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
    //4.Adding a credit card
    it('should Add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethod = $ ('.pp-text');
        await paymentMethod.waitForClickable({ timeout: 15000 });
        await paymentMethod.click ();
        const addCardButton = await $('.pp-plus-container');
        await addCardButton.waitForClickable();
        await addCardButton.click();
        const creditCardFeild = await $ (page.creditCardFeild);
        await creditCardFeild.waitForClickable();
        await creditCardFeild.click();
        await creditCardFeild.setValue('123400004321',{ timeout: 30000 });
        const codeFeild = await $ (page.cardCodeField);
        await codeFeild.click();
        await codeFeild.setValue('12');
        const outOfControl = $ ('.modal.unusual');
        await outOfControl.click();
        const linkButton=await $(page.linkButton);
        await linkButton.click({ timeout: 15000 });
        const closeButton=await $(page.closeButton);
        await closeButton.click();
        const text = await $(page.PaymentMethod).getText(); 
        await expect(text).toBe('Card');
    })
    //5.Writing a message for the driver
    it('should Write a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageForDriverFeild = await $(page.messageForDriverFeild);
        await messageForDriverFeild.waitForDisplayed();
        await messageForDriverFeild.setValue('Hello!');
        await browser.waitUntil(async () => {
            const value = await messageForDriverFeild.getValue();
            return value === 'Hello!';
        }, { timeout: 5000, timeoutMsg: 'Expected value not set within timeout' });
        const message = await messageForDriverFeild.getValue();
        await expect(message).toBe('Hello!');
});
    //6.Ordering a Blanket and handkerchiefs
    it('should Order a Blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlan.scrollIntoView({ timeout: 15000 });
        await supportivePlan.waitForDisplayed();
        await supportivePlan.waitForClickable();
        await supportivePlan.click();
        const blanketsAndHandkerchiefsButton = $('.slider.round');
        await blanketsAndHandkerchiefsButton.scrollIntoView();
        await blanketsAndHandkerchiefsButton.click();
        await expect(blanketsAndHandkerchiefsButton).toBeEnabled();
    })
    //7.Ordering 2 Ice creams
   it('should Order 2 Ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlan = $(page.supportivePlan);
        await supportivePlan.scrollIntoView({ timeout: 1000 });
        await supportivePlan.click();
        const plusOneIceCreamButton =$(page.plusOneIceCreamButton);
        await plusOneIceCreamButton.scrollIntoView();
        await plusOneIceCreamButton.click();
        await plusOneIceCreamButton.click();
        const iceCreamValue = $(page.iceCreamValue);
        await iceCreamValue.waitForExist({ timeout: 1000 });
        const value = await iceCreamValue.getText();
       await expect(value).toBe('2');
    })
    //8.The car search modal appears
    it('The car search modal appears', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const businessPlan = $(page.businessPlan);
        await businessPlan.click();
        const orderButton=$(page.orderButton);
        await orderButton.waitForDisplayed({ timeout: 20000 });
        await orderButton.click();
        const carSearchModal=$(page.carSearchModal);
        await carSearchModal.waitForDisplayed({ timeout: 15000 });
        await expect(carSearchModal).toBeDisplayed();
    })
    //9.Waiting for the driver info to appear in the modal
    it('The driver info appears in the modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const businessPlan = await $(page.businessPlan);
        await businessPlan.click();
        const orderButton = await $(page.orderButton);
        await orderButton.scrollIntoView({ timeout: 15000 });
        await orderButton.waitForDisplayed({ timeout: 15000 });
        await orderButton.click();
        const carSearchModal=$(page.carSearchModal);
        await carSearchModal.waitForDisplayed({ timeout: 15000 });
        await carSearchModal.click();
        const orderSubBody = $ ('.order-subbody');
        await orderSubBody.waitForExist({ timeout: 15000 });
        await expect(orderSubBody).toBeDisplayed();
    })
})

