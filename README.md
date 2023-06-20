# Multiple language study

Puts a small prompt with a random word in 4 different languages(currently German, Spanish, Japanese and Polish) and English translation in the top left corner of your browser for the first 10 secounds, after navigating to the new page.

![image](https://github.com/ukra174/Multiple-language-study/assets/77243875/fb77f8ef-105d-4474-89ab-05f5588f6cd0)

Doesn't block the UI under itself, and have a bit of transparency.

Doesn't work on some websites.

For use you will need [Tampermonkey](https://www.tampermonkey.net) extension for your browser installed.

Just import the [*Multi_language_prompt_on_pages.user.js*](https://github.com/ukra174/Multiple-language-study/blob/main/Multi_language_prompt_on_pages.user.js) into it, 
and script should start working.


If you don't want it to work an (almost)all urls, you can change *@match* string manually:
```
// @version      0.1
// @description  Open a small window with a word or a phrase in multiple languages!
// @author       ukra174
// @match        your_url_match_string_here
// ==/UserScript==
```
