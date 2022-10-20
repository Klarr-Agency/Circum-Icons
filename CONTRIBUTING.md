# Contribution Guidelines


## Icon Contribution
If you are interested in creating new icons for the community feel free to follow these steps.

### First of all, please verify that there is no icon for that purpose!
- Open a issue with the template [icon request](https://github.com/Klarr-Agency/Circum-Icons/issues/new?assignees=&labels=&template=icon-request.md&title=) and a title of `Icon request: <icon name>`
- Download our template in [ai](https://github.com/Klarr-Agency/Circum-Icons/blob/main/templates/template.ai) or [eps](https://github.com/Klarr-Agency/Circum-Icons/blob/main/templates/template.eps) format and follow the instruction
- Export you icon in svg format
- Clean up your svg, you should keep the number of groups as minimal as possible
- On the first `<g>` tag you should have a id with the name of your icon and a data-author attribute with your github usersame
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g id="At" data-author="Add your Github Username">
    <path d="M12.09,21.925a9.846,9.846,0,0,1-3.838-.747A9.673,9.673,0,0,1,3.005,15.93,10.034,10.034,0,0,1,2.244,12a10.425,10.425,0,0,1,.695-3.8,9.606,9.606,0,0/>
  </g>
</svg>
```
- When it's complete, you can fork our repository and add your svg export into the svg folder
- Create a pull request and we'll review your work

## Please remember that we are not working full time on this project and it could take time before we complete the review!