# AGRO

This [project](https://bordo951.github.io/agro/) is a landing. 
It will be useful for beginners who want to gain experience in single-page layout.

## Project structure

<img src="https://lh3.googleusercontent.com/fife/ABSRlIr9N8XhqTVmz8uFgaQKck9IQbxPdjEHce__Db_t3Qz7HKvG7BpLDfN9AGJ_YvucdCjilFf9LW70aIK7pH6TTl8LstPBTb5HXiAauBrVBidvKqcHvlAj422UXpWxdga3rtf_fiRLGq__p0aM-TIigFUAMYVGIWxtWsbybsItr818_yJW0cCiA6efRklBlBDM3U2yGsNPGKrImLy0GQUJsRgfi6DJIoPcDMle4uQbaKRjJ4ZEzf-rjVvsucGu06F9FXtBt47XytdaLbUyIaRn6c_RjKduyIYsrDBFxtZhkpEM3dLrnCIRVrVUyzYMo1VrTF8wxGOmjT5wcBMbe5VfhI1DeGbmUaa56oL5Xl-MzqXaNHBNhmsb5LDBQA9hNE4-AMFKkzBZLV3kHE3asrcuVEbvDcETTuc9g-bN7LaK_pWAD-T7XvK0egA5e6TvqM30U7U_pEzG3hLv9OeD6kMG67psyQeT5qO0GC4kxmUw3KgbBEmn9XAnkSdDfkLLtgHywTM_Nz6qv98Z_bxqkkNDA9uZVOLE_SH2WGr7YYEmgHe_WdXLEPX89Mw_KjZUZk7jFDkEYcSvE864JLf16mBxpd1GERAiFJULD24Q7Dk3-r3TUw9oSt5mD2KqbozqVqWW_RnTg34HxoKFC3mpLJ_U2WGCkSdtYaLEevjuKVL2Ey4ZBr1Ee4Uz3JB9oauh74KmBQopKxj_s1WDe-mt5RRZScpwwDCoecZK5Nc=w1920-h902-ft" title="Structure" alt="Structure">

The file structure is represented by two basic folders: #src and agro. 
The source files are located in "#src" - source folder.
The final version of the project is generated in "agro" (distribution folder) by Gulp.
"node modules" includes node.js packages.
.gitignore file contains the names of files and folders that must be hidden from git.
gulpfile.js - the configuration file for Gulp
package.json - the file where the node.js package dependencies are described  
package-lock.json - the packages and their versions for installation

## Built with

* [NPM](https://www.npmjs.com/) - Dependency Management
* [BEM](https://en.bem.info/methodology/) - The methodology used 
* [Gulp](https://gulpjs.com/) - Used to build the project (generates svgSprites, optimizes images, monitors file updates, synchronizes work in studio and browser, etc)
* [Git](https://git-scm.com/) - Git is the basic version control system for this project
* [Sass](https://sass-lang.com/install) / [CSS](https://webref.ru/css) - features are used to display content: flex/grid approach, relative/absolute position consept

## You will need to work with the project 

* [IDE](https://code.visualstudio.com/) - Visual Studio Code is free IDE
* [Avocode](https://avocode.com/) - Will be useful in exporting images, converting images in svg format, collecting fonts, etc
* Git or you can [immediately](https://www.youtube.com/watch?v=84cyW2R9WWo) upload files to the github
* Node.js
* NPM
* Gulp

## Installing

Downloading the repository

```
git clone https://github.com/Bordo951/agro.git
cd agro
git checkout develop
```

You need to set up the environment, to work with the project

```
npm i
gulp
```

In a separate terminal, run the command to build SvgSprites

```
gulp svgSprite
```

## Layout

You can [download](https://drive.google.com/file/d/1rKnKBzkvTWZSKmMfcJDDWnpPitorJLCE/view?usp=sharing) the layout in psd to create a similar project





## Author

| <a href="https://github.com/Bordo951">`github.com/Bordo951`</a> |

## Feedback

Please, feel free to contribute to this project
