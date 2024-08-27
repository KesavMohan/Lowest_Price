# Travel Price Sorter Chrome Extension

## Description

The Travel Price Sorter is a Chrome extension that automatically sorts search results by lowest price on popular travel booking sites. It currently supports Hotels.com, Expedia.com, Kayak.com, and Priceline.com.

## How It Works

1. When you visit one of the supported travel booking sites and perform a search, the extension automatically activates.

2. It waits for the search results to load, then clicks on the appropriate sorting option to arrange the results by lowest price first.

3. For each supported site, the extension does the following:
   - Hotels.com and Expedia.com: Selects the "Price: low to high" option from the sort dropdown.
   - Kayak.com: Clicks the sort dropdown and selects the "Price (low to high)" option.
   - Priceline.com: Clicks the "Lowest Price" sorting option.

4. The extension continues to monitor the page for changes, such as new searches or page updates, and re-applies the sorting when necessary.

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Files

- `manifest.json`: Contains the extension's metadata and permissions.
- `content.js`: The main script that runs on the supported websites and handles the sorting functionality.
- `README.md`: This file, containing information about the extension.

## Supported Websites

- Hotels.com
- Expedia.com
- Kayak.com
- Priceline.com

## Notes

- The extension may need periodic updates if the supported websites change their structure or class names.
- Make sure to refresh the extension in Chrome's extension management page after making any changes to the code.

## Troubleshooting

If the extension doesn't work as expected:
1. Check the console for any error messages.
2. Ensure that the extension is enabled and has the necessary permissions.
3. Try refreshing the page or reloading the extension.

## Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.