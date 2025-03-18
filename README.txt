TC 1
  Enter "Lazada" into the search bar
  Verify result - should display results for Lazada
  ** Added a bit of razzle dazzle **
  Change Amount Slider from 2000>20000>30000>40000
  Change Down Payment Slider to 0
  Click on each available installment plan buttons
  Verify About Lazada section

TC 2
  Enter "Samsung" into the search bar
  Verify result - should display results for Samsung

TC 3
  Enter an Invalid Product in the search bar
  Verify result - should display No result found for invalid product search


For running without GUI
- run in terminal of project folder
> npx cypress run --spec "cypress\e2e\billease-shop.cy.js"

For running with GUI
- run in terminal of project folder
> npx cypress open
