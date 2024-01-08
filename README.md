# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). A simple app that fetches countries data from an api and displays with extended features to filter by region,search countires by name and theme switcher between dark and light.

## Table of contents

- [Overview](#overview)
  - [Features](#Features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Features

Users are able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![Rest Countries demo](https://github.com/FevenSeyfu/Countries-color-theme-switcher/blob/dev/desktop-preview.jpg)

### Links

- Solution URL: [Github](https://github.com/FevenSeyfu/Countries-color-theme-switcher)
- Live Site URL: [Live Site](https://rest-countries-theme.netlify.app/)

## My process

### Built with

- Vite
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [Vite](https://vitejs.dev/) - Build Tool

### What I learned

From This Challenge I have practiced using react API, theme toggleing in react and using tailwind css,Fetching adn Rendering data from API

```React context
const ThemeProvider = ({children}) => {
    const[isDarkTheme, setIsDarkTheme] = useState (false)

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme)

    }
    const theme = isDarkTheme ? 'dark' : 'light';

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};
```

### Useful resources

- [React Context API](https://www.w3schools.com/react/react_usecontext.asp) - This helped me to easily use React context with useContext hook. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Feven Seyfu](https://fevenseyfu.tech/)
- Frontend Mentor - [@FevenSeyfu](https://www.frontendmentor.io/profile/FevenSeyfu)
- Twitter - [@FevenSeyfu](https://www.twitter.com/FevenSeyfu)
- Linkedin - [Feven Seyfu](https://www.linkedin.com/in/fevenseyfu/)

## Acknowledgments

I would like to thank FrontedMentor for providing the Design as a well assets for this challenge.

