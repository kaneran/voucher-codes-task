import HomePage from "../_pageObjects/HomePage"
import Header from "../_pageObjects/Header"


describe('Home page - ', () => {
  before(() => {
    HomePage.visit()
  })

  it('click on a header that doesn\'t exist', () => {
    Header.clickHeaderLink('Invalid header')
  })
})