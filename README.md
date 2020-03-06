# Cobiro QA Test

## Structure

- Created folder page-objects
- Page-object folder contains two files
- app.po.ts file contains description of elements of main page and details page
- navigation-page.po.ts contains description of elements of navigation block and header
- in specs folder there are two files
- app.spec.ts contains tests wich is covered Acceptance criteria
- navigation-page.spec.ts contains bonus points tests


## Acceptance criterias

- Acceptance criteria 'On the main page I should see a tree structure of items' was not meet. The stucture is looks like Tree but it is not Tree. Tree structure should have a root node.
test  'check tree structure' is failed because there is no child element for element with css '[class=""]'

- Acceptance criteria 'I should be able to search the tree and be presented with a filtered list' is not clear enough. How exactly search should work? With one letter or how many letters user should enter in order to filter.

- Acceptance criteria 'The filtered list will contain all matched items and their children'. As it is not tree structure I'm not able to add test to check whether filtered items are parent and child (it fails). But I added test to check all filtered items.

- Acceptance criteria 'All items will have a call to action that links to a page containing information on the item' is meet partially. You can look at test 'navigate to details page' there are several comments on rows 54 and 60, 83, 83, 85.


