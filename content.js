function sortByLowestPrice() {
  const hostname = window.location.hostname;

  if (hostname.includes('hotels.com') || hostname.includes('expedia.com')) {
    const sortSelect = document.querySelector('select.uitk-field-select');
    if (sortSelect) {
      for (let option of sortSelect.options) {
        if (option.text.toLowerCase().includes('price: low to high')) {
          sortSelect.value = option.value;
          sortSelect.dispatchEvent(new Event('change', { bubbles: true }));
          break;
        }
      }
    }
  } else if (hostname.includes('kayak.com')) {
    setTimeout(() => {
      const sortDropdown = document.querySelector('div.udzg.udzg-mod-size-base.udzg-mod-radius-none.udzg-mod-state-default.udzg-mod-alignment-left.udzg-pres-simple.udzg-mod-variant-default');
      if (sortDropdown) {
        sortDropdown.click();
        
        setTimeout(() => {
          const lowPriceOptions = document.querySelectorAll('span.Tf9o-title');
          for (let option of lowPriceOptions) {
            if (option.textContent.toLowerCase().includes('price (low to high)')) {
              option.click();
              break;
            }
          }
        }, 1000); // Wait 1 second for the dropdown to open
      }
    }, 2000); // Wait 2 seconds for the page to load
  } else if (hostname.includes('priceline.com')) {
    setTimeout(() => {
      const lowestPriceOption = document.querySelector('div.Box-sc-n9h3nv-0.Flex-sc-1yrtwh8-0.dPoFzW.cPqnaI');
      if (lowestPriceOption) {
        lowestPriceOption.click();
      }
    }, 2000); // Wait 2 seconds for the page to load
  }
}

// Run the function when the page loads
sortByLowestPrice();

// Set up a MutationObserver to detect changes in the DOM
const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Check if the added nodes contain search results
      if (document.querySelector('div[data-testid="property-card"], div[data-testid="hotel-card"]')) {
        sortByLowestPrice();
        break;
      }
    }
  }
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

// Also run the function when the URL changes without a page reload
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    sortByLowestPrice();
  }
}).observe(document, { subtree: true, childList: true });