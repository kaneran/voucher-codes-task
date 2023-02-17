import HomePage from "../_pageObjects/HomePage"
import RestaurantVouchersPage from "../_pageObjects/RestaurantVouchersPage"
import Header from "../_pageObjects/Header"
import { HeaderLinks } from "../enums/HeaderLinks"
import { CategoryLinks } from "../enums/CategoryLinks"

describe('Restaurant Vouchers page - ', () => {
  before(() => {
    HomePage.visit()
  })

  it('perform search for offers in local restaurants in London', () => {
    Header.clickHeaderLink(HeaderLinks.Categories)
    Header.clickCategoryLink(CategoryLinks.Restaurants)
    RestaurantVouchersPage.searchOffers('London UK', 10)
  })
})