## Setup Instructions

After cloning the project navigate to the root directory and run the following:

1. **yarn install** to install all dependencies.
2. **yarn test** to run the test cases.

---

## Problems and Solutions

1. The first challenge that I had was to identify what would be the font sizes / screen sizes to be use. Since I don't have a sketch app on my computer I downloaded an application called lunacy to view the sketch file and I was able to get the exact font sizes of each texts. 
2. For the screen size of each page I was not able to get the exact size. However, I used bootstrap container class and modify it to closely match the size of the page container of the mockup.
3. The next thing is the logo, based on the mockup the logo is supposed to be color black but the provided svg was color white. I just simply modify it on a text editor by changing the default color/fill to black.
4. I used CRA (Create React App) for the structure of the app and just added some addons directories like components, pages, assets, fixtures and so on.
5. For the data feed I just treated it as a fixture and simply imported it to the components where should it be use.
6. For testing I used Jest and React Testing Libray since it's already included/configured on CRA. I'm still new to unit testing on so the test cases that I created are just basic tests like matchung snapshots, simple rendering, data property checking. 

---

## Technologies used
1. CRA
2. React Router Dom
3. Bootstrap SASS
4. Normalize SASS
5. Reactstrap
6. Node SASS

> > > > > > > 103059e9cbe3260867c097d922ed67cf55416fdd