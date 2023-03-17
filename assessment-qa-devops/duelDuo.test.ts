
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://54.166.148.154')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

it('clicks an “Add to Duo” button and displays the div with id player-duo',async() => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(4000)
    await driver.findElement(By.xpath('(//button[text() = "Add to Duo"])[1]')).click()
    const userDuo = await driver.findElement(By.id('player-duo'))
    const display = await userDuo.isDisplayed()
    expect(display).toBeTruthy()
})

it('clicks on the draw button and displays the div with id choices', async() => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(4000)
    const choiceContainer = await driver.findElement(By.id('choices'))
    const display = await choiceContainer.isDisplayed()
    expect(display).toBeTruthy()
})