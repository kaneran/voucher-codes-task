
# VoucherCodes Test Engineer Task attempt

This is my attempt for the Test Engineer Task at VoucherCodes.




## Installation
Please clone the repository. Next, open the cloned repsository via Git or a Terminal and run the following command

```bash
  npm install
```


## Running Tests

To run the tests through the command line, run the following command

```bash
  npm run cy:e2e
```


## Why did I pick Cypress?
Cypress provided a few utilities out of the box which included the following:
- Records a video for each test spec that was run (saved in cypress/videos)
- Automatically capture screenshots at instances where a test failed (saved in cypress/screenshots)
- When a test fails, Cypress logs useful information including the assertion error along with the stack trace

I have found the above utilties really useful in my previous workplaces which used Cypress.

## Why did I use the Page Objects pattern?
Made it easier to encapsulate the selectors and automation code per page in VoucherCodes. Given VoucherCodes had a few pages which the test needed to navigate through, it was appropriate to use the pattern.

## Additional thoughts
Where possible, I tried to use the data-qa attribute for the selectors as looked the most reliable. However there was one instance where I needed to locate an element using the text 'Restaurants' which I believe could be improved but I assumed this text is less likely to change over time which was why I decided to use in the end.

Due to time constraints, I wanted to try and verify that the Search function resulted in the current page to update. Hence why I used the change in url and number of vouchers displayed to be two checks I wrote to verify this.
